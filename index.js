'use strict';

// const axios = require('axios');

const superCli = require('./super');

// let cli = axios.create({
//   baseURL: 'https://www.google.co.jp'
// });
//
//cli.get()
//  .then(res => {
//    console.log(`status: ${res.status}`);
//    console.log(`statusText: ${res.statusText}`);
//    console.log(`headers: ${JSON.stringify(res.headers, null, 4)}`);
//    console.log(`config: ${JSON.stringify(res.config, null, 4)}`);
//    console.log(`body: ${JSON.stringify(res.data, null, 4)}`);
//  })
//  .catch(err => {
//    console.log(`err: ${err}`);
//  });
//
//cli.get('/dead')
//  .then(res => {
//    console.log(`status: ${res.status}`);
//    console.log(`body: ${JSON.stringify(res.data, null, 4)}`);
//  })
//  // ステータスコードが200以外だとエラーとして処理される
//  .catch(err => {
//    // const { response } = err;
//    const { response } = err;
//    console.log('err: ', err);
//    console.log('response: ', response);
//    const { status, statusText } = response || {};
//    console.log(status, statusText);
//    if (err.response) {
//      console.log(`error.response.data: ${err.response.data}`);
//      console.log(`error.response.status: ${err.response.status}`);
//      console.log(`error.response.statusText: ${err.response.statusText}`);
//      console.log(`error.response.headers: ${JSON.stringify(err.response.headers, null, 4)}`);
//    } else if (err.request) {
//      console.log(`error.request: ${err.request}`);
//    }
//    console.log(`err: ${err}`);
//  });

console.log('superCli start');
let sCli = new superCli('https://www.google.co.jp', 1000, {
  'Accept-Language': ['ja', 'en'],
  Accept: 'application/json',
  'User-Agent': 'test client',
});
sCli.webhp().then(res => {
  console.log(res);
});
