import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as React from "react";
import geometricImage from "../../../../../images/geometric_gradient.jpg";
import {useState, useEffect} from "react";
import * as OfficialUpdateDatabaseServices from './OfficialUpdateDatabaseServices'

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
        // margin: theme.spacing(17, 15, 50),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "60%",
        overflow: "auto",
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
    },
    modal: {}
}));

export default function OfficialProfile(props) {
    const classes = useStyles();

    const [officials, setOfficials] = useState(null);

    const [editFormData, setEditFormData] = useState({
        email: '',
        employeeId: '',
        orgId: ''
    });

    const [editOfficialId, setEditOfficialId] = useState(null);

    const handleInformationLoad = () => {
        const official = officials[0];
        setEditOfficialId(official.id);
        console.log("org id:" + official.orgId)
        const formValues = {

            email: official.email,
            employeeId: official.employeeId, 
            orgId: official.orgId
        
        };


        setEditFormData(formValues);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    }

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedOfficial = {
           email: editFormData.email,
           employeeId: editFormData.employeeId,
           orgId: editFormData.orgId
        };
        const newOfficials = [...officials];
        const index = officials.findIndex((official) => official.id === editOfficialId);
        newOfficials[0] = editedOfficial;
        setOfficials(newOfficials);
        const user = props.official.email
        const url = user.split("@");
        OfficialUpdateDatabaseServices.updateData('organizations', newOfficials[0])
    };

    useEffect(async () => {
        setOfficials(await OfficialUpdateDatabaseServices.fetchData('organizations', props.official.email))
        console.log('use eff' + JSON.stringify(officials))
    }, [])

    useEffect(() => {
        if (officials !== null)
            handleInformationLoad();
    }, [officials]);

    return (
        <>
            <div className={classes.paper}>
                <Typography component="h1" variant="h4" className={classes.title}>
                    update profile
                </Typography>
                <form id='form' onSubmit={handleEditFormSubmit}>
                    <div>
                        <p>Email</p>
                        <TextField
                            type="email"
                            label="email"
                            name="email"
                            margin="normal"
                            value={editFormData.email}
                            onChange={handleEditFormChange}
                            onClick={handleInformationLoad}
                            disabled={true}
                        />


                        <TextField
                            type="text"
                            margin="normal"
                            label="employee Id"
                            name="employeeId"
                            data-testid="employeeId"
                            value={editFormData.employeeId}
                            onChange={handleEditFormChange}
                        />
                        <TextField
                            type="text"
                            margin="normal"
                            fullWidth
                            label="Organization Id"
                            name="orgId"
                            data-testid="orgId"
                            autoComplete=""
                            value={editFormData.orgId}
                            onChange={handleEditFormChange}
                        />
                        <br/>
                        <br/>
                        <br/>
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
        </>
    );
}
