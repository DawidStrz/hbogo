var basePagePO = function(){

    this.navigateToURL = async function(url){
        await browser.get(url);
    }

    this.getPageTitle = function(){
        return browser.getTitle();
    }

    this.switchFrame = function (frame){
        return browser.driver.switchTo().frame(frame);
    } 

    this.isElementVisible = function(element){
        var EC = protractor.ExpectedConditions;
        let elementToBeVisible = EC.visibilityOf(element); 
        browser.wait(elementToBeVisible,20000);
    }

    this.isElementClickable = function(element){
        var EC = protractor.ExpectedConditions;
        let elementToBeClickable = EC.elementToBeClickable(element); 
        browser.wait(elementToBeClickable,20000);
    }
}
module.exports = new basePagePO();