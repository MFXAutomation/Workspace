
class Leave{
    leave="//button[@title='Assign Leave']";
    empName="//input[@placeholder='Type for hints...']";
    roleList="//div[@role='listbox']//div[2]";
    leaveType="//div[@class='oxd-select-text--after']//i";
    eleDate="(//input[@placeholder='yyyy-mm-dd'])[1]";
    // 
    submit="//button[@type='submit']";
    frame="//iframe[contains(@id,'Your project')]";
    okBtn="//button[normalize-space()='Ok']";
    applyLeave(name,date){
        cy.xpath(this.leave).click()
        cy.xpath(this.empName).type(name)
        cy.wait(3000)
        cy.xpath(this.empName).type("{downArrow}{enter}")
        cy.xpath(this.leaveType).click()
        cy.xpath(this.roleList).click()
        cy.wait(100)
        cy.xpath(this.eleDate).click()
        cy.wait(100)
        cy.xpath(this.eleDate).type(date)
        cy.xpath(this.submit).click()
        // cy.xpath(this.frame).as('iframeEle')
        // cy.get('@iframeEle').then(cy.wrap).as('iframeContent')
        cy.xpath(this.okBtn).click()


    }
}

export default Leave;
