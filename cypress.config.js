const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qamid.tmweb.ru/",
    retries: 0,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
