const { defineConfig } = require("cypress");

module.exports = defineConfig({
  downloadsFolder: "cypress/downloads",
  // retries:{
  //   runMode:1,
  //   openMode:1
  // },

  //project id
  
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportDir: "cypress/reports/week7", // Week 7 reports folder
    overwrite: true,
    html: true,
    json: true,
    charts: true,
    video: true,
    reportTitle: "Week 7 Cypress Test Report",
  },
  e2e: {
    // include ALL test folders
    env: {},
    // baseUrl: "https://practice.expandtesting.com/login",

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },

    specPattern: [
      "cypress/e2e/**/*.cy.js",
      "cypress/week-5/**/*.cy.js",
      "cypress/week-6/**/*.cy.js",
      "cypress/week-7/**/*.cy.js",
    ],

    // You DO have this file (confirmed), so keep it ON
    supportFile: "cypress/support/e2e.js",
  },
});
