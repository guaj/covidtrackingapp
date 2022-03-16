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

//database query for finding new patients
export async function getNewPatients() {
    var params = {
        TableName: "patients",
        FilterExpression: "#doc = :zero OR attribute_not_exists(#doc)",
        ExpressionAttributeNames: {
            "#doc": "doctor"
        },
        ExpressionAttributeValues: {
            ":zero": ""
        }
    }
        try {
            const data = await docClient.scan(params).promise()
            //console logged data
            //alert(JSON.stringify(data))
            console.log(data.Items)
            return (JSON.parse(data.Items));
        } catch (err) {
            alert("could not retrieve data >:(")
        }
}