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
//   'EP-64 Creating An Account': browser => {
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
    // 'EP-70 Creating An Account with Google': browser => {
    //     browser
    //         functions.googleAdd(browser, userData)

    // },
    // 'EP-65 Logging In And Out': browser => {
    //     functions.loginLogout(browser, userData)
    // },

    'EP-71 Login and Logout With Google Account': browser => {
        functions.loginLogoutGoogle(browser, userData)
    },
}