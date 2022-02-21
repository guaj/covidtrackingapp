import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as React from "react";


const useStyles = makeStyles((theme) => ({
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
        marginTop: theme.spacing(6),
    }
}));

const setForm = (event => {
    return event.target.value;
})

export default function DoctorProfile() {
    const classes = useStyles();
    return (
        <Grid container component="main">
            <CssBaseline/>
            <Grid item component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h4" className={classes.title}>
                        profile page
                    </Typography>
                    <form className={classes.form} id='form' onSubmit={(e) => setForm(e.target.value)}>
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
                          <TextField
                              type="text"
                              margin="normal"
                              required
                              fullWidth
                              id="doctorIdNumber"
                              label="license number"
                              name="licenseNumber"
                              autoComplete=""
                              helperText="License number"
                          />
                          <TextField
                              type="email"
                              margin="normal"
                              required
                              fullWidth
                              id="email"
                              label="this.example@email.com"
                              name="email"
                              autoComplete="email"
                              helperText="Email"
                              data-testid="sign-up-email"
                          />
                          <TextField
                              type="text"
                              margin="normal"
                              fullWidth
                              id="phoneNumber"
                              label="123-145-1234"
                              name="phoneNumber"
                              autoComplete="email"
                              helperText="phone number"
                              data-testid="phone-number"
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
                    </form>
                </div>
            </Grid>
        </Grid>
);
}
  