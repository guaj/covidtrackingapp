import * as React from 'react';
import Box from '@mui/material/Box';
import { QuarantineInfo } from './QuarantineInfo';
import { CovidSymptoms } from './CovidSymptoms';
import Navbar from "../../Navbar/Navbar";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({});
export default function QuarantineTab() {

    useStyles();
    return (
        <div>
            <Navbar />
            <div data-testid="QuarantineTab">
                <Box sx={{ width: '90%', margin: '2% auto' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                         <QuarantineInfo />
                         <CovidSymptoms/>
                    </Box>
                </Box>
            </div>
        </div>
    );
}
   