module.exports = {
//Sign Up
    signUp: 'label[data-bind="text: strings.signUpTab"]',
    email: 'input[type="email"]',
    password: 'input[placeholder"Password"]',
    confPass: 'input[placeholder="Confirm Password"]',
    signupButton: '/html/body/div[2]/div[2]/div/div[2]/div[4]/div/button[3]',
    termsUseAccept: '/html/body/div[2]/div[2]/div/div[2]/button[1]',
    getStarted: '//button[.="Get Started"]',

//Sign Up Google
    signUp: 'label[data-bind="text: strings.signUpTab"]',
    google: 'button[data-bind="click: clickLoginWithGoogle, text: strings.signUpWithGoogle, visible: signUpWithGoogleVisible"]',
    accountEmail: 'input[type="email"]',
    nextPage: '#identifierNext > content',
    ePassword: 'input[type="password"]',
    nextB: '//span[.="Next"]',
    acceptMe: '//button[.="Accept"]',

//Login And Out
    login: 'label[data-bind="text: strings.loginTab"]',
    logingEmail: 'input[placeholder="Email"]',
    loginPassword: 'input[placeholder="Password"]',
    loginButton: 'button[class="primary"]',
    logoutBtton: 'label[data-bind="text: strings.logout"]',

//Login and Logout with Google
    loginGoogle: 'button[data-bind="click: clickLoginWithGoogle, text: strings.loginWithGoogle, visible: loginWithGoogleVisible"]',
    gmailEmail: 'input[type="email"]',

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
    upGrade: 'button[data-bind="click: clickUpgrade, disable: upgradeDisabled, text: strings.upgrade"]',
    ccNumber: 'input[name="cardnumber"]',
    date: 'input[autocomplete="cc-exp"]',
    cvc: 'input[autocomplete="cc-csc"]',
    zipCode: 'input[autocomplete="postal-code"]',

//Deleting Account
    settings: 'label[data-bind="text: strings.settings"]',
    delete: 'button[class="destructive"]',
    authenticate: 'button[class="primary"]',
    password2: 'input[data-bind="attr: { placeholder: strings.passwordPlaceholder }, value: password"]',
    reauthenticate: 'button[data-bind="click: clickReauthenticateWithEmail, text: strings.reauthenticate, visible: reauthenticateWithEmailVisible"]',
    notDelete: 'button[data-bind="click: clickDeleteUserCancel, text: strings.deleteUserCancel, visible: deleteUserCancelVisible"]',
}