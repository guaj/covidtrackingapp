import React, { useState } from "react";
import AWS from 'aws-sdk'
import awsConfig from '../../../aws-config.json'

AWS.config.update(awsConfig);

var docClient = new AWS.DynamoDB.DocumentClient();
let doctorID = JSON.parse(localStorage.getItem("id"))

//This rewrites the entire table each iteration
export const addDoctorSchedule = (tableName , data) => {
    var params = {
        TableName: tableName,
        Item: {
            "doctorID": Number(doctorID),
            "dailyAvailabilities": String(data.schedule),
        }
    }

    docClient.put(params, function (err, data) {
        if (err) {
            alert('Error', err)
        } else {
            alert('Success', data)
        }
    })
}

export const retrieveDoctorSchedule = (tableName) => {
    var params = {
        TableName: tableName,
        Key :{
            "doctorID": Number(doctorID),
        }
    };

    var result = docClient.get(params,function(err,data){
        if(err){
            alert('Error',err)
            console.log(err)
        }else {
            console.log(data)
        }
    });

    return result
}
