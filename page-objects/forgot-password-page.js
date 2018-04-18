//This module defines and implements forgot password page objects and methods
var ForgotPasswordPage = function() {


    var wrongUserName = 'test';
    var wrongUserNameSpecialChar = '3242354"#¤"¤"¤"';
    var userNameFiled = element(by.name('username'));
    var titleForgotYourPassword = element(by.className('fs-box__title ng-scope'));
    var submitButton = element(by.buttonText('Submit'));
    //var submitButton = element(by.className('btn btn-primary ng-scope'));
    // var backLoginButton = element(by.buttonText('Back to login'));
    var backLoginButton = element(by.className('btn btn-md btn-primary ng-scope'));




    this.clearUserName = function() {
        userNameFiled.clear();
    };

    this.enterUserName = function(userName) {
        userNameFiled.sendKeys(userName);
    };

    this.enterUserNameFromParams = function() {
        userNameFiled.sendKeys(browser.params.username);
    };

    this.enterWrongUserName = function() {
        userNameFiled.sendKeys(wrongUserName);
    };

    this.enterSpecilcharUserName = function() {
        userNameFiled.sendKeys(wrongUserNameSpecialChar);
    };

    this.clickSubmitButton = function() {
        submitButton.click();
    };

    this.clickBackLoginButton = function() {
        backLoginButton.click();
    };

    this.buttonIsDisabled  = function() {
        return submitButton.isEnabled();
    };

    this.getForgotYourPasswordMessage = function () {
        return titleForgotYourPassword.getText();
    };
};
module.exports = new ForgotPasswordPage();