# NDEx Javascript client

Webpack based NDEx client libraries (Input: ES6, Output: universal library)

## Features

- ES6 as a source.
- Exports in a [umd](https://github.com/umdjs/umd) format so your library works everywhere.
- ES6 test setup with [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/).
- Linting with [ESLint](http://eslint.org/).

## Process

```
ES6 source files
       |
       |
    esbuild
      /  \
  node    browser


  library builds compatible with node and browser
```

_Have in mind that you have to build your library before publishing. The files under the `dist` folder are the ones that should be distributed._

## Usage in node

To use the node version of the library, import `dist/node/bundle.js`
To use the browser version of the library, import `dist/browser/bundle.js`

## Getting started

1. Build your library

- Modify the testconfig.js file with the credentials of test account.
- Run `npm install` to get the project's dependencies
- Run `npm run build-prod` to produce a production version

2. Development mode

- Run `npm run build` to build a development version

3. Running the tests

- Run `npm run test`

## Scripts

- `npm run build` - produces production version of your library under the `dist` folder
- `npm run dev` - produces development version of your library and runs a watcher
- `npm run test` - well ... it runs the tests :)
