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
import {CircularProgress} from "@mui/material";

const useStyles = makeStyles((theme) => {});

function DiplayUserProfile(userType) {
    switch (userType) {
        case "doctor":
            return <DoctorProfilePage/>;
        case "patient":
            return <PatientProfilePage />
        default:
            return <ErrorProfilePage />

    }
}

async function fetchProfileDoctorData() {
    let userEmail = window.location.href.split("/")[4];
    let userType = null;

    AWS.config.update(awsConfig);
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
        let resultsArray = scanresult.Items
        let userIndex = -1;
        resultsArray.forEach( (item, index) => {
            const fetchEmail = String(item.email).split("@")[0]
            if(userEmail === fetchEmail) {
                userIndex = index
            }
        })
        if(userIndex >= 0) {
            console.log("YESS")
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
                            <>{DiplayUserProfile(userType)}</>
                        }
                    </Box>
                </Box>
            </div>
        </>
    );
}