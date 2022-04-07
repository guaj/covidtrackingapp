
describe("Patient can find a link to the governmental quarantine information", () => {
    it("Patient goes to the government website for more info about quarantine", () => {
        // open browser to localhost:3000
        cy.visit("http://localhost:3000/")

        // select email field and enter email : patient@gmail.com
        cy.findByRole('textbox', { name: /this.example@email.com/i }).type('patient@gmail.com')
        // select password field and enter password :  Patient1!
        cy.findByTestId('sign-up-password').type('Patient1!')
        // click on login
        cy.findByText(/login/i).click()
        cy.wait(600)
        
        // redirect to the government website
        // click on the button "quarantine information" to go to the tab for quarantine
        cy.findByText(/quarantine information/i).click({force:true})
        cy.wait(600)
        cy.findByText(/governmental quarantine instructions/i).click()
    })
})