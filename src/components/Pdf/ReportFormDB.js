import React, { useState } from "react";
import AWS from 'aws-sdk'
import awsConfig from './aws-config.json'
//import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';


AWS.config.update(awsConfig);

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html

var docClient = new AWS.DynamoDB.DocumentClient();

function ReportFormDB() {

    const handleSubmit = async (event) => {

        event.preventDefault();
        var params = {
            TableName: "patient"
        }
        await docClient.scan(params ).promise()
        try {
            await docClient.scan(params ).promise()
            alert("success!");
            // add your PDF processing from the returned data
        }
        catch(err) {
            alert("Unable to extract  item: " + "\n" + JSON.stringify(err, undefined, 2));
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

export default ReportFormDB
