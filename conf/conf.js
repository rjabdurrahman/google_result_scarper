exports.config = {
    directConnect: true,
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../tests/search-test.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 250000
    },
}