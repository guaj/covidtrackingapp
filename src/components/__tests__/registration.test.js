import { render, screen, cleanup } from "@testing-library/react";
import SignUpPatient from "../Authentification/UserRegistration/PatientRegistration";

test('passwords should be the same', () => {
  render(<SignUpPatient />);
  const psw1 = screen.getByTestId("sign-up-psw1").setAttribute("value", "go90cxx");
  const psw2 = screen.getByTestId("sign-up-psw2").setAttribute("value", "go90cxx");
  expect(psw1).toEqual(psw2);
})

test('email should have a value', () => {
  render(<SignUpPatient />);
  const email = screen.getByTestId("sign-up-email").setAttribute("value", "an_email_address");
  expect(email).not.toBeNull();
})

test("ramq disabled when 'not-ramq-box' checked", () => {
  render(<SignUpPatient/>);
  const ramq = screen.getByTestId("ramqNumber").setAttribute("value", "false");
  expect(ramq).not.toBeEnabled();
})

test("ramq should be null when 'not-ramq-box' checked", () => {
  render(<SignUpPatient/>);
  const ramq = screen.getByTestId("ramqNumber").setAttribute("value", "false");
  expect(ramq).toBeNull();
})

afterEach(() => {
  cleanup();
}); 