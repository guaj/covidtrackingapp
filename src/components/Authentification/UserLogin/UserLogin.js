import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import geometricImage from "../../../images/geometric_gradient.jpg";
import {useEffect, useState} from "react";
import LoginForm from "./LoginForm";
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

const doctorTable = 'doctors';
const patientTable = 'patients';
const orgTable = 'organizations';

export function setLocalStorage(email, type) {
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("type", JSON.stringify(type));
    window.location = '/dashboard';
}


export default function UsersLogin() {
    const classes = useStyles();
    const [error, setError] = useState("");
    const [user, setUser] = useState({email: "", password: ""})
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        // Check if the user is already logged in
        // If yes, redirect to his/her profile
        if(localStorage.getItem("email")){
            if(localStorage.getItem("email") === "")
                window.location = "/dashboard"
        }
        // Display the error message if the user was trying to access a page without logging in
        if(window.location.hash === "#redirect"){
            setSuccessMessage("");
            setErrorMessage("You need to log in to view that page!");
        }
    }, [])

    const Login = async details => {
        console.log(details);
        try {
            let validCredentials = false;
            try {
                const params = {
                    TableName: "admin",
                    Key: {
                        "adminID": String('2')
                    }
                }
                const result = await docClient.get(params).promise()
                if(result.Item.password === details.password && result.Item.email === details.email){
                    setLocalStorage(result.Item.email, "admin");
                    validCredentials = true;
                }

            } catch (err) {
                console.log("not an admin")
            }
            try {
                const param = {
                    TableName: patientTable,
                    Key:{
                        "email":String(details.email)
                    }
                }
                const result = await docClient.get(param).promise()
                if(result.Item.password === details.password && result.Item.email === details.email){
                    setLocalStorage(result.Item.email, "patient");
                    validCredentials = true;
                }
            } catch (err) {
                console.log("not a patient")
            }
            try {
                const param = {
                    TableName: doctorTable,
                    Key:{
                        "email":String(details.email)
                    }
                }
                const result = await docClient.get(param).promise()
                if(result.Item.password === details.password && result.Item.email === details.email){
                    setLocalStorage(result.Item.email, "doctor");
                    validCredentials = true;
                }
            } catch (err) {
                console.log("not a doctor")
            }
            try {
                const param = {
                    TableName: orgTable,
                    Key:{
                        "email":String(details.email),
                    }
                }
                const result = await docClient.get(param).promise()
                console.log(result)
                if(result.Item.password === details.password && result.Item.email === details.email){
                    setLocalStorage(result.Item.email, "health official");
                    validCredentials = true;
                }
            } catch (err) {
                console.log("not a health official")
            }
            try {
                const param = {
                    TableName: orgTable,
                    Key:{
                        "email":String(details.email),
                    }
                }
                const result = await docClient.get(param).promise()
                console.log(result)
                if(result.Item.password === details.password && result.Item.email === details.email){
                    setLocalStorage(result.Item.email, "immigration official");
                    validCredentials = true;
                }
            } catch (err) {
                console.log("not an immigration official")
            }

            if(!validCredentials)
                alert("wrong password or email")
        }catch (e) {
            alert(e);
        }

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