import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as React from "react";
import geometricImage from "../../../images/geometric_gradient.jpg";
import {useState, useEffect} from "react";
import Navbar from "../../../components/Navbar/Navbar";
import * as DoctorProfileUpdateDatabaseServices from "./DoctorProfileUpdateDatabaseServices";


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
        },
        centerGrid: {
            justifyContent: "center",
        }
    }));

export default function DoctorProfile(url) {
    const classes = useStyles();

    const [doctors, setDoctors] = useState(null);

    const [editFormData, setEditFormData] = useState({
        firstName: '',
        lastName: '',
        licenseNumber: '',
        email: '',
        phoneNumber: '',
        streetNumber: '',
        streetName: '',
        apartmentNumber: '',
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
            apartmentNumber: doctor.apartmentNumber,
            postalCode: doctor.postalCode,
            city: doctor.city,
            province: doctor.province,
        };


        setEditFormData(formValues);
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
            email: editFormData.email,
            firstName: editFormData.firstName,
            lastName: editFormData.lastName,
            licenseNumber: editFormData.licenseNumber,
            phoneNumber: editFormData.phoneNumber,
            streetName: editFormData.streetName,
            apartmentNumber: editFormData.apartmentNumber,
            postalCode: editFormData.postalCode,
            city: editFormData.city,
            province: editFormData.province,
            streetNumber: editFormData.streetNumber
        };
        const newDoctors = [...doctors];
        const index = doctors.findIndex((doctor) => doctor.id === editDoctorId);
        newDoctors[0] = editedDoctor;
        setDoctors(newDoctors);
        const user = JSON.parse(localStorage.getItem("email"))
        const url = user.split("@");
        DoctorProfileUpdateDatabaseServices.updateData('doctors', newDoctors[0]).then(() => {
            window.location.assign("/profile/"+ url[0])
        })
    };

    useEffect(async () => {
        setDoctors(await DoctorProfileUpdateDatabaseServices.fetchData('doctors'))
    }, [])

    useEffect(() => {
        if (doctors !== null)
            handleInformationLoad();
    }, [doctors]);

    return (
        <>
            <Navbar/>
            {/*<div style="text-align: center;">*/}
            <div className="container">
                <Grid container component="main" className={classes.centerGrid}>
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
                                        label="First Name"
                                        name="firstName"
                                        margin = "normal"
                                        value={editFormData.firstName}
                                        onChange={handleEditFormChange}
                                        onClick={handleInformationLoad}
                                    />


                                    <TextField
                                        type="text"
                                        margin="normal"
                                        label="Last Name"
                                        name="lastName"
                                        value={editFormData.lastName}
                                        onChange={handleEditFormChange}
                                    />
                                    <TextField
                                        type="text"
                                        margin="normal"
                                        fullWidth
                                        label="License Number"
                                        name="licenseNumber"
                                        autoComplete=""
                                        value={editFormData.licenseNumber}
                                        onChange={handleEditFormChange}
                                    />
                                    <TextField
                                        type="email"
                                        margin="normal"
                                        fullWidth
                                        helperText="this.example@email.com"
                                        name="email"
                                        label="Email"
                                        autoComplete="email"
                                        data-testid="sign-up-email"
                                        value={editFormData.email}
                                        onChange={handleEditFormChange}
                                    />
                                    <TextField
                                        type="text"
                                        margin="normal"
                                        fullWidth
                                        label="Phone Number"
                                        name="phoneNumber"
                                        helperText="123-145-1234"
                                        data-testid="phone-number"
                                        value={editFormData.phoneNumber}
                                        onChange={handleEditFormChange}
                                    />

                                    <br/>
                                    <br/>
                                    <br/>

                                    <p>Address</p>
                                    <TextField
                                        type="text"
                                        name="streetNumber"
                                        label="Street Number"
                                        margin="normal"
                                        value={editFormData.streetNumber}
                                        onChange={handleEditFormChange}
                                    />
                                    <TextField
                                        type="text"
                                        name="streetName"
                                        label="Street Name"
                                        margin="normal"
                                        value={editFormData.streetName}
                                        onChange={handleEditFormChange}
                                    />
                                    <TextField
                                        type="text"
                                        name="apartmentNumber"
                                        label="Apartment Number"
                                        margin="normal"
                                        value={editFormData.apartmentNumber}
                                        onChange={handleEditFormChange}
                                    />

                                    <TextField
                                        type="text"
                                        name="postalCode"
                                        label="Postal Code"
                                        margin="normal"
                                        value={editFormData.postalCode}
                                        onChange={handleEditFormChange}
                                    />
                                    <TextField
                                        type="text"
                                        name="city"
                                        label="City"
                                        margin="normal"
                                        value={editFormData.city}
                                        onChange={handleEditFormChange}
                                    />
                                    <TextField
                                        type="text"
                                        name="province"
                                        label="Province"
                                        margin="normal"
                                        value={editFormData.province}
                                        onChange={handleEditFormChange}
                                    />
                                    <div>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            className={classes.submit}
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
            {/*</div>*/}
        </>
    );
}
