import { render, screen } from "@testing-library/react";
import DoctorTabs from '../Dashboard/DoctorDashboard/DoctorTabs';
import UnpairedPatientDoctorEmergencyListTable from '../Dashboard/AdminDashboard/UnpairedPatientDoctorEmergency'


test("if the patient list tab is rendered when the user is a doctor", () => {
    render(<UnpairedPatientDoctorEmergencyListTable />);
    expect(screen.getByText("Doctor Emergency pairing")).toBeInTheDocument();
});

test("if the statistics tab is rendered when the user is a doctor", () => {
    render(<UnpairedPatientDoctorEmergencyListTable />);
    expect(screen.getByText("Statistics")).toBeInTheDocument();
});