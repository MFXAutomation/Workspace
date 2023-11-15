class Login
{
    userName="//input[@name='username']";
    pass="//input[@name='password']";
    submit="//button[@type='submit']";
    verfiyText="h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']";

    setUserName(username){
        cy.xpath(this.userName).type(username)
    }

    setPassword(password){
        cy.xpath(this.pass).type(password)
    }

    clickSubmit(){
        cy.xpath(this.submit).click()
    }
    verfiyLogin(){
        cy.get(this.verfiyText).should('have.text','Dashboard')
    }
}

export default Login;