'use strict';

describe('dataSourceConsumer', function(){
    let dataSourceConsumer = require('../dataSourceConsumer.js');
    let cardID;
    let callback;

    it('returns false if an error occurs', function(done){
        cardID = "fakeCardId";
        expect(dataSourceConsumer(cardID)).toEqual('Error on the API request');
        done();
    });
})