#!/usr/bin/node

const argv = process.argv;
const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films';
const id = argv[2];

request(url + '/' + id, function (error, response, body) {
  if (error) {
    return console.log(error);
  }
  const title = JSON.parse(body).title;
  console.log(title);
});
