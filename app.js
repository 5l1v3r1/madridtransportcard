'use strict';
let Piston = require(__dirname + "/piston/Piston");
let transportCardMadrid = new Piston(__dirname + "/piston/pistonSpecs/transportCardMadrid.json");
let inspect = require('eyes').inspector({maxLength: false});
let cheerio = require('cheerio');

/*transportCardMadrid.getCardExpireDate(2510010062803)
  .then(data => {
    console.log(data);
  });*/

transportCardMadrid.getCardExpireDateRawXML(2510010062803)
  .then(data => {
    console.log(data('a\\:sResulXMLField'));
    // console.log(data.html());
    let $ = data;
    // console.log($('a\\:sResulXMLField').text());
    // console.log(typeof cheerio.load);
    // a:sResulXMLField
    $ = cheerio.load($('a\\:sResulXMLField').text(), {xmlMode:true});
    // console.log($('carga').html());
    console.log($('titulos').find("[desc='Fecha de caducidad de la carga']")[0].attribs.value);
    // let result = $.find('a:sResulXMLField');
    // console.log(result);
  });



/*transportCardMadrid.getCardExpireDate(0010000323869)
  .then(data => {
    console.log(data);
  });*/
/*transportCardMadrid.getCardExpireDate(0010010197691)
  .then(data => {
    console.log(data);
  });*/
/*transportCardMadrid.getCardExpireDate(0010000173481)
  .then(data => {
    console.log(data);
  });*/
