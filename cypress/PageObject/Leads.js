class Leads
{
    menuLeads="//li[@id='leadsTopMenu']";
    searchView="//a[normalize-space()='Search/View Leads']";
    lastName="//input[@id='searchLastName']";
    firstName="//input[@id='searchFirstName']";
    sel="//select[@id='searchStatus']";
    dropdown="//span[normalize-space()='Advanced Search Options']//following::span[1]";
    birthStartDt="//input[@id='searchStartBirthdate']";
    birthEndDt="//input[@id='searchEndBirthdate']";
    searchBtn="//input[@id='searchLeadButton']";
    record="//table[@id='leadCenterGrid']//tr[2]//td[2]";

    setDetails(firstname,lastname,startDate,endDate){
        cy.xpath(this.menuLeads).trigger('mousehover').click();
        // cy.wait(5000);
        cy.xpath(this.searchView).click();
        cy.xpath(this.lastName).type(lastname);
        cy.xpath(this.firstName).type(firstname);
        cy.xpath(this.sel).select('Open');
        cy.xpath(this.dropdown).click();
        cy.xpath(this.birthStartDt).click().type(startDate).tab();
        cy.xpath(this.birthEndDt).click().type(endDate).tab();
        cy.xpath(this.searchBtn).click();
        cy.xpath(this.record).should('contain',firstname);
    }
}

export default Leads;