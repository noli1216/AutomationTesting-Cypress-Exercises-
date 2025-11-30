// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     specPattern: "cypress/e2e/**/*.cy.js",
//     supportFile: "cypress/support/e2e.js",
//   },
// });


// const { defineConfig } = require("cypress"); // ✅ must be at top

// module.exports = defineConfig({
//   e2e: {
//     // Include all folders with your test files
//     specPattern: [
//       "cypress/e2e/**/*.cy.js",
//       "cypress/week-5/**/*.cy.js",
//       "cypress/week-6/**/*.cy.js",
//     ],
//     supportFile: "cypress/support/e2e.js",
//   },
// });
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // include ALL test folders
    specPattern: [
      "cypress/e2e/**/*.cy.js",
      "cypress/week-5/**/*.cy.js",
      "cypress/week-6/**/*.cy.js",
    ],

    // You DO have this file (confirmed), so keep it ON
    supportFile: "cypress/support/e2e.js",
  },
});
