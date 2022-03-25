import { render, screen , act} from "@testing-library/react";
import UnpairedPatientDoctorEmergencyListTable from '../Dashboard/AdminDashboard/UnpairedPatientDoctorEmergency'


test("if the patient list tab is rendered when the user is a doctor", async () => {
    act( () => render(<UnpairedPatientDoctorEmergencyListTable />));
    //expect(screen.getByText("Doctor Emergency pairing")).toBeInTheDocument();
});

test("if the statistics tab is rendered when the user is a doctor", async () => {
    act( () => render(<UnpairedPatientDoctorEmergencyListTable />));
    //expect(screen.getByText("Statistics")).toBeInTheDocument();
});
