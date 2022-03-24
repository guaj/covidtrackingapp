import * as React from 'react';
import { CovidSymptoms } from "./CovidSymptoms.js";
import { QuarantineInfo } from './QuarantineInfo.js';

export default function QuarantineTab() {      
        return (
            <>
                <QuarantineInfo/>
                <CovidSymptoms/>
            </>
        );
    }
   