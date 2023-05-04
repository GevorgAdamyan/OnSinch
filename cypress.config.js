const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    baseUrl: 'https://rafat.demo.onsinch.com/users/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});