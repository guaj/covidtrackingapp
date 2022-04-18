

describe("Patient can find a link to the Quebec prevention website", () => {
    it("Patient goes to the Quebec's website for more info about Covid symptoms", () => {
        // open browser to localhost:3000
        cy.visit("http://localhost:3000/")

        // select email field and enter email : patient@gmail.com
        cy.findByRole('textbox', { name: /this.example@email.com/i }).type('mariajordan@gmail.com')
        // select password field and enter password :  Patient1!
        cy.findByTestId('sign-up-password').type('ThePassword1!')
        // click on login
        cy.findByText(/login/i).click()
        cy.wait(600)
        
        // redirect to the quebec gov website for covid info
        // click on the button "quarantine information" to go to the tab for quarantine
        cy.findByText(/quarantine information/i).click({force:true})
        cy.wait(600)
        // click to the button quebec prevention to go to the website
        cy.findByText(/see more about Quebec's Government prevention/i).click()
    })
})