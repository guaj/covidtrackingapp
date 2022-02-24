

import { render, screen } from "@testing-library/react";
import Dashboard from '../Dashboard/Dashboard';

test("if the patient list tab is rendered when the user is a doctor", () => {
  render(<Dashboard />);
  expect(screen.getByText("Patient List")).toBeInTheDocument();
});

test("if the statistics tab is rendered when the user is a doctor", () => {
  render(<Dashboard />);
  expect(screen.getByText("Statistics")).toBeInTheDocument();
});

test("if the patient Emergency list tab is rendered when the user is a doctor", () => {
  render(<Dashboard />);
  expect(screen.getByText("Patient Emergency List")).toBeInTheDocument();
});

test("if the Doctor-Patient Pairing List is rendered when the user is a doctor", () => {
  render(<Dashboard />);
  expect(screen.getByText("Doctor-Patient Pairing List")).toBeInTheDocument();
});


