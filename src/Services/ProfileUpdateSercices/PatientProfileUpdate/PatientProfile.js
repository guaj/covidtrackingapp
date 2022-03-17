
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import '../../../components/profile.css'
import * as React from'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Checkbox, FormControlLabel, FormGroup} from "@material-ui/core";
import geometricImage from "../../../images/geometric_gradient.jpg";




  
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
  title:{
    marginBottom: theme.spacing(4),
    color: "rgba(1, 5, 96, 1)",
    fontWeight: "bold",
  },
  submit: {
    margin: theme.spacing(8, 0, 5),
    color: "white",
    backgroundColor: "rgba(1, 5, 96, 1)",
  },
  paragraph:{
    marginTop: theme.spacing(6),
  }
}));


  
export default function ProfilePatient() {
  const classes = useStyles();

  const handleSubmit = (e)=>{
    e.preventDefault();
    window.location = '/'; //wrong redirect, waiting for user dashboard page
  }
  return (
      <Grid container component="main" className="profile">
        <CssBaseline />
        <Grid item xs={false} sm={false} md={4} className={classes.image}/>
        <Grid item xs={12} sm={12} md={8} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h4" className={classes.title} >
              Profile page
            </Typography>
            <form onSubmit={handleSubmit}>
              <div>
                <p>Name</p>
                <TextField
                    id="first-name"
                    defaultValue="First name"
                />

                <TextField
                    id="last-name"
                    defaultValue="Last name"
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
                    <FormControlLabel control={<Checkbox  />} label="New or worsening cough" />
                    <FormControlLabel control={<Checkbox />} label="Shortness of breath or difficulty breathing" />
                    <FormControlLabel control={<Checkbox />} label="Temperature equal or more than 38 C" />
                    <FormControlLabel control={<Checkbox />} label="feeling feverish" />
                    <FormControlLabel control={<Checkbox />} label="Chills" />
                    <FormControlLabel control={<Checkbox />} label="Fatigue and/or weakness" />
                    <FormControlLabel control={<Checkbox />} label="muscles and/or body ache" />
                    <FormControlLabel control={<Checkbox />} label="headache" />
                    <FormControlLabel control={<Checkbox />} label="abdominal pain" />
                    <FormControlLabel control={<Checkbox />} label="diarrhea and vomiting" />
                    <FormControlLabel control={<Checkbox />} label="feelings of malaise" />

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
    );
  }
  