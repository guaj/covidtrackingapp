describe('As a doctor, i can see my patient list', () => {

    beforeEach( () => {
        cy.visit('http://localhost:3000/');
        cy.findByRole('textbox', { name: /this\.example@email\.com/i }).type('maria.collins@gmail.com')// select email field and enter email : patient@gmail.com
        cy.findByTestId('sign-up-password').type('ThePassword1!')// select passeword field and enter password :  Patient1!
        cy.findByText(/login/i).click()// click on login
    })

    it('All patients are loaded on the form', () => {
        cy.findByRole('tab', { name: /patient list/i }).click()
    })

    it('Redirects to patient profile when clicking on link icon', () => {
        cy.findByRole('tab', { name: /patient list/i }).click()
        const icon = cy.get('#simple-tabpanel-1 > div > p > div:nth-child(1) > div > div > div > div:nth-child(1) > table > tbody > tr:nth-child(1) > a > svg > path')
        icon.click();
    })

})