Console.log and Leave !!
========================

![Leave](https://api.travis-ci.org/Javascipt/leave.svg)

If you too think these two lines are annoying to repeat everytime you want to debug,

```javascript
    console.log(value);
    process.exit();
```

... then this package is the right choice for you

### installation

```
    $ npm install leave
```

### how does it work?

```javascript
    var leave = require('leave');
    leave(value); // will print and process.exit()
```

it has same use as console.log, here are more examples:

```javascript
    var value = 123;
    leave("value", value); // will print "value 123"
    leave("The value is %s", value); // will print "The value is 123"
```