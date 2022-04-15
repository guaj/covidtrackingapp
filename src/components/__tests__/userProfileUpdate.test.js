import {render, screen} from "@testing-library/react";
import DoctorScheduleSelector from "../Dashboard/DoctorDashboard/DoctorScheduleSelector";
import * as React from "react";

test("Check schedule selector is rendered correctly", () => {
    const email = "maria.collins@gmail.com"
    render(<DoctorScheduleSelector data={email} />);
})
