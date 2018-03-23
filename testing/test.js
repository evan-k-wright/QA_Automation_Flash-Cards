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
            .setValue('input[type="email"]', 'testing007me@gmail.com')
            .setValue('input[placeholder="Password"]', 'test007')
            .setValue('input[placeholder="Confirm Password"]', 'test007')
            .click(selectors.signupButton)
            .pause(2000)
            .click(selectors.termsUseAccept)
            .pause(2000)
            .click(selectors.getStarted)
   },
    /*'Logging In And Out': browser => {
        browser
            .assert.containsText(selectors.loggin, 'LOGIN')
            .setValue(selectors.loggingEmail, 'testing123@gmail.com')
            .setValue(selectors.logginPassword, 'T3st234')
            .click(selectors.loginButton)
            .pause(2000)
            .click(selectors.decks)
    }*/
}