var mainPagePO = function(){
    var base = require('./basePagePO.js');

    this.url = function(){
        base.navigateToURL('/home');
        browser.sleep(5000);
    }

    this.cookieText = element(by.css('.cookie-text'));
    this.acceptCookies = function(){
    return element(by.css('.btn.primary.cookie-accept')).click();
}
    this.acceptCookie = function(){
        element(by.css('.switch-label')).click();
        element(by.id('gdpr-settings-save-btn')).click();
        } 

    this.cardSubs = element(by.id('gw_operator_type_signin_d2c'));

    this.signInButton = element(by.id('signin'));

    this.signIn = function(){
        this.signInButton.click();
        base.switchFrame('gatewayFrame');
        base.isElementVisible(this.cardSubs);
    }
}
module.exports = new mainPagePO();