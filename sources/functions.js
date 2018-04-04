const userData = require('./userData')
const selectors = require('./selectors')

//EP-70
const googleAdd = (browser, userData) => {
    browser
        .click(selectors.signUp)
        .waitForElementPresent(selectors.google, 3000)
        .click(selectors.google)
        .pause(3000)
        .setValue(selectors.accountEmail, userData.googleEmail)
        .pause(1000)
        .click(selectors.nextPage)
        .waitForElementVisible(selectors.ePassword, 2000)
        .setValue(selectors.ePassword, userData.googlePassword)
        .useXpath()
        .waitForElementVisible(selectors.nextB, 3000)
        .click(selectors.nextB)
        .waitForElementVisible(selectors.acceptMe, 5000)
        .click(selectors.acceptMe)
        .waitForElementPresent(selectors.getStarted, 3000)
        .click(selectors.getStarted)
}

const loginLogout = (browser, userData) => {
    browser
    .setValue(selectors.logingEmail, userData.loginEmail)
    .setValue(selectors.loginPassword, userData.loginPassword)
    .click(selectors.loginButton)
    .waitForElementVisible(selectors.logoutBtton, 3000)
    .click(selectors.logoutBtton)
}

const loginLogoutGoogle = (browser, userData) => {
    browser
        .click(selectors.loginGoogle)
        .waitForElementVisible(selectors.gmailEmail, 3000)
        .setValue(selectors.gmailEmail, userData.gmailEmail)
}

//Used for all tests
const login = (browser, userData) => {
    browser
        .setValue(selectors.logingEmail, userData.loginEmail)
        .setValue(selectors.loginPassword, userData.loginPassword)
        .click(selectors.loginButton)
        .pause(3000)
}

//EP-66
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

//EP-73
const subscribe =(browser, userData) => {
    browser
        .click(selectors.subscription)
        .waitForElementPresent(selectors.upGrade, 3000)
        .click(selectors.upGrade)
        .pause(3000)
        .setValue(selectors.ccNumber, userData.cardNumber)


}

//EP-76
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
    googleAdd: googleAdd,
    loginLogout: loginLogout,
    loginLogoutGoogle: loginLogoutGoogle,
    login: login,
    addDeck: addDeck,
    subscribe: subscribe,
    deleteingAccount: deletingAccount,
}