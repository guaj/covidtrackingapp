import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chart from './Chart';




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



export default function PatientTabs() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="patient tab 1" {...a11yProps(0)} />
                <Tab label="patient tab 2" {...a11yProps(1)} />
                <Tab label="patient tab n" {...a11yProps(2)} />
            </Tabs>

            <TabPanel value={value} index={0}>
                <Chart />
            </TabPanel>
            <TabPanel value={value} index={1}>
                patient tab content 2
            </TabPanel>
            <TabPanel value={value} index={2}>
                nth patient tab content
            </TabPanel>
        </>
    )
}