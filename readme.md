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

## find (87 bytes)

```js
var find = require('lowscore/find');
var found = find(list, predicate);
```

Looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.

```js
var even = find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=> 2
```

## findIndex (95 bytes)

```js
var findIndex = require('lowscore/findIndex');
var foundIndex = findIndex(list, predicate);
```

Returns the first index where the predicate truth test passes; otherwise returns -1.

```js
findIndex([4, 6, 8, 12], isPrime);
=> -1 // not found
findIndex([4, 6, 7, 12], isPrime);
=> 2
```

## sortBy (323 bytes)

```js
var sortBy = require('lowscore/sortBy');
var sorted = sortBy(list, iteratee);
```

Returns a (stably) sorted copy of list, ranked in ascending order by the results of running each value through iteratee. iteratee may also be the string name of the property to sort by (eg. length).

```js
sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });
=> [5, 4, 6, 3, 1, 2]

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
sortBy(stooges, 'name');
=> [{name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}];
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

## pick (272 bytes)

```js
var pick = require('lowscore/pick');
pick(object, *keys);
```

Return a copy of the object, filtered to only have values for the whitelisted keys (or array of valid keys). Alternatively accepts a predicate indicating which keys to pick.

```js
pick({name: 'moe', age: 50, userid: 'moe1'}, 'name', 'age');
=> {name: 'moe', age: 50}
pick({name: 'moe', age: 50, userid: 'moe1'}, function(value, key, object) {
  return isNumber(value);
});
=> {age: 50}
```

## flatten (161 bytes)

```js
var flatten = require('lowscore/flatten');
var r = flatten(array, [shallow]);
```

Flattens a nested array (the nesting can be to any depth). If you pass shallow, the array will only be flattened a single level.

```js
flatten([1, [2], [3, [[4]]]]);
=> [1, 2, 3, 4];

flatten([1, [2], [3, [[4]]]], true);
=> [1, 2, 3, [[4]]];
```

## compact (67 bytes)

```js
var compact = require('lowscore/compact');
var a = compact(array);
```

Returns a copy of the array with all falsy values removed. In JavaScript, false, null, 0, "", undefined and NaN are all falsy.

```js
compact([0, 1, false, 2, '', 3]);
=> [1, 2, 3]
```

## without (135 bytes)

```js
var without = require('lowscore/without');
var a = without(array, *values);
```

Returns a copy of the array with all instances of the values removed.

```js
without([1, 2, 1, 0, 3, 1, 4], 0, 1);
=> [2, 3, 4]
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

## extend (142 bytes)

```js
var extend = require('lowscore/extend');
var destination = extend(destination, *sources);
```

Copy all of the properties in the source objects over to the destination object, and return the destination object. It's in-order, so the last source will override properties of the same name in previous arguments.

```js
extend({name: 'moe'}, {age: 50});
=> {name: 'moe', age: 50}
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

## values (80 bytes)

```js
var values = require('lowscore/values');
var t = values(n, iteratee);
```

Return all of the values of the object's own properties.

```js
values({one: 1, two: 2, three: 3});
=> [1, 2, 3]
```

## uniq (108 bytes)

```js
var uniq = require('lowscore/uniq');
var t = uniq(array);
```

Remove duplicate entries from the array.

```js
uniq([1, 2, 2, 3, 1, 2]);
=> [1, 2, 3]
```

## zip (230 bytes)

```js
var zip = require('lowscore/zip');
var zipped = zip(*arrays);
```

Merges together the values of each of the arrays with the values at the corresponding position. Useful when you have separate data sources that are coordinated through matching array indexes. Use with apply to pass in an array of arrays. If you're working with a matrix of nested arrays, this can be used to transpose the matrix.

```js
_.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
=> [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]
```
