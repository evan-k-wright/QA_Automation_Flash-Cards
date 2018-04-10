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
        .pause(1000)
        .click(selectors.addDeck)
        .waitForElementVisible(selectors.deckName, 5000)
        .setValue(selectors.deckName, userData.deckName)
        .pause(1000)
        .click(selectors.saveDeck)
        .pause(1000)
        .click(selectors.cardAdd)
        .pause(1000)
        .click(selectors.addCard)
        .setValue(selectors.cardFront, userData.question)
        .setValue(selectors.cardBack, userData.answer)
        .pause(1000)
        .click(selectors.saveCard)
        .waitForElementVisible(selectors.addCard, 5000)
        .click(selectors.addCard)
        .pause(1000)
        .setValue(selectors.cardFront, userData.questionTwo)
        .setValue(selectors.cardBack, userData.answerTwo)
        .waitForElementVisible(selectors.saveCard, 5000)
        .click(selectors.saveCard)
        .waitForElementVisible(selectors.backArrow, 5000)
        .click(selectors.backArrow)
}

//EP-67 - test2.js
const editing = (browser, userData) => {
    browser
        //.click(selectors.decks)
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
        .pause(500)    
}

//EP-67 - test2.js
const editingCards = (browser, userData) => {
    browser
        // .pause(500)
        .click(selectors.clickDeck)
        .waitForElementVisible(selectors.cardPen, 5000)
        .click(selectors.cardPen)
        .waitForElementPresent(selectors.front, 5000)
        .clearValue(selectors.front)
        .setValue(selectors.front, userData.cardFront)
        .clearValue(selectors.back)
        .setValue(selectors.back, userData.cardBack)
        .click(selectors.cardSave)
        .useCss()
        .waitForElementVisible(selectors.backArrow, 5000)
        .click(selectors.backArrow)
}

//EP-102 - test2.js
const searchBar = (browser, userData) => {
    browser
        .click(selectors.decks)
        .pause(1000)
        .click(selectors.clickDeck)
        .waitForElementVisible(selectors.search, 5000)
        .setValue(selectors.search, userData.searchCard)
        .assert.containsText(selectors.frontOfCard, userData.frontCard)
        .assert.containsText(selectors.backOfCard, userData.backCard)

}

//EP-68 - test2.js
const study = (browser) => {
    browser
        // .waitForElementVisible(selectors.decks, 3000)
        // .click(selectors.decks)
        .useXpath()
        .waitForElementVisible(selectors.studyButton, 5000)
        .click(selectors.studyButton)
        .waitForElementVisible(selectors.checkDeck, 5000)
        .click(selectors.checkDeck)
        .click(selectors.studyButton)
        .waitForElementVisible(selectors.studyButton,5000)
        .click(selectors.studyButton)
        .waitForElementVisible(selectors.flip, 5000)
        .click(selectors.flip)
        .click(selectors.correct)
        .click(selectors.flip)
        .click(selectors.incorrect)
        .useCss()
        .click(selectors.backArrow)
        .waitForElementVisible(selectors.backArrow, 5000)
        .click(selectors.backArrow)
}

//EP-72 - test2.js
const deletingDeckCard = (browser) => {
    browser
        //.click(selectors.decks)
        .useXpath()
        .waitForElementVisible(selectors.clickDeck, 5000)
        .click(selectors.clickDeck)
        .pause(1000)
        .click(selectors.cardPen)
        .click(selectors.cardDelete)
        .expect.element(selectors.cardLabel).text.to.equal("Cards")
    browser
    .waitForElementVisible(selectors.backButton, 5000)
        .click(selectors.backButton)
        .waitForElementVisible(selectors.penPad, 5000)
        .click(selectors.penPad)
        .pause(1000)
        .click(selectors.deleteDeck)
        .pause(1000)
        .click(selectors.yesButton)
        .pause(15000)
        //Must wait so the alert will pop up.
        .acceptAlert()
        .pause(500)
        .useCss()
        .click(selectors.backArrow)
        .waitForElementVisible(selectors.contactUs, 5000)

}


//EP-73
const subscribe = (browser, userData) => {
    browser
        .click(selectors.subscription)
        .waitForElementVisible(selectors.upGrade, 5000)
        .click(selectors.upGrade)
        .pause(3000)
        .setValue(selectors.ccNumber, userData.cardNumber)
}

//EP-76 - test3.js
const contact = (browser) => {
    browser
        .click(selectors.contactUs)
        .expect.element(selectors.contactTitle).text.to.equal("Oops! That page can’t be found.")
    browser
        .back()
}

//EP-75
const settings = (browser, userData) => {
    browser
        .waitForElementVisible(selectors.settings, 5000)
        .click(selectors.settings)
        .waitForElementVisible(selectors.settingsPen, 5000)
        .click(selectors.settingsPen)
        .useXpath()
        .click(selectors.authenticateSettings)
        .useCss()
        .waitForElementVisible(selectors.password2, 5000)
        .setValue(selectors.password2, userData.loginPassword)
        .click(selectors.reauthenticate)
        .waitForElementVisible(selectors.settingsPen, 5000)
        .click(selectors.settingsPen)
        .useXpath()
        .setValue(selectors.yourName, userData.myName)
        .waitForElementVisible(selectors.saveName, 5000)
        .click(selectors.saveName)
        .click(selectors.termsOfUse)
        .waitForElementVisible(selectors.backButton, 5000)
        .click(selectors.backButton)
        .waitForElementVisible(selectors.privacyPolicy, 5000)
        .click(selectors.privacyPolicy)
        .waitForElementVisible(selectors.backButton, 5000)
        .click(selectors.backButton)

}

//EP-76
const deletingAccount = (browser) => {
    browser
        // .waitForElementVisible(selectors.settings, 2000)
        // .click(selectors.settings)
        .waitForElementVisible(selectors.delete, 5000)
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
        .assert.visible(selectors.notDelete)
        
}

module.exports = {
    googleAdd: googleAdd,
    loginLogout: loginLogout,
    loginLogoutGoogle: loginLogoutGoogle,
    login: login,
    addDeck: addDeck,
    editing: editing,
    editingCards: editingCards,
    searchBar: searchBar,
    deletingDeckCard: deletingDeckCard,
    study: study,
    subscribe: subscribe,
    contact: contact,
    settings: settings,
    deleteingAccount: deletingAccount,
}