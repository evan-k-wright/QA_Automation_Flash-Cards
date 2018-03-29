const userData = require('./userData')
const selectors = require('./selectors')

//Functions 
const login = (browser, userData) => {
    browser
        .setValue(selectors.logingEmail, userData.loginEmail)
        .setValue(selectors.loginPassword, userData.loginPassword)
        .click(selectors.loginButton)
        .pause(3000)
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
        .waitForElementPresent(selectors.upGrade, 3000)
        .click(selectors.upGrade)
        .waitForElementPresent(selectors.ccNumber, 3000)
        .setValue(selectors.ccNumber, userData.cardNumber)


}

const deletingAccount =(browser, userData) => {
    browser
        .click(selectors.settings)
        .waitForElementVisible(selectors.delete, 2000)
        .click(selectors.delete)
        .click(selectors.authenticate)
        .pause(1000)
        .setValue(selectors.password2, userData.loginPassword)
        .click(selectors.reauthenticate)
        .pause(1000)
        .click(selectors.delete)
        .useXpath()
        .waitForElementVisible('//label[.="Are you sure you want to delete your account? Your data will be PERMANENTLY deleted and cannot be recovered."]', 10000)
        .useCss()
        .click(selectors.delete)
        .waitForElementNotPresent(selectors.notDelete, 2000)
        
}

module.exports = {
    login: login,
    addDeck: addDeck,
    subscribe: subscribe,
    deleteingAccount: deletingAccount,
}