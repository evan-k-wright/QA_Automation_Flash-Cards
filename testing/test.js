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
            .setValue('input[type="email"]', 'testing123@gmail.com')
            .setValue('input[placeholder="Password"]', 'T3st234')
            .setValue('input[placeholder="Confirm Password"]', 'T3st234')
            .click('button[class="primary"]')
            .waitForElementPresent('body', 3000)
            .click('button[class="primary"]')
            .waitForElementPresent('body', 3000)
            .click('button[class="primary"]')
            .pause(3000)
   },
    'Logging In': browser => {
        browser
            .assert.containsText(selectors.loggin, 'LOGIN')
            .setValue(selectors.loggingEmail, 'testing123@gmail.com')
            .setValue(selectors.logginPassword, 'T3st234')
            .click(selectors.loginButton)
            .pause(2000)
            .click(selectors.decks)
            

    }
}