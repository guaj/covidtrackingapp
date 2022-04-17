describe('As a patient, I want to be able to contact my doctor', () => {

    it('A patient can access the contact my doctor button', () => {
        cy.visit('http://localhost:3000/');
        cy.findByRole('textbox', { name: /this\.example@email\.com/i }).type('mariajordan@gmail.com')// select email field and enter email : patient@gmail.com
        cy.findByTestId('sign-up-password').type('Patient1!')// select passeword field and enter password :  Patient1!
        cy.findByText(/login/i).click()// click on login
        cy.findByRole('button', { name: /account of current user/i }).click() // click on profile icon
        cy.findByRole('menuitem', { name: /profile/i }).click()// click on profile link
        cy.findByText(/contact my doctor/i).click()
    })

    it('A patient can fill a form to be sent to his doctor via email', () => {
        cy.findByRole('textbox', {name: /full name/i}).type('Test name')
        cy.findByRole('textbox', { name: /subject/i }).type("Test subject")
        cy.findByRole('textbox', { name: /message/i }).type('This is a test message')
    })

    it('A email can send the form filled to his doctor email', () => {
        cy.findByText(/submit/i).click()
    })
})