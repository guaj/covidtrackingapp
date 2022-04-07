import AWS from "aws-sdk";
import awsConfig from "../../../../../aws-config.json";


AWS.config.update(awsConfig);
const docClient = new AWS.DynamoDB.DocumentClient();


export async function fetchData(tableName, email) {
    const params = {
        TableName: tableName,
        ExpressionAttributeValues: {":email":  email},
        KeyConditionExpression: 'email = :email'
    }

    let result = null;
    try {
        result = await docClient.query(params).promise();
        console.log(result.Items)
    } finally {
        const formValues = {
            email: result.Items.at(0).email,
            employeeId: result.Items.at(0).employeeId,
            orgId: result.Items.at(0).orgId 
           
            
        };
        return [formValues];
    }
}

export async function updateData(tableName, data) {
    const params = {
        TableName: tableName,
        Key: {"email": data.email},
        UpdateExpression:  
            "set employeeId = :employeeId, " +
            "orgId = :orgId",
        ExpressionAttributeValues: {
            ":employeeId": data.employeeId,
            ":orgId": data.orgId,
       
        },
        ReturnValues: "UPDATED_NEW"
    }

    //create sublists for address or symptoms if they do not already exist for this patient; returns bad request if items already exist
    // if (undefinedAddressList)
    //     docClient.update({
    //         TableName: tableName,
    //         Key: {"email": data.email},
    //         UpdateExpression: 'set address = :address',
    //         ConditionExpression: 'attribute_not_exists(address)',
    //         ExpressionAttributeValues: {
    //             ":address": {}
    //         }
    //     }, function (err) {
    //         if (err) {
    //             console.info("Unable to create new attributes. Attributes already exist!\nError JSON:", JSON.stringify(err, null, 2));
    //         } else {
    //             undefinedAddressList = false;
    //         }
    //     });

    //update doctor information in the database with the submitted values
    docClient.update(params, function (err, data) {
        if (err) {
            console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
            alert(err)
        } else {
            console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
            alert('Profile information updated!');
        }
    });
}