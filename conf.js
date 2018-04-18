exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['resetpassword-spec.js'],
   capabilities: {
        browserName: 'chrome'
    },
    params: {
        username: 'UsernameFromConfigParams'
    },
    onPrepare: function () {
        browser.driver.manage().window().setSize(1600, 800);
    }
}