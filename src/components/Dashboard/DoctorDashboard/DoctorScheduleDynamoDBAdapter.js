import React from "react";
import AWS from 'aws-sdk';
import awsConfig from '../../../aws-config.json';
require('dotenv').config()

AWS.config.update({
    region: process.env.REACT_APP_region,
    accessKeyId: process.env.REACT_APP_accessKeyId,
    secretAccessKey: process.env.REACT_APP_secretAccessKey
});

const docClient = new AWS.DynamoDB.DocumentClient();


//This rewrites the entire table each iteration
export const addDoctorSchedule = (tableName , data) => {
    try {
        let doctorID = JSON.parse(localStorage.getItem("id"))
        var params = {
            TableName: tableName,
            Item: {
                "doctorID": Number(doctorID),
                "dailyAvailabilities": String(data.schedule),
            }
        }
    }catch (e) {
    }

    docClient.put(params, function (err, data) {
        if (err) {
            alert('Error', err)
        } else {
            alert('Success', data)
        }
    })
}

export async function retrieveDoctorSchedule(tableName) {
    try {
        let doctorID = JSON.parse(localStorage.getItem("id"))
        var params = {
            TableName: tableName,
            Key: {
                "doctorID": Number(doctorID),
            }
        };

        return await docClient.get(params).promise();
    } catch (e) {
    }
}
