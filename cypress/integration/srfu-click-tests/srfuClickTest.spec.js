import {onPage} from './pageObject';

describe('testing app', () => {
    
    beforeEach('open application', () => {
        cy.visit('/');
    })

    it('MAIN_FUNCTION_TEST', () => {
        // Enter team name into input and check it
        onPage.enterTeamName().wait(1000).should('have.value', 'Treee');
        
        // Click button to start
        onPage.clickButton();
        
        // Click button to increase counter
        onPage.clickButton();
        
        // Getting clicks value
        onPage.getYourClicks().should('contain', '1');
        });  
       
})