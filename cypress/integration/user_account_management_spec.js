describe('Admin can add/update/delete doctor/patient or their information', () => {
    it('Admin can add a doctor', () => {
        cy.visit("http://localhost:3000/") // open browser to localhost:3000
        cy.findByRole('textbox', {name: /this.example@email.com/i}).clear().type('admin@gmail.com') //select email field and admin email : admin@gmail.com
        cy.findByTestId('sign-up-password').clear().type('Admin1234!') //select password field and enter admin password :  Admin1234!
        cy.findByText(/login/i).click() //click on login
        cy.findByRole('tab', {name: /user management/i}).click() //click on user management tab
        cy.findByRole('tab', {name: /doctors/i}).click() //click on doctors tab
        cy.findByRole('button', {name: /add doctor/i}).click() //click on "add doctor" button
        cy.findByRole('textbox', {
            name: /this\.example@email\.com/i
        }).type('test3@test.com') //enter email
        cy.findByRole('textbox', {
            name: /first name/i
        }).type('test3') //enter first name
        cy.findByRole('textbox', {
            name: /last name/i
        }).type('test3') //enter last name
        cy.findByRole('textbox', {
            name: /0000000/i
        }).type('1234567')  //enter license number
        cy.findByTestId('sign-up-psw1').type('Testtest1!') //enter a password
        cy.findByTestId('sign-up-psw2').type('Testtest1!') //confirm password
        cy.findByRole('button', {
            name: /register/i
        }).click() //find and click on the register button
        cy.on('window:alert', (txt) => {
            //Mocha assertions
            expect(txt).to.contains('The account is created!');
        }); //assert that the alert message says "The account is created!"
    })

    it('Admin can update a doctor\'s information', () => {
        cy.visit("http://localhost:3000/") //open browser to localhost:3000
        cy.findByRole('textbox', {name: /this.example@email.com/i}).clear().type('admin@gmail.com')//select email field and admin email : admin@gmail.com
        cy.findByTestId('sign-up-password').clear().type('Admin1234!') //select password field and enter admin password :  Admin1234!
        cy.findByText(/login/i).click() // click on login
        cy.findByRole('tab', {name: /user management/i}).click() //click on user management tab
        cy.findByRole('tab', {name: /doctors/i}).click() //click on doctors tab
        cy.findByRole('checkbox', {
            name: /test3@test\.com/i
        }).within(() => {
            return cy.findByRole('button', {
                name: /update/i
            }).click()
        }); //find the update button for user with email : test3@test.com, and click on it
        cy.findByTestId('phone-number').within(() => {
            return cy.findByRole('textbox').click()
        }).clear().type('731-872-4321'); //find the phone field, click on it, clear it, and type new phone number in it
        cy.findByText(/update profile/i).click(); //click on update profile
        cy.on('window:alert', (txt) => {
            //Mocha assertions
            expect(txt).to.contains('Profile information updated!');
        }); //assert that the alert message says "Profile information updated!"
    })

    it('Admin can delete a doctor', () => {
        cy.visit("http://localhost:3000/") // open browser to localhost:3000
        cy.findByRole('textbox', {name: /this.example@email.com/i}).clear().type('admin@gmail.com') //select email field and admin email : admin@gmail.com
        cy.findByTestId('sign-up-password').clear().type('Admin1234!') //select password field and enter admin password :  Admin1234!
        cy.findByText(/login/i).click() //click on login
        cy.findByRole('tab', {name: /user management/i}).click() //click on user management tab
        cy.findByRole('tab', {name: /doctors/i}).click() //click on doctors tab
        cy.findByRole('checkbox', {
            name: /test3@test\.com/i
        }).within(() => {
            return cy.findByRole('button', {
                name: /delete/i
            }).click()
        }); //find the delete button for user with email : test3@test.com, and click on it
    })

    it('Admin can add a patient', () => {
        cy.visit("http://localhost:3000/") // open browser to localhost:3000
        cy.findByRole('textbox', {name: /this.example@email.com/i}).clear().type('admin@gmail.com') //select email field and admin email : admin@gmail.com
        cy.findByTestId('sign-up-password').clear().type('Admin1234!') //select password field and enter admin password :  Admin1234!
        cy.findByText(/login/i).click() //click on login
        cy.findByRole('tab', {name: /user management/i}).click() //click on user management tab
        // cy.findByRole('tab', {name: /patients/i}).click() //click on doctors tab
        cy.findByRole('button', {name: /add patient/i}).click() //click on "add patient" button
        cy.findByRole('textbox', {
            name: /this\.example@email\.com/i
        }).type('test3@test.com') //enter email
        cy.findByRole('textbox', {
            name: /first name/i
        }).type('test3') //enter first name
        cy.findByRole('textbox', {
            name: /last name/i
        }).type('test3') //enter last name
        cy.findByTestId('ramqNumber').within(() => {
            return cy.findByRole('textbox', {
                name: /0000000/i
            }).type('1234567')
        })  //enter ramq number
        cy.findByTestId('sign-up-psw1').type('Testtest1!') //enter a password
        cy.findByTestId('sign-up-psw2').type('Testtest1!') //confirm password
        cy.findByRole('button', {
            name: /register/i
        }).click() //find and click on the register button
        cy.on('window:alert', (txt) => {
            //Mocha assertions
            expect(txt).to.contains('The account is created!');
        }); //assert that the alert message says "The account is created!"
    })

    it('Admin can update a patient\'s information', () => {
        cy.visit("http://localhost:3000/") //open browser to localhost:3000
        cy.findByRole('textbox', {name: /this.example@email.com/i}).clear().type('admin@gmail.com')//select email field and admin email : admin@gmail.com
        cy.findByTestId('sign-up-password').clear().type('Admin1234!') //select password field and enter admin password :  Admin1234!
        cy.findByText(/login/i).click() // click on login
        cy.findByRole('tab', {name: /user management/i}).click() //click on user management tab
        // cy.findByRole('tab', {name: /doctors/i}).click() //click on doctors tab
        cy.findByRole('button', {
            name: /go to next page/i
        }).click()
        cy.findByRole('checkbox', {
            name: /test3/i
        }).within(() => {
            return cy.findByRole('button', {
                name: /update/i
            }).click()
        }); //find the update button for user with email : jud59@hotmail.com, and click on it
        cy.findByRole('checkbox', {
            name: /new or worsening cough/i
        }).click()
        cy.findByText(/update profile/i).click(); //click on update profile
        cy.on('window:alert', (txt) => {
            //Mocha assertions
            expect(txt).to.contains('Profile information updated!');
        }); //assert that the alert message says "Profile information updated!"
    })

    it('Admin can delete a patient', () => {
        cy.visit("http://localhost:3000/") // open browser to localhost:3000
        cy.findByRole('textbox', {name: /this.example@email.com/i}).clear().type('admin@gmail.com') //select email field and admin email : admin@gmail.com
        cy.findByTestId('sign-up-password').clear().type('Admin1234!') //select password field and enter admin password :  Admin1234!
        cy.findByText(/login/i).click() //click on login
        cy.findByRole('tab', {name: /user management/i}).click() //click on user management tab
        cy.findByRole('button', {
            name: /go to next page/i
        }).click()
        cy.findByRole('checkbox', {
            name: /test3/i
        }).within(() => {
            return cy.findByRole('button', {
                name: /delete/i
            }).click()
        }); //find the delete button for user with first name : test3, and click on it
    })

    it('Admin can add an organizational official', () => {
        cy.visit("http://localhost:3000/") // open browser to localhost:3000
        cy.findByRole('textbox', {name: /this.example@email.com/i}).clear().type('admin@gmail.com') //select email field and admin email : admin@gmail.com
        cy.findByTestId('sign-up-password').clear().type('Admin1234!') //select password field and enter admin password :  Admin1234!
        cy.findByText(/login/i).click() //click on login
        cy.findByRole('tab', {name: /user management/i}).click() //click on user management tab
        cy.findByRole('tab', {name: /organizational officials/i}).click() //click on doctors tab
        cy.findByRole('button', {name: /add organizational official/i}).click() //click on "add organizational official" button
        cy.findByRole('radio', {
            name: /immigration official/i
        }).click()
        cy.findByTestId('organizationId').within(()=>{return cy.findByRole('textbox', {
            name: /000000000/i
        }).type('23')}) //enter organization id
        cy.findByTestId('employeeid').within(()=>{return cy.findByRole('textbox', {
            name: /000000000/i
        }).type('6')}) //enter employee id
        cy.findByRole('textbox', {
            name: /this\.example@email\.com/i
        }).type('testio@test.com') //enter email
        cy.findByTestId('sign-up-psw1').type('Testtest1!') //enter a password
        cy.findByTestId('sign-up-psw2').type('Testtest1!') //confirm password
        cy.findByRole('button', {
            name: /register/i
        }).click() //find and click on the register button
        cy.on('window:alert', (txt) => {
            //Mocha assertions
            expect(txt).to.contains('The account is created!');
        }); //assert that the alert message says "The account is created!"
    })

    it('Admin can update an organizational official\'s information', () => {
        cy.visit("http://localhost:3000/") //open browser to localhost:3000
        cy.findByRole('textbox', {name: /this.example@email.com/i}).clear().type('admin@gmail.com')//select email field and admin email : admin@gmail.com
        cy.findByTestId('sign-up-password').clear().type('Admin1234!') //select password field and enter admin password :  Admin1234!
        cy.findByText(/login/i).click() // click on login
        cy.findByRole('tab', {name: /user management/i}).click() //click on user management tab
        cy.findByRole('tab', {name: /organizational officials/i}).click() //click on organizational officials tab
        cy.findByRole('checkbox', {
            name: /testio@test\.com/i
        }).within(() => {
            return cy.findByRole('button', {
                name: /update/i
            }).click()
        }); //find the update button for user with email : testio@gmail.com, and click on it
        cy.findByTestId('employeeId').within(()=>{return cy.findByRole('textbox').click().clear().type(12)});
        cy.findByRole('button', {
            name: /update profile/i
        }).click(); //click on update profile
        cy.on('window:alert', (txt) => {
            //Mocha assertions
            expect(txt).to.contains('Profile information updated!');
        }); //assert that the alert message says "Profile information updated!"
    })

    it('Admin can delete an organizational official', () => {
        cy.visit("http://localhost:3000/") // open browser to localhost:3000
        cy.findByRole('textbox', {name: /this.example@email.com/i}).clear().type('admin@gmail.com') //select email field and admin email : admin@gmail.com
        cy.findByTestId('sign-up-password').clear().type('Admin1234!') //select password field and enter admin password :  Admin1234!
        cy.findByText(/login/i).click() //click on login
        cy.findByRole('tab', {name: /user management/i}).click() //click on user management tab
        cy.findByRole('tab', {name: /organizational officials/i}).click() //click on organizational officials tab
        cy.findByRole('checkbox', {
            name: /testio@test\.com/i
        }).within(() => {
            return cy.findByRole('button', {
                name: /delete/i
            }).click()
        }); //find the delete button for user with email : testio@test.com, and click on it
    })
})