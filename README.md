# 0x/BigNumber for JSONBigNumber

This fork of JSONBigNumber explicitly uses [0x/BigNumber](https://github.com/0xProject/tools/blob/development/utils/src/configured_bignumber.ts) for JSONBigNumber.
0x's BigNumber is a thin wrapper around bignumber.js that prevents large numbers from being converted to exponents.

# JSONBigNumber

JSONBigNumber.parse/stringify handling **all** JSON numbers using BigNumber.
Based on Douglas Crockford [JSON.js](https://github.com/douglascrockford/JSON-js)
package and [bignumber.js](https://github.com/MikeMcl/bignumber.js) library.

[![Build Status](https://travis-ci.org/wbuss/JSONBigNumber.svg?branch=master)](https://travis-ci.org/wbuss/JSONBigNumber)
[![Known Vulnerabilities](https://snyk.io/test/github/wbuss/jsonbignumber/badge.svg)](https://snyk.io/test/github/wbuss/jsonbignumber)

## Usage

All JSON numbers will be passed to BigNumber in the JavaScript object returned from
JSONBigNumber.parse()

### example
```js
let input = '{"big":1234567890.123456789,"small":789.012}';

let obj1 = JSON.parse(input);
console.log("JSON", obj1.big.toString());  //'JSON', '1234567890.1234567'
//The number has lost the last 2 digits
let out1 = JSON.stringify(obj1);
console.log("JSON", out1);  //'JSON', '{"big":1234567890.1234567,"small":789.012}'

let obj2 = JSONBigNumber.parse(input);
console.log("JSONBigNumber", obj2.big.toString());  //'JSONBigNumber', '1234567890.123456789'
//No loss of precision
let out2 = JSONBigNumber.stringify(obj2);
console.log("JSONBigNumber", out2);  //'JSONBigNumber', '{"big":1234567890.123456789,"small":789.012}'
```
JSONBigNumber.js: This file creates a JSONBigNumber property in the global object,
setting its value to an object containing a stringify
method and a parse method. The parse method uses recursive descent to do the
parsing.

### Note
For bignumber.js >= v6.0.0 use JSONBigNumber >= v1.0.0
For bignumber.js < v6.0.0 use JSONBigNumber < v1.0.0

JSON is a light-weight, language independent, data interchange format.
See http://www.JSON.org/

JSON became a built-in feature of JavaScript when the ECMAScript Programming
Language Standard - Fifth Edition was adopted by the ECMA General Assembly
in December 2009. Unfortunately the built-in JSON handler makes use of JavaScript
Number for handling Numbers in JSON causing the loss of precision for numbers
with approximately 15 significant figures.
