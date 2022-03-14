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
    const [value, setValue] = React.useState(new Date());
    const [dayValue, setDayValue] = React.useState(dayToString(value.getDay()))
    const [timeValue, setTimeValue] = React.useState(0);

    const todayDate = new Date();

    const availTimes = (mockDoctorAvailabilities[0].mon).split(";");


    let timeButtons = [
        availTimes.map((item,i) =>
            <Button
                key={i}
                value={item}
                onClick={setTime}
            >{item}</Button>
        )
    ];

    function setTime(e) {
        setTimeValue(e.currentTarget.value);
    }


    function dayToString(day) {
        if(day === 0)
            return "sun"
        else if(day === 1)
            return "mon"
        else if(day === 2)
            return "tue"
        else if(day === 3)
            return "wed"
        else if(day === 4)
            return "thu"
        else if(day === 5)
            return "fri"
        else if(day === 6)
            return "sat"
    }

    function getTime() {
        alert("Date: "+value+"\nTime: "+timeValue);
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
                    <ButtonGroup
                        orientation="vertical"
                        variant="contained"
                        size="large"
                        >
                        {timeButtons}
                    </ButtonGroup>
                </div>
            </div>
            <div className="button">
                <Button
                    type="button"
                    variant="contained"
                    onClick={getTime}
                >
                    Select Date
                </Button>
            </div>
        </div>

    );
}