import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import geometricImage from "../../../images/geometric_gradient.jpg";
import {FormControl, FormHelperText, Radio, RadioGroup} from "@material-ui/core";
import React from 'react';

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
        margin: theme.spacing(17, 15),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    form: {
        marginTop: theme.spacing(2),
        "@media (max-width: 600px)": {
            width:"100%"
        }
    },
    submit: {
        margin: theme.spacing(8, 0, 5),
        color: "white",
        backgroundColor: "rgba(1, 5, 96, 1)",
    },
    title:{
        marginBottom: theme.spacing(5),
        color: "rgba(1, 5, 96, 1)",
        fontWeight: "bold",
    },
    checkboxes:{
        marginTop: theme.spacing(4),
    }
}));

export default function UsersRegistration() {
    const classes = useStyles();
    const [text, setText] = React.useState('Choose an option');
    const [value,setValue] = React.useState('');

    const handleRadioChange =(e)=>{
        setValue(e.target.value);
        setText('');
    };
    const handleSubmit = (e)=>{
        e.preventDefault();

        if(value === "patient"){
        setText('Im in patient');
        window.location = '/patient-registration';

        }
        else if (value === "doctor"){
            setText('Im in doctor');
            window.location = '/doctor-registration';
        }
        else if (value === "immigration official" || value === "health official"){
            setText('Im in the rest');
            window.location = '/organization-registration';
            sessionStorage.setItem("orgType",value);

        }

    };
    return (
        <Grid container component="main">
            <CssBaseline />
            <Grid item xs={false} sm={false} md={4} className={classes.image} />
            <Grid item xs={12} sm={12} md={8} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h4" className={classes.title} >
                        Select the type of account you wish to create:
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <FormControl sx={{ m: 3 }}  variant="standard">
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value}
                            onChange={handleRadioChange}
                        >
                            <FormControlLabel value="patient" control={<Radio />} label="Patient account" onChange={handleRadioChange}/>
                            <FormControlLabel value="doctor" control={<Radio />} label="Doctor account" />
                            <FormControlLabel value="health official" control={<Radio />} label="Health Officer account" />
                            <FormControlLabel value="immigration official" control={<Radio />} label="Immigration Officer account" />
                        </RadioGroup>
                        <FormHelperText>{text}</FormHelperText>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                        >
                            Select
                        </Button>
                        </FormControl>
                    </form>
                </div>
            </Grid>
        </Grid>
    );

}