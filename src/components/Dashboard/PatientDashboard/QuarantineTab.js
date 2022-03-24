import * as React from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CovidSymptoms } from "./CovidSymptoms.js";
import { QuarantineInfo } from './QuarantineInfo.js';
import { Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
}));

export default function QuarantineTab() {      
    const classes = useStyles();
        return (
            <>
                <QuarantineInfo/>
                <CovidSymptoms/>
            </>
        );
    }
   