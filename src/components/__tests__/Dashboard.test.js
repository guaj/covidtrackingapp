
import { render, screen } from "@testing-library/react";
import Dashboard from '../Dashboard/Dashboard';
import  { UserTabs }  from '../Dashboard/Dashboard'

test("if patient list tab is rendered", () => {
  render(<Dashboard />);
  expect(screen.getByText("Patient List")).toBeInTheDocument();
});

test("if statistics tab is rendered", () => {
  render(<Dashboard />);
  expect(screen.getByText("Statistics")).toBeInTheDocument();
});


