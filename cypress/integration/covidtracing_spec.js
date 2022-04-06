// //test 1
// describe('health official can send a notification to a patient to fill contact tracing form', () => {
//     it('health official clicks on send button', () => {
//         cy.visit("http://localhost:3000/") //open browser to localhost: 3000
//         cy.findByRole('textbox', { name: /this.example@email.com/i }).type('ho3@gmail.com')// select email field and enter email : ho3@gmail.com
//         cy.findByTestId('sign-up-password').type('Healthyasfuck1!')// select password field and enter password :  Healthyasfuck1!
//         cy.findByText(/login/i).click()// click on login
//         cy.findByRole('tab', { name: /contact tracing list/i }).click()//go to contact tracing tab on dashboard
//         cy.wait(2000) //for the db to update the send notification column
//         cy.get('.button').contains('SEND').click()//click send button to send a notification and changes the button to sent once done
//     })
// })

//test 2
describe("patients can fill out the contract tracing form", () =>{
    it('patient clicks on contact tracing button on profile', () => {
        cy.visit("http://localhost:3000/") //open browser to localhost: 3000
        cy.findByRole('textbox', {name: /this.example@email.com/i}).type('eyal@gmail.com')// select email field and enter email : eyal@gmail.com
        cy.findByTestId('sign-up-password').type('P1234567!')// select password field and enter password :  P1234567!
        cy.findByText(/login/i).click()// click on login
        cy.visit("http://localhost:3000/tracing-form") //open browser to localhost: 3000
        cy.get('#locationName').type('Walmart')//type location name in textbox
        cy.get('#locationNumber').type('514-665-6060')//type location number in textbox
        cy.get('#locationDate').type('April 1, 2022')//type location date in textbox
        cy.get('#locationTime').type('15:00')//type location time in textbox
        cy.findByRole('button', {name: /add/i})// select add button
        cy.findByRole('button', {name: /submit/i})// select submit button
    })
})
describe("patients can fill out the contract tracing form", () =>{
    it('patient clicks on contact tracing button on profile', () => {
        cy.visit("http://localhost:3000/") //open browser to localhost: 3000
        cy.findByRole('textbox', {name: /this.example@email.com/i}).type('eyal@gmail.com')// select email field and enter email : eyal@gmail.com
        cy.findByTestId('sign-up-password').type('P1234567!')// select password field and enter password :  P1234567!
        cy.findByText(/login/i).click()// click on login
        cy.findByRole('button', { name: /accountuser/i }).click()//user clicks on profile button
        cy.findByRole('menuitem', { name: /profile/i }).click()//user clicks on profile menu item
        cy.findByText(/complete tracing form/i).click()//user clicks on complete tracing form
        cy.get('#locationName').type('Walmart')//type location name in textbox
        cy.get('#locationNumber').type('514-665-6060')//type location number in textbox
        cy.get('#locationDate').type('April 1, 2022')//type location date in textbox
        cy.get('#locationTime').type('15:00')//type location time in textbox
        cy.findByRole('button', {name: /add/i})// select add button
        cy.findByRole('button', {name: /submit/i})// select submit button
    })
})

etByRole('button', { name: /account of current user/i })
//test 3
describe('health official can access locations list of patients who completed tracing form', () => {
    it('health official clicks on locations list tab', () => {
        cy.visit("http://localhost:3000/") //open browser to localhost: 3000
        cy.findByRole('textbox', { name: /this.example@email.com/i }).type('ho3@gmail.com')// select email field and enter email : ho3@gmail.com
        cy.findByTestId('sign-up-password').type('Healthyasfuck1!')// select password field and enter password :  Healthyasfuck1!
        cy.findByText(/login/i).click()// click on login
        cy.findByRole('tab', { name: /locations contact list/i }).click()//go to locations list tab on dashboard
            })
})

//template
// describe('Patient can schedule an appointment', () => {
//     it('patient choose a date and a time', () => {
//         cy.visit("http://localhost:3000/%22) // open browser to localhost:3000
//         cy.findByRole('textbox', { name: /this.example@email.com/i }).type('patient@gmail.com')// select email field and enter email : patient@gmail.com
//         cy.findByTestId('sign-up-password').type('Patient1!')// select passeword field and enter password :  Patient1!
//         cy.findByText(/login/i).click()// click on login
//         cy.findByRole('button', { name: /account of current user/i }).click() // click on profile icon
//         cy.findByRole('menuitem', { name: /profile/i }).click()// click on profile link
//         cy.findByText(/make appointment/i).click()
//         cy.findByRole('button', { name: /calendar view is open, go to text input view/i }).click()
//         cy.findByRole('textbox').clear()
//         cy.findByRole('textbox').type('04032025')
//         cy.findByText(/19:00:00/i).click()// click on 19:00:00
//         cy.findByText(/19:00:00/i).click()
//         cy.findByRole('button', { name: /select appointment/i }).click()// click on select appointment
//     })
// })

