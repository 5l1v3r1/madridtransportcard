'use strict';
let fs = require('fs'),
  xml2js = require('xml2js'),
  cheerio = require('cheerio'),
  colors = require('colors'),
  inspect = require('eyes').inspector({maxLength: false});

fs.readFile("expireDate.xml", function(err, data) {
  let $ = cheerio.load(data, {xmlMode:true});
  // console.log($('a\\:sResulXMLField').text().yellow)
  $ = cheerio.load($('a\\:sResulXMLField').text(), {xmlMode:true});
/*  if(){

  }*/
  // console.log($('data').attr('label'));
  // console.log($('carga').html().blue);
  console.log($('titulos').find("[desc='Fecha de caducidad de la carga']")[0].attribs.value);

});



/*fs.readFile("response.xml", function(err, data) {
  parser.parseString(data, function(err, result) {
    let json = JSON.stringify(result);
    let s = "s:envelope";
    let ticketData = json["s:envelope"];
    console.log(ticketData);
    console.dir(JSON.stringify(result));
    console.log('Done');
  });
});*/
