const userInfo = require('./userData')
const selectors = require('./selectors')

module.exports = {

}

const login = (browser, userInfo) => {
    browser
    .setValue(selectors.loggingEmail, userData.loginEmail)
    .setValue(selectors.logginPassword, userData.loginPass)
    .click(selectors.loginButton)
}