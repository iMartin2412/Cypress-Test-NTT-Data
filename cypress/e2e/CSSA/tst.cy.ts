/// <reference types="cypress"/>

describe('Name of Test Suite',()=>{
    it('Test 1',()=>{
        
        cy.visit('www.gmail.com')
        cy.get('#identifierId').type('ivan.martin@csaa.com')
    })
})