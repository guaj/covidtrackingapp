import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { dialogClasses } from "@mui/material";
import geometricImage from "./geometric_gradient.jpg"

  
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
      margin: theme.spacing(12, 15),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      width: "75%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(6, 0, 4),
      color: "white",
      backgroundColor: "rgba(1, 5, 96, 1)",
    },
    title:{
      marginBottom: theme.spacing(3),
      color: "rgba(1, 5, 96, 1)",
      fontWeight: "bold",
    },
    checkboxes:{
      marginTop: theme.spacing(4),
    }
  }));
  
  
  
export default function Home() {
    const classes = useStyles();
    return (
      <Grid container component="main">
        <CssBaseline />
        <Grid item xs={false} sm={2} md={4} className={classes.image} />
        <Grid item xs={12} sm={10} md={8} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h4" className={classes.title} >
              Access to your health profile 
            </Typography>
            <form className={classes.form} onSubmit={"#"}>
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
                />
              <TextField
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
              <Grid container className={classes.checkboxes}>
                  <Grid item xs>
                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                    />  
                  </Grid>
                  <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Login
              </Button>
              <Grid container>
                
                <Grid item>
                <Typography variant="body2">Don't have an account?
                    <Link href="#" variant="body2">
                    {"  Sign Up"}
                    </Link></Typography>  
                  
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
  