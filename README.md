#JSONBigNumber

JSONBigNumber.parse/stringify handling **all** JSON numbers using BigNumber.
Based on Douglas Crockford [JSON.js](https://github.com/douglascrockford/JSON-js)
package and [bignumber.js](https://github.com/MikeMcl/bignumber.js) library.

[![Build Status](https://travis-ci.org/wbuss/JSONBigNumber.svg?branch=master)](https://travis-ci.org/wbuss/JSONBigNumber)

##Usage

All JSON numbers will be passed to BigNumber in the JavaScript object returned from
JSONBigNumber.parse()

###example
```js
var input = '{"big":1234567890.123456789,"small":789.012}';

var obj1 = JSON.parse(input);
console.log("JSON", obj1.big.toString());  //'JSON', '1234567890.1234567'
//The number has lost the last 2 digits
var out1 = JSON.stringify(obj1);
console.log("JSON", out2);  //'JSON', '{"big":1234567890.1234567,"small":789.012}'

var obj2 = JSONBigNumber.parse(input);
console.log("JSONBigNumber", obj2.big.toString());  //'JSONBigNumber', '1234567890.123456789'
//No loss of precision
var out2 = JSONBigNumber.stringify(obj2);
console.log("JSONBigNumber", out2);  //'JSONBigNumber', '{"big":1234567890.123456789,"small":789.012}'
```
JSONBigNumber.js: This file creates a JSONBigNumber property in the global object,
setting its value to an object containing a stringify
method and a parse method. The parse method uses recursive descent to do the
parsing.

JSON is a light-weight, language independent, data interchange format.
See http://www.JSON.org/

JSON became a built-in feature of JavaScript when the ECMAScript Programming
Language Standard - Fifth Edition was adopted by the ECMA General Assembly
in December 2009. Unfortunately the built-in JSON handler makes use of JavaScript
Number for handling Numbers in JSON causing the loss of precision for numbers
with approximately 15 significant figures.
