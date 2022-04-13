import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import '../../../components/profile.css'
import * as React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import geometricImage from "../../../images/geometric_gradient.jpg";
import { useState, Fragment, useEffect } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import * as PatientProfileUpdateDatabaseServices from "./PatientProfileUpdateDatabaseServices";
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import * as DoctorNotification from "./NotifyDoctorDatabaseServices"

const useStyles = makeStyles((theme) => ({
    image: {
        backgroundImage: `url(${geometricImage})`,
        backgroundRepeat: "no-repeat",
        backgroundColor:
            theme.palette.type === "light"
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    paper: {
        margin: theme.spacing(17, 15, 50),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    title: {
        marginBottom: theme.spacing(3),
        color: "rgba(1, 5, 96, 1)",
        fontWeight: "bold",
    },
    submit: {
        margin: theme.spacing(8, 0, 3),
        color: "white",
        backgroundColor: "rgba(1, 5, 96, 1)",
    },
    paragraph: {
        marginTop: theme.spacing(4),
    },
    centerGrid: {
        justifyContent: "center",
    },
    field:{
        marginTop: theme.spacing(3)
    }
}));

export default function ProfileSymptomsPatient() {
    const classes = useStyles();

    const [patients, setPatients] = useState(null);

    const [notifyDoctor, setNotifyDoctor] = useState({
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

    const [editFormData, setEditFormData] = useState({
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

    const dateModified = new Date();
    //fetches patient information on patient profile page render
    useEffect(async () => {
        setPatients(await PatientProfileUpdateDatabaseServices.fetchData('patients'))
    }, []);

    //loads patient information on patients state change when the state is not null
    useEffect(() => {
        if (patients !== null)
            handleFormInformationLoad();
    }, [patients])

    const handleFormInformationLoad = () => {
        const patient = patients[0];

        const formValues = {
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

        setEditFormData(formValues);
    };

    const handleFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        //create new object on new values
        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
        // console.log(event.target);
    }

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedPatient = {
            firstName: editFormData.firstName,
            lastName: editFormData.lastName,
            dob: editFormData.dob,
            streetNumber: editFormData.streetNumber,
            streetName: editFormData.streetName,
            apartmentNumber: editFormData.apartmentNumber,
            postalCode: editFormData.postalCode,
            city: editFormData.city,
            province: editFormData.province,
            phoneNumber: editFormData.phoneNumber,
            email: editFormData.email,
            ramQNumber: editFormData.ramQNumber,
            insurance: editFormData.insurance,
            insuranceNumber: editFormData.insuranceNumber,
            covidResult: editFormData.covidResult,
            symptom1: editFormData.symptom1,
            symptom2: editFormData.symptom2,
            symptom3: editFormData.symptom3,
            symptom4: editFormData.symptom4,
            symptom5: editFormData.symptom5,
            symptom6: editFormData.symptom6,
            symptom7: editFormData.symptom7,
            symptom8: editFormData.symptom8,
            symptom9: editFormData.symptom9,
            symptom10: editFormData.symptom10,
            symptom11: editFormData.symptom11,
            comments: editFormData.comments,
            flag: editFormData.flag,
            doctor: editFormData.doctor
        };

        const newPatients = [...patients];
        newPatients[0] = editedPatient;
        setPatients(newPatients);
        const user = JSON.parse(localStorage.getItem("email"))
        const url = user.split("@");
        PatientProfileUpdateDatabaseServices.updateData('patients', newPatients[0]).then(  () => {
            window.location.assign("/profile/" + url[0])
        });
    };

    //TODO: add database update function for doctor notifications once notification functionality is implemented
    const handleNotifyDoctorButtonClick = (event) => {
        event.preventDefault();

        const editedNotifyDoctor = {
            firstName: editFormData.firstName,
            lastName: editFormData.lastName,
            dob: editFormData.dob,
            streetNumber: editFormData.streetNumber,
            streetName: editFormData.streetName,
            apartmentNumber: editFormData.apartmentNumber,
            postalCode: editFormData.postalCode,
            city: editFormData.city,
            province: editFormData.province,
            phoneNumber: editFormData.phoneNumber,
            email: editFormData.email,
            ramQNumber: editFormData.ramQNumber,
            insurance: editFormData.insurance,
            insuranceNumber: editFormData.insuranceNumber,
            covidResult: editFormData.covidResult,
            symptom1: editFormData.symptom1,
            symptom2: editFormData.symptom2,
            symptom3: editFormData.symptom3,
            symptom4: editFormData.symptom4,
            symptom5: editFormData.symptom5,
            symptom6: editFormData.symptom6,
            symptom7: editFormData.symptom7,
            symptom8: editFormData.symptom8,
            symptom9: editFormData.symptom9,
            symptom10: editFormData.symptom10,
            symptom11: editFormData.symptom11,
            comments: editFormData.comments,
            flag: editFormData.flag
        };
        setNotifyDoctor(editedNotifyDoctor);
        DoctorNotification.notifyDoctor(patients[0].doctor, patients[0].firstName, patients[0].lastName, patients[0].email, "patient symptoms update")
    }


    return (
        <>
            <Navbar/>
            <div className="container">
                <Grid container component="main" className={classes.centerGrid}>
                    <CssBaseline/>
                    <Grid item xs={12} sm={12} md={8} component={Paper} elevation={6} square>
                        <div className={classes.paper}>
                            <Typography component="h1" variant="h4" className={classes.title}>
                                Symptoms Update
                            </Typography>
                            <form onSubmit={handleEditFormSubmit}>
                                <div className={classes.field}>
                                    <FormGroup>
                                        <p>Health status</p>
                                        <RadioGroup
                                        >
                                            <FormControlLabel control={<Radio/>} 
                                                label="Positive" 
                                                checked= {editFormData.covidResult === "positive"}
                                                onClick={() => setEditFormData((val) => {
                                                return {...val, covidResult: "positive"}
                                            })}
                                                />
                                            <FormControlLabel control={<Radio/>}
                                                label="Negative" 
                                                checked= {editFormData.covidResult !== "positive"}
                                                onClick={() => setEditFormData((val) => {
                                                return {...val, covidResult: "negative"}
                                            })}
                                                />
                                        </RadioGroup>
                                        <p> Covid symptoms</p>
                                        <FormControlLabel control={<Checkbox/>}
                                            checked={editFormData.symptom1}
                                            onClick={() => setEditFormData((val) => {
                                                return {...val, symptom1: !val.symptom1}
                                            })}
                                            name="symptom1" label="New or worsening cough"/>
                                        <FormControlLabel control={<Checkbox/>}
                                            checked={editFormData.symptom2}
                                            onClick={() => setEditFormData((val) => {
                                                return {...val, symptom2: !val.symptom2}
                                            })}
                                            name="symptom2"
                                            label="Shortness of breath or difficulty breathing"/>
                                        <FormControlLabel control={<Checkbox/>}
                                            checked={editFormData.symptom3}
                                            onClick={() => setEditFormData((val) => {
                                                return {...val, symptom3: !val.symptom3}
                                            })}
                                            name="symptom3"
                                            label="Temperature equal or more than 38 C"/>
                                        <FormControlLabel control={<Checkbox/>}
                                            checked={editFormData.symptom4}
                                            onClick={() => setEditFormData((val) => {
                                                return {...val, symptom4: !val.symptom4}
                                            })}
                                            name="symptom4"
                                            label="Feeling feverish"/>
                                        <FormControlLabel control={<Checkbox/>}
                                            type= 'checkbox'
                                            data-testid="checkbox-1234"
                                            checked={editFormData.symptom5}
                                            onClick={() => setEditFormData((val) => {
                                                return {...val, symptom5: !val.symptom5}
                                            })}
                                            name="symptom5"
                                            label="Chills"/>
                                        <FormControlLabel control={<Checkbox/>}
                                            checked={editFormData.symptom6}
                                            onClick={() => setEditFormData((val) => {
                                                return {...val, symptom6: !val.symptom6}
                                            })}
                                            name="symptom6"
                                            label="Fatigue and/or weakness"/>
                                        <FormControlLabel control={<Checkbox/>}
                                            checked={editFormData.symptom7}
                                            onClick={() => setEditFormData((val) => {
                                                return {...val, symptom7: !val.symptom7}
                                            })}
                                            name="symptom7"
                                            label="Muscles and/or body ache"/>
                                        <FormControlLabel control={<Checkbox/>}
                                            checked={editFormData.symptom8}
                                            onClick={() => setEditFormData((val) => {
                                                return {...val, symptom8: !val.symptom8}
                                            })}
                                            name="symptom8"
                                            label="Headache"/>
                                        <FormControlLabel control={<Checkbox/>}
                                            checked={editFormData.symptom9}
                                            onChange={() => setEditFormData((val) => {
                                                return {...val, symptom9: !val.symptom9}
                                            })}
                                            name="symptom9"
                                            label="Abdominal pain"/>
                                        <FormControlLabel control={<Checkbox/>}
                                            checked={editFormData.symptom10}
                                            onClick={() => setEditFormData((val) => {
                                                return {...val, symptom10: !val.symptom10}
                                            })}
                                            name="symptom10"
                                            label="Diarrhea and vomiting"/>
                                        <FormControlLabel control={<Checkbox/>}
                                            checked={editFormData.symptom11}
                                            onClick={() => setEditFormData((val) => {
                                                return {...val, symptom11: !val.symptom11}
                                            })}
                                            name="symptom11"
                                            label="Feelings of malaise"/>
                                    </FormGroup>
                                    <p>Other comments</p>
                                        <TextField fullWidth={true}
                                            id="outlined-multiline-static"
                                            label=""
                                            multiline
                                            rows={2}
                                            defaultValue="add comments"
                                            name="comments"
                                            placeholder="Comments"
                                            value={editFormData.comments}
                                            onChange={handleFormChange} />
                                    <Button
                                        type="submit"
                                        fullWidth={true}
                                        variant="contained"
                                        className={classes.submit}>
                                        Edit symptoms
                                    </Button>
                                    <Button
                                        type="button"
                                        fullWidth={true}
                                        variant="contained"
                                        onClick={(event) => [handleNotifyDoctorButtonClick(event)]}
                                    >
                                        Notify my doctor
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}