const userData = require('./userData')
const selectors = require('./selectors')

//Functions 
const login = (browser, userData) => {
    browser
        .setValue(selectors.loggingEmail, userData.loginEmail)
        .setValue(selectors.logginPassword, userData.loginPass)
        .click(selectors.loginButton)
        .pause(2000)
}

const addDeck =(browser, userData) => {
    browser
        .click(selectors.decks)
        .pause(2000)
        .click(selectors.addDeck)
        .setValue(selectors.deckName, userData.deckName)
        .pause(1000)
        .click(selectors.saveDeck)
}

module.exports = {
    login: login,
    addDeck: addDeck
}