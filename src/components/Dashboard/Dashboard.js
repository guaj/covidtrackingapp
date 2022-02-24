import * as React from 'react';
import Box from '@mui/material/Box';
import './Dashboard.css'

//tab components 
import DoctorTabs from './DoctorDashboard/DoctorTabs';
import PatientTabs from './PatientDashboard/PatientTabs';
import HealthOfficialTabs from './HealthOfficialDashboard/HealthOfficialTabs';
import ImmigrationOfficialTabs from './ImmigrantOfficerDashboard/ImmigrationOfficialTabs'

import Navbar from "../Navbar/Navbar";

const mockProfiles = [
    { name: "Tony Soprano", userType: "doctor" },
    { name: "Tony Soprano", userType: "patient" },
    { name: "Tony Soprano", userType: "health official" },
    { name: "Tony Soprano", userType: "immigration official" }]

function DisplayUserTabs(props) {

    try {

        let user = JSON.parse(localStorage.getItem("id"))
        let userType = JSON.parse(localStorage.getItem("type"))
        console.log(userType)

    } catch (err) {
        // 👇️ This runs
        console.log('Error: ', err.message);
        window.location.assign("/login#redirect");
    }

    switch (props.userType) { //randomization to demonstrate conditional rendering
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

export function TabContainer(props) {

    return (
        <div className="container">

            <Box sx={{ width: '80%', margin: '5% auto' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <DisplayUserTabs userType={props.userType} />
                </Box>
            </Box>

        </div>
    )
}

export default function Dashboard() {

    return (
        <div>
            <Navbar />
            <h1>hello, {mockProfiles[0].name}</h1>
            <TabContainer userType={mockProfiles[0].userType} />
        </div>
    );
}
