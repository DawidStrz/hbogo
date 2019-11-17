var base = require('../pages/basePagePO.js');
var mainPagePO = require('../pages/mainPagePO.js');
var createAccountPO = require('../pages/createAccountPO.js');
var paymentDetailsPO = require('../pages/paymentDetailsPO.js');
var loginPO = require('../pages/loginPO.js');
var settingsPO = require('../pages/settingsPO.js');

var data = require('../json/credentials.json');
var faker = require('faker/locale/pl');
var firstName = faker.name.firstName();
var lastName = faker.name.lastName();

describe('HBO GO trial period registration', function(){

    xit('Accept cookies', function(){
        mainPagePO.url();
        mainPagePO.acceptCookies();
        mainPagePO.url();
        expect(mainPagePO.cookieText.isPresent()).toBe(false);
    })

    it('Redirecting to the registration page for a trial period', function(){
        mainPagePO.url();
        expect(base.getPageTitle()).toMatch('HBO GO'); 
        createAccountPO.tryIt();
    })

    it('Complete customer data', async function(){
        await createAccountPO.addCustomerData(firstName, lastName, data.email, data.password);
        createAccountPO.acceptTerms();
        createAccountPO.signup();
    })

    it('Complete payment details', function(){
        paymentDetailsPO.cardHolderName(firstName, lastName);
        paymentDetailsPO.addCardDetails(data.creditCardNumber, data.month, data.year, data.cvv); 
        paymentDetailsPO.submitPayment();
    })
})

describe('HBO GO cancel subscription', function(){

    it('Redirecting to the sign in page', function(){
        mainPagePO.url();
        expect(base.getPageTitle()).toMatch('HBO GO'); 
        mainPagePO.signIn();
        expect(mainPagePO.cardSubs.isPresent()).toBe(true);
    })

    it('Log in with use of email and password', function(){
        loginPO.cardSubs();
        loginPO.emailToLogin(credentialsData.email);
        loginPO.passwordToLogin();
        loginPO.submitLogin();
        expect(mainPagePO.signInButton.isPresent()).toBe(false);
        })

    it('Cancellation of a trial period', function(){
        mainPagePO.url();
        settingsPO.openSettings();
        settingsPO.subscriptionManagementOpen();
        settingsPO.subscriptionCancel();
        settingsPO.confirmSubscriptionCancel();
    })            
 })