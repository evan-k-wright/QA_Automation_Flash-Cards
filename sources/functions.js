const userData = require('./userData')
const selectors = require('./selectors')


const login = (browser, userData) => {
    browser
    .setValue(selectors.loggingEmail, userData.loginEmail)
    .setValue(selectors.logginPassword, userData.loginPass)
    .click(selectors.loginButton)
    .pause(2000)
}

module.exports = {
    login: login
}