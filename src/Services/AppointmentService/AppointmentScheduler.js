import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import Navbar from "../../components/Navbar/Navbar";
import "./AppointmentScheduler.css";
import Button from "@material-ui/core/Button";
import mockDoctorAvailabilities from "./DoctorScheduleMock.json";
import {ButtonGroup} from "@mui/material";



export default function StaticDatePickerLandscape() {
    const todayDate = new Date();
    const [value, setValue] = React.useState(todayDate);
    const [dayValue, setDayValue] = React.useState(dayToString(value.getDay()))
    const [timeValue, setTimeValue] = React.useState(0);
    const [availTimes, setAvailTimes]= React.useState(["no results"]);


    let timeButtons = [
        availTimes.map((item,i) =>
            <Button
                key={i}
                size="large"
                value={item}
                onClick={setTime}
            >{item}</Button>
        )
    ];

    function setTime(e) {
        setTimeValue(e.currentTarget.value);
    }


    async function dayToString(day) {
        if(day === 0) {
            setAvailTimes((mockDoctorAvailabilities[0].sun).split(";"));
            return "sun"
        }
        else if(day === 1) {
            setAvailTimes((mockDoctorAvailabilities[0].mon).split(";"));
            return "mon"
        }
        else if(day === 2) {
            setAvailTimes((mockDoctorAvailabilities[0].tue).split(";"));
            return "tue"
        }
        else if(day === 3) {
            setAvailTimes((mockDoctorAvailabilities[0].wed).split(";"));
            return "wed"
        }
        else if(day === 4) {
            setAvailTimes((mockDoctorAvailabilities[0].thu).split(";"));
            return "thu"
        }
        else if(day === 5) {
            setAvailTimes((mockDoctorAvailabilities[0].fri).split(";"));
            return "fri"
        }
        else if(day === 6) {
            setAvailTimes((mockDoctorAvailabilities[0].sat).split(";"));
            return "sat"
        }

    }

    function getTime() {
        alert("Date: "+value.toDateString() +"\nTime: "+timeValue);
        let user = JSON.parse(localStorage.getItem("email"))
        let url = user.split("@");
        window.location = "/profile/" + url[0];
    }

    return (
        <div>
            <Navbar/>
            <div className="row">

                <div className="col-md-8 datePicker">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <StaticDatePicker
                            orientation="landscape"
                            openTo="day"
                            minDate={todayDate}
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                                setDayValue(dayToString(newValue.getDay()))
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>

                <div className="col-md-4">
                    <div className="title">
                        <p>SELECT TIME</p>
                    </div>
                    <div className="timePicker">
                        <ButtonGroup
                            orientation="vertical"
                            variant="contained"
                            size="large"
                        >
                            {timeButtons}
                        </ButtonGroup>
                    </div>

                </div>
            </div>
            <div className="button">
                <Button
                    type="button"
                    variant="contained"
                    onClick={getTime}
                >
                    Select Appointment
                </Button>
            </div>
        </div>

    );
}