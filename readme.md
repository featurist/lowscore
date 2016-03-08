# Lowscore [![npm version](https://img.shields.io/npm/v/lowscore.svg)](https://www.npmjs.com/package/lowscore) [![npm](https://img.shields.io/npm/dm/lowscore.svg)](https://www.npmjs.com/package/lowscore)

A very lightweight underscore, for browser apps that like to watch their weight.

Note, this is a very incomplete implementation of underscore, partly because many of underscore's functions can be found on `Array` and `Object` now, and also partly because I'm lazy. Pull requests for missing functions will be accepted gladly.

# API

You can either import all of lowscore, or just the parts you need.

```js
var _ = require('lowscore');
_.groupBy(...);
_.indexBy(...);

var groupBy = require('lowscore/groupBy');
var indexBy = require('lowscore/indexBy');
...
```

## groupBy (165 bytes)

```js
var groupBy = require('lowscore/groupBy');
var groups = groupBy(list, iteratee);
```

Splits a collection into sets, grouped by the result of running each value through iteratee. If iteratee is a string instead of a function, groups by the property named by iteratee on each of the values.

```js
groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });
=> {1: [1.3], 2: [2.1, 2.4]}

groupBy(['one', 'two', 'three'], 'length');
=> {3: ["one", "two"], 5: ["three"]}
```

## indexBy (144 bytes)

```js
var indexBy = require('lowscore/indexBy');
var index = indexBy(list, iteratee);
```

Given a list, and an iteratee function that returns a key for each element in the list (or a property name), returns an object with an index of each item. Just like groupBy, but for when you know your keys are unique.

```js
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
indexBy(stooges, 'age');
=> {
  "40": {name: 'moe', age: 40},
  "50": {name: 'larry', age: 50},
  "60": {name: 'curly', age: 60}
}
```

## range (118 bytes)

```js
var range = require('lowscore/range');
var r = range([start], stop, [step]);
```

A function to create flexibly-numbered lists of integers, handy for each and map loops. start, if omitted, defaults to 0; step defaults to 1. Returns a list of integers from start (inclusive) to stop (exclusive), incremented (or decremented) by step, exclusive. Note that ranges that stop before they start are considered to be zero-length instead of negative — if you'd like a negative range, use a negative step.

```js
range(10);
=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
range(1, 11);
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
range(0, 30, 5);
=> [0, 5, 10, 15, 20, 25]
range(0, -10, -1);
=> [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
range(0);
=> []
```

## times (77 bytes)

```js
var times = require('lowscore/times');
var t = times(n, iteratee);
```

Invokes the given iteratee function n times. Each invocation of iteratee is called with an index argument. Produces an array of the returned values. 

```js
times(3, function(n){ return "item: " + n; });
=> ['item: 0', 'item: 1', 'item: 2']
```
