import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import geometricImage from "../../../images/geometric_gradient.jpg";
import { useState } from "react";
import loginData from "./userLoginMockData";
import LoginForm from "./LoginForm";
import { Navigate } from 'react-router-dom';
import { DetailsSharp } from "@mui/icons-material";
import Button from "@material-ui/core/Button";

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

export default function UsersLogin() {
    const classes = useStyles();
    const [error, setError] = useState("");
    const [user, setUser] = useState({email: "", password: ""})
    
    const Login = details => {
            console.log(details);
            for (let i = 0; i < loginData.length; i++) {
                if (loginData[i].email === details.email) {
                    if (loginData[i].password1 === details.password){
                        console.log("Logged in!");
                        setUser( {
                            email: details.email,
                            password1: details.password
                        });
                    } 
                    else alert("Wrong email or password !")
                    return false;
                }
            else alert("Wrong email or password !")
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
                    <Button onClick={Logout} disabled={user.email === "" && user.password === ""}>Logout</Button>
                </div>
            </Grid>
        </Grid>
    );
}
