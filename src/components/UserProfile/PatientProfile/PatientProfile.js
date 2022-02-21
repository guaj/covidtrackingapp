
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import '../../profile.css'
import * as React from'react';
import Box from '@mui/material/Box';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Checkbox, FormControlLabel, FormGroup} from "@material-ui/core";



  
const useStyles = makeStyles((theme) => ({
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
  paragraph:{
    marginTop: theme.spacing(6),
  }
}));
  
  
  
export default function ProfilePatient() {
  const classes = useStyles();
    return (
      <Grid container component="main" className="profile">
        <CssBaseline />
        <Grid item component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h4" className={classes.title} >
              Profile page
            </Typography>
            <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
              <div>
                <p>Name</p>
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="Disabled"
                    defaultValue="First name"
                />
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="Disabled"
                    defaultValue="Last name"
                />
                <div>
                  <p>Address</p>
                  <TextField
                      type="text"
                      required
                      id="streetNumber"
                      label="Required"
                      defaultValue="Street number"
                  />
                <TextField
                    type="text"
                    required
                    id="address"
                    label="Required"
                    defaultValue="Street name"
                />
                  <TextField
                      type="text"
                      id="address"
                      label="Required"
                      defaultValue="apt"
                  />
                </div>
                <TextField
                    type="text"
                    id="address"
                    label="Required"
                    defaultValue="postal code"
                />
                <TextField
                    type="text"
                    id="address"
                    label="Required"
                    defaultValue="city"
                />
                <TextField
                    type="text"
                    id="address"
                    label="Required"
                    defaultValue="Province"
                />
                <div>
                  <p>Password</p>
                  <TextField
                      data-testid="sign-up-psw1"
                      type="password"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="* * * *"
                      id="password"
                      helperText="Password"
                      autoComplete="current-password"
                  />
                  <TextField
                      data-testid="sign-up-psw2"
                      type="password"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="* * * *"
                      id="password"
                      helperText="Confirm your password"
                  />

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
                    Submit
                  </Button>
                </div>
              </div>
            </Box>
          </div>
        </Grid>
      </Grid>
    );
  }
  