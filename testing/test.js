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
            .assert.contiansText('label[data-bind="text: strings.title"]', "Login")
    },
   /*'Creating An Account': browser => {
        browser
            .click('label[data-bind="text: strings.signUpTab"]')
            .pause(3000)

    }*/
}