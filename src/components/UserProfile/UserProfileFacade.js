import * as React from 'react';
import Navbar from "../Navbar/Navbar";
import "./UserProfile.css";
import DoctorProfilePage from "./DoctorProfile/DoctorProfilePage"
import PatientProfilePage from "./PatientProfile/PatientProfilePage";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import AWS from "aws-sdk";
import awsConfig from "../../aws-config.json";
import ErrorProfilePage from "./ErrorProfilePage";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {});

function DisplayUserProfile(userType) {

    switch (userType) {
        case "doctor":
            return <DoctorProfilePage/>
        case "patient":
            return <PatientProfilePage/>
        default:
            return <ErrorProfilePage/>
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
    useStyles();

    try {
        JSON.parse(localStorage.getItem("email"));
        let userEmail = JSON.parse(localStorage.getItem("email"));
        let userType = JSON.parse(localStorage.getItem("type"));
    } catch (err) {
        console.log('Error: ', err.message);
        window.location.assign("/login#redirect");
    }
    let userEmail = JSON.parse(localStorage.getItem("email"));
    const [userType, setUserType] = useState(null);

    let userFetch = window.location.href.split("/")[4]

    useEffect(async () => {
        setUserType(await fetchProfileData());
    }, [userType])


    return (
        <>
            <Navbar/>
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