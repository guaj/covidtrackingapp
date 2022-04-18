import { render, screen } from '@testing-library/react';
import {unmountComponentAtNode} from "react-dom";
import {NotificationsItems} from "../Navbar/Notifications/NotificationsItems";
import * as React from "react";
import {retrieveNotifications} from "../Navbar/NotificationsService";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

it("Check if contact tracing notification redirects to form", () => {
    const contactTracingNotifications = [
        {content: 'Please fill the contact tracing form',
            date: 'Mon Jan 03 2022 13:05:00 GMT-0500 (heure normale de l’Est nord-américain)',
            email: 'mariajordan@gmail.com',
            type: 'contact tracing'}]
    render(<NotificationsItems data={contactTracingNotifications} />)
    screen.getByText(/Please fill the contact tracing form/i).click();
    const tracingFormText = screen.getByText("Please fill the contact tracing form");
    expect(tracingFormText).toBeTruthy()
})


test("Check if notification list retrieves a notification ", async () => {
    const email = "jason_caldwell@gmail.com"
    const result = await retrieveNotifications(email);
    expect(result).toBeTruthy();
})

