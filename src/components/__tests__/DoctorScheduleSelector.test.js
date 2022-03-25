
import { render, screen } from "@testing-library/react";
import DoctorSchedule from "../Dashboard/DoctorDashboard/DoctorSchedule";
import DoctorScheduleSelector, {convertScheduleStringToArrayOfDates} from "../Dashboard/DoctorDashboard/DoctorScheduleSelector";

/*
test("Check schedule selector is rendered correctly", () => {
    render(<DoctorSchedule/>);
    expect(screen.getByText("Mon")).toBeInTheDocument();
})*/

test("Check if stringToArrayConverter return an array", () => {
    let testString = "Wed Jan 04 2073 11:00:00 GMT-0500 (EST), " +
        "Wed Jan 04 2073 12:00:00 GMT-0500 (EST)," +
        "Wed Jan 04 2073 13:00:00 GMT-0500 (EST)"

    const dateArray = convertScheduleStringToArrayOfDates(testString);
    // eslint-disable-next-line jest/valid-expect
    expect((Array.isArray(dateArray))).toBe(true)
})

/*test("Check if doctor Scheduler is rendered correctly", () => {
    render(<DoctorScheduleSelector/>);
    expect(screen.getByText("Mon")).toBeInTheDocument();

})*/



