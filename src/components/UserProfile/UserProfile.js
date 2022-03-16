import * as React from 'react';
import Navbar from "../Navbar/Navbar";
import Button from "@material-ui/core/Button";
import "./UserProfile.css";

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
            </div>

        </div>
    );
}