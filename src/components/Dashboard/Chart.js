import "./chart.css";
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowDropDown } from "@material-ui/icons";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
      "& .MuiPaper-root": {
        borderRadius: 10,
         border: 0,
         padding : '10px 30px',
        boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.51);"
      }
    }
  }));
  
export default function Chart() { //    Random nb for the line chart about positive covid cases
    const classes = useStyles();

    const data = [
        {
            name: 'Jan 4',
            "Covid Cases": 4000,
        },
        {
            name: 'Jan 11',
            "Covid Cases": 3454,
        },
        {
            name: 'Jan 18',
            "Covid Cases": 2277,
        },
        {
            name: 'Feb 1',
            "Covid Cases": 2563,
        },
        {
            name: 'Feb 8',
            "Covid Cases": 1525,
        },
        {
            name: 'Feb 15',
            "Covid Cases": 4565,
        },
        {
            name: 'Feb 22',
            "Covid Cases": 3545,
        },
        {
            name: 'Mar 1',
            "Covid Cases": 2395,
        },
        {
            name: 'Mar 8',
            "Covid Cases": 3490,
        },
        {
            name: 'Mar 15',
            "Covid Cases": 4451,
        },
        {
            name: 'Mar 22',
            "Covid Cases": 2015,
        },
        {
            name: 'Mar 29',
            "Covid Cases": 2500,
        },

    ];

    return <div className={classes.root}>
        <div className="chart">
              <Grid container> 
              <Grid item sm={10} md={11} lg={12}>
              <Paper>
        <h3 className="chartTitle">New Cases</h3>
         <div className="toppart">
            <div className="checkboxCases">Jan 4-Mar 29  <ArrowDropDown   className="forwardBackwards" />
            </div>
                        </div>

        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis stroke="#8884d8"/>
                <Line type="monotone" dataKey="Covid Cases" stroke="#91B8CD" activeDot={{ r: 8 }}  />
                <Tooltip />
                <CartesianGrid stroke="#CED3DF" strokeDasharray="5 5" />
            </LineChart>
        </ResponsiveContainer>
        </Paper>
        </Grid> 
        </Grid> 
        </div>
    </div>;


}
//   will use API info and not random stuff anyways