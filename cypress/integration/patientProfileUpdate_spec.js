import "@testing-library/cypress/add-commands";

describe("Patient can update his/her contact information", () => {
    it("Patient modify phone number", () => {
        // open browser to localhost:3000
        cy.visit("http://localhost:3000/")

        // select email field and enter email : patient@gmail.com
        cy.findByRole('textbox', { name: /this.example@email.com/i }).type('patient@gmail.com')
        // select password field and enter password :  Patient1!
        cy.findByTestId('sign-up-password').type('Patient1!')
        // click on login
        cy.findByText(/login/i).click()

        // click on profile icon
        cy.findByRole('button', { name: /account of current user/i }).click() 
        // click on profile link
        cy.findByRole('menuitem', { name: /profile/i }).click() 


        // click on profile icon
        cy.findByRole('button', { name: /account of current user/i }).click() 
        // click on profile link
        cy.findByRole('menuitem', { name: /logout/i }).click()
    })
})