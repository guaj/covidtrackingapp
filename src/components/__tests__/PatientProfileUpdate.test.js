   import {render, screen} from "@testing-library/react"
   import PatientProfileUpdate from "../UserProfile/PatientProfile/PatientProfileUpdate"

   test("Check that the name fields in the form is rendered", () => {
       render(<PatientProfileUpdate/>);
       expect(screen.getByText("Name")).toBeInTheDocument();
   })

   test("Check that the address fields in the form is rendered", () => {
       render(<PatientProfileUpdate/>);
       expect(screen.getByText("Address")).toBeInTheDocument();
   })