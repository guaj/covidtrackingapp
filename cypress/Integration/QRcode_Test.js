//test 1
describe('Users QRcode can be accessed form user profile', () => {
    it('QRcode is visible on user profile', () => {
        cy.visit("http://localhost:3000/") //open browser to localhost: 3000
        cy.findByRole('textbox', { name: /this.example@email.com/i }).clear() // clear field
        cy.findByRole('textbox', { name: /this.example@email.com/i }).type('patient@gmail.com')// select email field and enter email : patient@gmail.com
        cy.findByTestId('sign-up-password').clear()
        cy.findByTestId('sign-up-password').type('Patient1!')// select password field and enter password :  Patient1!
        cy.findByText(/login/i).click()// click on login
        cy.wait(2000) //for the db to update page
        cy.findByRole('button', {  name: /account of current user/i}).click()
        cy.findByTestId('profile-button').click() // click profile button
        cy.wait(2000) //for the db to update page
        cy.findByTestId('QRcode') //Confirm QRcode exists
    })
})