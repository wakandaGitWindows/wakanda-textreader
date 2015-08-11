#Create Object

```javascript
var TextReader = require("textreader");

var file     = File("/PROJECT/test.txt");
var encoding = "utf8";
var tr       = new TextReader(file, encoding);
```

#Current position

```
var position = tr.position;

tr.position++;

tr.position = 27;
```

#Read a character

```
var _char = tr.readChar(); //this call will change the position value to position + 1
```

#Read from position to position

`readFromTo(start, end)` where end is not included in the returned string.

```
var str = tr.readFromTo(10,15); //this call will not change the cursor's position
```

#Read from current position till the eof

```
var str = tr.read(); //this call will put the cursor at the end of file
```