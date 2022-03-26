import React from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@material-ui/core/Box';
import { Card, Typography } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';

class TracingForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
       formValues: [{ name: "", locationNumb : "" }]
     };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({ formValues });
  }

  addFormFields() {
    this.setState(({
      formValues: [...this.state.formValues, { name: "", locationNumb: "" }]
    }))
  }

  removeFormFields(i) {
    let formValues = this.state.formValues;
    formValues.splice(i, 1);
    this.setState({ formValues });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("Success! You have entered: " + JSON.stringify(this.state.formValues));
  }

  render() {

    return (
        <Box   pt={4}>
             <Grid container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    >
            <Typography sx={{ fontWeight: 'bold', color:'#724a7b', paddingLeft: 4, paddingRight: 4 }}>
                   <h1 > 
                   Patient Contract Tracing Form
                       </h1>
                </Typography>
            </Grid>
            <Grid container
                    direction="column"
                    alignItems="center"
                    justify="center"
                    >
            <Card  position="static" sx={{minWidth:275, maxWidth:750 }} style={{backgroundColor:'#ffff'}} >
            <Typography sx={{ fontWeight: 'medium', color:'#724a7b', paddingLeft: 4, paddingRight: 4 , paddingTop:3, paddingBottom:3}} >
                <div>
                Please enter public locations you have visited in the last 5 days
                before your positive test results.
                </div>
                <div >
                (Ex: schools, workplaces, malls, large social gatherings, group homes, health
                care facilities, etc.)
                </div>
                </Typography> 
            <CardContent>
                <form  onSubmit={this.handleSubmit}>
                {this.state.formValues.map((element, index) => (
                    <div className="form-inline" key={index}>
                    <TextField
                        id="outlined-textarea"
                        label="Location Name"
                        multiline
                        type="text" name="name" value={element.name || ""} onChange={e => this.handleChange(index, e)}
                        sx={{  m:2}} 
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Location Number"
                        multiline
                        type="text" name="locationNumb" value={element.locationNumb || ""} onChange={e => this.handleChange(index, e)} 
                        sx={{  m:2}} 
                    />
                    {
                        index ? 
                        <Button type="button"  className="button remove" color="secondary"  onClick={() => this.removeFormFields(index)}>Remove</Button> 
                    : null
                    }
            </div>
          ))}
          <div className="button-section">
              <Button className="buttonAdd"  sx={{  m: 6 }} style={{backgroundColor:'#cbacd7' , borderRadius: 15}} variant="contained"  type="button" onClick={() => this.addFormFields()}>Add</Button>
              <Button className="button submit" sx={{ m: 6 }}  style={{backgroundColor:'#cbacd7' , borderRadius: 15 }} variant="contained" type="submit">Submit</Button>
          </div>
      </form>
      </CardContent>
       </Card>   
       </Grid>

      </Box>
    );
  }
}
export default TracingForm;