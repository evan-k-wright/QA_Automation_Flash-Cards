const userData = require('./userData')
const selectors = require('./selectors')

//EP-70 - test1.js
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

//EP-65 - test1.js
const loginLogout = (browser, userData) => {
    browser
    .setValue(selectors.logingEmail, userData.loginEmail)
    .setValue(selectors.loginPassword, userData.loginPassword)
    .click(selectors.loginButton)
    .waitForElementVisible(selectors.logoutBtton, 3000)
    .click(selectors.logoutBtton)
}

//EP-71 - test1.js
const loginLogoutGoogle = (browser, userData) => {
    browser
        .waitForElementVisible(selectors.loginGoogle, 3000)
        .click(selectors.loginGoogle)
        .useXpath()
        .waitForElementVisible(selectors.gmailEmail, 3000)
        .setValue(selectors.gmailEmail, userData.gmailEmail)
        .click(selectors.toPassword)
        .useCss()
        .waitForElementVisible(selectors.gmailPassword, 3000)
        .setValue(selectors.gmailPassword, userData.gmailPassword)
        .useXpath()
        .click(selectors.nextButton)
        .useCss()
        .waitForElementVisible(selectors.logoutBtton, 5000)
        .click(selectors.logoutBtton)
}

//Used for all testing
const login = (browser, userData) => {
    browser
        .setValue(selectors.logingEmail, userData.loginEmail)
        .setValue(selectors.loginPassword, userData.loginPassword)
        .click(selectors.loginButton)
        .pause(3000)
}

//EP-66 - test2.js
const addDeck = (browser, userData) => {
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

//EP-67 - test2.js
const editing = (browser, userData) => {
    browser
        .click(selectors.decks)
        .useXpath()
        .waitForElementVisible(selectors.penPad, 5000)
        .click(selectors.penPad)
        .expect.element(selectors.deckTitle).text.to.equal("Decks")
    browser
        .pause(500)
        .clearValue(selectors.newDeckName)
        .pause(500)
        .setValue(selectors.newDeckName, userData.deckNameNew) 
        .click(selectors.save)     
}

//EP-67 - test2.js
const ediitngCards = (browser, userData) => {
    browser
        .pause(500)
        .click(selectors.clickDeck)
        .waitForElementVisible(selectors.cardPen, 2000)
        .click(selectors.cardPen)
        .clearValue(selectors.front)
        .setValue(selectors.front, userData.cardFront)
        .clearValue(selectors.back)
        .setValue(selectors.back, userData.cardBack)
        .click(selectors.cardSave)
}

//EP-68 - test2.js
const study = (browser) => {
    browser
        .waitForElementVisible(selectors.decks, 3000)
        .click(selectors.decks)
        .useXpath()
        .waitForElementVisible(selectors.studyButton, 2000)
        .click(selectors.studyButton)
        .waitForElementVisible(selectors.checkDeck, 2000)
        .click(selectors.checkDeck)
        .click(selectors.studyButton)
        .waitForElementVisible(selectors.studyButton,2000)
        .click(selectors.studyButton)
        .waitForElementVisible(selectors.flip, 2000)
        .click(selectors.flip)
        .click(selectors.correct)
        .click(selectors.flip)
        .click(selectors.incorrect)
}

//EP-72 - test2.js
const deletingDeckCard = (browser) => {
    browser
        .click(selectors.decks)
        .useXpath()
        .waitForElementVisible(selectors.clickDeck, 2000)
        .click(selectors.clickDeck)
        .waitForElementVisible(selectors.cardPen, 2000)
        .click(selectors.cardPen)
        .click(selectors.cardDelete)
        .expect.element(selectors.cardLabel).text.to.equal("Cards")
    browser
    .waitForElementVisible(selectors.backButton, 2000)
        .click(selectors.backButton)
        .waitForElementVisible(selectors.penPad, 2000)
        .click(selectors.penPad)
        .pause(1000)
        .click(selectors.deleteDeck)
        .waitForElementVisible(selectors.yesButton, 2000)
        .click(selectors.yesButton)
        .waitForElementNotVisible(selectors.yesButton, 2000)

}


//EP-73
const subscribe = (browser, userData) => {
    browser
        .click(selectors.subscription)
        .waitForElementPresent(selectors.upGrade, 3000)
        .click(selectors.upGrade)
        .pause(3000)
        .click(selectors.masterDay, userData.cardNumber)


}

//EP-76
const deletingAccount = (browser, userData) => {
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
    editing: editing,
    ediitngCards: ediitngCards,
    deletingDeckCard: deletingDeckCard,
    study: study,
    subscribe: subscribe,
    deleteingAccount: deletingAccount,
}