exports.config = {
  directConnect: true,
  framework: 'jasmine2',
  baseUrl: 'https://hbogo.pl',
  specs: ['spec/hbogo.spec.js'],
  capabilities: {
    browserName: 'chrome'
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 20000
  },
  onPrepare() {
    browser.manage().window().maximize();
    browser.ignoreSynchronization = true;
    browser.driver.manage().timeouts().pageLoadTimeout(30000);
  }
}