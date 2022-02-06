import "./faceInfo.css"
import { TrendingDown , TrendingUp  } from "@material-ui/icons";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiPaper-root": {
      borderRadius: 10,
       border: 0,
       padding : '10px 30px',
      boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.51);"
    }
  }
}));



export default function FeaturedInfo() {
    const classes = useStyles();

  return <div className={classes.root}>
      <Grid container> 
        <Grid item xs={12} sm={9} md={6} lg={6}>
          <Paper> <div className="faceItem">
          <span className="faceTitle">Asymptomatic</span>
          <div className="faceStatusContainer">
              <span className="faceStatus">200 patients</span>
              <span className="faceStatusRate">
                  +0.7%<TrendingUp  className="faceArrow" />
              </span>
          </div>
          </div></Paper>
        </Grid> 
        <Grid item xs={12} sm={9} md={6} lg={6}>
          <Paper><div className="faceItem">
          <span className="faceTitle">Symptomatic</span>
          <div className="faceStatusContainer">
              <span className="faceStatus">80 patients</span>
              <span className="faceStatusRate">
                  -1.7%<TrendingDown  className="faceArrow negative" />
              </span>
          </div>
      </div></Paper>
        </Grid> 
    
    </Grid>
   
  </div>;

}
