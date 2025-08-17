// import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
// Given("User is on the loginpage", () => {
//     cy.visit("https://demo.guru99.com/test/newtours",{ timeout: 150000 }); // Set timeout here
// })
// //When("User enters {string} and {string}", (userName, password) => {
// //  cy.get('[name="userName"]').type(userName)
// //cy.get('[name="password"]').type(password)    
// //})
// When("I login as the following", (datatable) => {
//     datatable.hashes().forEach(element => {
//         cy.get('[name="userName"]').type(element.userName)
//         cy.get('[name="password"]').type(element.password)
//     })
// });
// Then("Click on the login button", () => {
//     cy.get('[name="submit"]').click()
// })
// And("Verify title of the webpage should be {string}", (title) => {
//     cy.title().should('eq', title)
// })

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("User is on the loginpage", () => {
    cy.visit("https://demo.guru99.com/test/newtours", { timeout: 150000 });
    cy.screenshot('1_login_page_loaded'); // ✅ Screenshot after page load
});

When("I login as the following", (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get('[name="userName"]').type(element.userName);
        cy.get('[name="password"]').type(element.password);
    });
    cy.screenshot('2_credentials_entered'); // ✅ Screenshot after typing login info
});

Then("Click on the login button", () => {
    cy.get('[name="submit"]').click();
    cy.screenshot('3_after_login_click'); // ✅ Screenshot after clicking login
});

And("Verify title of the webpage should be {string}", (title) => {
    cy.title().should('eq', title);
    cy.screenshot('4_title_verified'); // ✅ Final screenshot after verification
});