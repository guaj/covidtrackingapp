import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import '../../../components/profile.css'
import * as React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Checkbox, FormControlLabel, FormGroup} from "@material-ui/core";
import geometricImage from "../../../images/geometric_gradient.jpg";

import data from "./logged_in_patient_mock_data.json";
import {useState, Fragment, useEffect} from "react";
import Navbar from "../../../components/Navbar/Navbar";


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
        marginBottom: theme.spacing(4),
        color: "rgba(1, 5, 96, 1)",
        fontWeight: "bold",
    },
    submit: {
        margin: theme.spacing(8, 0, 3),
        color: "white",
        backgroundColor: "rgba(1, 5, 96, 1)",
    },
    paragraph: {
        marginTop: theme.spacing(6),
    },
    centerGrid: {
        justifyContent: "center",
    }
}));


export default function ProfilePatient() {
    const classes = useStyles();

    const [patients, setPatients] = useState(data);

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
        doctorId: ''
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
        doctorId: ''
    });

    const [editPatientId, setEditPatientId] = useState(null);

    useEffect(() => {
        handleFormInformationLoad();
    }, []);

    const handleFormInformationLoad = () => {
        const patient = patients[0];
        setEditPatientId(patient.id);

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
            doctorId: patient.doctorId
        };

        setEditFormData(formValues);

        console.log("inside handleFormInformationLoad method");
    };

    const handleFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        //create new object on new values
        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
        console.log(event.target);
    }

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedPatient = {
            id: editPatientId,
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
            doctorId: editFormData.doctorId
        };
        const newPatients = [...patients];
        const index = patients.findIndex((patient) => patient.id === editPatientId);
        newPatients[0] = editedPatient;
        setPatients(newPatients);
        // setEditPatientId(null);
        console.log(JSON.stringify(newPatients));
        console.log("index=", index);
    };

    const handleNotifyDoctorButtonClick = (event) => {
        event.preventDefault();

        console.log("Notify doctor");

        const editedNotifyDoctor = {
            id: editPatientId,
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
            doctorId: editFormData.doctorId
        };
        setNotifyDoctor(editedNotifyDoctor);
        console.log(JSON.stringify(editedNotifyDoctor));
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
                                Profile page
                            </Typography>
                            <form onSubmit={handleEditFormSubmit}>
                                <div>
                                    <p>Name</p>
                                    <TextField
                                        type="text"
                                        placeholder="First name"
                                        name="firstName"
                                        id="firstName"
                                        value={editFormData.firstName}
                                        onChange={handleFormChange}
                                    />

                                    <TextField
                                        type="text"
                                        placeholder="Last name"
                                        name="lastName"
                                        value={editFormData.lastName}
                                        onChange={handleFormChange}
                                    />
                                    <TextField
                                        type="date"
                                        margin="normal"
                                        fullWidth
                                        name="dob"
                                        autoComplete="date"
                                        helperText="Date of birth"
                                        value={editFormData.dob}
                                        onChange={handleFormChange}
                                    />
                                    <div>
                                        <p>Address</p>
                                        <TextField
                                            type="text"
                                            name="streetNumber"
                                            placeholder="Street number"
                                            value={editFormData.streetNumber}
                                            onChange={handleFormChange}
                                        />
                                        <TextField
                                            type="text"
                                            name="streetName"
                                            placeholder="Street name"
                                            value={editFormData.streetName}
                                            onChange={handleFormChange}
                                        />
                                        <TextField
                                            type="text"
                                            name="apartmentNumber"
                                            placeholder="Apartment number"
                                            value={editFormData.apartmentNumber}
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                    <TextField
                                        type="text"
                                        name="postalCode"
                                        placeholder="Postal code"
                                        value={editFormData.postalCode}
                                        onChange={handleFormChange}
                                    />
                                    <TextField
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        value={editFormData.city}
                                        onChange={handleFormChange}
                                    />
                                    <TextField
                                        type="text"
                                        name="province"
                                        placeholder="Province"
                                        value={editFormData.province}
                                        onChange={handleFormChange}
                                    />
                                    <div>
                                        <p> Covid symptoms</p>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox/>}
                                                              checked={editFormData.symptom1}
                                                              onChange={() => setEditFormData((val) => {
                                                                  return {...val, symptom1: !val.symptom1}
                                                              })}
                                                              name="symptom1" label="New or worsening cough"/>
                                            <FormControlLabel control={<Checkbox/>}
                                                              checked={editFormData.symptom2}
                                                              onChange={() => setEditFormData((val) => {
                                                                  return {...val, symptom2: !val.symptom2}
                                                              })}
                                                              name="symptom2"
                                                              label="Shortness of breath or difficulty breathing"/>
                                            <FormControlLabel control={<Checkbox/>}
                                                              checked={editFormData.symptom3}
                                                              onChange={() => setEditFormData((val) => {
                                                                  return {...val, symptom3: !val.symptom3}
                                                              })}
                                                              name="symptom3"
                                                              label="Temperature equal or more than 38 C"/>
                                            <FormControlLabel control={<Checkbox/>}
                                                              checked={editFormData.symptom4}
                                                              onChange={() => setEditFormData((val) => {
                                                                  return {...val, symptom4: !val.symptom4}
                                                              })}
                                                              name="symptom4"
                                                              label="feeling feverish"/>
                                            <FormControlLabel control={<Checkbox/>}
                                                              checked={editFormData.symptom5}
                                                              onChange={() => setEditFormData((val) => {
                                                                  return {...val, symptom5: !val.symptom5}
                                                              })}
                                                              name="symptom5"
                                                              label="Chills"/>
                                            <FormControlLabel control={<Checkbox/>}
                                                              checked={editFormData.symptom6}
                                                              onChange={() => setEditFormData((val) => {
                                                                  return {...val, symptom6: !val.symptom6}
                                                              })}
                                                              name="symptom6"
                                                              label="Fatigue and/or weakness"/>
                                            <FormControlLabel control={<Checkbox/>}
                                                              checked={editFormData.symptom7}
                                                              onChange={() => setEditFormData((val) => {
                                                                  return {...val, symptom7: !val.symptom7}
                                                              })}
                                                              name="symptom7"
                                                              label="muscles and/or body ache"/>
                                            <FormControlLabel control={<Checkbox/>}
                                                              checked={editFormData.symptom8}
                                                              onChange={() => setEditFormData((val) => {
                                                                  return {...val, symptom8: !val.symptom8}
                                                              })}
                                                              name="symptom8"
                                                              label="headache"/>
                                            <FormControlLabel control={<Checkbox/>}
                                                              checked={editFormData.symptom9}
                                                              onChange={() => setEditFormData((val) => {
                                                                  return {...val, symptom9: !val.symptom9}
                                                              })}
                                                              name="symptom9"
                                                              label="abdominal pain"/>
                                            <FormControlLabel control={<Checkbox/>}
                                                              checked={editFormData.symptom10}
                                                              onChange={() => setEditFormData((val) => {
                                                                  return {...val, symptom10: !val.symptom10}
                                                              })}
                                                              name="symptom10"
                                                              label="diarrhea and vomiting"/>
                                            <FormControlLabel control={<Checkbox/>}
                                                              checked={editFormData.symptom11}
                                                              onChange={() => setEditFormData((val) => {
                                                                  return {...val, symptom11: !val.symptom11}
                                                              })}
                                                              name="symptom11"
                                                              label="feelings of malaise"/>

                                        </FormGroup>
                                        <p>Other comments</p>
                                        <TextField fullwidth
                                                   id="outlined-multiline-static"
                                                   label=""
                                                   multiline
                                                   rows={2}
                                                   defaultValue="add comments"
                                                   name="comments"
                                                   value={editFormData.comments}
                                                   onChange={handleFormChange}
                                        />
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            className={classes.submit}
                                            onClick={() => {
                                                alert('Profile information updated!');
                                            }}
                                        >
                                            Update profile
                                        </Button>
                                        <Button
                                            type="button"
                                            fullWidth
                                            variant="contained"
                                            onClick={(event) =>[handleNotifyDoctorButtonClick(event), alert('Your doctor will be notified!')]}
                                        >
                                            Notify my doctor
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}