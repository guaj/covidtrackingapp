
describe('A user can access relevant information based on their user type', () => {
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

    it("a patient has access to covid information and quarantine information ", () => {

        cy.visit('http://localhost:3000/');
        cy.findByRole('textbox', { name: /this\.example@email\.com/i }).clear().type('johnSmith@gmail.com')// select email field and enter email : johnSmith@gmail.com'
        cy.findByTestId('sign-up-password').clear().type('ThePassword1!')// select password field and enter password :  ThePassword1!'
        cy.findByText(/login/i).click()// click on login

        //verifies that appropriate tabs are visible as a patient
        cy.get('#simple-tab-0').click();
        cy.get('#simple-tab-0').contains('Covid Information')
        cy.get('#simple-tab-1').click();
        cy.get('#simple-tab-1').contains('Quarantine Information')

    })

    it("a doctor has access to statistics, patient list, and availabilities ", () => {

        cy.visit('http://localhost:3000/');
        cy.findByRole('textbox', { name: /this\.example@email\.com/i }).clear().type('maria.collins@gmail.com')// select email field and enter email : maria.collins@gmail.com'
        cy.findByTestId('sign-up-password').clear().type('ThePassword1!')// select password field and enter password :  ThePassword1!'
        cy.findByText(/login/i).click()// click on login

        //verifies that appropriate tabs are visible as a doctor
        cy.get('#simple-tab-0').click();
        cy.get('#simple-tab-0').contains('Statistics')
        cy.get('#simple-tab-1').click();
        cy.get('#simple-tab-1').contains('Patient List')
        cy.get('#simple-tab-2').click();
        cy.get('#simple-tab-2').contains('My Availabilities')

    })

    it("a health official has access to statistics, patient list, contact tracing list, locations contact list", () => {

        cy.visit('http://localhost:3000/');
        cy.findByRole('textbox', { name: /this\.example@email\.com/i }).clear().type('markSmith@gmail.com')// select email field and enter email : 'markSmith@gmail.com'
        cy.findByTestId('sign-up-password').clear().type('ThePassword1!')// select password field and enter password :  ThePassword1!'
        cy.findByText(/login/i).click()// click on login

        //verifies that appropriate tabs are visible as a health official 
        cy.get('#simple-tab-0').click();
        cy.get('#simple-tab-0').contains('Statistics')
        cy.get('#simple-tab-1').click();
        cy.get('#simple-tab-1').contains('Patient List')
        cy.get('#simple-tab-2').click();
        cy.get('#simple-tab-2').contains('Contact Tracing List')
        cy.get('#simple-tab-3').click();
        cy.get('#simple-tab-3').contains('Locations Contact List')

    })

    it("an immigration official has access to a patient list and statistics", () => {

        cy.visit('http://localhost:3000/');
        cy.findByRole('textbox', { name: /this\.example@email\.com/i }).clear().type('karlSmith@gmail.com')// select email field and enter email : 'karlSmith@gmail.com'
        cy.findByTestId('sign-up-password').clear().type('ThePassword1!')// select password field and enter password :  ThePassword1!'
        cy.findByText(/login/i).click()// click on login

        //verifies that appropriate tabs are visible as a immigration official 
        cy.get('#simple-tab-0').click();
        cy.get('#simple-tab-0').contains('Statistics')
        cy.get('#simple-tab-1').click();
        cy.get('#simple-tab-1').contains('Patient List')
       

    })
})
