import {render, screen} from "@testing-library/react";
import QuarantineTab from "../Dashboard/PatientDashboard/QuarantineTab";
import {QuarantineInfo} from "../Dashboard/PatientDashboard/QuarantineInfo";
import * as React from "react";



test("Check quaratine info tab renders", () => {
    render(<QuarantineTab/>);
    expect(screen.getByTestId("QuarantineTab")).toBeInTheDocument();
})

test("Check quaratine info page renders", () => {
    render(<QuarantineInfo/>);
    expect(screen.getByText("Quarantine instructions")).toBeInTheDocument();
})