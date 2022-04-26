//test 1


describe("Doctor can update his/her profile", () => {
    it("Doctor modifies his/her phone number", () => {
        // open browser to localhost:3000
        cy.visit("http://localhost:3000/")
        // select email field and enter email : maria.collins@gmail.com
        cy.findByRole('textbox', { name: /this.example@email.com/i }).type('maria.collins@gmail.com')
        // select password field and enter password :  Patient1!
        cy.findByTestId('sign-up-password').type('ThePassword1!')
        // click on login
        cy.findByText(/login/i).click()
        // click on profile icon
        cy.findByRole('button', { name: /account of current user/i }).click()
        // click on profile link
        cy.findByRole('menuitem', { name: /profile/i }).click()

        // clear the previous phone number and verifies it is not displayed on the profile
        cy.findByText(/edit profile/i).click()//click on button to edit profile
        cy.findByText(/phone number/i)
     cy.findByTestId('phone-number').within(() => {
                return cy.findByRole('textbox').click()
            }).clear().type('721-862-4331'); //find the phone field, click on it, clear it, and type new phone number in it
            cy.findByText(/update profile/i).click();

    })
})

describe("Doctor can update his/her profile", () => {
    it("Doctor modifies his/her email", () => {
        // open browser to localhost:3000
        cy.visit("http://localhost:3000/")
        // select email field and enter email : maria.collins@gmail.com
        cy.findByRole('textbox', { name: /this.example@email.com/i }).type('maria.collins@gmail.com')
        // select password field and enter password :  Patient1!
        cy.findByTestId('sign-up-password').type('ThePassword1!')
        // click on login
        cy.findByText(/login/i).click()
        // click on profile icon
        cy.findByRole('button', { name: /account of current user/i }).click()
        // click on profile link
        cy.findByRole('menuitem', { name: /profile/i }).click()

        // clear the previous phone number and verifies it is not displayed on the profile
        cy.findByText(/edit profile/i).click()//click on button to edit profile
        cy.findByText(/phone number/i)
     cy.findByTestId('sign-up-email').within(() => {
                return cy.findByRole('textbox').click()
            }).clear().type('marcoll@gmail.com'); //find the email, click on it, clear it, and type new email in it
            cy.findByText(/update profile/i).click();

    })
})



