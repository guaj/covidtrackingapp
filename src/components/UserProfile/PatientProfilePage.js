import * as React from "react";
import "./UserProfile.css";
import Avatar from "@mui/material/Avatar";
import myImage from "../../Assets/avatar_1.jpg";
import Button from "@material-ui/core/Button";
import PatientMock from "./mockPatientInfo.json";
import Box from "@mui/material/Box";

export default class PatientProfilePage extends React.Component {
    userType = JSON.parse(localStorage.getItem("type"));
    userFetch = window.location.href.split("/")[4];
    userEmail= JSON.parse(localStorage.getItem("email"));
    user = JSON.parse(localStorage.getItem("email"));
    url = this.user.split("@");

    canEditProfile() {
        return ((this.userType === "patient") && this.userFetch === this.userEmail.split("@")[0]);
    }

    editRedirect() {
        window.location = "/patient-profile-edit"
    }

    scheduleRedirect() {
        window.location = "/schedule-appointment"
    }

    canScheduleMeeting() {
        return ((this.userType === "patient") && this.userFetch === this.userEmail.split("@")[0]);
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-4">
                        <Avatar
                            className="myAvatar"
                            sizes="large"
                            alt="profilePage"
                            src={myImage}
                            sx={{ width: 152, height: 152 }}
                        />
                        {/* eslint-disable-next-line no-undef */}
                        <div className="myName">
                            <h2>{PatientMock.name}</h2>
                        </div>
                        <div className="infoButtons">
                            <Button
                                variant="outlined"
                                aria-label="address"
                                disabled>
                                {PatientMock.address}
                            </Button>
                        </div>
                        <div className="infoButtons">
                            <Button
                                variant="outlined"
                                aria-label="email"
                                disabled>
                                {PatientMock.email}
                            </Button>
                        </div>
                        <div className="infoButtons">
                            <Button
                                variant="outlined"
                                aria-label="phone_number"
                                disabled>
                                {PatientMock.phone}
                            </Button>
                        </div>
                        <div className="infoButtons">
                            <Button
                                variant="outlined"
                                aria-label="license"
                                disabled>
                                {PatientMock.ramqNum}
                            </Button>
                        </div>
                        <div className="infoButtons">
                            <Button
                                variant="outlined"
                                aria-label="license"
                                disabled>
                                {PatientMock.insurance}
                            </Button>
                        </div>
                        <div className="infoButtons">
                            <Button
                                variant="outlined"
                                aria-label="license"
                                disabled>
                                {PatientMock.insuranceNumber}
                            </Button>
                        </div>
                        <div className="infoButtons">
                            {this.canEditProfile() ?
                                <Button className="colored-button" onClick={this.editRedirect}>Edit Profile</Button>
                                : <> </>}
                        </div>

                    </div>
                    <div className="col-md-8">
                        <Box className="infoBox">
                            <div className="boxText">
                                <p>My doctor : Dr. {PatientMock.doctorName} </p>
                            </div>
                            <div className="button">
                                {this.canScheduleMeeting() ?
                                    <Button variant="contained" onClick={this.scheduleRedirect}>Make Appointment </Button>
                                    : <></>}
                            </div>

                        </Box>
                    </div>
                </div>
            </>

        )
    }
}