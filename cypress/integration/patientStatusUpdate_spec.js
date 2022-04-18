
/** TODO: modify this test! **/
describe("Patient can update his/her symptom status", () => {
    it("Patient modifies his/her health status", () => {
        // open browser to localhost:3000
        cy.visit("http://localhost:3000/")

        // select email field and enter email : patient@gmail.com
        cy.findByRole('textbox', { name: /this.example@email.com/i }).type('mariajordan@gmail.com')
        // select password field and enter password :  Patient1!
        cy.findByTestId('sign-up-password').type('ThePassword1!')
        // click on login
        cy.findByText(/login/i).click()
        cy.wait(600)       

        // click on profile icon
        cy.findByRole('button', { name: /account of current user/i }).click() 
        // click on profile link
        cy.findByRole('menuitem', { name: /profile/i }).click() 
        cy.wait(600)

        cy.findByText(/edit health status/i).click().then(($element) => {
            // checks whether the status is positive or negative 
            // with a verification on the profile page (positive or negative is displayed) after the edition
            if ($element.text().includes("Negative")) {
                // verifies the button positive since the patient is negative
                // click on button to go to symptom edition
                cy.findByText(/edit symptoms/i).click()
                cy.wait(600)
                cy.findByText(/edit health status/i).click()
                // check the button "positive"
                cy.findByRole('radio', {name: /positive/i}).click()
                // save the modifications by clicking on the button update profile
                cy.findByText(/update profile/i).click()        
                cy.wait(600)
                cy.findByText(/edit health status/i).click()
                // verifies that the patient profile shows the new positive status
                cy.findByText(/positive/i)
            } else {
                // verifies the button negative since the patient is positive
                // click on button to go to symptom edition
                cy.findByText(/edit symptoms/i).click()
                cy.wait(600)
                cy.findByText(/edit health status/i).click()
                // check the button "negative"
                cy.findByRole('radio', {name: /negative/i}).click()
                // save the modifications by clicking on the button update profile
                cy.findByText(/edit symptoms/i).click()
                cy.wait(600)
            }
          })

        // click on profile icon
        cy.findByRole('button', { name: /account of current user/i }).click() 
        // click on logout
        cy.findByRole('menuitem', { name: /logout/i }).click()
    })
})