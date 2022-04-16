import {fireEvent, render, screen} from "@testing-library/react";
import HealthOfficialTabs from "../Dashboard/HealthOfficialDashboard/HealthOfficialTabs";
import React from "react";
import EmailFormDialog from "../../Services/EmailService/EmailDialog";

describe("Test if the contact doctor form is functional",()=> {
    it("Renders the contact doctor dialog", function(){
        render(<EmailFormDialog />);
        const textContainer = screen.getByText("Contact my doctor");
        expect(textContainer).toBeTruthy();
    });

    it("Test if user can edit name text field", function(){
        render(<EmailFormDialog />);
        screen.getByText("Contact my doctor").click()
        const textField = screen.getByRole('textbox', { name: /full name/i })
        fireEvent.change(textField, {target: {value: 'test name'}})
        expect(textField.value).toBe('test name')
    });

    it("Test if user can edit the subject text field", function(){
        render(<EmailFormDialog />);
        screen.getByText("Contact my doctor").click()
        const testInput = "test subject";
        const textField = screen.getByRole('textbox', { name: /subject/i })
        fireEvent.change(textField, {target: {value: testInput}})
        expect(textField.value).toBe(testInput)
    });

    it("Test if user can edit the message text field", function(){
        render(<EmailFormDialog />);
        screen.getByText("Contact my doctor").click()
        const testInput = "test message";
        const textField = screen.getByRole('textbox', { name: /message/i })
        fireEvent.change(textField, {target: {value: testInput}})
        expect(textField.value).toBe(testInput)
    });

})
