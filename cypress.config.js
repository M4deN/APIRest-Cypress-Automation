const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    API_BASE_URL: 'http://localhost:3000/tarefas',
    hideCredentials: true,
    requestMode: true,
  },
  fixturesFolder: false,
  video: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3000/tarefas',
  },
})
