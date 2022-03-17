import * as React from "react";
import Button from "@material-ui/core/Button";
import Avatar from "@mui/material/Avatar";
import myImage from "../../Assets/avatar_1.jpg"
import "./UserProfile.css";
import DoctorMock from "./mockDoctorInfo.json";
import Box from "@mui/material/Box";


try {
    JSON.parse(localStorage.getItem("email"));
}catch (e) {
    localStorage.setItem("email", "");
    console.log(e);
    window.location = "/login#redirect";
}


const user = JSON.parse(localStorage.getItem("email"));
const url = user.split("@");

export default class DoctorProfilePage extends React.Component {
    userType;
    userFetch;
    userEmail;
    user;
    url;

    constructor() {
        super();
        this.userType = JSON.parse(localStorage.getItem("type"));
        this.userFetch =  window.location.href.split("/")[4];
        this.userEmail = JSON.parse(localStorage.getItem("email"));
    }

    canEditProfile() {
        return ((this.userType === "doctor") && this.userFetch === this.userEmail.split("@")[0]);
    }
    editRedirect() {
        window.location = "/doctor-profile-edit"
    }


    state = {
        url: url[0]
    } // changed = to : ?

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
                            <h2>Dr. {url[0]}</h2>
                        </div>
                        <div className="infoButtons">
                            <Button
                                variant="outlined"
                                aria-label="address"
                                disabled>
                                {DoctorMock.address}
                            </Button>
                        </div>
                        <div className="infoButtons">
                            <Button
                                variant="outlined"
                                aria-label="email"
                                disabled>
                                {DoctorMock.email}
                            </Button>
                        </div>
                        <div className="infoButtons">
                            <Button
                                variant="outlined"
                                aria-label="phone_number"
                                disabled>
                                {DoctorMock.phone_number}
                            </Button>
                        </div>
                        <div className="infoButtons">
                            <Button
                                variant="outlined"
                                aria-label="license"
                                disabled>
                                {DoctorMock.license_number}
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
                        <h2>Information Here</h2>
                        </Box>
                    </div>
                </div>
            </>

        )
    }
}