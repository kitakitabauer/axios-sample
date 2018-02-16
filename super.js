'use strict';

const httpCli = require('./httpcli');

class superCli extends httpCli {
  constructor(baseURL, timeout, headers) {
    super(baseURL, timeout, headers);
  }

  webhp() {
    return this.get('/webhp');
  }
}

// let cli = new superCli();
// console.log(cli);
//
// cli.webhp().then(res => {
//   console.log(res);
// });

module.exports = superCli;
