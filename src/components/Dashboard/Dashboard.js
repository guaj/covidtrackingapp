import * as React from 'react';
import Box from '@mui/material/Box';
//tab components 
import DoctorTabs from './DoctorTabs';
import PatientTabs from './PatientTabs';
import HealthOfficialTabs from './HealthOfficialTabs';
import ImmigrationOfficialTabs from './ImmigrationOfficialTabs'
import Navbar from "../Navbar/Navbar";

const mockProfiles = [
    { name: "Tony Soprano", userType: "doctor" },
    { name: "Tony Soprano", userType: "patient" },
    { name: "Tony Soprano", userType: "health official" },
    { name: "Tony Soprano", userType: "immigration official" }]

function displayUserTabs() {
    switch (mockProfiles[0].userType) { //randomization to demonstrate conditional rendering
        case "doctor":
            return <DoctorTabs />
    
        case 'patient':
            return <PatientTabs />
              
        case 'health official':
            return <HealthOfficialTabs /> 

        case 'immigration official':
            return <ImmigrationOfficialTabs />

        default: alert("invalid user type: something has gone *really* wrong")
    }
}

export default function Dashboard() {

    return (
        <div>
            <Navbar />
            <div className="container">
                <Box sx={{ width: '80%', margin: '5% auto' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        {displayUserTabs()}
                    </Box>
                </Box>

            </div>
        </div>
    );
}