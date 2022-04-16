import {render, screen} from "@testing-library/react";
import DoctorTabs from "../Dashboard/DoctorDashboard/DoctorTabs";

test("if the patient list tab is rendered when the user is a doctor", () => {
    render(<DoctorTabs />);
    expect(screen.getByText("Patient List")).toBeInTheDocument();
});

