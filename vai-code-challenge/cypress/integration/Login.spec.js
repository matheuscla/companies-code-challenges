describe('Login', () => {
  it('should login user with correct data', () => {
    cy.visit('/');

    cy.get('[data-cy="username"]').type('user@example.com');
    cy.get('[data-cy="password"]').type('123456');
    cy.get('[data-cy="submit"]').click();

    cy.url().should('include', '/dashboard');
  })
})

