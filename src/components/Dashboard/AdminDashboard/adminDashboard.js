import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PatientListTable from "../CommonTabs/patientListTable";
import DoctorListTable from '../CommonTabs/doctorListTable';
import UnpairedNewPatientListTable from './UnpairedNewPatients';
import UnpairedPatientDoctorEmergencyListTable from './UnpairedPatientDoctorEmergency';
//import PairedListTable from './Paired';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};



export default function AdminTabs() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Patient List" {...a11yProps(0)} />
                <Tab label="Doctor List" {...a11yProps(1)} />
                <Tab label="New Patients Pairing" {...a11yProps(2)} />
                <Tab label="Doctor Emergency Pairing" {...a11yProps(3)} />
            </Tabs>

            <TabPanel value={value} index={0}>
                <PatientListTable />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <DoctorListTable />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <UnpairedNewPatientListTable />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <UnpairedPatientDoctorEmergencyListTable />
            </TabPanel>
        </>
    )
}