describe('template spec', () => {
  it('passes', () => {
    console.log('running test against '+process.env.URL);
    cy.visit('https://example.cypress.io');
  });
});