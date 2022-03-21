import React from "react";
import AWS from 'aws-sdk';
import awsConfig from '../../aws-config.json';

try {
    AWS.config.update(awsConfig);
}catch (e) {}


async function retrieveDoctorEmail() {
    var docClient = new AWS.DynamoDB.DocumentClient();
    let userEmail = JSON.parse(localStorage.getItem("email"))
    var params = {
        TableName: "patients",
        Key: {
            "email": String(userEmail),
        }
    };

    let response = await docClient.get(params).promise();
    return response.Item.doctor;
}


async function retrieveDoctorSchedule(doctorEmail) {
    AWS.config.update(awsConfig);
    var docClient = new AWS.DynamoDB.DocumentClient();
    var params = {
        TableName: "DoctorSchedule",
        Key: {
            "email": String(doctorEmail),
        }
    };

    return await docClient.get(params).promise();
}

export async function findAvailAppointments() {
    let doctorEmail = await retrieveDoctorEmail();
    let availTimes = await retrieveDoctorSchedule(doctorEmail);
    console.log(availTimes.Item.dailyAvailabilities.split(","));
}


