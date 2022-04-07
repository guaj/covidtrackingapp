import * as React from "react";
import "../UserProfile.css";
import Avatar from "@mui/material/Avatar";
import myImage from "../../../Assets/avatar_1.jpg";
import Button from "@material-ui/core/Button";
import PatientMock from "./mockPatientInfo.json";
import Box from "@mui/material/Box";
import AWS from "aws-sdk";
import awsConfig from "../../../aws-config.json";
import { sendMail } from "../../../Services/EmailService/EmailService";
import EmailFormDialog from "../../../Services/EmailService/EmailDialog";
import QRCode from "react-qr-code";
import {makeStyles} from "@material-ui/core/styles";
import {HealthStatusView} from "./HealthStatusView";



const useStyles = makeStyles((theme) => {});


export function DisplayProfilePage() {
    useStyles()
    return <PatientProfilePage />;
}

class PatientProfilePage extends React.Component {

    userType = JSON.parse(localStorage.getItem("type"));
    userFetch = window.location.href.split("/")[4];
    userEmail = JSON.parse(localStorage.getItem("email"));
    user = JSON.parse(localStorage.getItem("email"));
    url = this.user.split("@");


    state = {
        flag: this.isFlagged(),
        open: false
    }
    editSymptomsRedirect() {
        window.location = '/patient-symptoms-edit'
    }
    async sendEmail() {
        await sendMail("TEST!!")
    }

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false})
    };


    canEditProfile() {
        return ((this.userType === "patient") && this.userFetch === this.userEmail.split("@")[0]);
    }

    editRedirect() {
        window.location = "/patient-profile-edit"
    }

   redirectSymptomsRequired() {
       const user = window.location.href.split("/")[4];

       window.location = "/update-required-symptoms/" + user
   }

    scheduleRedirect() {
        window.location = "/schedule-appointment"
    }

    canScheduleMeeting() {
        return ((this.userType === "patient") && this.userFetch === this.userEmail.split("@")[0]);
    }

    async flagPatient(flag) {

        AWS.config.update(awsConfig);
        const docClient = new AWS.DynamoDB.DocumentClient();

        let params = {
            TableName: "patients",
            ScanFilter: {
                "email": {
                    ComparisonOperator: "CONTAINS",
                    AttributeValueList: [this.userFetch]
                }
            }
        };

        let scanresult = await docClient.scan(params).promise();

        this.userFetch = scanresult.Items.at(0).email;

        params = {
            TableName: 'patients',
            Key: { "email": this.userFetch },
            ComparisonOperator: "CONTAINS",
            UpdateExpression: "set flag = :flag",
            ExpressionAttributeValues: { ":flag": !flag },
            KeyConditionExpression: 'email = :email',
            ReturnValues: "UPDATED_NEW"
        }

        await docClient.update(params).promise();
        alert("Patient " + (this.state.flag ? 'unflagged' : 'flagged') + "!");
        this.setState({ flag: this.isFlagged() });
    }

    async isFlagged() {
        AWS.config.update(awsConfig);
        const docClient = new AWS.DynamoDB.DocumentClient();

        let params = {
            TableName: "patients",
            ScanFilter: {
                "email": {
                    ComparisonOperator: "CONTAINS",
                    AttributeValueList: [this.userFetch]
                }
            }
        };

        let scanresult = await docClient.scan(params).promise();

        this.setState({ flag: scanresult.Items.at(0).flag !== undefined ? (scanresult.Items.at(0).flag ? true : false) : false });
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

                        <div className="infoButtons" name="Edit symptoms">
                            {this.canEditProfile() ?
                                <Button className="colored-button" onClick={this.editSymptomsRedirect}>Edit health status</Button>
                                : <> </>}
                        </div>
                        <div className="infoButtons" name="Edit profile">
                            {this.canEditProfile() ?
                                <Button className="colored-button" onClick={this.editRedirect}>Edit Profile</Button>
                                : <> </>}
                        </div>

                    </div>
                    <div className="col-md-8" style={{ position: "bottom" }}>
                        <Box className="infoBox">
                            <div className="boxText">
                                <p>My doctor : Dr. {PatientMock.doctorName} </p>
                            </div>
                            <div className="button">
                                {this.canScheduleMeeting() ?
                                    <Button variant="contained" onClick={this.scheduleRedirect}>Make
                                        Appointment </Button>
                                    : <></>}
                            </div>
                            <div className="button">
                                {this.canScheduleMeeting() ?
                                    <EmailFormDialog />
                                    : <></>}
                            </div>
                            <div className="button">
                                {JSON.parse(localStorage.getItem("type")) !== "patient" ?
                                    <Button variant="contained" onClick={() => {
                                        this.flagPatient(this.state.flag);
                                    }}>{this.state.flag ? 'Unflag' : 'Flag'}</Button>
                                    : <></>}
                            </div>

                            <Box className="button" sx={{pt: 5}}>
                                {JSON.parse(localStorage.getItem("type")) !== "patient" ?
                                    <Button variant="contained"
                                            onClick={this.handleClickOpen}
                                    >View health status</Button> : <></> }
                            </Box>

                            <Box className="button" sx={{pt: 5}}>
                                {JSON.parse(localStorage.getItem("type")) !== "patient" ?
                                    <Button
                                        variant="contained"
                                        name="update-required-symptoms"
                                        onClick={this.redirectSymptomsRequired}>Update required Symptoms</Button>  : <></> }
                            </Box>


                            <Box sx={{pb:5}}>
                                <QRCode value={"https://main.d1mmulvvzymdin.amplifyapp.com/" + this.userEmail + "/summary"} style={{ display: "block", margin: "5% auto", }} />
                            </Box>



                        </Box>

                    </div>

                </div>
                <div>
                    <HealthStatusView
                        open={this.state.open}
                        handleClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    />
                </div>

            </>

        )
    }
}
