// const cucumber = require('cypress-cucumber-preprocessor') .default
// const { defineConfig } = require("cypress");
// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       on('file:preprocessor', cucumber())
//     },
//     specPattern: "cypress/e2e/*.feature",
//   },
// });

const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Attach Allure plugin
      allureWriter(on, config);

      // Cucumber preprocessor
      on('file:preprocessor', cucumber());

      return config;
    },
    specPattern: 'cypress/e2e/*.feature',
    env: {
      allure: true // Enable Allure reporting
    }
  }
});