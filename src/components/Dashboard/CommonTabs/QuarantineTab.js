import * as React from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CovidSymptoms from "./CovidSymptoms";
import QuarantineInfo from './QuarantineInfo';

const useStyles = makeStyles((theme) => ({

}));

export default function QuarantineTab() {      
    const classes = useStyles();
        return (
            <Grid>     

                <QuarantineInfo/>
                <CovidSymptoms/>
                
                <a href="https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/prevention-risks.html">
                Government prevention rules</a>
                <br/>
            </Grid>
        );
    }
   