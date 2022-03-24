import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chart from '../CommonTabs/Chart';
import QuarantineTab from './QuarantineTab';
import { makeStyles } from "@material-ui/core/styles";

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

const useStyles = makeStyles(theme => ({
    tab: { 
        '& .MuiBox-root': {
          padding: '5px',
          },
        },
    }));

export default function PatientTabs() {

    const [value, setValue] = React.useState(0);
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Tabs value={value} onChange={handleChange} aria-label="PatientTabs">
                <Tab label="Covid Information" {...a11yProps(0)} />
                <Tab label="Covid-19 Prevention" {...a11yProps(1)} />
            </Tabs>

            <TabPanel value={value} index={0}>
                <Chart />
            </TabPanel>
            <TabPanel value={value} index={1} class={{ root: classes.tab }}>
                <QuarantineTab />
            </TabPanel>
        </>
    )
}