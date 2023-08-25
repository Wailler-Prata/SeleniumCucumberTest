const { Builder, WebStorage} = require('selenium-webdriver');

const edge = require('selenium-webdriver/edge');
const edgeDriverPath = '/usr/local/bin/msedgedriver'; // Update with the actual path

module.exports = class WebPage{
    
    constructor(url){
        this.url = url
    }
    //driver = new Builder().forBrowser('MicrosoftEdge').build();
    driver = new edge.Driver(new edge.Options().setEdgeService(new edge.ServiceBuilder(edgeDriverPath)));

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