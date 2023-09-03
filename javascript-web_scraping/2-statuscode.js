#!/usr/bin/node

const argv = process.argv;
const request = require('request');

request(argv[2], function (error, response, body) {
  if (error) {
    return console.log(error);
  }
  console.log('code:', response.statusCode);
});
