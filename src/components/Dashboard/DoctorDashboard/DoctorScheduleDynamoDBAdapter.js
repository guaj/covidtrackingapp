import React from "react";
import AWS from 'aws-sdk';
import awsConfig from '../../../aws-config.json';


//This rewrites the entire table each iteration
export const addDoctorSchedule = (tableName , data) => {
    try {
        AWS.config.update(awsConfig);
        var docClient = new AWS.DynamoDB.DocumentClient();
        let doctorEmail = JSON.parse(localStorage.getItem("email"))
        var params = {
            TableName: tableName,
            Item: {
                "email": String(doctorEmail),
                "dailyAvailabilities": String(data.schedule),
            }
        }
    }catch (e) {}

    docClient.put(params, function (err, data) {
        if (err) {
            alert('Error from put: '+ err)
        } else {
            alert('Success: '+ data)
        }
    })
}

export async function retrieveDoctorSchedule(tableName) {
    try {
        AWS.config.update(awsConfig);
        var docClient = new AWS.DynamoDB.DocumentClient();
        let doctorEmail = JSON.parse(localStorage.getItem("email"))
        var params = {
            TableName: tableName,
            Key: {
                "email": String(doctorEmail),
            }
        };

        return await docClient.get(params).promise();
    } catch (e) {}
}
