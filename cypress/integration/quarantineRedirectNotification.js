import "@testing-library/cypress/add-commands";

describe("Patient can go to the quarantine page after clicking a notification", () => {
    it("Patient clicks on the notification that redirects to the quarantine page", () => {
        // open browser to localhost:3000
        cy.visit("http://localhost:3000/")

        // select email field and enter email : patient@gmail.com
        cy.findByRole('textbox', { name: /this.example@email.com/i }).type('patient@gmail.com')
        // select password field and enter password :  Patient1!
        cy.findByTestId('sign-up-password').type('Patient1!')
        // click on login
        cy.findByText(/login/i).click()
        cy.wait(600)
        
        // redirect to the page for quarantine information
        // click on the notification icon
        cy.findByRole('button', {  name: /account settings/i}).click()
        // click on the notification received after being tested positive
        cy.findByText( /you have been tested positive, please follow this links for informations about quarantine/i ).click()
        cy.wait(600)
        // verifies the url to be the quarantine page
        cy.url().should('eq', 'http://localhost:3000/quarantine') // => true
    })
}) 