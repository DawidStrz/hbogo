const mainPagePO = require('../pages/mainPagePO.js');
const createAccountPO = require('../pages/createAccountPO.js');
const paymentDetailsPO = require('../pages/paymentDetailsPO.js');
const loginPO = require('../pages/loginPO.js');
const settingsPO = require('../pages/settingsPO.js');

const data = require('../json/credentials.json');
const faker = require('faker/locale/pl');
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();

describe('HBO GO trial period registration', function () {

    it('Redirecting to the registration page for a trial period', function () {
        mainPagePO.url();
        createAccountPO.tryIt();
    })

    it('Complete customer data', async function () {
        await createAccountPO.addCustomerData(firstName, lastName, data.email, data.password);
        createAccountPO.acceptTerms();
        createAccountPO.signup();
    })

    it('Complete payment details', function () {
        paymentDetailsPO.cardHolderName(firstName, lastName);
        paymentDetailsPO.addCardDetails(data.creditCardNumber, data.month, data.year, data.cvv);
        paymentDetailsPO.submitPayment();
    })
})

describe('HBO GO cancel subscription', function () {

    it('Redirecting to the sign in page', function () {
        mainPagePO.url();
        mainPagePO.signIn();
    })

    it('Log in with use of email and password', function () {
        loginPO.emailToLogin(data.email);
        loginPO.passwordToLogin();
        loginPO.submitLogin();
    })

    it('Cancellation of a trial period', function () {
        settingsPO.openSettings();
        settingsPO.subscriptionManagementOpen();
        settingsPO.subscriptionCancel();
        settingsPO.confirmSubscriptionCancel();
        settingsPO.confirmSubscriptionCancelInvisible();
    })
})