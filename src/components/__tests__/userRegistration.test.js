import {render,screen,cleanup} from "@testing-library/react";
import SignUpPatient from "../Authentification/UserRegistration/PatientRegistration";
import { DisplayProfilePage } from "../UserProfile/PatientProfile/PatientProfilePage";

test('password should be the same', () =>{
    render(<SignUpPatient />);
    const pass1 = screen.getByTestId("sign-up-psw1").setAttribute("value","go90cxx");
    const pass2 = screen.getByTestId("sign-up-psw2").setAttribute("value","go90cxx");
    expect(pass1).toEqual(pass2);
})

test('email should have a value', () =>{
    render(<SignUpPatient />);
    const email = screen.getByTestId("sign-up-email").setAttribute("value","an_email_address");
    expect(email).not.toBeNull();
})

afterEach (() =>{
    cleanup();
});

