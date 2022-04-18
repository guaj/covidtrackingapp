describe("Doctor can monitor his patient symptoms", () => {
    it("", () => {
            // open browser to localhost:3000
            cy.visit("http://localhost:3000/")
            // select email field and enter email : patient@gmail.com
            cy.findByRole('textbox', {name: /this.example@email.com/i}).type('maria.collins@gmail.com')
            // select password field and enter password :  Patient1!
            cy.findByTestId('sign-up-password').type('ThePassword1!')
            // click on login
            cy.findByText(/login/i).click()
            cy.findByRole('tab', { name: /patient list/i }).click()
            cy.get('#simple-tabpanel-1 > div > p > div:nth-child(1) > div > div > div > div:nth-child(1) > table > tbody > tr:nth-child(4) > a > svg > path').click()
            cy.findByText(/view health status/i).click()

        }
    )
})
