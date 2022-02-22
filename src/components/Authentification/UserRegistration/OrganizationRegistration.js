import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import geometricImage from "../../../images/geometric_gradient.jpg";
import PasswordChecklist from "react-password-checklist";
import { useState } from "react";
import PasswordStrengthBar from 'react-password-strength-bar';
  
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
      align: "center",
    }
  }));
  
  
  
export default function SignUpOrg() {
    const classes = useStyles();
    const [password, setPassword] = useState("")
  	const [passwordAgain, setPasswordAgain] = useState("")
    const [valid, setValid] = useState(false)

    return (
      <Grid container component="main">
        <CssBaseline />
        <Grid item xs={false} sm={false} md={4} className={classes.image} />
        <Grid item xs={12} sm={12} md={8} component={Paper} elevation={6} square>
          <div className={classes.paper}> 
            <Typography component="h1" variant="h4" className={classes.title} >
              Register as an Organization
            </Typography>
            <form className={classes.form} id='form' onSubmit={"#"}>
              <TextField
                type="id"
                margin="normal"
                required
                fullWidth
                id="organizationId"
                label="000000000"
                name="organizationId"
                helperText="Organization Branch ID"
                />
              <TextField
                  type="id"
                  margin="normal"
                  required
                  fullWidth
                  id="employeeid"
                  label="000000000"
                  name="EmployeeId"
                  helperText="Employee ID"
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
                type="password"
                margin="normal"
                required
                fullWidth
                name="password"
                label="* * * *"
                id="password"
                helperText="Password"
                autoComplete="current-password"
                onChange={e => setPassword(e.target.value)}
              />
              <TextField
                type="password"
                margin="normal"
                required
                fullWidth
                name="password"
                label="* * * *"
                id="password"
                helperText="Confirm your password"
                onChange={e => setPasswordAgain(e.target.value)}
              />
              <PasswordStrengthBar 
                            password={password}
                        />
                        <PasswordChecklist
                            rules={["minLength","specialChar","number","capital","match"]}
                            minLength={8}
                            value={password}
                            valueAgain={passwordAgain}
                            onChange={(isValid) => {setValid(isValid)}
                            }
                        />
              <Grid container className={classes.checkboxes}>
                  <Grid item xs>
                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember my password"
                    />  
                  </Grid>
                  <Grid item xs={4}>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                disabled={!valid}
              >
                Register
              </Button>
              <Grid container>
                
                <Grid item>
                <Typography variant="body2">Already registered? <t/>
                    <Link href="/professionals" variant="body2">
                    {"Sign In"}
                    </Link> 
                </Typography>   
                </Grid>
              </Grid>
            </form>
            </div>
        </Grid>
      </Grid>
    );
  }
  