# httpbin-lib
Lib for [httpbin](https://httpbin.org/)

## Install

```
npm i httpbin-lib
```

## Example

```js
'use strict'

const HttpBinClient = require('httpbin-lib')

const client = new HttpBinClient()

client.invokeGet()
    .then(output => console.log(output))
    .catch(e => console.log(e.message))

client.invokeStream(10)
    .then(s => {
        s.on('data', d => console.log(d))
    })
```

## License

MIT