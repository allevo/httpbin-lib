'use strict'

const axios = require('axios')
const miss = require('mississippi')
const split2 = require('split2')

class HttpBinClient {
    constructor({ baseURL = 'https://httpbin.org' } = {}) {
        this.axios =  axios.create({
            baseURL,
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        })
    }

    async invokeGet() {
        const response = await this.axios.get('/get')
        return response.data
    }

    async invokeStream(n) {
        const response = await this.axios.get(`/stream/${n}`, {
            responseType: 'stream',
        })

        return miss.pipeline.obj(response.data, split2(JSON.parse))
    }
}

module.exports = HttpBinClient
