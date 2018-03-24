const userData = require('./userData')
const selectors = require('./selectors')

//Functions 
const login = (browser, userData) => {
    browser
        .setValue(selectors.loggingEmail, userData.loginEmail)
        .setValue(selectors.logginPassword, userData.loginPass)
        .click(selectors.loginButton)
        .pause(1000)
}

const addDeck =(browser, userData) => {
    browser
        .click(selectors.decks)
        .pause(500)
        .click(selectors.addDeck)
        .setValue(selectors.deckName, userData.deckName)
        .pause(500)
        .click(selectors.saveDeck)
        .pause(500)
        .click(selectors.cardAdd)
        .pause(500)
        .click(selectors.addCard)
        .setValue(selectors.cardFront, userData.question)
        .setValue(selectors.cardBack, userData.answer)
        .pause(500)
        .click(selectors.saveCard)
}

const subscribe =(browser, userData) => {
    browser
        .click(selectors.subscription)

}

module.exports = {
    login: login,
    addDeck: addDeck,
    subscribe: subscribe
}