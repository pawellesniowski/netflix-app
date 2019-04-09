/// <reference types="Cypress" />

describe('Details Page e2e tests', function () {
    before(() => {
        cy.visit('/');
    });

    it('Displays all parts of the page', () => {
        cy
            .get('[data-cy="navigation"]')
            .get('[data-cy="movie-details"]')
            .get('[data-cy="sort-bar"]')
            .get('[data-cy="movies-grid"]')
            .get('[data-cy="footer"]')
    });

    it('Displays movie item in movie details', () => {
        cy
            .get('[data-cy="movie-details"]')
            .find('[data-cy="movie-details-poster"]')
    });

    it('Renders on particular URL', () => {
        cy.url().should('include', '8080');
    });
});
