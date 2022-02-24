
import { render, screen, cleanup } from "@testing-library/react";
import Dashboard from '../Dashboard/Dashboard';


test("if patient list tab is rendered", () => {
  render(<Dashboard />);
  expect(screen.getByText("Patient List")).toBeInTheDocument();
});

test("if statistics tab is rendered", () => {
  render(<Dashboard />);
  expect(screen.getByText("Statistics")).toBeInTheDocument();
});


afterEach(() => {
  cleanup();
}); 