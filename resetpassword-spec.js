var loginPage = require('./page-objects/home-page.js');
var restPasswordPage = require('./page-objects/forgot-password-page.js');
var emailSentPage = require('./page-objects/email-sent-page.js');
var userData = require('./data/user-data.js');

 beforeAll(function() {
     browser.ignoreSynchronization = true;
     browser.manage().timeouts().pageLoadTimeout(40000);
     browser.manage().timeouts().implicitlyWait(25000);
    // window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
 });

 afterAll(function(){
    //e.g. we need to have "clean" state after execution of each test - no auth cookies
     browser.driver.manage().deleteAllCookies();
 });

describe ('Forgot password link is available on login page', () => {

    beforeAll(() => {
        loginPage.get();
        browser.waitForAngularEnabled(true);
    });
    it('should display forgot password link', () => {

        loginPage.getForgotPwdLinkTag().then(function(res){
            expect(res).toBe('a');
        });
        expect(loginPage.getForgotPwdLinkDisplayStatus()).toBe(true);
        loginPage.clickOnForgotPwdLink();
        expect(browser.getCurrentUrl()).toContain('/forgot-password');
        expect(restPasswordPage.getForgotYourPasswordMessage()).toBe('Forgot your password?');
    });

});


describe ('Email sent dialog is shown,WrongUserName', () => {
    beforeAll(() => {
        loginPage.get();
    });

    it('should click forgot password link', () => {
        loginPage.clickOnForgotPwdLink();
    });

    it('should provide username in the input field(Username from Config file)', () => {
        restPasswordPage.clearUserName();
        restPasswordPage.enterUserNameFromParams();
    });

    it('should click on the submit button', () => {
        restPasswordPage.clickSubmitButton();
    });

    it('should show the "Email sent" dialog', () => {

        expect(emailSentPage.emailSentMessage()).toBe('Email sent');
    });
});

describe ('user can go to login page, once forgot password flow is completed', () => {
    beforeAll(() => {
        loginPage.get();
    });

    it('should click on the forgot password link', () => {
        loginPage.clickOnForgotPwdLink();
    });

    it('should provide username in the input field (Username without any special characters)', () => {
        restPasswordPage.clearUserName();
        restPasswordPage.enterUserName('UsernamePassed');
    });

    it('should click on the submit button', () => {
        restPasswordPage.clickSubmitButton();
    });

    it('should go back to Log in page', () => {
        emailSentPage.clickBackLoginButton();
        expect(loginPage.getTitleLogIn()).toBe('Log in');

    });

});

describe ('User can abort the forgot password flow and return back to login page', () => {
    beforeAll(() => {
        loginPage.get();
    });

    it('should click on the forgot password link', () => {
        loginPage.clickOnForgotPwdLink();
    });

    it('should provide username in the input field(Username typed with @ character)', () => {
        restPasswordPage.clearUserName();
        restPasswordPage.enterUserName(userData.testUser.username);
    });

    it('should click on the back to Login button', () => {
        restPasswordPage.clickBackLoginButton();
    });

    it('should be on the Login page', () => {

        expect(loginPage.getTitleLogIn()).toBe('Log in');
    });

});

describe ('Submit button is only enabled once something is typed to username field', () => {
    beforeAll(() => {
        loginPage.get();
    });

    it('should click on the forgot password link', () => {
        loginPage.clickOnForgotPwdLink();
    });

    it('should show Submit button as disabled', () => {
        restPasswordPage.clearUserName();
        expect(restPasswordPage.buttonIsDisabled()).toBe(false);
    });

    it('should show Submit button as enabled once user input (Username typed with special characters)', () => {
        restPasswordPage.clearUserName();
        restPasswordPage.enterUserName('&%#"()¤');
        expect(restPasswordPage.buttonIsDisabled()).toBe(true);
    });

});


