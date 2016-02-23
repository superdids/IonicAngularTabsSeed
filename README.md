# IonicAngularTabsSeed

(Note that you need npm and ionic installed)

Clone the project: 

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

If errors occur, try to install the following items globally: 

`npm install -g karma-cli`

`npm install -g gulp`

`npm install -g protractor`

