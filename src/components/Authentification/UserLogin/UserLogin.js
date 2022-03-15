import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import geometricImage from "../../../images/geometric_gradient.jpg";
import {useEffect, useState} from "react";
import loginData from "./userLoginMockData";
import LoginForm from "./LoginForm";
import Button from "@material-ui/core/Button";
import AWS from 'aws-sdk';
import awsConfig from '../../../aws-config.json';

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
    }
}));


AWS.config.update(awsConfig);
const docClient = new AWS.DynamoDB.DocumentClient();

export default function UsersLogin() {
    const classes = useStyles();
    const [error, setError] = useState("");
    const [user, setUser] = useState({email: "", password: ""})
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        // Check if the user is already logged in
        // If yes, redirect to his/her profile
        if(localStorage.getItem("user")){
            window.location = "/dashboard"
        }
        // Display the error message if the user was trying to access a page without logging in
        if(window.location.hash === "#redirect"){
            setSuccessMessage("");
            setErrorMessage("You need to log in to view that page!");
        }
    }, [])



    const Login = details => {
        console.log(details);
        let notValid = true
        for (let i = 0; i < loginData.length; i++) {
            if (loginData[i].email === details.email) {
                if (loginData[i].password1 === details.password){
                    console.log("Logged in!");
                    localStorage.setItem("id", JSON.stringify(loginData[i].id));
                    localStorage.setItem("email", JSON.stringify(loginData[i].email));
                    localStorage.setItem("type", JSON.stringify(loginData[i].type));
                    notValid = false
                    setUser( {
                        email: details.email,
                        password1: details.password
                    });
                    window.location = "/dashboard" ;
                }

            }
        }
        if(notValid) {
            alert("Wrong email or password !")
            return false;
        }

    }
    const Logout = () => {
        setUser({email: "", password: ""});
    }

    return (
        <Grid container component="main">
            <CssBaseline />
            <Grid item xs={false} sm={false} md={4} className={classes.image} />
            <Grid item xs={12} sm={12} md={8} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <LoginForm Login={Login} error={error} />
                    {/*<Button onClick={Logout} disabled={user.email === "" && user.password === ""}>Logout</Button>*/}
                </div>
            </Grid>
        </Grid>
    );
}
