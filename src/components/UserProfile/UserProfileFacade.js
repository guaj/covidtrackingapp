import * as React from 'react';
import Navbar from "../Navbar/Navbar";
import "./UserProfile.css";
import DoctorProfilePage from "./DoctorProfile/DoctorProfilePage"
import { DisplayProfilePage } from "./PatientProfile/PatientProfilePage";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import AWS from "aws-sdk";
import awsConfig from "../../aws-config.json";
import ErrorProfilePage from "./ErrorProfilePage";
import {makeStyles} from "@material-ui/core/styles";
import {CircularProgress} from "@mui/material";

const useStyles = makeStyles((theme) => {});

function DisplayUserProfile(userType) {

    const email = JSON.parse(localStorage.getItem("email"));
    switch (userType.data) {
        case "doctor":
            return <DoctorProfilePage data={email}/>;
        case "patient":
            return <DisplayProfilePage data={email} />
        default:
            return <ErrorProfilePage />

    }
}

async function fetchProfileDoctorData() {
    let userEmail = window.location.href.split("/")[4];

    AWS.config.update(awsConfig);
    AWS.config.update({
        dynamoDbCrc32: false
    });
    const docClient = new AWS.DynamoDB.DocumentClient();

    let params = {
        TableName: "doctors",
        ScanFilter: {
            "email": {
                ComparisonOperator: "CONTAINS",
                AttributeValueList: [userEmail]
            }
        }
    };

    try {
        let scanresult = await docClient.scan(params).promise();
        let resultsArray = scanresult.Items
        let userIndex = -1;
        resultsArray.forEach( (item, index) => {
            const fetchEmail = String(item.email).split("@")[0]
            if(userEmail === fetchEmail) {
                userIndex = index
            }
        })
        if(userIndex >= 0)
            return "doctor"
        return "";
    } catch (e) {
        console.log(e)
    }
}

async function fetchProfileData(setter) {
    let userType = "";
    userType= await fetchProfilePatientData();
    setter(userType)
    if(userType === "not a patient"){
        userType = await fetchProfileDoctorData();
        setter(userType);
    }
}




async function fetchProfilePatientData() {
    let userEmail = window.location.href.split("/")[4];

    AWS.config.update(awsConfig);
    AWS.config.update({
        dynamoDbCrc32: false
    });
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
        let resultsArray = scanresult.Items
        let userIndex = -1;
        resultsArray.forEach( (item, index) => {
            const fetchEmail = String(item.email).split("@")[0]
            if(userEmail === fetchEmail) {
                userIndex = index // can fetch the patient that way if multiple patients are returned from the query
            }
        })
        if(userIndex >= 0) {
            return "patient"
        }
        return "not a patient";
    } catch (e) {
        console.log(e)
    }
}

export default function UserProfileFacade() {
    const [isLoading, setIsloading] = React.useState(true)
    useStyles();

    try {
        JSON.parse(localStorage.getItem("email"));
        JSON.parse(localStorage.getItem("email"));
    } catch (err) {
        console.log('Error: ', err.message);
        window.location.assign("/login#redirect");
    }

    const [userType, setUserType] = useState("null");


    useEffect(() => (async () => {
            await fetchProfileData(setUserType)
            setIsloading(false);
        }
    )(), [])


    return (
        <>
            <Navbar/>
            <div>
                <Box sx={{width: '80%', margin: '5% auto'}}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        {isLoading ? <CircularProgress /> :
                            <DisplayUserProfile data={userType} />
                        }
                    </Box>
                </Box>
            </div>
        </>
    );
}