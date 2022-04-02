import * as React from "react";
import "../UserProfile.css";
import Avatar from "@mui/material/Avatar";
import myImage from "../../../Assets/avatar_1.jpg";
import Button from "@material-ui/core/Button";
import PatientMock from "./mockPatientInfo.json";
import Box from "@mui/material/Box";
import AWS from "aws-sdk";
import awsConfig from "../../../aws-config.json";
import {sendMail} from "../../../Services/EmailService/EmailService";
import EmailFormDialog from "../../../Services/EmailService/EmailDialog";


export default class PatientProfilePage extends React.Component {
    userType = JSON.parse(localStorage.getItem("type"));
    userFetch = window.location.href.split("/")[4];
    userEmail = JSON.parse(localStorage.getItem("email"));
    user = JSON.parse(localStorage.getItem("email"));
    url = this.user.split("@");

    state = {
        flag: this.isFlagged()
    }
    async sendEmail() {
        await sendMail("TEST!!")
    }

    canEditProfile() {
        return ((this.userType === "patient") && this.userFetch === this.userEmail.split("@")[0]);
    }

    editProfileRedirect() {
        window.location = "/patient-profile-edit"
    }

    editSymptomsRedirect() {
        window.location = "/patient-symptoms-edit"
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
            Key: {"email": this.userFetch},
            ComparisonOperator: "CONTAINS",
            UpdateExpression: "set flag = :flag",
            ExpressionAttributeValues: {":flag": !flag},
            KeyConditionExpression: 'email = :email',
            ReturnValues: "UPDATED_NEW"
        }

        await docClient.update(params).promise();
        alert("Patient " + (this.state.flag ? 'unflagged' : 'flagged') + "!");
        this.setState({flag: this.isFlagged()});
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

        this.setState({flag: scanresult.Items.at(0).flag !== undefined ? (scanresult.Items.at(0).flag ? true : false) : false});
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
                            sx={{width: 152, height: 152}}
                        />
                        {/* eslint-disable-next-line no-undef */}
                        <div className="myName">
                            <h2>{PatientMock.name}</h2>
                        </div>
                        <div className="infoButtons"
                                variant="outlined"
                                aria-label="address"
                                disabled>
                                {PatientMock.address}
                        </div>
                        <div className="infoButtons"
                                variant="outlined"
                                aria-label="email"
                                disabled>
                                {PatientMock.email}
                        </div>
                        <div className="infoButtons"
                                variant="outlined"
                                aria-label="phone_number"
                                disabled>
                                {PatientMock.phone}
                        </div>
                        <div className="infoButtons"
                                variant="outlined"
                                aria-label="ramqNum"
                                disabled>
                                {PatientMock.ramqNum !== "" ? PatientMock.ramqNum : "No RAMQ number"}
                        </div>
                        <div className="infoButtons"
                                variant="outlined"
                                aria-label="insurance"
                                disabled>
                                {PatientMock.insurance !== "" ? PatientMock.insurance : "No private insurance"}
                        </div>
                        <div className="infoButtons"
                                variant="outlined"
                                aria-label="insuranceNumber"
                                disabled>
                                {PatientMock.insuranceNumber !== "" ? PatientMock.insuranceNumber : "No insurance number"}
                        </div>
                        <div className="infoButtons">
                            {this.canEditProfile() ?
                                <Button className="colored-button" onClick={this.editProfileRedirect}>Edit Profile</Button>
                                : <> </>}
                        </div>

                    </div>
                    <div className="col-md-4 pt-3">
                        <Box className="infoBox">
                            {PatientMock.covidResult === "positive" ? <h4 className="positive">Positive to COVID-19</h4> : <h4 className="negative">Negative to COVID-19</h4>}
                            <h5 className="myName">
                            My Symptoms:
                            </h5>
                            {PatientMock.symptom1 === true ? <div className="infoButtons" variant="outlined" aria-label="symptom1" disabled>New or worsening cough</div> : null}
                            {PatientMock.symptom2 === true ? <div className="infoButtons" variant="outlined" aria-label="symptom1" disabled>Shortness of breath or difficulty breathing</div> : null}
                            {PatientMock.symptom3 === true ? <div className="infoButtons" variant="outlined" aria-label="symptom1" disabled>Temperature equal or more than 38 C</div> : null}
                            {PatientMock.symptom4 === true ? <div className="infoButtons" variant="outlined" aria-label="symptom1" disabled>Feeling feverish</div> : null}
                            {PatientMock.symptom5 === true ? <div className="infoButtons" variant="outlined" aria-label="symptom1" disabled>Chills</div> : null}
                            {PatientMock.symptom6 === true ? <div className="infoButtons" variant="outlined" aria-label="symptom1" disabled>Fatigue and/or weakness</div> : null}
                            {PatientMock.symptom7 === true ? <div className="infoButtons" variant="outlined" aria-label="symptom1" disabled>Muscles and/or body ache</div> : null}
                            {PatientMock.symptom8 === true ? <div className="infoButtons" variant="outlined" aria-label="symptom1" disabled>Headache</div> : null}
                            {PatientMock.symptom9 === true ? <div className="infoButtons" variant="outlined" aria-label="symptom1" disabled>Abdominal pain</div> : null}
                            {PatientMock.symptom10 === true ? <div className="infoButtons" variant="outlined" aria-label="symptom1" disabled>Diarrhea and vomiting</div> :null}
                            {PatientMock.symptom11 === true ? <div className="infoButtons" variant="outlined" aria-label="symptom1" disabled>Feelings of malaise</div> : null}
                            <div className="infoButtons">
                            {this.canEditProfile() ?
                                <Button className="colored-button" onClick={this.editSymptomsRedirect}>Edit Symptoms</Button>
                                : <> </>}
                            </div>
                        </Box>
                    </div>
                    <div className="col-md-4 pt-3">
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
                                    <EmailFormDialog/>
                                    : <></>}
                            </div>
                            <div className="button">
                                {JSON.parse(localStorage.getItem("type")) !== "patient" ?
                                    <Button variant="contained" onClick={() => {
                                        this.flagPatient(this.state.flag);
                                    }}>{this.state.flag ? 'Unflag' : 'Flag'}</Button>
                                    : <></>}
                            </div>

                        </Box>
                    </div>
                </div>
            </>

        )
    }
}