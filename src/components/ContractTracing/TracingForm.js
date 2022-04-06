import React from "react";

import awsConfig from "../../aws-config.json";
import AWS from "aws-sdk";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@material-ui/core/Box';
import { Card, Typography } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Navbar from "../Navbar/Navbar";
import {useState, useEffect} from 'react';

import {
  addSentContactTracingFormTime,
  getAllCovidPositivePatients,getAllLocations,
  isInNotificationList, getCompletedCovidTracingForm, isInTracingList
} from '../../databaseServices';
import { hi } from "date-fns/locale";



AWS.config.update(awsConfig);
const docClient = new AWS.DynamoDB.DocumentClient()




export default function TracingformTest() {

  const [locationName, setLocationName] = useState('')
  const [locationNumber, setLocationNumber] = useState('')
  const [locationDate, setLocationDate] = useState('')
  const [locationTime, setLocationTime] = useState('')
  const [data, setData] = useState([]);
  const [email, setEmail] = useState([]);
  const [firstName, setNirstName] = useState([]);


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

  // Submit button that adds items one at a time
  const handleAdd = async (email) => {

    const params = {
      TableName: "locations2",
      Item: {
        "locationName": String(locationName),
        "locationNumber": String(locationNumber),
        "date": String(locationDate),
        "time": String(locationTime),
        "email": String(email),
        "firstName": String(firstName)

      },
    }
    console.log(email.toString(), firstName.toString())
    try {
     // await docClient.put(params).promise()
     // alert("Success! You added the following location(s)" + JSON.stringify(locationName) + " on date " + JSON.stringify(locationDate) + ".");
    await docClient.put(params).promise()
     console.log(params)
     alert("Success! You added the following location(s)" + JSON.stringify(locationName) + " on date " + JSON.stringify(locationDate) + ".");
    } catch (err) {
      alert("Please enter at least the location name and date.");
      alert(err);
    }
  }

  //click this when you want to signmal that you finished with the form
  const handleSubmitCompleteForm = async (email) => {
    var currentDate = Date().toLocaleString();
    const params = {
      TableName: "completedTracingForm",
      Item: {
        "email": String(email),
        "date": String(currentDate),
        "type": String("contact tracing"),
      },
    }
    try {
     const result = await docClient.put(params).promise()
     console.log(params)
     alert("Success! ");
    } catch (err) {
      alert("Cannot add to table``````````````-------.");
      alert(err);
    }
  };

  //useEffect(() => (async () => await getAllCovidPositivePatients(setData))(), [])
   useEffect(() => (async () => await getAllLocations(setData))(), [])
  //  useEffect(() => (async () => await isInNotificationList(localStorage.getItem("email").split("\"")[1]))().then(console.log), [])


  function profileLink(email) {
    let url = email.split("@");
    return "/profile/" + url[0];
}


function tracingForm(email) {
    let url = email.split("@");
    return "/tracing-form/" + url[0];
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
          <Typography sx={{ fontWeight: 'medium', paddingLeft: 4, paddingRight: 4, paddingTop: 3, paddingBottom: 3 }} >
            <div>
              Please enter information about public locations you have visited in the last 5 days
              before your positive test results.
            </div>
            <div >
              (Ex: schools, workplaces, large social gatherings, group homes, health
              care facilities, etc.)
            </div>
          
          </Typography>
          <CardContent>

{/* make an array to add multiple items */}

            <form className="TracingformTest" autoComplete="off" >
              {formValues.map((element, index) => (
                <div className="first-division">
                  <Typography>

                  </Typography>
                  <TextField
                    id="locationName"
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
                    id="locationNumber"
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
                    id="locationDate"
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
                    id="locationTime"
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
                <Button label="buttonAdd" name="buttonadd2" key={1} className="buttonAdd" sx={{ m: 6 }} style={{ backgroundColor: '#cbacd7', borderRadius: 15 }} 
                variant="contained" type="button" 
                onClick={()=> {
                  console.log(email)
                  handleAdd(localStorage.getItem("email").split("\"")[1]);
                  console.log(firstName)

                  }}>Add</Button>
                               {/* onClick={()=> {handleAdd(localStorage.getItem("email").split("\"")[1],localStorage.getItem("firstName"))}}>Add</Button> */}

                               {/* https://blog.logrocket.com/localstorage-javascript-complete-guide/#howdoeslocalstoragework */}
                <Button className="button submit"  
                label="buttonsubmit" name="buttonsubmit2" key={2} 
                sx={{ m: 6 }} style={{ backgroundColor: '#cbacd7', borderRadius: 15 }} variant="contained" 
                type="submit"
                
                onClick={(event) =>
                  {handleSubmitCompleteForm(localStorage.getItem("email").split("\"")[1]);
                 isInTracingList(email);
                  console.log(event.target.id)
                
                } }>Submit</Button>




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