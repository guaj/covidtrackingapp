import * as React from 'react';
import Box from '@mui/material/Box';
import { QuarantineInfo } from './QuarantineInfo';
import { CovidSymptoms } from './CovidSymptoms';
import Navbar from "../../Navbar/Navbar";

export default function QuarantineTab() {    
    return (
        <div>
            <Navbar />
            <div>
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
   