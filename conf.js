exports.config = {
    directConnect: true,
    framework: 'jasmine2',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'https://hbogo.pl',
    specs: ['spec/hbogo.spec.js'],
    capabilities: {
      browserName: 'chrome'
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
      },
    onPrepare() {
        browser.manage().window().maximize();
        browser.ignoreSynchronization = true;
        browser.driver.manage().timeouts().pageLoadTimeout(40000);
      }
  }