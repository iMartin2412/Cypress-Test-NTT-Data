/// <reference types="cypress"/>

describe("Demo for NTT Data Mexico",()=>{

    beforeEach(() => {
        cy.clearAllCookies();
    });

    it("1.- Landing Page - adhoc Testing",()=>{
        cy.visit("https://mexico.nttdata.com/");
        cy.contains('Contact').click({force:true});
    })
})