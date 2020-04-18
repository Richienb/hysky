# hysky [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/hysky/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/hysky)

A simplified interface for the HySky API.

[![NPM Badge](https://nodei.co/npm/hysky.png)](https://npmjs.com/package/hysky)

## Install

```sh
npm install hysky
```

## Usage

```js
const hysky = require("hysky");

(async () => {
	const topAuctions = await hysky("top");

	console.log(topAuctions);
})();
```

## API

### hysky(method, options?)

#### method

Type: `string`

The [API method](https://github.com/Mlotov/HyskyAPI#working-with-the-api) to use.

#### options

Type: `object`

The options to pass to the API.
