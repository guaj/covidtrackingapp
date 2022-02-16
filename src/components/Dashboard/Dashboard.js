import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavbarDashboardPro from '../Navbar/NavbarDashboardPro';
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

export default function Dashboard() {
    const [value, setValue] = React.useState(0);
    const mockProfiles = [
        { name: "Tony Soprano", userType: "doctor" },
        { name: "Tony Soprano", userType: "patient" },
        { name: "Tony Soprano", userType: "healthOfficial" },
        { name: "Tony Soprano", userType: "immigrationOfficial" }]

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    function displayUserTabs() {
        switch (mockProfiles[Math.floor(Math.random(4))].userType) { //randomization to demonstrate conditional rendering
            case "doctor":
                return (
                    <>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Statistics" {...a11yProps(0)} />
                            <Tab label="Patient List" {...a11yProps(1)} />
                            <Tab label="doctor tab n" {...a11yProps(2)} />
                        </Tabs>

                        <TabPanel value={value} index={0}>
                            <Chart />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            patient list content
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            nth doctor tab content
                        </TabPanel>
                    </>
                )

            case 'patient':
                return (
                    <>
                        <Tab label="patient tab 1" {...a11yProps(0)} />
                        <Tab label="patient tab 2" {...a11yProps(1)} />
                        <Tab label="patient tab n" {...a11yProps(2)} />

                        <TabPanel value={value} index={0}>
                            <Chart />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            patient tab content 2
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            nth doctor tab content
                        </TabPanel>
                    </>
                )

            case 'healthOfficial':
                return (
                    <>
                        <Tab label="ho tab 1" {...a11yProps(0)} />
                        <Tab label="ho tab 2" {...a11yProps(1)} />
                        <Tab label="ho tab n" {...a11yProps(2)} />

                        <TabPanel value={value} index={0}>
                            <Chart />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            patient list content
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            nth doctor tab content
                        </TabPanel>
                    </>
                )

            case 'immigrationOfficial':
                return (
                    <>
                        <Tab label="io tab 1" {...a11yProps(0)} />
                        <Tab label="io tab 2" {...a11yProps(1)} />
                        <Tab label="io tab n" {...a11yProps(2)} />

                        <TabPanel value={value} index={0}>
                            <Chart />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            patient list content
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            nth doctor tab content
                        </TabPanel>
                    </>
                )

            default: alert("invalid user type: something has gone *really* wrong")

        }
    }


    return (

        <div>
            <NavbarDashboardPro />
            <div className="container">
                <Box sx={{ width: '80%' , margin: '5% auto'}}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        {displayUserTabs()}
                    </Box>
                </Box>

            </div>
        </div>
    );
}