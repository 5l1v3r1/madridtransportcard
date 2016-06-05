'use strict';
let Piston = require(__dirname + "/piston/Piston");
let transportCardMadrid = new Piston(__dirname + "/piston/pistonSpecs/transportCardMadrid.json");
let cheerio = require('cheerio');
let moment = require('moment');

module.exports = function(cardID, callback){
  transportCardMadrid.getCardExpireDateRawXML(cardID)
  .then(data => {
    let $ = data;
    $ = cheerio.load($('a\\:sResulXMLField').text(), {xmlMode:true});
    
    let result;
    if($('titulos').find("[desc='Fecha de caducidad de la carga']").html()!==null){
    	result = $('titulos').find("[desc='Fecha de caducidad de la carga']")[0].attribs.value;
    }

    let date;
    if(result !== undefined){
    	date = moment(result, 'YYYY-MM-DD');
    	date = date.format('DD-MM-YYYY');
    } else{
    	console.log('Error on the API request');
    	return 'Error on the API request';
    }

    if(callback!==undefined){
    	callback(date);
    }else{
		console.log(date);	
    }    
  });
}