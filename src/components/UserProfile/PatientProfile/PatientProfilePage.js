import * as React from "react";
import "../UserProfile.css";
import Button from "@material-ui/core/Button";
import PatientMock from "./mockPatientInfo.json";
import Box from "@mui/material/Box";
import AWS from "aws-sdk";
import awsConfig from "../../../aws-config.json";
import SymptomDialogForm from "./SymptomDialogForm";
import PatientProfilePageInfoSideBarLeft from "./PatientProfilePageInfoSideBarLeft";


export default class PatientProfilePage extends React.Component {
    userType = JSON.parse(localStorage.getItem("type"));
    userFetch = window.location.href.split("/")[4];
    userEmail = JSON.parse(localStorage.getItem("email"));
    user = JSON.parse(localStorage.getItem("email"));
    url = this.user.split("@");
    title = "Hello from parent component"

    state = {
        flag: this.isFlagged(),
        open: false
    }

    handleOpenDialog = () => {
       if(this.state.open)
           this.setState({open: false})
        else
            this.setState({open:true})
    };

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
                        <PatientProfilePageInfoSideBarLeft
                            userType={this.userType}
                            userFetch={this.userFetch}
                            userEmail={this.userEmail}
                        />

                    </div>
                    <div className="col-md-8">
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
                                {JSON.parse(localStorage.getItem("type")) !== "patient" ?
                                    <Button variant="contained" onClick={() => {
                                        this.flagPatient(this.state.flag);
                                    }}>{this.state.flag ? 'Unflag' : 'Flag'}</Button>
                                    : <></>}
                            </div>
                            <div className="button">
                                <SymptomDialogForm
                                    handleOpenDialog={this.state.open}
                                    handleCloseDialog={() =>this.setState({open :false})}
                                    title={this.title} //Using props to transfer the title var into SymptomDialogForm
                                />
                            </div>
                        </Box>
                    </div>

                </div>


            </>

        )
    }
}