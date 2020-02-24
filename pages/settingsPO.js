var settingsPO = function () {
    var base = require('./basePagePO.js');

    this.openSettingsButton = element(by.id('nickname'));
    this.subscriptionManagement = element(by.id('gw_settings_sidebar_subscription'));
    this.subscriptionCancelButton = element(by.id('gw_subscription_cancel_subscription_button'));

    this.openSettings = function () {
        base.isElementVisible(this.openSettingsButton);
        return this.openSettingsButton.click();
    }

    this.subscriptionManagementOpen = function () {
        base.switchFrame('gatewayFrame');
        base.isElementVisible(this.subscriptionManagement);
        return this.subscriptionManagement.click();
    }

    this.subscriptionCancel = function () {
        base.isElementVisible(this.subscriptionCancelButton);
        return this.subscriptionCancelButton.click();
    }

    this.confirmSubscriptionCancel = function () {
        var confirmCancelButton = element(by.css('span.btn.primary.selected.btn-type-l.gateway-subpage-cancel'));
        browser.actions().mouseMove(element(by.css('.footer'))).perform().then(function () {
            return confirmCancelButton.click();
        })
    }

    this.confirmSubscriptionCancelInvisible = function () {
        base.isElementInvisible(confirmCancelButton);
    }
}
module.exports = new settingsPO();