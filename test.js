'use strict'

const HttpBinClient = require('./index')

const client = new HttpBinClient()

client.invokeGet()
    .then(output => console.log(output))
    .catch(e => console.log(e.message))

client.invokeStream(10)
    .then(s => {
        s.on('data', d => console.log(d))
    })