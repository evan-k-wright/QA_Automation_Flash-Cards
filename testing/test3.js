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

    /*'EP-74 Contact Us': browser => {
        functions.login(browser, userData)
        functions.contact(browser)
        //(this is a comment) Test will fail at the end becuase of bug EP-97
    }*/

    'EP-75 Settings': browser => {
        functions.login(browser, userData)
        functions.settings(browser, userData)
    }

    /*'EP-76 Deleting Account': browser => {
        functions.login(browser, userData)
        functions.deleteingAccount(browser, userData)
        //(this is a comment) Test will fail at the end becuse of bug EP-100
    },*/
}