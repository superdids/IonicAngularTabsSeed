# IonicAngularTabsSeed

Before you get started, make sure you install:

[node.js](https://nodejs.org/en/download/)

Once node.js is installed, you can use npm in the terminal/command prompt to install:

* `npm install -g cordova ionic`

* `npm install -g karma-cli`

* `npm install -g gulp`

* `npm install -g bower`

* `npm install -g protractor`

Once protractor is installed, you should install the Selenium WebDriver:

* `webdriver-manager update`

Now you can get get the project by cloning it: 

`git clone https://github.com/superdids/IonicAngularTabsSeed.git`

`cd IonicAngularTabsSeed` (or whatever you named the project folder)

Install developer dependencies with npm:

`npm install`

Gulp has been configured to run the unit tests, simply run:

`gulp unit` (in the root of the folder)

To run protractor, first spawn the server by running the following command in the root folder:

`ionic serve` (note that you will need to open a new cmd/terminal window to do the next commands.)

Navigate to the tests folder with  `cd tests` and run the following command:

`protractor e2e.conf.js`





