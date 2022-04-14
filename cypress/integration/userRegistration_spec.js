//Test 1
//Register a patient
// describe('registering a patient', () => {
//     it('patient clicks on sign up', () => {
//         cy.visit("http://localhost:3000/") //open browser to localhost: 3000
//         cy.findByRole('button', { name: /sign up/i }).click()// click on sign up button
//         cy.findByRole('radio', { name: /patient account/i }).click() //click on radio button for patient account
//         cy.findByRole('button', { name: /select/i }).click() // click on select button
//         cy.findByRole('textbox', { name: /this.example@email.com/i }).type('johnSmith@gmail.com')// select email field and enter email
//         cy.findByRole('textbox', { name: /first name/i }).type('john')//add first name
//         cy.findByRole('textbox', { name: /last name/i }).type('smith')//add last name
//         cy.findByTestId('ramqNumber').type('JS9460341')//add RAMQ number
//         cy.findByTestId('sign-up-psw1').type('ThePassword1!')// select password field and enter password
//         cy.findByTestId('sign-up-psw2').type('ThePassword1!')//confirm password
//         cy.findByRole('button', {name: /register/i}).click()//click on register button
//     })
// })

//Test 2
// //Register a doctor
// describe('registering a doctor', () => {
//     it('doctor clicks on sign up', () => {
//         cy.visit("http://localhost:3000/") //open browser to localhost: 3000
//         cy.findByRole('button', {name: /sign up/i}).click()// click on sign up button
//         cy.findByRole('radio', {name: /doctor account/i}).click() //click on radio button for doctor account
//         cy.findByRole('button', {name: /select/i}).click() // click on select button
//         cy.findByRole('textbox', {name: /this.example@email.com/i}).type('janeSmith@gmail.com')// select email field and enter email
//         cy.findByRole('textbox', {name: /first name/i}).type('jane')//add first name
//         cy.findByRole('textbox', {name: /last name/i}).type('smith')//add last name
//         cy.findByTestId('licenseNumber').type('457701200')//add license number
//         cy.findByTestId('sign-up-psw1').type('ThePassword1!')// select password field and enter password
//         cy.findByTestId('sign-up-psw2').type('ThePassword1!')//confirm password
//         cy.findByRole('button', {name: /register/i}).click()//click on register button
//     })
// })

//Test 3
//Register a health official
describe('registering a health official', () => {
    it('health official clicks on sign up', () => {
        cy.visit("http://localhost:3000/") //open browser to localhost: 3000
        cy.findByRole('button', {name: /sign up/i}).click()// click on sign up button
        cy.findByRole('radio', {name: /health officer account/i}).click() //click on radio button for ho account
        cy.findByRole('button', {name: /select/i}).click() // click on select button
        cy.findByTestId('orgId').type('4094')//add org id
        cy.findByTestId('empId').type('12455')//add branch id
        cy.findByRole('textbox', {name: /this.example@email.com/i}).type('markSmith@gmail.com')// select email field and enter email
        cy.findByTestId('sign-up-psw1').type('ThePassword1!')// select password field and enter password
        cy.findByTestId('sign-up-psw2').type('ThePassword1!')//confirm password
        cy.findByRole('button', {name: /register/i}).click()//click on register button
    })
})

//
// //Test 4
// //Register an immigration officer
describe('registering an immigration officer', () => {
    it('immigration officer clicks on sign up', () => {
        cy.visit("http://localhost:3000/") //open browser to localhost: 3000
        cy.findByRole('button', {name: /sign up/i}).click()// click on sign up button
        cy.findByRole('radio', {name: /immigration officer account/i}).click() //click on radio button for ho account
        cy.findByRole('button', {name: /select/i}).click() // click on select button
        cy.findByTestId('orgId').type('3094')//add org id
        cy.findByTestId('empId').type('10433')//add branch id
        cy.findByRole('textbox', {name: /this.example@email.com/i}).type('karlSmith@gmail.com')// select email field and enter email
        cy.findByTestId('sign-up-psw1').type('ThePassword1!')// select password field and enter password
        cy.findByTestId('sign-up-psw2').type('ThePassword1!')//confirm password
        cy.findByRole('button', {name: /register/i}).click()//click on register button
    })
})

