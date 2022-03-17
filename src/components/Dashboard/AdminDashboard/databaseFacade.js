import awsConfig from '../../../aws-config.json'
import AWS from 'aws-sdk'

AWS.config.update(awsConfig);
const docClient = new AWS.DynamoDB.DocumentClient()


export async function getAvailableDoctors()  {
    var params = {
        TableName: "doctors",
        FilterExpression: "#count < :max OR attribute_not_exists(#em)", 
        ExpressionAttributeNames: {
            "#count": "patientCount",
            "#em": "hasEmergency"
        },
        ExpressionAttributeValues: {
            ":max": 10
        }
    }
      try {
          
        const data = await docClient.scan(params).promise()
        return data

      } catch (err) {
        alert("could not retrieve data >:(")
      }
}

export async function updatePatientsDoctor(email, doctor)  {
    
    var params = {
            TableName: 'patients',
            Key: { email },
            UpdateExpression: 'set doctor = :newdoctor',
            ExpressionAttributeValues: { ':newdoctor': doctor },
          
    }
      try {
          
        await docClient.update(params).promise()
        updateDoctorPatientCount(doctor)
        alert("success!")

      } catch (err) {
        alert(JSON.stringify(err))
      }
}

export async function updateDoctorPatientCount(email)  {
    
    var params = {
            TableName: 'doctors',
            Key: { email },
            UpdateExpression: 'set patientCount = patientCount + :val',
            ExpressionAttributeValues: { ':val': 1 },
          
    }
      try {
          
        await docClient.update(params).promise()
        alert("success!")

      } catch (err) {
        alert(JSON.stringify(err,undefined,2))
      }
}



//database query for finding new patients
export async function getNewPatients() {
    var params = {
        TableName: "patients",
        FilterExpression: "#doc = :none OR attribute_not_exists(#doc)",
        ExpressionAttributeNames: {
            "#doc": "doctor"
        },
        ExpressionAttributeValues: {
            ":none": ""
        }
    }
        try {
            const data = await docClient.scan(params).promise()
            
            return data
        } catch (err) {
            alert(JSON.stringify(err))
        }
}

//database query for finding new patients
export async function getPatientWithDoctor() {
  var params = {
    TableName: "patients",
    FilterExpression: "#doc <> (:none) AND attribute_exists(#doc)",
    ExpressionAttributeNames: {
        "#doc": "doctor",
    },
    ExpressionAttributeValues: {
        ":none": ""
    }
  }
      try {
          const data = await docClient.scan(params).promise()
          return data
      } catch (err) {
          alert(JSON.stringify(err))
      }
}
//database query for finding new patients
export async function getDoctorEmergency() {
  var params = {
    TableName: "doctors",
    FilterExpression: "#em <> :none AND attribute_exists(#em)",
    ExpressionAttributeNames: {
        "#em": "hasEmergency",
    },
    ExpressionAttributeValues: {
        ":none": ""
    }
  }
      try {
          const data = await docClient.scan(params).promise()
          return data
      } catch (err) {
          alert(JSON.stringify(err))
      }
}

export async function getPairedDoctors()  {
  var params = {
      TableName: "doctors",
      FilterExpression: "#pat <> :null",
      ExpressionAttributeNames: {
          "#pat": "patientCount",
      },
      ExpressionAttributeValues: {
          ":null": 0
      }
  }
    try {
        
      const data = await docClient.scan(params).promise()
      return data

    } catch (err) {
      alert("could not retrieve data >:(")
    }
}