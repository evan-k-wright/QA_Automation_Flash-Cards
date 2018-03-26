const userData = require('./userData')
const selectors = require('./selectors')

//Functions 
const login = (browser, userData) => {
    browser
        .setValue(selectors.logingEmail, userData.loginEmail)
        .setValue(selectors.loginPassword, userData.loginPassword)
        .click(selectors.loginButton)
        .waitForElementVisible(selectors.settings, 3000)
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

const deletingAccount =(browser, userData) => {
    browser
        .click(selectors.settings)
        .waitForElementVisible(selectors.delete, 2000)
        .click(selectors.delete)
        .click(selectors.authenticate)
        .pause(2000)
        .setValue(selectors.password2, userData.loginPassword)
        .click(selectors.reauthenticate)
}

module.exports = {
    login: login,
    addDeck: addDeck,
    subscribe: subscribe,
    deleteingAccount: deletingAccount,
}