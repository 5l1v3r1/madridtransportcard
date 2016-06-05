'use strict';
function parseResponse (response) {
  let contentType = response.headers['content-type'];
  let data;
  let cheerio = require('cheerio');

  if (contentType.indexOf('application/json') !== -1) {
    data = JSON.parse(response.body);
  } else if (contentType.indexOf('text/xml') !== -1) {
    data = cheerio.load(response.body, {xmlMode:true});
  }
  return data;
}

module.exports = parseResponse;
