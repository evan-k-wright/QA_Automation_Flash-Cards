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
    // 'EP-73 Subscribing': browser => {
    //     functions.login(browser, userData)
    //     functions.subscribe(browser, userData)
    // },

    /*'EP-76 Deleting Account': browser => {
        functions.login(browser, userData)
        functions.deleteingAccount(browser, userData)
    },*/
}