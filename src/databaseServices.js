import awsConfig from './aws-config.json'
import AWS from 'aws-sdk'

AWS.config.update(awsConfig);
const docClient = new AWS.DynamoDB.DocumentClient()


export async function getAvailableDoctors() {
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

export async function getAllPatients(setter) {
  try {
    const data = await docClient.scan({ TableName: "patients" }).promise()
    setter(data.Items)
  } catch (err) {
    alert(JSON.stringify(err))
  }
}

export async function getSpecificDoctor(email) {
  var params = {
    TableName: "doctors",
    FilterExpression: "#email = :specific",
    ExpressionAttributeNames: {
      "#email" : "email"
    },
    ExpressionAttributeValues: { ":specific": email }
  }
  try {
    const data = await docClient.scan(params).promise()
    return data

  } catch (err) {
    alert("could not retrieve data >:(")
  }
}

export async function getSpecificPatient(email) {
  var params = {
    TableName: "patients",
    FilterExpression: "#email = :specific",
    ExpressionAttributeNames: {
      "#email" : "email"
    },
    ExpressionAttributeValues: { ":specific": email }
  }
  try {
    const data = await docClient.scan(params).promise()
    return data

  } catch (err) {
    alert("could not retrieve data >:(")
  }
}

export async function getAllDoctors(setter) {
  try {
    const data = await docClient.scan({ TableName: "doctors" }).promise()
    //console.log(data.Items)
    setter(data.Items)
  } catch (err) {
    alert(JSON.stringify(err))
  }
}

export async function updatePatientsDoctor(email, doctor) {

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

export async function updateDoctorPatientCount(email) {

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
    alert(JSON.stringify(err, undefined, 2))
  }
}

//////////////////////////////////////////////////////////////////////////////



// //database query for finding new patients

export async function getNewPatients(setter) {
    var params = {
        TableName: "patients",
        FilterExpression: "#doc = :none",
        ExpressionAttributeNames: {
            "#doc": "doctor"
        },
        ExpressionAttributeValues: {
            ":none": ""
        }
    }
        try {
            const data = await docClient.scan(params).promise()
            console.log(data.Items)
            setter(data.Items)
        } catch (err) {
            alert(JSON.stringify(err))
        }
}
//////////////////////////////////////////////////////////////////////////////

//database query for finding new patients
export async function getPatientWithDoctor(setter) {
  var params = {
    TableName: "patients",
    FilterExpression: "#doc <> :none",
    ExpressionAttributeNames: {
      "#doc": "doctor",
    },
    ExpressionAttributeValues: {
      ":none": ""
    }
  }
  try {
    const data = await docClient.scan(params).promise()
    //console.log("patients with doctors: " + data.Items)
    return data.Items
  } catch (err) {
    alert(JSON.stringify(err))
  }
}



//database query for finding new patients
export async function getDoctorEmergency(setter) {
  var params = {
    TableName: "doctors",
    FilterExpression: "#em = :true",
    ExpressionAttributeNames: {
      "#em": "hasEmergency",
    },
    ExpressionAttributeValues: {
      ":true": true
    }
  }
  try {
    const data = await docClient.scan(params).promise()
    //console.log("doctors with emerg: " + data.Items)
    return data.Items
  } catch (err) {
    alert(JSON.stringify(err))
  }
}

export async function getPatientsWithDoctorEmergency(setter) {
  let patientData = await getPatientWithDoctor()
  let doctorData = await getDoctorEmergency()
  var data = [];
  patientData.forEach(pat => {
    doctorData.forEach(doc => {
      if (pat.doctor === doc.email)
        data.push(pat)
    });
  });
  setter(data)
  //console.log("array of: " + data)

}


//////////////////////////////////////////////////////////////////////////////

export async function getPairedDoctors() {
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