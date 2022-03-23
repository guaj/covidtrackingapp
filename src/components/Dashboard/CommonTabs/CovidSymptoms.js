import * as React from 'react';
import { Grid } from "@material-ui/core";
import { ListItem, Typography } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const useStyles = makeStyles((theme) => ({
    
    paper: {
        margin: theme.spacing(1, -2),
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    col1:{
        margin: theme.spacing(0, 2, 4, -2),
        color:"#4F4F4F"
    },
    col2:{
        margin: theme.spacing(0, -2, 4, 2),
        color:"#4F4F4F"
    },
    form: {
        marginBottom: theme.spacing(2),
        color: "black"
    },
    title:{
        marginBottom: theme.spacing(1),
        color: "rgba(1, 5, 96, 1)",
        fontWeight: "bold",
    },
    link:{
        marginBottom: theme.spacing(4)
    }
}));
export default function QuarantineInfo(){
    const classes = useStyles();

    return(
        <Grid container spacing={3} className={classes.paper}>
            <Grid item xs={12}>
                <Typography component="h1" variant="h4" className={classes.title}>COVID-19 symptoms</Typography>
                <Typography component="h4" color="rgba(1, 5, 96, 1)" align="center"> If you experience some of the following symptoms, please perform a screening test.</Typography>
            </Grid>
            <Grid item xs={6} component={Paper} className={classes.col1}>
            <Typography className={classes.form}>If you have <b>two or more</b>:</Typography>
                    <ListItem>
                        <ChevronRightIcon fontSize="small"/>
                        Runny nose nasal congestion
                    </ListItem>
                    <ListItem>
                        <ChevronRightIcon fonSize="small"/>
                        Head ache
                    </ListItem>
                    <ListItem>
                        <ChevronRightIcon fonSize="small"/>
                        Profound fatigue
                    </ListItem>
                    <ListItem>
                        <ChevronRightIcon fonSize="small"/>
                        Muscle aches (not related to physical exertion)
                    </ListItem>
                    <ListItem>
                        <ChevronRightIcon fonSize="small"/>
                        Significant loss of appetite
                    </ListItem>
                    <ListItem>
                        <ChevronRightIcon fonSize="small"/>
                        Nausea or vomiting
                    </ListItem>
                    <ListItem>
                        <ChevronRightIcon fonSize="small"/>
                        Stomach ache
                    </ListItem>
                    <ListItem>
                        <ChevronRightIcon fonSize="small"/>
                        Diarrhea
                    </ListItem>
            </Grid>
            <Grid item xs={6} component={Paper} className={classes.col2}>
                <Typography className={classes.form}>If you have only <b>one</b> of these:</Typography>
                <ListItem>
                    <ChevronRightIcon fontSize="small"/>
                    Fever (above 38.5°C / 101°F)
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    Sudden loss of smell with no nasal congestion (with or without loss of taste)
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    Cough
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    Shortness of breath
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    Difficulty breathing
                </ListItem>
                <ListItem>
                    <ChevronRightIcon fonSize="small"/>
                    Sore throat
                </ListItem>
            </Grid>
            <Grid item xs={12} component={Paper} className={classes.link} align="center">
                <a href='https://www.quebec.ca/en/health/health-issues/a-z/2019-coronavirus/symptoms-transmission-treatment'>
                    See more about Quebec's Government prevention
                </a>
            </Grid>
        </Grid>
    )
}