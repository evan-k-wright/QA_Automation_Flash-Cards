module.exports = {
//Sign Up
    signUp: 'label[data-bind="text: strings.signUpTab"]',
    email: 'input[type="email"]',
    password: 'input[placeholder"Password"]',
    confPass: 'input[placeholder="Confirm Password"]',
    signupButton: '/html/body/div[2]/div[2]/div/div[2]/div[4]/div/button[3]',
    termsUseAccept: '/html/body/div[2]/div[2]/div/div[2]/button[1]',
    getStarted: '',
//Login And Out
    loggin: 'label[data-bind="text: strings.loginTab"]',
    loggingEmail: 'input[placeholder="Email"]',
    logginPassword: 'input[placeholder="Password"]',
    loginButton: 'button[class="primary"]',
    logoutBtton: 'label[data-bind="text: strings.logout"]',
//Home Page
    decks: 'label[data-bind="text: strings.decks"]',
//Add deck(s)
    addDeck: 'i[data-bind="css: strings.addIcon"]',
    deckName: 'textarea[placeholder="Enter deck name"]',
    saveDeck: 'button[class="primary"]',
//Adding card(s)
    cardAdd: 'label[data-bind="text: name"]',
    addCard: 'i[data-bind="css: strings.addIcon"]',
    cardFront: 'textarea[placeholder="Enter card front"]',
    cardBack: 'textarea[placeholder="Enter card back"]',
    saveCard: 'button[class="primary"]',
//Subscribing
    subscription: 'label[data-bind="text: strings.subscription"]',
//Deleting Account
    settings: 'label[data-bind="text: strings.settings"]',


}