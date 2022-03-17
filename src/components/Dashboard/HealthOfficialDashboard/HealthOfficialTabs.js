import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chart from '../CommonTabs/Chart';
import PatientListTable from "../CommonTabs/patientListTable";
import FaceInfo from '../CommonTabs/FaceInfo'
import Pdf from "react-to-pdf";
import {Button} from "@mui/material";
import "../DoctorDashboard/styles.css";



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

const ref = React.createRef();

export default function PatientTabs() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Statistics" {...a11yProps(0)} />
                <Tab label="Patient List" {...a11yProps(1)} />
                <Tab label="Doctor-Patient Pairing List" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <div ref={ref}>
                    <FaceInfo />
                    <Chart />
                </div>
                <div className="pdfButton">
                    <Pdf targetRef = {ref} filename="code-example.pdf">
                        {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
                    </Pdf>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div ref={ref}>
                    <PatientListTable />
                </div>
                <div className="pdfButton">
                    <Pdf targetRef = {ref} filename="code-example.pdf">
                        {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
                    </Pdf>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                {/* to be implemented in future sprints */}
            </TabPanel>
        </>
    )
}