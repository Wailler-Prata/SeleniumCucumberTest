const { Builder} = require('selenium-webdriver');

const driver = new Builder().forBrowser('MicrosoftEdge').build();

driver.get('https://www.google.com.br/webhp?authuser=1')