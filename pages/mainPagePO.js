var mainPagePO = function () {
    var base = require('./basePagePO.js');

    this.cookieText = element(by.css('.cookie-text'));
    this.cardSubs = element(by.id('gw_operator_type_signin_d2c'));
    this.signInButton = element(by.id('signin'));

    this.url = function () {
        base.navigateToURL('/');
    }

    this.acceptCookies = function () {
        return element(by.css('.btn.primary.cookie-accept')).click();
    }

    this.acceptCookie = function () {
        element(by.css('.switch-label')).click();
        element(by.id('gdpr-settings-save-btn')).click();
    }

    this.signIn = function () {
        base.isElementVisible(this.signInButton);
        this.signInButton.click();
        base.switchFrame('gatewayFrame');
        base.isElementVisible(this.cardSubs);
        return this.cardSubs.click();
    }
}
module.exports = new mainPagePO();