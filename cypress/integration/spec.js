// Enable only for development
// require('cypress');

describe('Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    describe('Home Page', () => {
        it('has the correct headline', () => {
            cy.contains('.headline', 'Front-end conference');
        });

        it('has button to buy tickets', () => {
            cy.get('.buy-tickets').should('contain.text', 'Buy tickets');
        });
    });

    describe('Agenda Page', () => {
        it('navigates to /agenda', () => {
            cy.get('.menu-list a').contains('Agenda').click();

            cy.url().should('include', '/agenda');
        });
    });


    describe('Sponsors Page', () => {
        it('navigates to /sponsors', () => {
            cy.get('.menu-list a').contains('Sponsors').click();

            cy.url().should('include', '/sponsors');
        });
    });
});
