import * as React from 'react';
import Navbar from "../Navbar/Navbar";
import Button from "@material-ui/core/Button";
import "./UserProfile.css";
import AWS from "aws-sdk";
import awsConfig from "../../aws-config.json";
import {useEffect, useState} from "react";

export default function UserProfile() {
    try {
        JSON.parse(localStorage.getItem("email"));
    } catch (err) {
        console.log('Error: ', err.message);
        window.location.assign("/login#redirect");
    }
    let userEmail = JSON.parse(localStorage.getItem("email"));
    let userType = JSON.parse(localStorage.getItem("type"));

    function canScheduleMeeting() {
        return userType === "patient";
    }

    function scheduleRedirect() {
        window.location = "/schedule-appointment"
    }

    function editRedirect() {
        if (userType === "doctor")
            window.location = "/doctor-profile-edit"
        else if (userType === "patient")
            window.location = "/patient-profile-edit"
    }

    async function flagPatient(flag) {
        let userFetch = window.location.href.split("/")[4];

        AWS.config.update(awsConfig);
        const docClient = new AWS.DynamoDB.DocumentClient;

        let params = {
            TableName: "patients",
            ScanFilter: {
                "email": {
                    ComparisonOperator: "CONTAINS",
                    AttributeValueList: [userFetch]
                }
            }
        };

        let scanresult = await docClient.scan(params).promise();

        userFetch = scanresult.Items.at(0).email;

        params = {
            TableName: 'patients',
            Key: {"email": userFetch},
            ComparisonOperator: "CONTAINS",
            UpdateExpression: "set flag = :flag",
            ExpressionAttributeValues: {":flag": !flag},
            KeyConditionExpression: 'email = :email'
        }

        await docClient.update(params).promise();

        setFlag(isFlagged);
    }

    async function isFlagged() {
        let userFetch = window.location.href.split("/")[4];

        AWS.config.update(awsConfig);
        const docClient = new AWS.DynamoDB.DocumentClient;

        let params = {
            TableName: "patients",
            ScanFilter: {
                "email": {
                    ComparisonOperator: "CONTAINS",
                    AttributeValueList: [userFetch]
                }
            }
        };

        let scanresult = await docClient.scan(params).promise();

        console.log(scanresult.Items.at(0).flag);

        setFlag(scanresult.Items.at(0).flag ? true : false);
    }

    const [flag, setFlag] = useState(isFlagged);

    return (
        <div>
            <Navbar/>
            <div className="component">
                <div className="container">
                    <h2>Hi {userEmail}, you are a {userType}</h2>
                </div>
                <div className="button">
                    <Button variant="contained" onClick={editRedirect}>Edit Profile</Button>
                </div>
                <div className="button">
                    {canScheduleMeeting() ?
                        <Button variant="contained" onClick={scheduleRedirect}>Make Appointment </Button>
                        : <></>}
                </div>
                <div className="button">
                    {JSON.parse(localStorage.getItem("type")) !== "patient" ?
                        <Button variant="contained" onClick={() => {
                            flagPatient(flag);
                            alert("Patient flagged!");
                        }}>{flag ? 'Unflag' : 'Flag'}</Button>
                        : <></>}
                </div>
            </div>

        </div>
    );
}