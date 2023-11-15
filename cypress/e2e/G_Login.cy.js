// import { data } from "cypress/types/jquery";
import Goddard_Login from "../PageObject/Goddard_Login";
import 'cypress-mochawesome-reporter/register';
import Leads from "../PageObject/Leads";

describe('Login',function(){
    it('login',()=>{
        cy.fixture('login').then((data)=>{
            cy.visit(data.url)
            const gdLogin=new Goddard_Login();
            gdLogin.setUserName(data.username);
            gdLogin.setPassword(data.password);
            gdLogin.clickSubmit();
            const gdLeads=new Leads();
            gdLeads.setDetails(data.firstname,data.lastname,data.startdate,data.enddate);
        })
    })})

   


