//test 1
describe('As a doctor, I want a daily report of the statistics of patients using the app', () => {
     it('A doctor can generate the daily report of patients statistics through the generate pdf button', () => {
            cy.visit('http://localhost:3000/');
            cy.findByRole('textbox', { name: /this\.example@email\.com/i }).clear().type('maria.collins@gmail.com')// select email field and enter email : maria.collins@gmail.com'
            cy.findByTestId('sign-up-password').clear().type('ThePassword1!')// select password field and enter password :  ThePassword1!
            cy.findByText(/login/i).click()// click on login
            cy.findByRole('tab', { name: /statistics/i }).click()//click on the statistics tab
            cy.findByRole('button', {name: /generate pdf/i }).click()//click on generate pdf button
        })
})

//test 2
describe('As a doctor, I want a daily report of the list of patients using the app', () => {
     it('A doctor can generate the daily report of patients lists through the generate pdf button', () => {
            cy.visit('http://localhost:3000/');
            cy.findByRole('textbox', { name: /this\.example@email\.com/i }).clear().type('maria.collins@gmail.com')// select email field and enter email :maria.collins@gmail.com
            cy.findByTestId('sign-up-password').clear().type('ThePassword1!')// select password field and enter password : ThePassword1!
            cy.findByText(/login/i).click()// click on login
             cy.findByRole('tab', { name: /patient list/i }).click()//click on the patient list tab
            cy.findByRole('button', {name: /generate pdf/i }).click()//click on generate pdf button
        })
})
//test 3
describe('As a health official, I want a daily report of the list of patients using the app', () => {
     it('A health official can generate the daily report of patients lists through the generate pdf button', () => {
            cy.visit('http://localhost:3000/');
            cy.findByRole('textbox', { name: /this\.example@email\.com/i }).clear().type('markSmith@gmail.com')// select email field and enter email : markSmith@gmail.com'
            cy.findByTestId('sign-up-password').clear().type('ThePassword1!')// select password field and enter password : ThePassword1!
            cy.findByText(/login/i).click()// click on login
             cy.findByRole('tab', { name: /patient list/i }).click()//click on the patient list tab
             cy.findByRole('button', {name: /generate pdf/i }).click()//click on generate pdf button
        })
})
