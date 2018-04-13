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
    gmailEmail: '(//input[@class="whsOnd zHQkBf"])[1]',
    toPassword: '(//span[@class="RveJvd snByac"])[2]',
    gmailPassword: 'input[type="password"]',
    nextButton: '(//span[@class="RveJvd snByac"])[1]',

//Home Page and stuff
    decks: 'label[data-bind="text: strings.decks"]',
    contactUs: 'label[data-bind="text: strings.contact"]', 
    settings: 'label[data-bind="text: strings.settings"]',
    backArrow: 'i[data-bind="css: strings.backIcon"]',

//Add deck(s)
    addDeck: 'i[data-bind="css: strings.addIcon"]',
    deckName: 'textarea[placeholder="Enter deck name"]',
    dayMastery: 'input[type="range"]',
    saveDeck: 'button[class="primary"]',

//Adding card(s)
    cardAdd: 'label[data-bind="text: name"]',
    addCard: 'i[data-bind="css: strings.addIcon"]',
    cardFront: 'textarea[placeholder="Enter card front"]',
    cardBack: 'textarea[placeholder="Enter card back"]',
    saveCard: 'button[class="primary"]',

//Edit Decks
    deckTitle: '//label[@data-bind="text: strings.title"]',
    penPad: '(//i[@class="fa fa-2x fa-pencil-square-o"])[1]',
    newDeckName: '//textarea[@rows="1"]',
    masterDay: '//input[@type="range"]',
    save: '//button[@data-bind="click: clickSave, disable: saveDisabled, text: strings.save, visible: saveVisible"]',
    
//Edit Cards
    clickDeck: '(//div[@class="col-12-12"])[1]',
    cardPen: '//i[@class="fa fa-2x fa-pencil-square-o"]',
    front: '(//textarea[@rows="1"])[1]',
    back: '//textarea[@placeholder="Enter card back"]',
    cardSave: '//button[.="Save"]',
    
//Search
    search: 'input[placeholder="Search"]',
    frontOfCard: 'pre[data-bind="text: front.content, visible: edit() === false"]',
    backOfCard: 'pre[data-bind="text: back.content, visible: edit() === false"]',

//Study
    studyButton: '//button[@class="primary study"]',
    checkDeck: '(//i[@class="fa fa-square-o"])[1]',
    flip: '//button[@class="flip"]',
    correct: '//button[@class="correct"]',
    incorrect: '//button[@class="incorrect"]',

//Deleting card and deck
    cardDelete: '//button[@class="destructive"]',
    cardLabel: '//label[@data-bind="text: strings.title"]',
    backButton: '//i[@data-bind="css: strings.backIcon"]',
    deleteDeck: '(//button[@class="destructive"])[1]',
    yesButton: '//button[.="Yes"]',
    trashCan: '//i[@data-bind="click: $parent.clickDeleteUser"]',

//Subscribing
    subscription: 'label[data-bind="text: strings.subscription"]',
    upGrade: 'button[data-bind="click: clickUpgrade, disable: upgradeDisabled, text: strings.upgrade"]',
    ccNumber: 'input[autocomplete="cc-number"]',
    date: 'input[autocomplete="cc-exp"]',
    cvc: 'input[autocomplete="cc-csc"]',
    zipCode: 'input[autocomplete="postal-code"]',

//Contact US
    contactTitle: 'h1[class="page-title"]',

//Settings
    settingsPen: 'i[class="fa fa-2x fa-pencil-square-o"]',
    authenticateSettings: '(//button[@class="primary"])[1]',
    yourName: '(//input[@type="text"])[1]',
    saveName: '(//button[@class="primary"])[1]',
    termsOfUse: '//label[@data-bind="text: strings.termsOfUse"]',
    privacyPolicy: '//label[.="Privacy Policy"]',

//Deleting Account
    delete: 'button[class="destructive"]',
    authenticate: 'button[class="primary"]',
    password2: 'input[data-bind="attr: { placeholder: strings.passwordPlaceholder }, value: password"]',
    reauthenticate: 'button[data-bind="click: clickReauthenticateWithEmail, text: strings.reauthenticate, visible: reauthenticateWithEmailVisible"]',
    notDelete: 'button[data-bind="click: clickDeleteUserCancel, text: strings.deleteUserCancel, visible: deleteUserCancelVisible"]',
}