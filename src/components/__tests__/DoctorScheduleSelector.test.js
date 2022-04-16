import { render, screen } from "@testing-library/react";
import DoctorScheduleSelector, {convertScheduleStringToArrayOfDates} from "../Dashboard/DoctorDashboard/DoctorScheduleSelector";
import * as React from "react";
import {unmountComponentAtNode} from "react-dom";
import {addDoctorSchedule, retrieveDoctorSchedule} from "../Dashboard/DoctorDashboard/DoctorScheduleDynamoDBAdapter";
import ScheduleSelector from "react-schedule-selector";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


test("Check schedule selector is rendered correctly", () => {
    const email = "maria.collins@gmail.com"
    render(<DoctorScheduleSelector data={email} />);
    const content = screen.getByRole('progressbar');
    expect(content).toBeTruthy()
})

test("Check if stringToArrayConverter return an array", () => {
    let testString = "Wed Jan 04 2073 11:00:00 GMT-0500 (EST), " +
        "Wed Jan 04 2073 12:00:00 GMT-0500 (EST)," +
        "Wed Jan 04 2073 13:00:00 GMT-0500 (EST)"

    const dateArray = convertScheduleStringToArrayOfDates(testString);
    // eslint-disable-next-line jest/valid-expect
    expect((Array.isArray(dateArray))).toBe(true)
})

test("Check if doctor Scheduler can retrieve a doctorSchedule", async () => {
    const email = "janeSmith@gmail.com"
    const result = await retrieveDoctorSchedule('DoctorSchedule', email);
    expect(result).toBeTruthy();
})


test( "Check if doctorSchedulor can add a doctorSchedule", async() => {
    const email = "janeSmith@gmail.com"
    const scheduleData = "Tue Jan 03 2073 13:00:00 GMT-0500 (Eastern Standard Time)";
    const result = await addDoctorSchedule('DoctorSchedule' , scheduleData);
    expect(result).toBeTruthy();
})

test( "Check if my view render correctly", () => {

    const selection = " ";
    render(<ScheduleSelector
        selection={selection}
        dateFormat={"ddd"}
    />)
    const text = screen.getByText("9am");
    expect(text).toBeTruthy()
})



