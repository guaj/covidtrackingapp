import awsConfig from '../../../aws-config.json'
import AWS from 'aws-sdk'

AWS.config.update(awsConfig);
const docClient = new AWS.DynamoDB.DocumentClient()

export async function getAllPatients(setter) {
    try {
        const data = await docClient.scan({ TableName: "patients", ProjectionExpression: "email, firstName, lastName" }).promise()
        setter(data.Items)
    } catch (err) {
        alert(JSON.stringify(err))
    }
}