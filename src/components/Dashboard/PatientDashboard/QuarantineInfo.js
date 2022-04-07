import * as React from 'react';
import { Grid, Button } from "@material-ui/core";
import { ListItem, Typography } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const useStyles = makeStyles((theme) => ({
    
    paper: {
        margin: theme.spacing(2, -2),
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    form: {
        color: "black",
        marginBottom: theme.spacing(2)
    },
    title:{
        marginBottom: theme.spacing(1),
        color: "rgba(1, 5, 96, 1)",
        fontWeight: "bold",
    },
    link:{
        marginTop: theme.spacing(-1),
        marginBottom: theme.spacing(2),
        backgroundColor: "rgba(1, 5, 96, 1)",
        color: '#fff',
        //for button
        boxShadow: "0px 5px 5px lightgray",
        borderRadius: "5px",
        transition: 'ease background-color 250ms',
        padding: "5px 15px",
        //end
        '&:hover': {
            backgroundColor: 'rgba(63, 81, 181, 0.5)',
            color: '#fff',
            cursor: "pointer" //for button
        }
    },
    insideText:{
        color:"#4F4F4F"
    },
    col1:{
        margin: theme.spacing(0, 2, 4, -2),
        color:"#4F4F4F"
    },
    col2:{
        margin: theme.spacing(0, -2, 4, 2),
        color:"#4F4F4F"
    },
}));

export function QuarantineInfo(){
    const classes = useStyles();
    return(
        <Grid container spacing={3} className={classes.paper}>
            <Grid item xs={12}>
                <Typography component="h1" variant="h4" className={classes.title}>Quarantine instructions</Typography>
                <Typography component="h4" color="rgba(1, 5, 96, 1)" align="center"> 
                    <i>Please see below for the list of the COVID-19 symptoms.</i>
                </Typography>
            </Grid>
            <Grid item xs={12} component={Paper} className={classes.form}>
                <Typography className={classes.form}>
                    Self-isolation is required for any of the following situation:
                </Typography>
                    <ListItem>
                        <ChevronRightIcon fonSize="small"/>
                        <Typography className={classes.insideText}>
                            You have been tested and are <u>waiting for the result</u>. Please <b>quarantine until you receive a negative result</b>.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ChevronRightIcon fonSize="small"/>
                        <Typography className={classes.insideText}>
                            You have been <b>tested positive</b> to COVID-19, whether you have symptoms or not.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ChevronRightIcon fonSize="small"/>
                        <Typography className={classes.insideText}>
                            You have been told by your local public health authority that you are required to quarantine.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ChevronRightIcon fonSize="small"/>
                        <Typography className={classes.insideText}>
                            If you <u>traveled recently</u>, please see the <a href="https://travel.gc.ca/travel-covid">governmental guidelines</a> for situational quarantine instructions.
                        </Typography>
                    </ListItem>         
            </Grid>
            <Grid item xs={12} component={Paper} className={classes.form}>
                <Typography className={classes.form}>
                    Self-isolation is not required for the following situations:
                </Typography>
                <ListItem>
                        <ChevronRightIcon fontSize="small"/>
                        <Typography className={classes.insideText}>
                            You have <u>symptoms</u> and have been <u>in contact</u> with someone <u>positive</u> to COVID-19: <b>do a screening test</b>.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ChevronRightIcon fontSize="small"/>
                        <Typography className={classes.insideText}>
                            You have <u>no symptoms</u> but have been <u>in contact</u> with someone <u>positive</u> to COVID-19: it is <b>not required</b> to quarantine neither do a screening test.
                        </Typography>
                    </ListItem>
            </Grid>
            <Grid item xs={12} component={Paper} className={classes.form}>
                <Typography className={classes.form}>
                    Quarantine directive may differ depending on your vaccination status. Please contact your <a href="https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/symptoms/provincial-territorial-resources-covid-19.html">local public health authority</a> for more detailed instructions.
                    When you are told to isolate, respect the following directions:
                </Typography>
                <ListItem>
                    <ChevronRightIcon fontSize="small"/>
                    <Typography className={classes.insideText}>
                        Go directly and <b>stay at home</b>.
                    </Typography>
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    <Typography className={classes.insideText}>
                        Oversee your symptoms and their evolution.
                    </Typography>
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    <Typography className={classes.insideText}>
                        Contact your local health care authority in case symptoms are getting worse.
                    </Typography>
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    <Typography className={classes.insideText}>
                        <b>Call 911</b> if you feel developing severe symptoms.
                    </Typography>
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    <Typography className={classes.insideText}>
                        Your partner also shall isolate for a limited time, ask your local health authority for more information.
                    </Typography>
                </ListItem>
            </Grid>
            <Grid item xs={6} component={Paper} className={classes.col1}>
                <Typography className={classes.form}><b>To do</b> during quarantine:</Typography>  
                <ListItem>
                    <ChevronRightIcon fontSize="small"/>
                    <Typography className={classes.insideText}>
                        Follow your <a href="https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/symptoms/provincial-territorial-resources-covid-19.html">local public health measures</a>.
                    </Typography>
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    <Typography className={classes.insideText}>
                        Wear ideally a <b>respirator</b> (N95 or KN95) or a medical mask. 
                    </Typography>
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    <Typography className={classes.insideText}>
                        <b>Clean and disinfect</b> frequently your home and often-touched surfaces and objects.
                    </Typography>
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    <Typography className={classes.insideText}>
                        <b>Wash</b> frequently your <b>hands</b> with soap and water.
                    </Typography>
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    <Typography className={classes.insideText}>
                       Use hand sanitizer with more than 60% alcohol.
                    </Typography>
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    <Typography className={classes.insideText}>
                       Maximize <b>physical distance</b> from other household's members.
                    </Typography>
                </ListItem>
            </Grid>
            <Grid item xs={6} component={Paper} className={classes.col2}>
                <Typography className={classes.form}>To <b>avoid</b> during quarantine:</Typography>  
                <ListItem>
                    <ChevronRightIcon fontSize="small"/>
                    <Typography className={classes.insideText}>
                        Interaction with other household's members.
                    </Typography>
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    <Typography className={classes.insideText}>
                        Sleeping in the same room than other household's members.
                    </Typography>
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    <Typography className={classes.insideText}>
                        Sharing the same bathroom than other household's members.
                    </Typography>
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    <Typography className={classes.insideText}>
                        Doing activities requiring being close to other persons.
                    </Typography>
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    <Typography className={classes.insideText}>
                        Sharing personal items (mask, toothbrushes, food or drinks...)
                    </Typography>
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    <Typography className={classes.insideText}>
                        Going to shared spaces.
                    </Typography>
                </ListItem>
            </Grid>
            <Grid item xs={12} component={Paper} className={classes.form}>
                <Typography className={classes.form}>
                    Quarantine directive may differ depending on your vaccination status. Please contact your <a href="https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/symptoms/provincial-territorial-resources-covid-19.html">local public health authority</a> for more detailed instructions.
                    When you are told to isolate, respect the following directions:
                </Typography>
                <ListItem>
                    <ChevronRightIcon fontSize="small"/>
                    <Typography className={classes.insideText}>
                        Go directly and <b>stay at home</b>.
                    </Typography>
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    <Typography className={classes.insideText}>
                        Oversee your symptoms and their evolution.
                    </Typography>
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    <Typography className={classes.insideText}>
                        Contact your local health care authority in case symptoms are getting worse.
                    </Typography>
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    <Typography className={classes.insideText}>
                        <b>Call 911</b> if you feel developing severe symptoms.
                    </Typography>
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    <Typography className={classes.insideText}>
                        Your partner also shall isolate for a limited time, ask your local health authority for more information.
                    </Typography>
                </ListItem>
            </Grid>
            <Grid item xs={12} component={Paper} className={classes.form}>
                <Typography className={classes.form}><b>DO NOT</b>:</Typography>  
                <ListItem>
                    <ChevronRightIcon fontSize="small"/>
                    <Typography className={classes.insideText}>
                        Go outside your quarantine setting (except if you need medical care).
                    </Typography>
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    <Typography className={classes.insideText}>
                        Go to work or school.
                    </Typography>
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    <Typography className={classes.insideText}>
                        Visit public areas.
                    </Typography>
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    <Typography className={classes.insideText}>
                        Visit friends or family.
                    </Typography>
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    <Typography className={classes.insideText}>
                       Invite guests at your home.
                    </Typography>
                </ListItem>
            </Grid>
            <Grid item xs={12} align="center">
                <Button className={classes.link} href='https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/prevention-risks/quarantine-isolate-home.html'>
                    Governmental quarantine instructions
                </Button>
            </Grid>
        </Grid>
    )
}