import { render, screen } from "@testing-library/react";
import AvailableDoctors from '../Dashboard/AdminDashboard/AvailableDoctors'
import UnpairedPatientListTable from '../Dashboard/AdminDashboard/UnpairedPatients'

test("if the available doctors list tab is rendered", () => {
    render(<AvailableDoctors />);
    expect(screen.getByText("Available doctors")).toBeInTheDocument();
})

test("if the unpaired patients list tab is rendered", () => {
    render(<UnpairedPatientListTable />);
    expect(screen.getByText("Unpaired Patients")).toBeInTheDocument();
})