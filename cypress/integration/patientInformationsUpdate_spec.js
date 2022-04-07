

describe("Patient can update his/her symptom status", () => {
    it("Patient modifies his/her phone number", () => {
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
        cy.wait(2000)
        
        // modification of the phone number

        // clear the previous phone number and verifies it is not displayed on the profile
        // click on button to go to profile edition
        cy.findByText(/edit profile/i).click()
        cy.wait(600)
        // removes the phone number
        cy.findByRole('textbox', { name: /phoneNumber/i }).clear()
            // save the modifications by clicking on the button update profile
            cy.findByText(/update profile/i).click() 
            cy.wait(600)

        // verifies that the phone number has been removed and not displayed in the profile page
        // enters a new phone number 1112223333 and verifies it is displayed in the profile page
        cy.findByText(/edit profile/i).click()
        cy.wait(600)
        // enters the new phone number
        cy.findByRole('textbox', { name: /phoneNumber/i }).type('1112223333')
        // save the modifications by clicking on the button update profile
        cy.findByText(/update profile/i).click()      
        cy.wait(600)
        cy.findByText(/edit profile/i).click()
        cy.wait(600)
        // verifies that the new phone number is displayed in the profile page
        cy.findByTestId("phoneNumber").then(($element) => {
            $element.text().includes("1112223333")
        })

        // click on profile icon
        cy.findByRole('button', { name: /account of current user/i }).click() 
        // click on logout
        cy.findByRole('menuitem', { name: /logout/i }).click()
    })
})