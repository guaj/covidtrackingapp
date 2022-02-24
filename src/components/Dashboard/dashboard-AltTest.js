
import { render, screen, cleanup } from "@testing-library/react";
import TabContainer from './Dashboard';

const mockProfiles = [
    { name: "Tony Soprano", userType: "doctor" },
    { name: "Tony Soprano", userType: "patient" },
    { name: "Tony Soprano", userType: "health official" },
    { name: "Tony Soprano", userType: "immigration official" }]

test("if patient list tab is rendered when a doctor is the user", () => {
  render(<TabContainer userType={mockProfiles[0].userType} />);
  expect(screen.getByText("Patient List")).toBeInTheDocument();
});

test("if statistics tab is rendered when a doctor is the user", () => {
    render(<TabContainer userType={mockProfiles[0].userType} />);
  expect(screen.getByText("Statistics")).toBeInTheDocument();
});

test("if statistics tab is rendered when a health official is the user", () => {
    render(<TabContainer userType={mockProfiles[1].userType} />);
  expect(screen.getByText("Covid Information")).toBeInTheDocument();
});


afterEach(() => {
  cleanup();
}); 