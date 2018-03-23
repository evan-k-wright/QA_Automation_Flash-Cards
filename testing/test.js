const selectors = require('../sources/selectors')

module.exports = {
    beforeEach: browser => {
        browser.url('https://cards-beta.devclock.com/login')
    },
    after: browser => {
        browser
    },
   'Creating An Account': browser => {
        browser
            .waitForElementPresent('body', 3000)
            .assert.containsText('label[data-bind="text: strings.signUpTab"]', "SIGN UP")
            .click('label[data-bind="text: strings.signUpTab"]')
            .setValue('input[type="email"]', 'testing014me@gmail.com')
            .setValue('input[placeholder="Password"]', 'test014')
            .setValue('input[placeholder="Confirm Password"]', 'test014')
            .useXpath()
            .click(selectors.signupButton)
            .pause(3000)
            .click(selectors.termsUseAccept)
            .pause(3000)
            .expect.element('/html/body/div[2]/div[2]/div/div[2]/div/div/button').to.be.visible
        browser
            .useCss()
            .click('body > div.main > div.content > div > div.grid > div > div > button')
            .pause(3000)
   },
    'Logging In And Out': browser => {
        browser
            .assert.containsText(selectors.loggin, 'LOGIN')
            .setValue(selectors.loggingEmail, 'testing014@gmail.com')
            .setValue(selectors.logginPassword, 'test014')
            .click(selectors.loginButton)
            .pause(2000)
    }
}