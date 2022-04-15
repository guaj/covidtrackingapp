import * as React from "react";
import Button from "@material-ui/core/Button";
import Avatar from "@mui/material/Avatar";
import myImage from "../../../Assets/avatar_1.jpg"
import "../UserProfile.css";
import DoctorMock from "./mockDoctorInfo.json";
import DoctorAppointmentListTable from "./DoctorAppointmentListTable";

export default class DoctorProfilePage extends React.Component {
    userType;
    userFetch;
    userEmail;
    user = JSON.parse(localStorage.getItem("email"));
    url = this.user.split("@");

    constructor() {
        super();
        this.userType = JSON.parse(localStorage.getItem("type"));
        this.userFetch =  window.location.href.split("/")[4];
        this.userEmail = JSON.parse(localStorage.getItem("email"));
        this.user = JSON.parse(localStorage.getItem("email"));
        try{
            //console.log(this.props.data.Items)
        }catch (e) {
            console.log(e)
        }

    }

    canEditProfile() {
        return ((this.userType === "doctor") && this.userFetch === this.userEmail.split("@")[0]);
    }
    editRedirect() {
        window.location = "/doctor-profile-edit"
    }


    state = {
        url: this.url[0]
    } // changed = to : ?

    render() {
        return (
            <>
                <div className="container">
                    <h2 className="myName2">Account Overview</h2>
                </div>
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
                            <h2>Dr. {this.url[0]}</h2>
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
                    <div className="col-md-8 row">

                        <DoctorAppointmentListTable email={this.userEmail}/>
                    </div>
                </div>
            </>

        )
    }
}