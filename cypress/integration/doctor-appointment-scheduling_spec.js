describe('Patient can schedule an appointment from his doctor availabilities', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    afterEach( () => {
        cy.findByRole('button', { name: /account of current user/i }).click()
        cy.findByRole('menuitem', { name: /logout/i }).click()
    })

    it('As a patient, i can see the scheduling availabilities for an appointment with my doctor and pick an appointment', () => {
        cy.findByRole('textbox', { name: /this\.example@email\.com/i }).type('patient@gmail.com')// select email field and enter email : patient@gmail.com
        cy.findByTestId('sign-up-password').type('Patient1!')// select passeword field and enter password :  Patient1!
        cy.findByText(/login/i).click()// click on login
        cy.findByRole('button', { name: /account of current user/i }).click() // click on profile icon
        cy.findByRole('menuitem', { name: /profile/i }).click()// click on profile link
        cy.findByText(/make appointment/i).click()
        cy.findByRole('button', { name: /calendar view is open, go to text input view/i }).click()
        cy.findByRole('textbox').clear()
        cy.findByRole('textbox').type('04032025')
        cy.findByText(/19:00:00/i).click()// click on 19:00:00
        cy.findByText(/19:00:00/i).click()
        cy.findByRole('button', { name: /select appointment/i }).click()// click on select appointment
    })

    it('As a doctor, I can interact with a schedule selector and save my availabilities', () => {
        cy.findByRole('textbox', { name: /this\.example@email\.com/i }).type('jud59@hotmail.com')// select email field and enter email : patient@gmail.com
        cy.findByTestId('sign-up-password').type('doctorpass2')// select passeword field and enter password :  Patient1!
        cy.findByText(/login/i).click()// click on login
        cy.findByRole('tab', {  name: /my availabilities/i}).click()
        cy.get('#simple-tabpanel-2 > div > p > div > div > div:nth-child(1) > div > div:nth-child(3) > div:nth-child(4) > div').click()
        cy.findByRole('button', { name: /save/i }).click()
    })
})