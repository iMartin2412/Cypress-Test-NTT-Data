/// <reference types="cypress"/>

describe("Suite | Landing Page | Pinterest",()=>{

    context("ipad-mini resolution",()=>{
        beforeEach(()=>{
            cy.viewport("ipad-mini")
        })
    
        it("visit First part of the main Landing Page",()=>{
            cy.visit("")
            cy.get('[data-test-id="header-about-button"]').should('be.visible')
            cy.get('[data-test-id="header-business-button"]>>').should('have.attr','href',"/_/_/business/")
            cy.get('[data-test-id="header-blog-button"]').should('contain.text',"Blog")
            
            //Check all available options while scrolling horizontal menu
            let bannerList=["summer outfit idea","activity for kids","idea for special dinner","DIY project"]
            cy.get('[data-test-id="home-ideas-text"]>').each(($element,$index)=>{
                cy.log($element.text())
                cy.get('[data-test-id="ideas-scroller"]>>').eq($index).scrollIntoView().click({force:true})
                cy.wrap($element.text()).should('contain',bannerList[$index])
            })
            
            //Take Header snapshot/screenshot
            cy.get('[data-test-id="unauth-header"]').matchImageSnapshot("Header-for-ipad-mini")
            
            //Go to the next window
            cy.get('[data-test-id="page-scroll-arrow"]').click({force:true})
            
            //Check we are in the second window
            cy.url().should('include','https://www.pinterest.com.mx/#search')
        })

        it("visit Second part of the main Landing Page",()=>{
            cy.visit('#search')
            cy.get('[data-test-id="explore-button-search"]').scrollIntoView().should('be.visible')
            .and('contain.text','Explore')
            cy.get('[aria-label="search"]').siblings().should('contain.text','easy chicken dinner')
        })

        it("visit Third part of the main Landing Page",()=>{
            cy.visit("#save")
            cy.contains('Fern future home vibes')

            //Check for attributes on images
            const img_alt=["future home vibes bed","future home vibes couch","future home vibes living room",]
            img_alt.forEach(($element,$index)=>{
                cy.get(`img[alt="${$element}"]`).should('have.attr','alt')
            })
        })

        it("visit Fourth part of the main Landing Page",()=>{
            cy.visit("#shop")
        })

        it("visit Fifth part of the main Landing Page",()=>{
            cy.visit("#bottom",{timeout:500000})
            cy.wait(5000)
        })
        
        it("Request Method",()=>{
            cy.request({
                method:"GET",
                url:"https://accounts.pinterest.com/v3/handshake/verify/",
                failOnStatusCode:false})
                .then((resp)=>{
                    cy.writeFile('cypress/docs/response1.pdf',resp.body)
                });
            
        })
    })
    
})