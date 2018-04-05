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

    // 'EP-67 Editing Deck(s) and Card(s)': browser => {
    //     browser
    //         functions.login(browser, userData)
    //         functions.editing(browser, userData)
    //         functions.ediitngCards(browser, userData)

    // },

    // 'EP-68 Study': browser => {
    //     browser
    //         functions.login(browser, userData)
    //         functions.study(browser)
    // },

    'EP-72 Deleting Card(s) and Deck(s)': browser => {
        functions.deletingDeckCard(browser)
    }
}

