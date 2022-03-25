import {render, screen} from "@testing-library/react";
import UserProfileFacade from "../UserProfile/UserProfileFacade";
import {act} from "react-dom/test-utils";

test("flag button rendering for doctor on patient profile page", async () => {
    act( () => render(<UserProfileFacade/>)); //TODO : develop a new test.
});
