var Piston = require(__dirname + "/piston/Piston");
var transportCardMadrid = new Piston(__dirname + "/pistonSpecs/transportCardMadrid.json");

/*transportCardMadrid.getCardExpireDate(2510010062803)
  .then(function() {
    console.log(transportCardMadrid.getResponse());
  });*/
transportCardMadrid.getCardExpireDate(0010000323869)
  .then(function() {
    console.log(transportCardMadrid.getResponse()[0]);
  });
/*transportCardMadrid.getCardExpireDate(0010010197691)
  .then(function() {
    console.log(transportCardMadrid.getResponse());
  });*/
