import React from "react";

import { useState } from "react";
import awsConfig from 'C:/Users/Maya-School/Desktop/Covid_Tracking_App/covidtrackingapp/src/aws-config.json'
import AWS from "aws-sdk";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@material-ui/core/Box';
import { Card, Typography } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Navbar from "../Navbar/Navbar";


AWS.config.update(awsConfig);
const docClient = new AWS.DynamoDB.DocumentClient()

function getUser(){
  let user = JSON.parse(localStorage.getItem("type"));
  return user;

}

function profileLink(email) {
  
  let url = email.split("@");
  return "/profile/" + url[0];
}


function getUser2(){
  let user = JSON.parse(localStorage.getItem("email"))
  return (
   
    <div>
      <h2>Welcome, {user.key}!</h2>

    </div>)
}







export default function TracingformTest() {

  const [locationName, setLocationName] = useState('')
  const [locationNumber, setLocationNumber] = useState('')
  const [locationDate, setLocationDate] = useState('')
  const [locationTime, setLocationTime] = useState('')


  const [formValues, setFormList] = useState([{ locationName: '', locationNumber: "", locationDate: "", locationTime: "" }]);

  const handleLocationName = e => {
    setLocationName(e.target.value)
  }
  const handleLocationNumber = e => {
    setLocationNumber(e.target.value)
  }
  const handleLocationDate = e => {
    setLocationDate(e.target.value)
  }
  const handleLocationTime = e => {
    setLocationTime(e.target.value)
  }
  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...formValues];
    list[index][name] = value;
    setFormList(list);
  };
  //  Remove button
  const handleElementsRemove = (index) => {
    const list = [...formValues];
    list.splice(index, 1);
    setFormList(list);
  };
  // Add Button
  const handleElementAdd = () => {
    setFormList([...formValues, { locationName: "", locationNumber: "", locationDate: "", locationTime: "" }]);
  };

  // Submit button
  const handleSubmit = async (e) => {
    e.preventDefault();

    const params = {
      TableName: "locations",
      Item: {
        "locationName": String(locationName),
        "locationNumber": String(locationNumber),
        "date": String(locationDate),
        "time": String(locationTime),
      }
    }

    // https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-table-read-write-batch.html
    try {
      await docClient.put(params).promise()
      alert("Success! You added the following location(s)" + JSON.stringify(locationName) + " on date " + JSON.stringify(locationDate) + ".");
    } catch (err) {
      alert("Please enter at least the location name and date.");
      alert(err);
    }
  }



  return (
    <>
    <Navbar/>
    <Box>
      <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >

        <Typography  sx={{ fontWeight: 'bold', color: '#724a7b', paddingLeft: 4, paddingRight: 4 }}>
          <h1 >
          Patient Contact Tracing Form 
        
          </h1>
        </Typography>
      </Grid>
      <Grid container
        direction="column"
        alignItems="center"
        justify="center"
      >

        <Card position="static" sx={{ minWidth: 275 }} style={{ backgroundColor: '#ffff' }} >
          <Typography sx={{ fontWeight: 'medium', color: '#724a7b', paddingLeft: 4, paddingRight: 4, paddingTop: 3, paddingBottom: 3 }} >
            <div>
              Please enter information about public locations you have visited in the last 5 days
              before your positive test results.
            </div>
            <div >
              (Ex: schools, workplaces, large social gatherings, group homes, health
              care facilities, etc.)
            </div>
            <div>
              This includes the name, phone number, as well as the date and time you visited the location.
            </div>
          </Typography>
          <CardContent>


            <form className="TracingformTest" autoComplete="off" onSubmit={handleSubmit}>
              {formValues.map((element, index) => (
                <div className="first-division">
                  <Typography>
                    Hi {getUser2(element.email)} 

                  </Typography>
                  <TextField
                    id="outlined-textarea"
                    label="Location Name"
                    multiline
                    type="text"
                    name="locationName"
                    value={element.handleLocationName}
                    onChange={handleLocationName}
                    sx={{ m: 2 }}
                    required
                  />
                  <TextField
                    id="outlined-textarea"
                    label="Location Phone Number"
                    multiline
                    type="text"
                    name="locationNumber"
                    value={element.handleLocationNumber}
                    onChange={handleLocationNumber}
                    sx={{ m: 2 }}
                    required
                  />

                  <TextField
                    id="outlined-textarea"
                    label="Location Date"
                    multiline
                    type="text"
                    name="locationDate"
                    value={element.handleLocationDate}
                    onChange={handleLocationDate}
                    sx={{ m: 2 }}
                    required
                  />


                  <TextField
                    id="outlined-textarea"
                    label="Location Time"
                    multiline
                    type="text"
                    name="locationTime"
                    value={element.handleLocationName}
                    onChange={handleLocationTime}
                    sx={{ m: 2 }}
                    required
                  />

                  {
                    index ?
                      <Button type="button" className="button remove" color="secondary" onClick={handleElementsRemove}>Remove</Button>
                      : null
                  }

                </div>
              ))}
              <div className="button-section">
                <Button className="buttonAdd" sx={{ m: 6 }} style={{ backgroundColor: '#cbacd7', borderRadius: 15 }} variant="contained" type="button" onClick={handleElementAdd}>Add</Button>
                <Button className="button submit" sx={{ m: 6 }} style={{ backgroundColor: '#cbacd7', borderRadius: 15 }} variant="contained" type="submit">Submit</Button>
              </div>
            </form>
          </CardContent>
        </Card>

      </Grid>
    </Box>
    </>
  );
}

// export default TracingformTest;