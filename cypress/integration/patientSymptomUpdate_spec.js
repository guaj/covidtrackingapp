import "@testing-library/cypress/add-commands";

describe("Patient can update his/her symptom status", () => {
    it("Patient modifies one symptom: 'chills'", () => {
        // open browser to localhost:3000
        cy.visit("http://localhost:3000/")

        // select email field and enter email : patient@gmail.com
        cy.findByRole('textbox', { name: /this.example@email.com/i }).type('patient@gmail.com')
        // select password field and enter password :  Patient1!
        cy.findByTestId('sign-up-password').type('Patient1!')
        // click on login
        cy.findByText(/login/i).click()
        cy.wait(600)       

        // click on profile icon
        cy.findByRole('button', { name: /account of current user/i }).click() 
        // click on profile link
        cy.findByRole('menuitem', { name: /profile/i }).click() 
        cy.wait(600)

        cy.findByTestId('symptoms').then(($element) => {
            // checks whether the symptom exist or nor and add or remove it 
            // with a verification on the profile page (present or not present as symptom) after the edition
            if ($element.text().includes("Chills")) {
                // removes the symptom since it already exist and verifies that it has been removed
                // click on button to go to symptom edition
                cy.findByText(/edit symptoms/i).click()
                cy.wait(600)
                // uncheck the symptom "chills"
                cy.findByRole('checkbox', {name: /chills/i}).click()
                // save the modifications by clicking on the button update profile
                cy.findByText(/update profile/i).click()        
                cy.wait(600)
                // verifies if the symptom has been removed
                cy.findByText(/chills/i).should('not.exist')
            } else {
                // add the 'chills' symptoms since it does not exist and verifies that it has been added
                // click on button to go to symptom edition
                cy.findByText(/edit symptoms/i).click()
                cy.wait(600)
                // uncheck the symptom "chills"
                cy.findByRole('checkbox', {name: /chills/i}).click()
                // save the modifications by clicking on the button update profile
                cy.findByText(/update profile/i).click()  
                cy.wait(600)
                // verifies if the symptom has been added  
                cy.findByText(/chills/i)
            }
          })

        // click on profile icon
        cy.findByRole('button', { name: /account of current user/i }).click() 
        // click on logout
        cy.findByRole('menuitem', { name: /logout/i }).click()
    })
})