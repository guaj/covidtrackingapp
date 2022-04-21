import { render, screen } from "@testing-library/react";
import UnpairedNewPatientListTable from "../Dashboard/AdminDashboard/UnpairedNewPatients";

test (" if the model with doctors list tab is rendered", () => {
    render(<UnpairedNewPatientListTable/>)
    expect(screen.getByText("Patients")).toBeInTheDocument();
});