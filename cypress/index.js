import './commands';
import 'cypress-mochawesome-reporter/register';
module.exports = (on, config) => {
	require('cypress-mochawesome-reporter/plugin')(on);
  require("cypress-plugin-tab");
  };