# urit
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

[RFC 6570][rfc] uri templates.

## Installation
```bash
$ npm install urit
```

## Usage
```js
const urit = require('urit')

const expand = urit('{?query*}')
expand({query: {first: 1, second: 2}})
// => '?first=1&second=2'
```

## Why?
I prefer using closures over methods since I never seem to remember the
right method names. This takes all the goodness from [uritemplate][uritemplate]
and wraps it in a thunk.

## See Also:
- [RFC 6570][rfc]
- [uritemplate-js](https://github.com/fxa/uritemplate-js)
- [uri-template](https://www.npmjs.com/package/uri-template)
- [url-template](https://www.npmjs.com/package/url-template)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[rfc]: http://tools.ietf.org/html/rfc6570
[uritemplate]: https://github.com/fxa/uritemplate-js

[npm-image]: https://img.shields.io/npm/v/urit.svg?style=flat-square
[npm-url]: https://npmjs.org/package/urit
[travis-image]: https://img.shields.io/travis/yoshuawuyts/urit.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/urit
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/urit.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/urit?branch=master
[downloads-image]: http://img.shields.io/npm/dm/urit.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/urit
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
