import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import './profile.css'


  
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
              Profile
            </Typography>
              <Grid container className={classes.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Grid>
              <Grid container className={classes.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Grid>
          </div>
        </Grid>
      </Grid>
    );
  }
  