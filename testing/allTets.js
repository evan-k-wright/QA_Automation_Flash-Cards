const selectors = require('../sources/selectors')
const functions = require('../sources/functions')
const userData = require('../sources/userData')

module.exports = {
    before: browser => {
        browser.url('https://cards-beta.devclock.com/login')
    },
    after: browser => {
        browser.end()
    },

    'Login': browser => {
        functions.login(browser, userData)
    },

    'Add deck and card': browser => {
        functions.addDeck(browser, userData)
    },

    'Editing deck': browser => {
        functions.editing(browser, userData)
    },

    'Editing Cards': browser => {
        functions.editingCards(browser, userData)
    },

    'Search Cards': browser => {
        functions.searchBar(browser, userData)
    },

    'Study': browser => {
        functions.study(browser)
    },

    'Deleing Card and Deck': browser => {
        functions.deletingDeckCard(browser)
    },

    'Conact US': browser => {
        functions.contact(browser)
    },

    'Settings': browser => {
        functions.settings(browser, userData)
    },

    'Deleting Account': browser => {
        functions.deleteingAccount(browser)
    },
}