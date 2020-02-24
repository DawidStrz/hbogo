var basePagePO = function () {
    var EC = protractor.ExpectedConditions;

    this.navigateToURL = async function (url) {
        await browser.get(url);
    }

    this.getPageTitle = function () {
        return browser.getTitle();
    }

    this.switchFrame = function (frame) {
        return browser.driver.switchTo().frame(frame);
    }

    this.isElementVisible = function (element) {
        let elementToBeVisible = EC.visibilityOf(element);
        browser.wait(elementToBeVisible, 9000);
    }

    this.isElementInvisible = function (element) {
        let elementToBeInvisible = EC.invisibilityOf(element);
        browser.wait(elementToBeInvisible, 9000);
    }

    this.isElementClickable = function (element) {
        let elementToBeClickable = EC.elementToBeClickable(element);
        browser.wait(elementToBeClickable, 9000);
    }
}
module.exports = new basePagePO();