'use strict';
let dataSourceConsumer = require('./dataSourceConsumer.js');
let cardID = 'YOURCARDID';

/**
 * [saveDateToDb mock function to show usage of this module]
 * 
 */
let saveDateToDb = function(date){
	console.log(date);
}

/**
 * [compareDateInDb mock function to show usage of this module]
 *
 */
let compareDateInDb = function(date){

}

dataSourceConsumer(cardID);
dataSourceConsumer(cardID, saveDateToDb);
dataSourceConsumer(cardID, compareDateInDb);
