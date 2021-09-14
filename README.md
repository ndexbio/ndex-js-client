# NDEx Javascript client

Webpack based NDEx client libraries (Input: ES6, Output: universal library)

_Have in mind that you have to build your library before publishing. The files under the `dist` folder are the ones that should be distributed._

## Getting started

1. Build your library

- Modify the testconfig.js file with the credentials of test account.
- Run `npm install` to get the project's dependencies
- Run `npm run build` to produce a bundle

2. Running the tests

- Run `npm run test`

## Scripts

- `npm run build` - produces production version of your library under the `lib` folder
- `npm run test` - well ... it runs the tests :)
