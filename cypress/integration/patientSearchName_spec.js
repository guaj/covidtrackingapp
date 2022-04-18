describe('As an admin, I want to be able to search a patient by their Name', () => {
    it('An admin can access the patients profile through the search bar by typing their Last Name', () => {
        cy.visit('http://localhost:3000/');
        cy.findByRole('textbox', { name: /this\.example@email\.com/i }).clear().type('admin@gmail.com')// select email field and enter email : admin@gmail.com'
        cy.findByTestId('sign-up-password').clear().type('ThePassword1!')// select password field and enter password : ThePassword1!
        cy.findByText(/login/i).click()// click on login
        cy.findByRole('textbox', {name: /search/i }).click()//click on the search bar of the dashboard
        cy.findByRole('textbox', { name: /search/i }).type('mar')//type letters to the patient you are trying to search
        cy.findByRole('link', { name: /Maria Jordan \[mariajordan@gmail\.com\]/i }).click()// select the right patient name and redirect to patient profile

    })
})