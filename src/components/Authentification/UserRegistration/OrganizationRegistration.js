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
import AWS from 'aws-sdk';
import awsConfig from '../../../aws-config.json';
import {setLocalStorage} from "../UserLogin/UserLogin";

  
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


//to connect to DynamoDB
AWS.config.update(awsConfig);
const docClient = new AWS.DynamoDB.DocumentClient();

export default function SignUpOrg() {
    const classes = useStyles();
    const [orgId,setOrgId] =useState('')
    const [empId,setEmpId] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState("")
  	const [passwordAgain, setPasswordAgain] = useState("")
    const [valid, setValid] = useState(false)

    const handleOrgIdChange = e =>{
        setOrgId(e.target.value);
    };

    const handleEmpIdChange = e =>{
        setEmpId(e.target.value);
    };
    const handleEmailChange = e =>{
        setEmail(e.target.value);
    };

  var orgType = localStorage.getItem("type");
  //var orgEmail;


    const handleSubmit = async(e) =>{
        e.preventDefault();
        const params = {
            TableName: "organizations",
            Item: {
                "type": String(orgType),
                "orgId": String(orgId),
                "employeeId": Number(empId),
                "email": String(email),
                "password": String(password)
            }
        }
            await docClient.put(params,function(error, data){
                if(error){
                    console.log(error)
                }
                //TODO: check the db that the email(key) is not already there then can't register an account
                else
                    alert("The account is created!");
                    setLocalStorage(email,orgType)
            })
    }
    return (
      <Grid container component="main">
        <CssBaseline />
        <Grid item xs={false} sm={false} md={4} className={classes.image} />
        <Grid item xs={12} sm={12} md={8} component={Paper} elevation={6} square>
          <div className={classes.paper}> 
            <Typography component="h1" variant="h4" className={classes.title} >
              Register as an Organization
            </Typography>
            <form className={classes.form} id='form' onSubmit={handleSubmit}>
              <TextField
                type="id"
                margin="normal"
                required
                fullWidth
                id="organizationId"
                label="000000000"
                name="organizationId"
                helperText="Organization Branch ID"
                onChange={handleOrgIdChange}
                value={orgId}
                data-testid="orgId"
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
                  onChange={handleEmpIdChange}
                  value={empId}
                  data-testid="empId"
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
                  onChange={handleEmailChange}
                  value={email}
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
                data-testid="sign-up-psw1"
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
                data-testid="sign-up-psw2"
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
                    <Link href="/" variant="body2">
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
  