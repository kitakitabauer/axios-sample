'use strict';

const axios = require('axios');

class httpClient {
  constructor(baseURL, timeout, headers) {
    console.log('httpClient.constructor');

    this.baseURL = baseURL;

    this.cli = axios.create({
      baseURL,
      timeout,
      headers,
    });
  }

  get(path, params = {}) {
    return this.request('get', path, { params });
  }

  post(path, body = {}) {
    return this.request('post', path, body);
  }

  request(method, ...args) {
    return this.cli[method](...args)
      .then(res => {
        return Promise.resolve(res.data);
      })
      .catch(e => {
        const err = new Error();
        err.statusCode = e.response.status;
        err.message = e.response.statusText;
        return Promise.reject(err);
      });
  }
}

// let cli = new httpClient();
// cli.get('/alive').then(res => {
//   console.log(res);
// });

module.exports = httpClient;
