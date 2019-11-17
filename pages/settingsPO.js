var settingsPO = function(){
    var base = require('./basePagePO.js');    

        this.openSettingsButton = element(by.id('nickname'));

        this.openSettings = function(){
            base.isElementVisible(this.openSettingsButton);
            return this.openSettingsButton.click();
        }

        this.subscriptionManagement = element(by.id('gw_settings_sidebar_subscription'));

        this.subscriptionManagementOpen = function(){
            base.switchFrame('gatewayFrame');
            base.isElementVisible(this.subscriptionManagement);
            return this.subscriptionManagement.click();
        }
    
        this.subscriptionCancel = function(){
            return element(by.id('gw_subscription_cancel_subscription_button')).click();
        }
        
        this.confirmSubscriptionCancel = function(){
            let confirmCancelButton = element(by.css('span.btn.primary.selected.btn-type-l.gateway-subpage-cancel'));
            browser.actions().mouseMove(element(by.css('.footer'))).perform().then(function (){
                return confirmCancelButton.click();
            })
        }
    }
    module.exports = new settingsPO();