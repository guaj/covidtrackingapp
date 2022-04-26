import {render, screen} from "@testing-library/react"
import AdminDashboard from "../Dashboard/AdminDashboard/adminDashboard"
import PatientManagement from "../Dashboard/AdminDashboard/UserManagementTabs/PatientManagement/PatientManagement"
import DoctorManagement from "../Dashboard/AdminDashboard/UserManagementTabs/DoctorManagement/DoctorManagement"
import OrganizationManagement from "../Dashboard/AdminDashboard/UserManagementTabs/OrganizationManagement/OrganizationManagement"

test("Check that the user management tab is rendered for the admin", () => {
    render(<AdminDashboard/>);
    expect(screen.getByText("User Management")).toBeInTheDocument();
})

test("Check that the admin's user management's patients subtab renders", () => {
    render(<PatientManagement/>);
    expect(screen.getByText("Patients")).toBeInTheDocument();
})

test("Check that the admin's user management's doctors subtab renders", () => {
    render(<DoctorManagement/>)
    expect(screen.getByText("Doctors")).toBeInTheDocument();
})

test("Check that the admin's user management's organizational official's subtab renders", () => {
    render(<OrganizationManagement/>);
    expect(screen.getByText("Organizational Officials")).toBeInTheDocument();
})