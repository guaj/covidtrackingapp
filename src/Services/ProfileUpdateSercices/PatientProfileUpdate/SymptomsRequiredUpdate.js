import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import '../../../components/profile.css'
import * as React from 'react';
import Button from "@material-ui/core/Button";
import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import geometricImage from "../../../images/geometric_gradient.jpg";
import { useState, Fragment, useEffect } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import {fetchRequiredSymptoms, getPatientEmail, updateRequiredSymptoms} from "./PatientProfileUpdateDatabaseServices";

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

export default function SymptomsRequiredUpdate() {
    const classes = useStyles();
    let userEmail = window.location.href.split("/")[4];

    const [patients, setPatients] = useState(null);
    const [patientEmail, setPatientEmail] = React.useState("");


    const [editFormData, setEditFormData] = useState({
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
    });

    useEffect( () => {
        async function fetchData() {
            const email = await getPatientEmail(userEmail);
            setPatientEmail(email);

        }
       fetchData().then(async r => {
           const test = await fetchRequiredSymptoms(patientEmail)
           setPatients(test)
       } )
    }, [patientEmail, userEmail]);

    //loads patient information on patients state change when the state is not null
    useEffect(() => {
        if (patients !== null)
            handleFormInformationLoad();
    }, [patients])


    function redirectProfile() {
        const user = window.location.href.split("/")[4];
        window.location = "/profile/" + user
    }


    const handleFormInformationLoad = () => {
        const patient = patients[0];

        const formValues = {
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
        };

        setEditFormData(formValues);
    };


    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedPatient = {
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
        };

        const newPatients = [patients];
        newPatients[0] = editedPatient;
        setPatients(newPatients);
        updateRequiredSymptoms(newPatients[0], patientEmail).then(() => redirectProfile());

    };

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
                                        <p> Required Covid symptoms</p>
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
                                    <Button
                                        type="submit"
                                        fullWidth={true}
                                        variant="contained"
                                        className={classes.submit}>
                                        Update Required Symptoms
                                    </Button>
                                    <Button
                                        type="button"
                                        fullWidth={true}
                                        variant="contained"
                                        onClick={redirectProfile}
                                    >
                                        Cancel
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