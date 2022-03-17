import { render, screen } from "@testing-library/react";
// import DoctorTabs from '../Dashboard/DoctorDashboard/DoctorTabs';
import PatientTabs from '../Dashboard/PatientDashboard/PatientTabs';
import HealthOfficialTabs from '../Dashboard/HealthOfficialDashboard/HealthOfficialTabs'
import ImmigrationOfficialTabs from '../Dashboard/ImmigrantOfficerDashboard/ImmigrationOfficialTabs'

/*test("if the patient list tab is rendered when the user is a doctor", () => {
    render(<DoctorTabs />);
    expect(screen.getByText("Patient List")).toBeInTheDocument();
});

test("if the statistics tab is rendered when the user is a doctor", () => {
    render(<DoctorTabs />);
    expect(screen.getByText("Statistics")).toBeInTheDocument();
});

test("if the patient Emergency list tab is rendered when the user is a doctor", () => {
    render(<DoctorTabs />);
    expect(screen.getByText("Patient Emergency List")).toBeInTheDocument();
});

test("if the Doctor-Patient Pairing List is rendered when the user is a doctor", () => {
    render(<DoctorTabs />);
    expect(screen.getByText("Doctor-Patient Pairing List")).toBeInTheDocument();
});*/

test("if the covid information tab is rendered when the user is a patient", () => {
    render(<PatientTabs />);
    expect(screen.getByText("Covid Information")).toBeInTheDocument();
});

test("if the patient list tab is rendered when the user is a health official", () => {
    render(<HealthOfficialTabs />);
    expect(screen.getByText("Patient List")).toBeInTheDocument();
});

test("if the statistics tab is rendered when the user is a health official", () => {
    render(<HealthOfficialTabs />);
    expect(screen.getByText("Statistics")).toBeInTheDocument();
});

test("if the Doctor-Patient Pairing List is rendered when the user is a health official", () => {
    render(<HealthOfficialTabs />);
    expect(screen.getByText("Doctor-Patient Pairing List")).toBeInTheDocument();
});

test("if the patient list tab is rendered when the user is am immigration official", () => {
    render(<ImmigrationOfficialTabs />);
    expect(screen.getByText("Patient List")).toBeInTheDocument();
});

test("if the statistics tab is rendered when the user is an immigration official", () => {
    render(<ImmigrationOfficialTabs />);
    expect(screen.getByText("Statistics")).toBeInTheDocument();
});

test("if the Doctor-Patient Pairing List is rendered when the user is an immigration official", () => {
    render(<ImmigrationOfficialTabs />);
    expect(screen.getByText("Doctor-Patient Pairing List")).toBeInTheDocument();
});