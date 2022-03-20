import * as React from 'react';
import Navbar from "../Navbar/Navbar";
import Button from "@material-ui/core/Button";
import "./UserProfile.css";
import DoctorProfilePage from "./DoctorProfilePage"
import PatientProfilePage from "./PatientProfilePage";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import AWS from "aws-sdk";
import awsConfig from "../../aws-config.json";


function DisplayUserProfile(userType) {
    // try {
    //     JSON.parse(localStorage.getItem("email"));
    // } catch (err) {
    //     console.log('Error: ', err.message);
    //     window.location.assign("/login#redirect");
    // }
    // let userType = JSON.parse(localStorage.getItem("type"));

    switch (userType) {
        case "doctor":
            return <DoctorProfilePage/>

        case "patient":
            return <PatientProfilePage/>
    }
}

async function fetchProfileData() {
    let userEmail = window.location.href.split("/")[4];
    let userType = null;

    AWS.config.update(awsConfig);
    const docClient = new AWS.DynamoDB.DocumentClient();

    let params = {
        TableName: "patients",
        ScanFilter: {
            "email": {
                ComparisonOperator: "CONTAINS",
                AttributeValueList: [userEmail]
            }
        }
    };

    try {
        let scanresult = await docClient.scan(params).promise();

        userEmail = (scanresult.Items.length === 0 ? null : scanresult.Items.at(0).email);
    } finally {
        if (userEmail !== null)
            userType = "patient";
        else
            userType = JSON.parse(localStorage.getItem("type"));

        return userType;
    }
}

export default function UserProfileFacade() {
    try {
        JSON.parse(localStorage.getItem("email"));
        let userEmail = JSON.parse(localStorage.getItem("email"));
        let userType = JSON.parse(localStorage.getItem("type"));

    } catch (err) {
        console.log('Error: ', err.message);
        window.location.assign("/login#redirect");
    }
    let userEmail = JSON.parse(localStorage.getItem("email"));
    // let userType = JSON.parse(localStorage.getItem("type"));
    // let userType = null;
    const [userType, setUserType] = useState(null);

    let userFetch = window.location.href.split("/")[4]

    useEffect(async () => {
       setUserType(await fetchProfileData());
    }, [userType])

    function canScheduleMeeting() {
        return ((userType === "patient") && userFetch === userEmail.split("@")[0]);
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

    return (
        <>
            <Navbar/>
            <div className="container">
                <h2 className="myName2">Account Overview</h2>
            </div>
            {/*  <div className="button">
                    <Button variant="contained" onClick={editRedirect}>Edit Profile</Button>
                </div>
                <div className="button">
                    {canScheduleMeeting() ?
                        <Button variant="contained" onClick={scheduleRedirect}>Make Appointment </Button>
                        : <></>}
                </div>
            </div>*/}
            <div>
                <Box sx={{width: '80%', margin: '5% auto'}}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        {DisplayUserProfile(userType)}
                    </Box>
                </Box>
            </div>

        </>
    );
}