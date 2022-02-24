import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as React from "react";
import geometricImage from "../../../images/geometric_gradient.jpg";
import data from "./logged_in_doctor_mock_data.json";
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
    paragraph: {
        marginTop: theme.spacing(6)
    },
    submit: {
        margin: theme.spacing(8, 0, 5),
        color: "white",
        backgroundColor: "rgba(1, 5, 96, 1)",
    }
}));

const setForm = (event => {
    return event.target.value;
})

export default function DoctorProfile() {
    const classes = useStyles();
    const handleSubmit = (e) => {
        e.preventDefault();
        window.location = '/dashboard'; //wrong redirect, waiting for user dashboard page
    }

    const [doctors, setDoctors] = useState(data);


    const [editFormData, setEditFormData] = useState({
        firstName: '',
        lastName: '',
        licenseNumber: '',
        email: '',
        phoneNumber: '',
        streetNumber: '',
        streetName: '',
        apt: '',
        postalCode: '',
        city: '',
        province: '',

    });

    const [editDoctorId, setEditDoctorId] = useState(null);

    const handleInformationLoad = () => {
        const doctor = doctors[0];
        setEditDoctorId(doctor.id);

        const formValues = {
            firstName: doctor.firstName,
            lastName: doctor.lastName,
            licenseNumber: doctor.licenseNumber,
            email: doctor.email,
            phoneNumber: doctor.phoneNumber,
            streetNumber: doctor.streetNumber,
            streetName: doctor.streetName,
            apt: doctor.apt,
            postalCode: doctor.postalCode,
            city: doctor.city,
            province: doctor.province,
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

        const editedDoctor = {
            id: editDoctorId,
            firstName: editFormData.firstName,
            lastName: editFormData.lastName,
            licenseNumber: editFormData.licenseNumber,
            phoneNumber: editFormData.phoneNumber,
            streetName: editFormData.streetName,
            apt: editFormData.apt,
            postalCode: editFormData.postalCode,
            city: editFormData.city,
            province: editFormData.province,

        };
        const newDoctors = [...doctors];
        const index = doctors.findIndex((doctor) => doctor.id === editDoctorId);
        newDoctors[0] = editedDoctor;
        setDoctors(newDoctors);
        // setEditDoctorId(null);
        console.log(JSON.stringify(newDoctors));
    };

    useEffect(() => {
        handleInformationLoad();
    }, []);

    return (
        <div className="container">
            <Grid container component="main">
                <CssBaseline/>

                <Grid item xs={12} sm={12} md={8} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h4" className={classes.title}>
                            profile page
                        </Typography>
                        <form className={classes.form} id='form' onSubmit={handleEditFormSubmit}>
                            <div>
                                <p>Name</p>
                                <TextField
                                    type="text"
                                    placeholder="First name"
                                    name="firstName"
                                    value={editFormData.firstName}
                                    onChange={handleEditFormChange}
                                    onClick={handleInformationLoad}
                                />


                                <TextField
                                    type="text"
                                    placeholder="Last name"
                                    name="lastName"
                                    value={editFormData.lastName}
                                    onChange={handleEditFormChange}
                                />
                                <TextField
                                    type="text"
                                    margin="normal"
                                    fullWidth
                                    placeholder="License number"
                                    name="licenseNumber"
                                    autoComplete=""
                                    helperText="License number"
                                    value={editFormData.licenseNumber}
                                    onChange={handleEditFormChange}
                                />
                                <TextField
                                    type="email"
                                    margin="normal"
                                    fullWidth
                                    label="this.example@email.com"
                                    name="email"
                                    autoComplete="email"
                                    helperText="Email"
                                    data-testid="sign-up-email"
                                    value={editFormData.email}
                                    onChange={handleEditFormChange}
                                />
                                <TextField
                                    type="text"
                                    margin="normal"
                                    fullWidth
                                    label="123-145-1234"
                                    name="phoneNumber"
                                    autoComplete="email"
                                    helperText="phone number"
                                    data-testid="phone-number"
                                    value={editFormData.phoneNumber}
                                    onChange={handleEditFormChange}
                                />
                                <div>
                                    <p>Address</p>
                                    <TextField
                                        type="text"
                                        name="streetNumber"
                                        defaultValue="Street number"
                                        value={editFormData.streetNumber}
                                        onChange={handleEditFormChange}
                                    />
                                    <TextField
                                        type="text"
                                        name="streetName"
                                        defaultValue="Street name"
                                        value={editFormData.streetName}
                                        onChange={handleEditFormChange}
                                    />
                                    <TextField
                                        type="text"
                                        name="apt"
                                        //defaultValue="apt"
                                        value={editFormData.apt}
                                        onChange={handleEditFormChange}
                                    />
                                </div>
                                <TextField
                                    type="text"
                                    name="postalCode"
                                    defaultValue="postal code"
                                    value={editFormData.postalCode}
                                    onChange={handleEditFormChange}
                                />
                                <TextField
                                    type="text"
                                    name="city"
                                    defaultValue="city"
                                    value={editFormData.city}
                                    onChange={handleEditFormChange}
                                />
                                <TextField
                                    type="text"
                                    name="province"
                                    label="Required"
                                    defaultValue="Province"
                                    value={editFormData.province}
                                    onChange={handleEditFormChange}
                                />
                                <div>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        className={classes.submit}
                                        onClick={()=>{alert('Profile information updated!');}}
                                    >
                                        Update profile
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
