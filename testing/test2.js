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

    // 'EP-66 Adding Deck(s) and Card(s)': browser => {
    //         functions.login(browser, userData)
    //         functions.addDeck(browser, userData)
    // },

    'EP-67 Editing Deck(s) and Card(s)': browser => {
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

