module.exports = {
    beforeEach: browser => {
        browser.url('https://cards-beta.devclock.com/login')
    },
    after: browser => {
        browser.end()
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
            .expect.element('label[data-bind="text: strings.decks"]').text.to.equal('Decks')

    }
}