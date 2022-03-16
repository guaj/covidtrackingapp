import React, { useState } from "react";
import AWS from 'aws-sdk'
import awsConfig from './aws-config.json'
//import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';


AWS.config.update(awsConfig);

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: "patient",
};

docClient.scan(params, onScan);
var count = 0;

function onScan(err, data) {
    const handleSubmit = async (event) => {

    if (err) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    } else {        
        console.log("Scan succeeded.");
        data.Items.forEach(function(itemdata) {
           console.log("Item :", ++count,JSON.stringify(itemdata));
        });

        // continue scanning if we have more items
        if (typeof data.LastEvaluatedKey != "undefined") {
            console.log("Scanning for more...");
            params.ExclusiveStartKey = data.LastEvaluatedKey;
            docClient.scan(params, onScan);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
             <div>
                <label>List of Reports</label>
            </div>

             <div>
                <label>1. List of Infected patients</label>
            </div>
            <button type="submit">
                Submit
            </button>
        </form>
    )
}

}


export default onScan
