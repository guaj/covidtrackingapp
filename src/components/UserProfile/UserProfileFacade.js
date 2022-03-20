import * as React from 'react';
import Navbar from "../Navbar/Navbar";
import "./UserProfile.css";
import DoctorProfilePage from "./DoctorProfile/DoctorProfilePage"
import PatientProfilePage from "./PatientProfile/PatientProfilePage";
import Box from "@mui/material/Box";


function DisplayUserProfile() {
    try {
        JSON.parse(localStorage.getItem("email"));
    } catch (err) {
        console.log('Error: ', err.message);
        window.location.assign("/login#redirect");
    }
    let userType = JSON.parse(localStorage.getItem("type"));

    switch (userType) {
        case "doctor":
            return <DoctorProfilePage />

        case 'patient':
            return <PatientProfilePage />
        default:
            alert("Error from User profile facade");
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
    let userType = JSON.parse(localStorage.getItem("type"));

    let userFetch = window.location.href.split("/")[4]


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
                <Box sx={{ width: '80%', margin: '5% auto' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <DisplayUserProfile />
                    </Box>
                </Box>
            </div>

        </>
    );
}