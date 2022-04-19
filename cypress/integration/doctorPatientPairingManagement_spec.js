describe('As an admin, I want to be able to manage pairings between patients and doctors because patients shall be evenly distributed between doctors and depending on their needs and location.', () => {
    it("an admin has access to a patient list, doctor list, new patient pairing, doctor emergency pairing," +
        "and a user management tab with access to all patients, doctors, and officials ", () => {

            cy.visit('http://localhost:3000/');
            cy.findByRole('textbox', { name: /this\.example@email\.com/i }).clear().type('admin@gmail.com')// select email field and enter email : admin@gmail.com'
            cy.findByTestId('sign-up-password').clear().type('ThePassword1!')// select password field and enter password :  Admin1234!
            cy.findByText(/login/i).click()// click on login

            //verifies that appropriate tabs are visible as an admin
            cy.get('#simple-tab-0').click();
            cy.get('#simple-tab-0').contains('Patient List')
            cy.get('#simple-tab-1').click();
            cy.get('#simple-tab-1').contains('Doctor List')
            cy.get('#simple-tab-2').click();
            cy.get('#simple-tab-2').contains('New Patients Pairing')
            cy.get('#simple-tab-3').click();
            cy.get('#simple-tab-3').contains('Doctor Emergency Pairing')
            cy.get('#simple-tab-4').click();
            cy.get('#simple-tab-4').contains('User Management')
        })
