const { Builder } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

const edgeOptions = new edge.Options()
  .addArguments('--headless')
  .addArguments('--disable-gpu')


  const firefoxOptions = new firefox.Options()
  .addArguments('--headless')
  .addArguments('--disable-gpu')


module.exports = class WebPage{
    
    constructor(url){
        this.url = url
        //this.driver = new Builder().forBrowser('MicrosoftEdge').setEdgeOptions(edgeOptions).build()
        this.driver = new Builder().forBrowser('firefox').setFirefoxOptions(firefoxOptions).build()
    }

    async openPage(){
        await this.driver.get(this.url)
    }

    async refreshPage(){
        await this.driver.executeScript("window.localStorage.clear()")
        await this.driver.navigate().refresh()
    }

    async getPageProperties(){
        return {
            title: await this.driver.getTitle()
        }
    }
    
    async findElement(element){
        return await this.driver.findElement(element)
    }

    async findElements(element){
        return await this.driver.findElements(element)
    }

    async closePage(){        
        await this.driver.close()
    }

    async quitWebDriver(){
        await this.driver.quit()
    }
}