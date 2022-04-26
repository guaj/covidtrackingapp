describe('Admin/doctor/health official/immigration officer can flag and unflag a patient', () => {
    it('Admin can flag a patient', () => {
        cy.visit("http://localhost:3000/") // open browser to localhost:3000
        cy.findByRole('textbox', {name: /this.example@email.com/i}).clear().type('admin@gmail.com') //select email field and admin email : admin@gmail.com
        cy.findByTestId('sign-up-password').clear().type('ThePassword1!') //select password field and enter admin password :  ThePassword1!
        cy.findByText(/login/i).click() //click on login
        cy.findByRole('checkbox', {
            name: /laura araujo sousa/i
        }).within(() => {
            return cy.findByRole('link').click()
        }); //find patient name laura araujo sousa and clicking on her profile link to visit her profile page
        cy.findByText(/flag/i).click() //finds the flag button and click on it
        cy.on('window:alert', (txt) => {
            //Mocha assertions
            expect(txt).to.contains('Patient flagged!');
        }); //assert that the alert message says "Patient flagged!"
    })

    it('Admin can unflag a patient', () => {
        cy.visit("http://localhost:3000/") // open browser to localhost:3000
        cy.findByRole('textbox', {name: /this.example@email.com/i}).clear().type('admin@gmail.com') //select email field and admin email : admin@gmail.com
        cy.findByTestId('sign-up-password').clear().type('ThePassword1!') //select password field and enter admin password :  ThePassword1!
        cy.findByText(/login/i).click() //click on login
        cy.findByRole('tab', {
            name: /patient list/i
        }).click()
        cy.findByRole('checkbox', {
            name: /laura araujo sousa/i
        }).within(() => {
            return cy.findByRole('link').click()
        }); //find patient name laura araujo sousa and clicking on her profile link to visit her profile page
        cy.findByText(/unflag/i).click() //finds the flag button and click on it
        cy.on('window:alert', (txt) => {
            //Mocha assertions
            expect(txt).to.contains('Patient unflagged!');
        }); //assert that the alert message says "Patient unflagged!"
    })

    it('Doctor can flag a patient', () => {
        cy.visit("http://localhost:3000/") // open browser to localhost:3000
        cy.findByRole('textbox', {name: /this.example@email.com/i}).clear().type('maria.collins@gmail.com') //select email field and admin email : admin@gmail.com
        cy.findByTestId('sign-up-password').clear().type('ThePassword1!') //select password field and enter admin password :  ThePassword1!
        cy.findByText(/login/i).click() //click on login
        cy.findByRole('tab', {
            name: /patient list/i
        }).click()
        cy.findByRole('checkbox', {
            name: /laura araujo sousa/i
        }).within(() => {
            return cy.findByRole('link').click()
        }); //find patient name laura araujo sousa and clicking on her profile link to visit her profile page
        cy.findByText(/flag/i).click() //finds the flag button and click on it
        cy.on('window:alert', (txt) => {
            //Mocha assertions
            expect(txt).to.contains('Patient flagged!');
        }); //assert that the alert message says "Patient flagged!"
    })

    it('Doctor can unflag a patient', () => {
        cy.visit("http://localhost:3000/") // open browser to localhost:3000
        cy.findByRole('textbox', {name: /this.example@email.com/i}).clear().type('maria.collins@gmail.com') //select email field and admin email : admin@gmail.com
        cy.findByTestId('sign-up-password').clear().type('ThePassword1!') //select password field and enter admin password :  ThePassword1!
        cy.findByText(/login/i).click() //click on login
        cy.findByRole('tab', {
            name: /patient list/i
        }).click()
        cy.findByRole('checkbox', {
            name: /laura araujo sousa/i
        }).within(() => {
            return cy.findByRole('link').click()
        }); //find patient name laura araujo sousa and clicking on her profile link to visit her profile page
        cy.findByText(/unflag/i).click() //finds the flag button and click on it
        cy.on('window:alert', (txt) => {
            //Mocha assertions
            expect(txt).to.contains('Patient unflagged!');
        }); //assert that the alert message says "Patient unflagged!"
    })

    it('Health official can flag a patient', () => {
        cy.visit("http://localhost:3000/") // open browser to localhost:3000
        cy.findByRole('textbox', {name: /this.example@email.com/i}).clear().type('markSmith@gmail.com') //select email field and admin email : admin@gmail.com
        cy.findByTestId('sign-up-password').clear().type('ThePassword1!') //select password field and enter admin password :  ThePassword1!
        cy.findByText(/login/i).click() //click on login
        cy.findByRole('tab', {
            name: /patient list/i
        }).click()
        cy.findByRole('checkbox', {
            name: /laura araujo sousa/i
        }).within(() => {
            return cy.findByRole('link').click()
        }); //find patient name laura araujo sousa and clicking on her profile link to visit her profile page
        cy.findByText(/flag/i).click() //finds the flag button and click on it
        cy.on('window:alert', (txt) => {
            //Mocha assertions
            expect(txt).to.contains('Patient flagged!');
        }); //assert that the alert message says "Patient flagged!"
    })

    it('Health official can unflag a patient', () => {
        cy.visit("http://localhost:3000/") // open browser to localhost:3000
        cy.findByRole('textbox', {name: /this.example@email.com/i}).clear().type('markSmith@gmail.com') //select email field and admin email : admin@gmail.com
        cy.findByTestId('sign-up-password').clear().type('ThePassword1!') //select password field and enter admin password :  ThePassword1!
        cy.findByText(/login/i).click() //click on login
        cy.findByRole('tab', {
            name: /patient list/i
        }).click()
        cy.findByRole('checkbox', {
            name: /laura araujo sousa/i
        }).within(() => {
            return cy.findByRole('link').click()
        }); //find patient name laura araujo sousa and clicking on her profile link to visit her profile page
        cy.findByText(/unflag/i).click() //finds the flag button and click on it
        cy.on('window:alert', (txt) => {
            //Mocha assertions
            expect(txt).to.contains('Patient unflagged!');
        }); //assert that the alert message says "Patient unflagged!"
    })

    it('Immigration officer can flag a patient', () => {
        cy.visit("http://localhost:3000/") // open browser to localhost:3000
        cy.findByRole('textbox', {name: /this.example@email.com/i}).clear().type('karlSmith@gmail.com') //select email field and admin email : admin@gmail.com
        cy.findByTestId('sign-up-password').clear().type('ThePassword1!') //select password field and enter admin password :  ThePassword1!
        cy.findByText(/login/i).click() //click on login
        cy.findByRole('tab', {
            name: /patient list/i
        }).click()
        cy.findByRole('checkbox', {
            name: /laura araujo sousa/i
        }).within(() => {
            return cy.findByRole('link').click()
        }); //find patient name laura araujo sousa and clicking on her profile link to visit her profile page
        cy.findByText(/flag/i).click() //finds the flag button and click on it
        cy.on('window:alert', (txt) => {
            //Mocha assertions
            expect(txt).to.contains('Patient flagged!');
        }); //assert that the alert message says "Patient flagged!"
    })

    it('Immigration officer can unflag a patient', () => {
        cy.visit("http://localhost:3000/") // open browser to localhost:3000
        cy.findByRole('textbox', {name: /this.example@email.com/i}).clear().type('karlSmith@gmail.com') //select email field and admin email : admin@gmail.com
        cy.findByTestId('sign-up-password').clear().type('ThePassword1!') //select password field and enter admin password :  ThePassword1!
        cy.findByText(/login/i).click() //click on login
        cy.findByRole('tab', {
            name: /patient list/i
        }).click()
        cy.findByRole('checkbox', {
            name: /laura araujo sousa/i
        }).within(() => {
            return cy.findByRole('link').click()
        }); //find patient name laura araujo sousa and clicking on her profile link to visit her profile page
        cy.findByText(/unflag/i).click() //finds the flag button and click on it
        cy.on('window:alert', (txt) => {
            //Mocha assertions
            expect(txt).to.contains('Patient unflagged!');
        }); //assert that the alert message says "Patient unflagged!"
    })
})