import AWS from "aws-sdk";
import awsConfig from "../../../aws-config.json";

export async function retrieveNotifications(email) {
    try {
        AWS.config.update(awsConfig);
        var docClient = new AWS.DynamoDB.DocumentClient();
        let tableName = "notifications"
        var params = {
            TableName: tableName,
            FilterExpression: "email = :email and #type between :letter1 and :letter2 ",
            ExpressionAttributeNames: {
                "#type": "type"
            },

            ExpressionAttributeValues: {
                ":email": String(email),
                ":letter1": "a",
                ":letter2": "z"
            }
        }

        const data = await docClient.scan(params).promise();
        return data.Items;
    } catch (e) {
        console.log(e);
    }
}