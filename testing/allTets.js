const selectors = require('../sources/selectors')
const functions = require('../sources/functions')
const userData = require('../sources/userData')

module.exports = {
    before: browser => {
        browser.url('https://cards-beta.devclock.com/login')
    },
    after: browser => {
        browser
    },
'Login': browser => {
    functions.login(browser, userData)
},

'Add deck and card': browser => {
    functions.addDeck(browser, userData)
},



}