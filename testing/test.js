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
            .setValue('input[type="email"]', 'testme@gmail.com')
            .setValue('input[placeholder="Password"]', '098765')
            .setValue('input[placeholder="Confirm Password"]', '098765')
            .click(selectors.signupButton)
            .pause(2000)
            .click(selectors.termsUseAccept)
            .pause(2000)
            .click(selectors.getStarted)
   },
    /*'Logging In': browser => {
        browser
            .assert.containsText(selectors.loggin, 'LOGIN')
            .setValue(selectors.loggingEmail, 'testing123@gmail.com')
            .setValue(selectors.logginPassword, 'T3st234')
            .click(selectors.loginButton)
            .pause(2000)
            .click(selectors.decks)
    }*/
}