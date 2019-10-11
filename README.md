# ss-e2e

ss - end to end testing

## Setup

Use npm to install Protractor globally with:

`npm install -g protractor`

- This will install two command line tools, `protractor` and `webdriver-manager`

- Try running to make sure it's working.

  `protractor --version`

- The `webdriver-manager` is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

`webdriver-manager update`

- Now start up a server with:

`webdriver-manager start`

- This will start up a Selenium Server and will output a bunch of info logs

## To check Jasmine Version

`npm view jasmine version`

## To Run Protractor

`protractor config.js`
