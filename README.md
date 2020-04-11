# isempty-typeof
 
To check the data is empty or not. And also check the type of object wheater **Array, Object, Function, Number, String** or **Boolean**. It is very **light weight** module.

## Install

```sh
npm install isempty-typeof --save
```
## How to require/import

```javascript
import check from 'isempty-typeof';
```
or
```javascript
const check = require('isempty-typeof');
```
## Examples of how to use it

```javascript
    // To check data is empty or not
    checks.isEmpty([]); // true
    checks.isEmpty([1,2]); // false
    checks.isEmpty({}); // true
    checks.isEmpty({a:"A"}); // false
    checks.isEmpty(0); // true
    checks.isEmpty(0,true); // false

    // To check the data type.
    checks.strictTypeOf([]); //Array
    checks.strictTypeOf([1,2]); //Array
    checks.strictTypeOf({}); //Object
    
```

## Note 
 In isEmpty method if you consider zero not to a empty then send secound parameter true.
```javascript
checks.isEmpty(0); // true
checks.isEmpty(0,true); // false
```