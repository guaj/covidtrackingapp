import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import Navbar from "../../components/Navbar/Navbar";
import "./AppointmentScheduler.css";
import Button from "@material-ui/core/Button";
import {ButtonGroup} from "@mui/material";
import {useEffect} from "react";
import {findAvailAppointments, createAppointment} from "./AppointmentSchedulerAdapter";
import {makeStyles} from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => {});

export default function StaticDatePickerLandscape() {
    useStyles();
    const todayDate = new Date();
    const [value, setValue] = React.useState(todayDate);
    const [timeValue, setTimeValue] = React.useState(0);
    const [availTimes, setAvailTimes]= React.useState([]);
    const [availDates, setAvailDates] =  React.useState()
    const [isAvailable, setIsAvailable] = React.useState(false)

    useEffect(() => {
        (async () => {
            const dbData = await findAvailAppointments();
            setAvailDates(dbData);
        })();

    },[]);

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
        let availDay = (availDates[day]).split(";");
        if(availDay[0] !== "")
            setIsAvailable(true);
        else
            setIsAvailable(false);
        setAvailTimes(availDay);
    }

    async function getTime() {
        alert("Date: " + value.toDateString() + "\nTime: " + timeValue);
        let user = JSON.parse(localStorage.getItem("email"))
        let url = user.split("@");
        await createAppointment(timeValue, value.toDateString());
        window.location = "/profile/" + url[0];
    }

    return (
        <>
            <Navbar/>
            <div>
                <div className="row">
                    <div className="col-md-6 datePicker">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <StaticDatePicker
                                openTo="day"
                                minDate={todayDate}
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                    dayToString(newValue.getDay());
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>

                    <div className="col-md-4">
                        <div className="title">
                            <p>SELECTED TIME</p>
                        </div>
                        <div className="timePicker">
                            {isAvailable ?
                                <ButtonGroup
                                    orientation="vertical"
                                    variant="contained"
                                    size="large"
                                >
                                    {timeButtons}
                                </ButtonGroup>
                                :
                                <p>No Available time for this date</p>
                            }
                        </div>
                        <div className="button">
                            <Button
                                type="button"
                                variant="contained"
                                onClick={getTime}
                                disabled={timeValue === 0}
                            >
                                Select Appointment
                            </Button>
                        </div>
                    </div>
                </div>

            </div>

        </>

    );
}