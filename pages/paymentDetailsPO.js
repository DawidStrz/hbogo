var paymentDetailsPO = function () {
    var base = require('../pages/basePagePO.js');

    this.acceptTermsCheckbox = element(by.name('acceptTerms'));
    this.submitButton = element(by.id('submitButton'));
    this.successMessage = element(by.id('gw_signup_success_message'));

    this.addCardDetails = function (creditCardNumber, month, year, cvv) {
        element(by.id("input-creditCardNumber")).sendKeys(creditCardNumber);
        element(by.id("input-cardSecurityCode")).sendKeys(cvv);
        var SelectWrapper = require('../util/selectWrapper.js');
        var monthSelect = new SelectWrapper(by.id("input-creditCardExpirationMonth"));
        var yearSelect = new SelectWrapper(by.id("input-creditCardExpirationYear"));
        monthSelect.selectByValue(month);
        yearSelect.selectByValue(year);
    }

    this.cardHolderName = function (firstName, lastName) {
        base.switchFrame('z_hppm_iframe');
        var cardHolder = element(by.id('input-creditCardHolderName'))
        base.isElementVisible(cardHolder);
        cardHolder.sendKeys(firstName + ' ' + lastName);
    }

    this.acceptTerms = function () {
        base.isElementClickable(this.acceptTermsCheckbox);
        this.acceptTermsCheckbox.click();
    }

    this.submitPayment = function () {
        base.isElementVisible(this.submitButton);
        this.submitButton.click();
        return base.isElementVisible(this.successMessage);
    }

}
module.exports = new paymentDetailsPO();