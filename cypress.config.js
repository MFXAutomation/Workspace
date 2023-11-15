const { defineConfig } = require("cypress");
// const xlsx = require("node-xlsx").default;
const fs = require("fs");
// const path = require("path");
 
module.exports = defineConfig({
  projectId: "ti6oc3",
  reporter:'cypress-mochawesome-reporter',
  video:true,
  reporterOptions: {
    "reportDir": "cypress/results",
    "charts":true,
    "overwrite": false,
    "html": false,
    "json": true
    
  },
 
  e2e: {
    setupNodeEvents(on, config) {
     
     screenshotonRunfailure=true;
     require('cypress-mochawesome-reporter/plugin')(on);  
    
     on('after:spec', (spec, results) => {
      if (results && results.video) {
        // Do we have failures for any retry attempts?
        const failures = results.tests.some((test) =>
          test.attempts.some((attempt) => attempt.state === 'failed')
        )
        // if (!failures) {
        //   // delete the video if the spec passed and no tests retried
        //   fs.unlinkSync(results.video)
        // }
      }
    })

    }
  }
})