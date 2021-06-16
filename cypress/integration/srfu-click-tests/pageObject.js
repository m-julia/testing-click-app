import {teamName} from './dataForTests';

export class Page{

    
    enterTeamName() {
        return cy.get('#name').type(teamName);
    }

    
    clickButton() {
        cy.contains('button', 'Click!').click();
    }

    getYourClicks() {
        return cy.contains('h3', 'Your clicks:').next();
    }
}

export const onPage = new Page();