var createAccountPO = function () {
    var base = require('../pages/basePagePO.js');

    this.tryItButton = element(by.css('.btn-type-l.gateway-subpage-register-d2c'));
    this.signUpButton = element(by.id('gw_signup_account_details_continue_button'));

    this.tryIt = function () {
        expect(base.getPageTitle()).toMatch('HBO GO');
        base.isElementVisible(this.tryItButton);
        this.tryItButton.click();
        base.switchFrame('gatewayFrame');
        base.isElementVisible(this.signUpButton);
    }

    this.addCustomerData = async function (firstName, lastName, email, password) {
        await element(by.name('firstName')).sendKeys(firstName);
        await element(by.name('lastName')).sendKeys(lastName);
        await element(by.name('email')).sendKeys(email);
        await element(by.name('emailConfirm')).sendKeys(email);
        await element(by.name('password')).sendKeys(password);
    }

    this.acceptTerms = function () {
        element(by.name('acceptTerms')).click();
    }

    this.signup = function () {
        base.isElementClickable(this.signUpButton);
        this.signUpButton.click();
        base.isElementVisible(element(by.id('zuora_payment')));
    }
}
module.exports = new createAccountPO();