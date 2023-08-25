const assert = require('assert');
const { Builder} = require('selenium-webdriver');

const driver = new Builder().forBrowser('firefox').build();



async function teste (){
    await driver.get('https://www.google.com.br/webhp?authuser=1')
    const title = await driver.getTitle()
    console.log(
        ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",
        title,
        "Google",
        assert.strictEqual(title, "Google"),
        "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"
            )
    
    await driver.quit()
}

teste()