import {render, screen} from "@testing-library/react";
import UserProfileFacade from "../UserProfile/UserProfileFacade";
import {act} from "react-dom/test-utils";
import PatientProfileUpdate from "../../Services/ProfileUpdateSercices/PatientProfileUpdate/PatientProfileUpdate";

test("flag button rendering for doctor on patient profile page",  () => {
    render(<PatientProfileUpdate/>); //TODO : develop a new test.
});
