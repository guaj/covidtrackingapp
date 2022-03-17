import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(8, 0, 5),
        height: '200%',
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



export default function LoginForm({Login, error}){
    const classes = useStyles();
    const [details, setDetails] = useState({type:"", email: "", password: ""});
    const [value, setValue] = useState('');

    const handleRadioChange = e =>{
        setValue(e.target.value);
    }
    const submitHandler = e => {
        e.preventDefault();
        if (value === "admin")
            details.type = value;
        else if (value ==="patient")
            details.type = value;
        else if (value ==="doctor")
            details.type = value;
        else if (value === "org1"||value === "org2" )
            details.type = "org"
        Login(details);
 }
 return(
    <form className={classes.form} id='form' onSubmit={submitHandler}>
        <Typography component="h1" variant="h4" className={classes.title} >
            Log in
        </Typography>

        <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={value}
            onChange={handleRadioChange}
        >
            <FormControlLabel value="patient" control={<Radio />} label="patient" />
            <FormControlLabel value="doctor" control={<Radio />} label="doctor" />
            <FormControlLabel value="org2" control={<Radio />} label="immigration officer" />
            <FormControlLabel value="org1" control={<Radio />} label="health officer" />
            <FormControlLabel value="admin" control={<Radio />} label="admin" />
        </RadioGroup>
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
            onChange={e => setDetails({...details, email:e.target.value})}
            value = {details.email}
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
            onChange={e => setDetails({...details, password:e.target.value})}
            value = {details.password}
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
                <Typography variant="body2">Don't have an account? <t/>
                    <Link href="/user-registration" variant="body2">
                        {"Register now"}
                    </Link></Typography>

            </Grid>
        </Grid>
    </form>

 )}
