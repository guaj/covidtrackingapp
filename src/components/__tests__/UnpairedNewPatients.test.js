import { render, screen , act} from "@testing-library/react";
import UnpairedPatientDoctorEmergencyListTable from '../Dashboard/AdminDashboard/UnpairedPatientDoctorEmergency'
import PatientProfileUpdate from "../../Services/ProfileUpdateSercices/PatientProfileUpdate/PatientProfileUpdate";


test("if the patient list tab is rendered when the user is a doctor", async () => {
    render(<PatientProfileUpdate/>); //TODO : develop a new test.
});

