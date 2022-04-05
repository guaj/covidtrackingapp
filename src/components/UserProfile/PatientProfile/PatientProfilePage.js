import * as React from "react";
import "../UserProfile.css";
import Avatar from "@mui/material/Avatar";
import myImage from "../../../Assets/avatar_1.jpg";
import Button from "@material-ui/core/Button";
import Box from "@mui/material/Box";
import AWS from "aws-sdk";
import awsConfig from "../../../aws-config.json";
import {sendMail} from "../../../Services/EmailService/EmailService";
import EmailFormDialog from "../../../Services/EmailService/EmailDialog";
import {getSpecificDoctor, getSpecificPatient} from "../../../databaseServices";
import {useState, Fragment, useEffect} from "react";
import * as PatientProfileUpdateDatabaseServices from "../../../Services/ProfileUpdateSercices/PatientProfileUpdate/PatientProfileUpdateDatabaseServices";

AWS.config.update(awsConfig);
const docClient = new AWS.DynamoDB.DocumentClient();

//variable to check store address or symptom list undefined state
let undefinedAddressOrSymptomsList = false;

export default function PatientProfilePage() {
    const [user, setUser] = useState(null);    
    const [flag, setFlag] = useState(null);
    const userFetch = window.location.href.split("/")[4];

    const flagHandler = e => {
        setFlag(flag);
    }

    const canEditProfile = () => {
        return(userFetch === FormValues.email.split("@")[0]);
    };

    const editProfileRedirect = () => {
        window.location = "/patient-profile-edit"
    };

    const editSymptomsRedirect = () => {
        window.location = "/patient-symptoms-edit"
    };

    const scheduleRedirect = () => {
        window.location = "/schedule-appointment"
    };

    const canScheduleMeeting = () => {
        return(userFetch === FormValues.email.split("@")[0]);
    };

    const flagPatients = async (flag) => {
        AWS.config.update(awsConfig);

        let params = {
            TableName: "patients",
            ScanFilter: {
                "email": {
                    ComparisonOperator: "CONTAINS",
                    AttributeValueList: [FormValues.email]
                }
            }
        };

        let scanresult = await docClient.scan(params).promise();
        flagHandler({flag: scanresult.Items.at(0).flag !== undefined ? (scanresult.Items.at(0).flag ? true : false) : false});


        params = {
            TableName: 'patients',
            Key: {"email": FormValues.email},
            ComparisonOperator: "CONTAINS",
            UpdateExpression: "set flag = :flag",
            ExpressionAttributeValues: {":flag": !flag},
            KeyConditionExpression: 'email = :email',
            ReturnValues: "UPDATED_NEW"
        }

        await docClient.update(params).promise();
        alert("Patient " + (flag ? 'unflagged' : 'flagged') + "!");
        flagHandler({flag})
    }

    const isFlagged = async () => {
        AWS.config.update(awsConfig);
        const docClient = new AWS.DynamoDB.DocumentClient();

        let params = {
            TableName: "patients",
            ScanFilter: {
                "email": {
                    ComparisonOperator: "CONTAINS",
                    AttributeValueList: [userFetch]
                }
            }
        };

        let scanresult = await docClient.scan(params).promise();

        flagHandler({flag: scanresult.Items.at(0).flag !== undefined ? (scanresult.Items.at(0).flag ? true : false) : false});
    }

    
    const [FormValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        streetNumber: '',
        streetName: '',
        apartmentNumber: '',
        postalCode: '',
        city: '',
        province: '',
        phoneNumber: '',
        email: '',
        ramQNumber: '',
        insurance: '',
        insuranceNumber: '',
        covidResult: '',
        symptom1: '',
        symptom2: '',
        symptom3: '',
        symptom4: '',
        symptom5: '',
        symptom6: '',
        symptom7: '',
        symptom8: '',
        symptom9: '',
        symptom10: '',
        symptom11: '',
        comments: '',
        flag: '',
        doctor: ''
    });

    const [doc, setDoc] = useState(FormValues);

     //fetches patient information on patient profile page render
     useEffect(async () => {
        setUser(await PatientProfileUpdateDatabaseServices.fetchData('patients'))
    }, []);

    //loads patient information on patients state change when the state is not null
    useEffect(() => {
        console.log(userFetch)
        if (user !== null)
            handleFormInformationLoad();
    }, [user])

    const handleFormInformationLoad = () => {
        const patient = user[0];

        const formData = {
            firstName: patient.firstName,
            lastName: patient.lastName,
            dob: patient.dob,
            streetNumber: patient.streetNumber,
            streetName: patient.streetName,
            apartmentNumber: patient.apartmentNumber,
            postalCode: patient.postalCode,
            city: patient.city,
            province: patient.province,
            phoneNumber: patient.phoneNumber,
            email: patient.email,
            ramQNumber: patient.ramQNumber,
            insurance: patient.insurance,
            insuranceNumber: patient.insuranceNumber,
            covidResult: patient.covidResult,
            symptom1: patient.symptom1,
            symptom2: patient.symptom2,
            symptom3: patient.symptom3,
            symptom4: patient.symptom4,
            symptom5: patient.symptom5,
            symptom6: patient.symptom6,
            symptom7: patient.symptom7,
            symptom8: patient.symptom8,
            symptom9: patient.symptom9,
            symptom10: patient.symptom10,
            symptom11: patient.symptom11,
            comments: patient.comments,
            flag: patient.flag,
            doctor: patient.doctor
        };

        setFormValues(formData);
    };

    useEffect(() => {    
        (async () => {
          const dbData = await getSpecificDoctor(FormValues.doctor);
          if(dbData.Items != null)
            setDoc(dbData.Items[0]);
        })();
    
      },[FormValues]);

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
                            <h5>{FormValues.firstName} {FormValues.lastName}</h5>
                        </div>
                        <div className="infoButtons"
                            variant="outlined"
                            aria-label="address"
                            disabled>
                            {FormValues.streetNumber} {FormValues.streetName} {FormValues.apartmentNumber} <br/>
                            {FormValues.postalCode} {FormValues.city} {FormValues.province}
                        </div>
                        <div className="infoButtons"
                                variant="outlined"
                                aria-label="email"
                                disabled>
                                {FormValues.email}
                        </div>
                        <div className="infoButtons"
                                variant="outlined"
                                aria-label="phone_number"
                                disabled>
                                ({FormValues.phoneNumber[0]}{FormValues.phoneNumber[1]}{FormValues.phoneNumber[2]}) {FormValues.phoneNumber[3]}{FormValues.phoneNumber[4]}{FormValues.phoneNumber[5]} - {FormValues.phoneNumber[6]}{FormValues.phoneNumber[7]}{FormValues.phoneNumber[8]}{FormValues.phoneNumber[9]}
                        </div>
                        <div className="infoButtons"
                                variant="outlined"
                                aria-label="ramqNum"
                                disabled>
                                {FormValues.ramQNumber !== "" ? FormValues.ramQNumber : "No RAMQ number"}
                        </div>
                        <div className="infoButtons"
                                variant="outlined"
                                aria-label="insurance"
                                disabled>
                                {FormValues.insurance !== "" ? FormValues.insurance : "No private insurance"}
                        </div>
                        <div className="infoButtons"
                                variant="outlined"
                                aria-label="insuranceNumber"
                                disabled>
                                {FormValues.insuranceNumber !== "" ? FormValues.insuranceNumber : "No insurance number"}
                        </div>
                        <div className="infoButtons">
                            {canEditProfile() ?
                                <Button className="colored-button" onClick={editProfileRedirect}>Edit Profile</Button>
                                : <> </>}
                        </div>

                    </div>
                    <div className="col-md-4 pt-3" name="symptoms">
                        <Box className="infoBox" data-testid="symptoms">
                            {FormValues.covidResult === "positive" ? <h4 className="positive">Positive to COVID-19</h4> : <h4 className="negative">Negative to COVID-19</h4>}
                            <h5 className="myName">
                            My Symptoms:
                            </h5>
                            {FormValues.symptom1 === true ? <div className="infoButtons" variant="outlined" aria-label="symptom1" disabled>New or worsening cough</div> : null}
                            {FormValues.symptom2 === true ? <div className="infoButtons" variant="outlined" aria-label="symptom2" disabled>Shortness of breath or difficulty breathing</div> : null}
                            {FormValues.symptom3 === true ? <div className="infoButtons" variant="outlined" aria-label="symptom3" disabled>Temperature equal or more than 38 C</div> : null}
                            {FormValues.symptom4 === true ? <div className="infoButtons" variant="outlined" aria-label="symptom4" disabled>Feeling feverish</div> : null}
                            {FormValues.symptom5 === true ? <div className="infoButtons" variant="outlined" aria-label="symptom5" data-testid="chills" disabled>Chills</div> : null}
                            {FormValues.symptom6 === true ? <div className="infoButtons" variant="outlined" aria-label="symptom6" disabled>Fatigue and/or weakness</div> : null}
                            {FormValues.symptom7 === true ? <div className="infoButtons" variant="outlined" aria-label="symptom7" disabled>Muscles and/or body ache</div> : null}
                            {FormValues.symptom8 === true ? <div className="infoButtons" variant="outlined" aria-label="symptom8" disabled>Headache</div> : null}
                            {FormValues.symptom9 === true ? <div className="infoButtons" variant="outlined" aria-label="symptom9" disabled>Abdominal pain</div> : null}
                            {FormValues.symptom10 === true ? <div className="infoButtons" variant="outlined" aria-label="symptom10" disabled>Diarrhea and vomiting</div> :null}
                            {FormValues.symptom11 === true ? <div className="infoButtons" variant="outlined" aria-label="symptom11" disabled>Feelings of malaise</div> : null}
                            <div className="infoButtons">
                            {canEditProfile() ?
                                <Button className="colored-button" onClick={editSymptomsRedirect}>Edit Symptoms</Button>
                                : <> </>}
                            </div>
                        </Box>
                    </div>
                    <div className="col-md-4 pt-3">
                        <Box className="infoBox">
                            <div className="boxText">
                                {doc === undefined ? <p>My doctor: Dr.</p> : <p>My doctor: Dr. {doc.lastName}</p>}
                            </div>
                            <div className="button">
                                {canScheduleMeeting() ?
                                    <Button variant="contained" onClick={scheduleRedirect}>Make
                                        Appointment </Button>
                                    : <></>}
                            </div>
                            <div className="button">
                                {canScheduleMeeting() ?
                                    <EmailFormDialog/>
                                    : <></>}
                            </div>
                            <div className="button">
                                {JSON.parse(localStorage.getItem("type")) !== "patient" ?
                                    <Button variant="contained" onClick={() => {
                                        flagHandler(flag);
                                    }}>{flag ? 'Unflag' : 'Flag'}</Button>
                                    : <></>}
                            </div>

                        </Box>
                    </div>
                </div>
            </>

        )
}