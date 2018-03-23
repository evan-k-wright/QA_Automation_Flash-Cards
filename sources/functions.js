const userData = require('./userData')
const selectors = require('./selectors')

module.exports = {
    login: login
}

const login = (browser, userInfo) => {
    browser
    .setValue(selectors.loggingEmail, userData.loginEmail)
    .setValue(selectors.logginPassword, userData.loginPass)
    .click(selectors.loginButton)
}