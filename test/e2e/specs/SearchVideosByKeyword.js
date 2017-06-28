// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'search youtube videos by keyword': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.container')
      .assert.elementPresent('input')
      .assert.elementPresent('button')
      .assert.containsText('h1', 'Haiku Ninja')
      .setValue('input[type=text]', 'keyboard cat')
      .click('#search-submit')
      .pause(5000)
      .assert.elementPresent('#video-results')
      .end()
  }
}
