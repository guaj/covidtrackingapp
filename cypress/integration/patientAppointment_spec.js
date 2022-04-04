import { cy } from "date-fns/locale"

describe('patient can schedule an appointment', () =>{
    it('patient choose a date and a time', () =>{
      
       cy.visit("http://localhost:3000/")   //  open browser to localhost:3000
       
        cy.findByRole('textbox', {name: /this\.example@gmail\.com/i} ).type('patient@gmail.com')    
        //  select password field and enter password : Patient1!
        //  click on login
        //  click on profile icon 
        //  click on profile link
        //  click on make appointment 
        //  click on wednesday april 6 
        // click on 19:00:00
        //  click on select appointment
        
    }) 
})