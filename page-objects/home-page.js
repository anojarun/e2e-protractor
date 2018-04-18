//This module defines and implements Login Page/Home Page objects and methods
var LoginPage = function() {

    var loginPageUrl = 'https://stable.psb-ci.fsxt.net/';
    // forgotPassword = element(by.linkText('Forgot password'));

    var forgotPassword = element(by.className('login-form__forgot-password ng-scope'));

    var titleLogIn = element(by.className('fs-box__title'));

    this.get = function() {
        browser.get(loginPageUrl);
    };

    this.getForgotPwdLinkTag = function () {
        return forgotPassword.getTagName();
    };

    this.getForgotPwdLinkDisplayStatus = function () {
        return forgotPassword.isDisplayed()
    };

    this.clickOnForgotPwdLink = function () {
        forgotPassword.click();
    };

    this.getTitleLogIn = function () {
        return titleLogIn.getText();
    };

};
module.exports = new LoginPage();