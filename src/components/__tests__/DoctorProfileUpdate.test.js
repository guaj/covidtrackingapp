   import {render, screen} from "@testing-library/react"
   import DoctorProfileUpdate from "../UserProfile/DoctorProfile/DoctorProfileUpdate"

   test("Check that the name fields in the form is rendered", () => {
       render(<DoctorProfileUpdate/>);
       expect(screen.getByText("Name")).toBeInTheDocument();
   })

   test("Check that the address fields in the form is rendered", () => {
       render(<DoctorProfileUpdate/>);
       expect(screen.getByText("Address")).toBeInTheDocument();
   })