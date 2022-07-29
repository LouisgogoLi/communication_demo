// https://docs.cypress.io/api/table-of-contents

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome to Your Vue.js App");
    cy.get(".drop-down-menu > :nth-child(2) > a").click();
    cy.get(".drop-down-menu > :nth-child(3) > a").click();
    cy.get(".drop-down-menu > :nth-child(4) > a").click();
    cy.get(".drop-down-menu > :nth-child(5) > a").click();
    cy.get(".drop-down-menu > :nth-child(5) > a").realHover();
    cy.get(".drop-down-menu > :nth-child(5) > ul > li > a").click();
    cy.get(".drop-down-menu > :nth-child(6) > a").click();
    cy.get(".drop-down-menu > :nth-child(7) > a").click();
    cy.get(".drop-down-menu > :nth-child(7) > a").realHover();
    cy.get(".drop-down-menu > :nth-child(7) > ul > li > a").click();
    cy.get(".drop-down-menu > :nth-child(8) > a").click();
    cy.get(".drop-down-menu > :nth-child(1) > a").click();
  });
});
