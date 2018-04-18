//This module defines and implements Email sent page objects and methods
var EmailSentPage = function() {

    var emailSent = element(by.className('fs-box__title ng-scope'));
    var backLoginButton = element(by.className('btn btn-md btn-primary ng-scope'));



    this.emailSentMessage = function () {
        return emailSent.getText();
    };

    this.clickBackLoginButton = function() {
        backLoginButton.click();
    };

};
module.exports = new EmailSentPage();