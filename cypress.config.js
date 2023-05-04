const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    watchForFileChanges: false,
    baseUrl: 'https://rafat.demo.onsinch.com/users/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});