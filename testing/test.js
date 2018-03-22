module.exports = {
    beforeEach: browser => {
        browser.url('https://cards-beta.devclock.com/login')
    },
    after: browser => {
        browser.end()
    },
    'Page Load': browser => {
        browser
            .waitForElementPresent('body', 3000)
    },
   'Creating An Account': browser => {
        browser
            .assert.containsText('label[data-bind="text: strings.signUpTab"]', "SIGN UP")
            .click('label[data-bind="text: strings.signUpTab"]')
            .setValue('input[type="email"]', 'testing123@gmail.com')
            .setValue('input[placeholder="Password"]', 'T3st234')
            .setValue('input[placeholder="Confirm Password"]', 'T3st234')
            .click()
            .pause(3000)

    }
}