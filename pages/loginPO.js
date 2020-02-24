var loginPO = function () {
    var data = require('../json/credentials.json');
    var base = require('./basePagePO.js');

    this.loginButton = element(by.id('gw_login_06_sign_in'));
    this.email = element(by.id('1'));
    this.password = element(by.id('5'));

    this.cardSubs = function () {
        element(by.id('gw_operator_type_signin_d2c')).click().then(function () {
            base.isElementVisible(this.loginButton);
        });
    }

    this.emailToLogin = function (email) {
        base.isElementVisible(this.email);
        return this.email.sendKeys(email.toString());
    }

    this.passwordToLogin = function () {
        this.password.sendKeys(data.password);
    }

    this.submitLogin = function () {
        return this.loginButton.click();
    }
}
module.exports = new loginPO();