const selectors = require('../sources/selectors')
const functions = require('../sources/functions')
const userData = require('../sources/userData')

module.exports = {
    beforeEach: browser => {
        browser.url('https://cards-beta.devclock.com/login')
    },
    after: browser => {
        browser
    },
//   'Creating An Account': browser => {
//         browser
//             .waitForElementPresent('body', 3000)
//             .assert.containsText('label[data-bind="text: strings.signUpTab"]', "SIGN UP")
//             .click('label[data-bind="text: strings.signUpTab"]')
//             .setValue('input[type="email"]', 'testing022@gmail.com')
//             .setValue('input[placeholder="Password"]', 'test022')
//             .setValue('input[placeholder="Confirm Password"]', 'test022')
//             .useXpath()
//             .click(selectors.signupButton)
//             .pause(3000)
//             .click(selectors.termsUseAccept)
//             .useCss()
//             .waitForElementPresent('button[class="primary"]', 3000)
//             .click('button[class="primary"]')
//             .pause(3000)
//   },
    // 'Logging In And Out': browser => {
    //     browser
    //         .setValue(selectors.loggingEmail, 'testing022@gmail.com')
    //         .setValue(selectors.logginPassword, 'test022')
    //         .click(selectors.loginButton)
    //         .pause(2000)
    //         .click(selectors.logoutBtton)
    // },
    /*'Adding Deck(s) and Card(s)': browser => {
            functions.login(browser, userData)
            functions.addDeck(browser, userData)
    },*/

    'Subscribing': browser => {
        functions.login(browser, userData)
        functions.subscribe(browser, userData)
    },

    /*'Deleting Account': browser => {
        functions.login(browser, userData)
        functions.deleteingAccount(browser, userData)
    },*/
}