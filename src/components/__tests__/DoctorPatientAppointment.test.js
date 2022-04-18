import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import AppointmentScheduler, {AvailableTimes} from "../../Services/AppointmentService/AppointmentScheduler";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

afterEach (() =>{
    cleanup();
})

describe("Test if the patient-doctor appointment component is functional",()=> {
    it("Check if the appointment component renders", function(){
        render(<AppointmentScheduler/>);
        const textEl = screen.getByText(/select appointment/i)
        expect(textEl).toBeTruthy()
    });

    it("Check if the date picker is functional", function(){
        let value = "";
        const handleChangeMock = jest.fn()
        render(<LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
                openTo="day"
                value={value}
                onChange={handleChangeMock}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>);
        screen.getByRole('button', {
            name: /calendar view is open, go to text input view/i
        }).click()
        const textField = screen.getByRole(/textbox/i);
        fireEvent.change(textField, {target: {value: '09/09/2029'}})
        expect(handleChangeMock).toHaveBeenCalledTimes(1)
    });

    it("Check if the time picker is functional", function(){
        const availTimes = ['13:00:00', '14:00:00', '15:00:00']
        const handleClickMock = jest.fn()
        render(<AvailableTimes data={availTimes} onClick={handleClickMock}/>);
        const timeButton = screen.getByText(/14:00:00/i);
        fireEvent.click(timeButton)
        expect(handleClickMock).toHaveBeenCalledTimes(1)
    });

})