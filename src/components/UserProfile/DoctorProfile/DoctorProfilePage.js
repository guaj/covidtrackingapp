import * as React from "react";
import Button from "@material-ui/core/Button";
import Avatar from "@mui/material/Avatar";
import myImage from "../../../Assets/avatar_1.jpg"
import "../UserProfile.css";
import DoctorAppointmentListTable from "./DoctorAppointmentListTable";
import {getSpecificDoctor} from "../../../databaseServices";
import "../UserProfile.css";




export function formatAddress(data) {
     return (
        data.streetNumber + " " + data.streetName + ", "+ data.city + ", "+ data.province + ", " + data.postalCode
    )
}

export default class DoctorProfilePage extends React.Component {
    userType;
    userFetch;
    user = JSON.parse(localStorage.getItem("email"));
    url = this.user.split("@");

    constructor(props) {
        super(props);
        this.userType = JSON.parse(localStorage.getItem("type"));
        this.userFetch = window.location.href.split("/")[4];
        this.state = {
            name : "",
            address: "",
            phoneNumber: "",
            email: "",
            licenseNumber: ""
        }

    }


    canEditProfile() {
        return ((this.userType === "doctor") && this.userFetch === this.props.data.split("@")[0]);
    }
    editRedirect() {
        window.location = "/doctor-profile-edit"
    }


    async componentDidMount() {
        try {
            const data = await getSpecificDoctor(this.props.data)
            this.setState({
                name: data.Items[0].lastName,
                address: formatAddress(data.Items[0].address),
                phoneNumber: data.Items[0].phoneNumber,
                email: data.Items[0].email,
                licenseNumber: data.Items[0].licenseNumber
            })
        }catch (e) {
            console.log(e)
        }
    }


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
                            <h2>Dr. {this.state.name}</h2>
                        </div>
                        <div className="infoButtons">
                            <Button
                                variant="outlined"
                                aria-label="address"
                                disabled>
                                    {this.state.address}
                            </Button>
                        </div>
                        <div className="infoButtons">
                            <Button
                                variant="outlined"
                                aria-label="email"
                                className="btn"
                                disabled>
                                    {this.state.email}
                            </Button>
                        </div>
                        <div className="infoButtons">
                            <Button
                                variant="outlined"
                                aria-label="phone_number"
                                disabled>
                                    {this.state.phoneNumber}
                            </Button>
                        </div>
                        <div className="infoButtons">
                            <Button
                                variant="outlined"
                                aria-label="license"
                                disabled>
                                    {this.state.licenseNumber}
                            </Button>
                        </div>
                        <div className="infoButtons">
                            {this.canEditProfile() ?
                                <Button className="colored-button" onClick={this.editRedirect}>Edit Profile</Button>
                            : <> </>}
                        </div>

                    </div>
                    <div className="col-md-8 button-padding">
                        <div className="row">
                            <DoctorAppointmentListTable email={this.props.data}/>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}