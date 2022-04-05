import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import '../../../components/profile.css'
import * as React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import geometricImage from "../../../images/geometric_gradient.jpg";
import {useState, Fragment, useEffect} from "react";
import Navbar from "../../../components/Navbar/Navbar";
import * as PatientProfileUpdateDatabaseServices from "./PatientProfileUpdateDatabaseServices";

const useStyles = makeStyles((theme) => ({
    inputLabelRoot: {
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: 1,
        overflow: "hidden",
        position: "absolute",
        whiteSpace: "nowrap",
        width: 1
      },
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
    },
    field1:{
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(-1)
    }
}));

export default function ProfilePatient() {
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
                                <p>Name</p>
                                <TextField
                                    helperText="First name"
                                    type="text"
                                    placeholder="First name"
                                    name="firstName"
                                    id="firstName"
                                    value={editFormData.firstName}
                                    onChange={handleFormChange}
                                    disabled={true}
                                />
                                <TextField
                                    helperText="Last name"
                                    type="text"
                                    placeholder="Last name"
                                    name="lastName"
                                    value={editFormData.lastName}
                                    onChange={handleFormChange}
                                    disabled={true}
                                />
                                <TextField
                                    type="date"
                                    margin="normal"
                                    fullWidth={true}
                                    name="dob"
                                    autoComplete="date"
                                    helperText="Date of birth"
                                    value={editFormData.dob}
                                    onChange={handleFormChange}
                                    disabled={true}
                                />
                                <p className={classes.field}>Address</p>
                                <TextField
                                    helperText="Street number"
                                    type="text"
                                    name="streetNumber"
                                    placeholder="Street number"
                                    value={editFormData.streetNumber}
                                    onChange={handleFormChange}
                                />
                                <TextField
                                    helperText="Street name"
                                    type="text"
                                    name="streetName"
                                    placeholder="Street name"
                                    value={editFormData.streetName}
                                    onChange={handleFormChange}
                                />
                                <TextField
                                    helperText="Apartment number"
                                    type="text"
                                    name="apartmentNumber"
                                    placeholder="Apartment number"
                                    value={editFormData.apartmentNumber}
                                    onChange={handleFormChange}
                                />
                                <TextField
                                    helperText="Postal code"
                                    type="text"
                                    name="postalCode"
                                    placeholder="Postal code"
                                    value={editFormData.postalCode}
                                    onChange={handleFormChange}
                                />
                                <TextField
                                    helperText="City"
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    value={editFormData.city}
                                    onChange={handleFormChange}
                                />
                                <TextField
                                    helperText="Province"
                                    type="text"
                                    name="province"
                                    placeholder="Province"
                                    value={editFormData.province}
                                    onChange={handleFormChange}
                                />
                                <p className={classes.field1}> Other contact details</p>
                                <TextField
                                    helperText="Email"
                                    label="email"
                                    type="text"
                                    InputLabelProps={{
                                    className: classes.inputLabelRoot
                                    }}
                                    name="email"
                                    placeholder="Email"
                                    value={editFormData.email}
                                    onChange={handleFormChange}
                                    disabled = {true}
                                />
                                <TextField
                                    label="phoneNumber"
                                    InputLabelProps={{
                                    className: classes.inputLabelRoot
                                    }} 
                                    helperText="Phone number"
                                    type="phoneNumber"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    data-testid="phoneNumber"
                                    placeholder="Phone"
                                    value={editFormData.phoneNumber}
                                    onChange={handleFormChange}
                                />
                                <p className={classes.field}>RAMQ number</p>
                                <TextField
                                    type="text"
                                    name="ramQNumber"
                                    placeholder="RAMQ Number"
                                    value={editFormData.ramQNumber}
                                    onChange={handleFormChange}
                                />
                                <p className={classes.field}>Private insurance</p>
                                <TextField
                                    type="text"
                                    name="insurance"
                                    placeholder="Organization name"
                                    value={editFormData.insurance}
                                    onChange={handleFormChange}
                                />
                                <TextField
                                    type="text"
                                    name="insuranceNumber"
                                    placeholder="Insurance Number"
                                    value={editFormData.insuranceNumber}
                                    onChange={handleFormChange}
                                />
                                <Button
                                    type="submit"
                                    fullWidth={true}
                                    variant="contained"
                                    className={classes.submit}
                                >
                                    Update profile
                                </Button>
                                <Button
                                    type="button"
                                    fullWidth={true}
                                    variant="contained"
                                    onClick={(event) => [handleNotifyDoctorButtonClick(event), alert('Your doctor will be notified!')]}
                                >
                                    Notify my doctor
                                </Button>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}