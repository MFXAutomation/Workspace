import { should } from "chai"


describe('locator test', function(){
    it('search in google', () =>{
        cy.visit("https://www.google.com/")
        cy.get("textarea[title='Search']").type("google news{enter}")
        //cy.get("a[href='https://news.google.co.in/']").contains("")
        // cy.xpath("//h3[text()='Google News']").contains("Google")
        cy.wait(5000)
        cy.xpath("//h3[text()='Google News']").contains("Google News")
    })
-
    it('FB page', () =>{
        cy.visit("https://www.facebook.com/")
    })
})
