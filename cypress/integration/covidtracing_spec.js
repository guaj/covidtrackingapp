//test 1
describe('health official can send a notification to a patient to fill contact tracing form', () => {
    it('health official clicks on send button', () => {
        cy.visit("http://localhost:3000/") //open browser to localhost: 3000
        cy.findByRole('textbox', { name: /this.example@email.com/i }).type('bob_morisette@outlook.com')// select email field and enter email
        cy.findByTestId('sign-up-password').type('ThePassword1!')// select password field and enter password
        cy.findByText(/login/i).click()// click on login
        cy.findByRole('tab', { name: /contact tracing list/i }).click()//go to contact tracing tab on dashboard
        cy.wait(2000) //for the db to update the send notification column
        cy.get('.button').contains('SEND').click()//click send button to send a notification and changes the button to sent once done
    })
})

//test 2
describe("patients can fill out the contract tracing form", () =>{
    it('patient clicks on contact tracing button on profile', () => {
        cy.visit("http://localhost:3000/") //open browser to localhost: 3000
        cy.findByRole('textbox', {name: /this.example@email.com/i}).type('jason_caldwell@gmail.com')// select email field and enter email
        cy.findByTestId('sign-up-password').type('ThePassword1!')// select password field and enter password
        cy.findByText(/login/i).click()// click on login
        cy.findByRole('button', { name: /account of current user/i }).click()// select the profile button
        cy.findByRole('menuitem', { name: /profile/i }).click()// select the profile menu item
        cy.findByRole('link', { name: /complete tracing form/i }).click() //user clicks on complete tracing form
        cy.get('#locationName').type('Walmart')//type location name in textbox
        cy.get('#locationNumber').type('514-665-6060')//type location number in textbox
        cy.get('#locationDate').type('April 1, 2022')//type location date in textbox
        cy.get('#locationTime').type('15:00')//type location time in textbox
        cy.findByRole('button', {name: /add/i})// select add button
        cy.findByRole('button', {name: /submit/i})// select submit button
    })
})

//test 3
describe('health official can access locations list of patients who completed tracing form', () => {
    it('health official clicks on locations list tab', () => {
        cy.visit("http://localhost:3000/") //open browser to localhost: 3000
        cy.findByRole('textbox', { name: /this.example@email.com/i }).type('bob_morisette@outlook.com')// select email field and enter email
        cy.findByTestId('sign-up-password').type('ThePassword1!')// select password field and enter password
        cy.findByText(/login/i).click()// click on login
        cy.findByRole('tab', { name: /locations contact list/i }).click()//go to locations list tab on dashboard
            })
})

