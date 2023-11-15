import Login from "../PageObject/Login"
import Leave from "../PageObject/Leave"
import 'cypress-mochawesome-reporter/register';
describe('Demo1', function(){
    it('search in google', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.url().should('include','orangehrmlive.com')
        .and('contain','orangehrm')
        .and('not.contain','greehrm')

        cy.title().should('include','Orange')
        
        cy.xpath("//a").should('have.length',5)
        // cy.screenshot();
        cy.xpath("//input[@name='username']").type("Admin")
        cy.xpath("//input[@name='password']").type("admin123")
        cy.xpath("//button[@type='submit']").click()
    })

    it('Login POM', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.fixture('config').then((data)=>{
            const ln=new Login();
            ln.setUserName(data.userName)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ln.verfiyLogin()
            cy.wait(5000);
            const dayjs=require('dayjs'); 
           const todaysDate = dayjs().format('YYYY-DD-MM');
           const le=new Leave();
    
           le.applyLeave(data.empName,todaysDate);
        })
        
    })

    Cypress.on("test:after:run", (test, runnable) => {  
        if (test.state === "failed") {    
            cy.screenshot();
            const screenshot =`assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed) (attempt 2).png`;    
            addContext({ test }, screenshot);  
           
        }
    });

    
})