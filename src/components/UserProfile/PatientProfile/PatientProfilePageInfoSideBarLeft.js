import * as React from "react";
import "../UserProfile.css";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import myImage from "../../../Assets/avatar_1.jpg";
import PatientMock from "./mockPatientInfo.json";

export default function PatientProfilePageInfoSideBarLeft(props) {

    const canEditProfile =() => {
        return ( (props.userType === "patient") && (props.userFetch === props.userEmail.split("@")[0]) );
    }

    const editRedirect =() => {
        console.log(props.userType)
        window.location = "/patient-profile-edit"
    }


    return (
        <>
              <div>
                    <Avatar
                        className="myAvatar"
                        sizes="large"
                        alt="profilePage"
                        src={myImage}
                        sx={{width: 152, height: 152}}
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
                      <div>
                        <div className="infoButtons">
                            {canEditProfile() ?
                                <Button className="colored-button" onClick={editRedirect}>Edit Profile</Button>
                                : <> </>}
                        </div>
                     </div>
              </div>
        </>
    );
}