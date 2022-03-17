import awsConfig from '../../../aws-config.json'
import AWS from 'aws-sdk'

AWS.config.update(awsConfig);
const docClient = new AWS.DynamoDB.DocumentClient()


export async function getAvailableDoctors()  {
    var params = {
        TableName: "doctors",
        FilterExpression: "#count < :max",
        ExpressionAttributeNames: {
            "#count": "patientCount"
        },
        ExpressionAttributeValues: {
            ":max": 10
        }
    }
      try {
          
        const data = await docClient.scan(params).promise()
        //alert(JSON.stringify(data))
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
        //updateDoctorPatientCount(doctor)
        alert("sucess!")

      } catch (err) {
        alert(JSON.stringify(err,undefined,2))
      }
}

export async function updateDoctorPatientCount(licenseNumber)  {
    
    var params = {
            TableName: 'patients',
            Key: { licenseNumber },
            UpdateExpression: 'set doctor = doctor + :val',
            ExpressionAttributeValues: { ':val': 1 },
          
    }
      try {
          
        await docClient.update(params).promise()
        alert("sucess!")

      } catch (err) {
        alert(JSON.stringify(err,undefined,2))
      }
}



//database query for finding new patients
export async function getNewPatients() {
    var params = {
        TableName: "patients",
        FilterExpression: "#doc = :none",  // OR attribute_not_exists(#doc)
        ExpressionAttributeNames: {
            "#doc": "doctor"
        },
        ExpressionAttributeValues: {
            ":none": ""
        }
    }
        try {
            const data = await docClient.scan(params).promise()
            // //console logged data
             //alert(JSON.stringify(data))
             console.log(data.Items[0].address.city)
            // console.log(data.Items)
            // //return (JSON.parse(data.Items));
            return data
        } catch (err) {
            alert(JSON.stringify(err))
        }
}