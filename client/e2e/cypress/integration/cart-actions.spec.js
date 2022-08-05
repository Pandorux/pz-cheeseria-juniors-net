/// <reference types="Cypress" />

context('Cart Actions', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it.only('Add items to cart', () => {
    cy.get('[data-cy=add-to-cart-2]').click();
    cy.get('[data-cy=add-to-cart-3]').click();

    cy.get('[data-cy=view-cart-btn]').click();
    cy.contains('2 Selected item')
  })

  it.only('Purchase Items', () => {
    cy.get('[data-cy=add-to-cart-2]').click();
    cy.get('[data-cy=add-to-cart-3]').click();

    cy.get('[data-cy=view-cart-btn]').click();
    cy.get('[data-cy=purchase-items-btn]').click();

    cy.contains('Add items to your cart and then find them here.')
  })

  it.only('Check Recent Purchase History', () => {
    cy.get('[data-cy=view-transaction-history-btn]').click();

    cy.get('[data-cy=recent-purchase-no-1]').should(($div) => {
      expect($div.text().trim()).equal('1');
    })

    cy.get('[data-cy=recent-purchase-total-items-1]').should(($div) => {
      expect($div.text().trim()).equal('2');
    })
  })
})