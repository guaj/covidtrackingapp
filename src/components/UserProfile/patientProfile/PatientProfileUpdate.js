import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import '../../profile.css'
import * as React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Checkbox, FormControlLabel, FormGroup} from "@material-ui/core";
import geometricImage from "../../../images/geometric_gradient.jpg";

import data from "./logged_in_patient_mock_data.json";
import {useState, Fragment, useEffect} from "react";


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
        margin: theme.spacing(8, 0, 5),
        color: "white",
        backgroundColor: "rgba(1, 5, 96, 1)",
    },
    paragraph: {
        marginTop: theme.spacing(6),
    }
}));


export default function ProfilePatient() {
    const classes = useStyles();

    const [contacts, setContacts] = useState(data);

    const [editFormData, setEditFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        email: '',
        ramQNumber: '',
        insurance: '',
    });

    const [editContactId, setEditContactId] = useState(null);

    const handleEditClick = (event) => {
        event.preventDefault();
        const contact = contacts[0];
        setEditContactId(contact.id);

        const formValues = {
            firstName: contact.firstName,
            lastName: contact.lastName,
            address: contact.address,
            phoneNumber: contact.phoneNumber,
            email: contact.email,
            ramQNumber: contact.ramQNumber,
            insurance: contact.insurance,
        };
        setEditFormData(formValues);

        console.log("inside handleEditClick method");
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        //create new object on new values
        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    }

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            firstName: editFormData.firstName,
            lastName: editFormData.lastName,
            address: editFormData.address,
            phoneNumber: editFormData.phoneNumber,
            email: editFormData.email,
            ramQNumber: editFormData.ramQNumber,
            insurance: editFormData.insurance,
        };
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact.id === editContactId);
        newContacts[0] = editedContact;
        setContacts(newContacts);
        setEditContactId(null);
        console.log(JSON.stringify(newContacts));
    };

    return (
        <div className="container" onLoad={handleEditClick}>
            <Grid container component="main">
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
                                    value={editFormData.firstName}
                                    onChange={handleEditFormChange}
                                    onClick={handleEditClick}
                                />

                                <TextField
                                    placeholder="First name"
                                    name="firstName"
                                    value={editFormData.lastName}
                                    onChange={handleEditFormChange}
                                    onClick={handleEditClick}
                                />
                                <TextField
                                    type="date"
                                    margin="normal"
                                    fullWidth
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    autoComplete="date"
                                    helperText="Date of birth"
                                />
                                <div>
                                    <p>Address</p>
                                    <TextField
                                        type="text"
                                        id="streetNumber"
                                        defaultValue="Street number"
                                    />
                                    <TextField
                                        type="text"
                                        id="address"
                                        defaultValue="Street name"
                                    />
                                    <TextField
                                        type="text"
                                        id="address"
                                        defaultValue="apt"
                                    />
                                </div>
                                <TextField
                                    type="text"
                                    id="address"
                                    defaultValue="postal code"
                                />
                                <TextField
                                    type="text"
                                    id="address"
                                    defaultValue="city"
                                />
                                <TextField
                                    type="text"
                                    id="address"
                                    defaultValue="Province"
                                />
                                <div>

                                    <p> Covid symptoms</p>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox/>} label="New or worsening cough"/>
                                        <FormControlLabel control={<Checkbox/>}
                                                          label="Shortness of breath or difficulty breathing"/>
                                        <FormControlLabel control={<Checkbox/>}
                                                          label="Temperature equal or more than 38 C"/>
                                        <FormControlLabel control={<Checkbox/>} label="feeling feverish"/>
                                        <FormControlLabel control={<Checkbox/>} label="Chills"/>
                                        <FormControlLabel control={<Checkbox/>} label="Fatigue and/or weakness"/>
                                        <FormControlLabel control={<Checkbox/>} label="muscles and/or body ache"/>
                                        <FormControlLabel control={<Checkbox/>} label="headache"/>
                                        <FormControlLabel control={<Checkbox/>} label="abdominal pain"/>
                                        <FormControlLabel control={<Checkbox/>} label="diarrhea and vomiting"/>
                                        <FormControlLabel control={<Checkbox/>} label="feelings of malaise"/>

                                    </FormGroup>
                                    <p>Other comments</p>
                                    <TextField fullwidth
                                               id="outlined-multiline-static"
                                               label=""
                                               multiline
                                               rows={4}
                                               defaultValue="add comments"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        className={classes.submit}
                                    >
                                        Complete profile
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}