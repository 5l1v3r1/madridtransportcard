var request = require("request");

var options = {
  method: 'POST',
  url: 'http://www.citram.es:50081/VENTAPREPAGOTITULO/VentaPrepagoTitulo.svc',
  qs: {
    'wsdl': ''
  },
  headers: {
    'cache-control': 'no-cache',
    'content-type': 'text/xml',
    connection: 'Keep-Alive',
    soapaction: 'http://tempuri.org/IVentaPrepagoTitulo/ConsultaSaldoTarjeta1'
  },
  body: "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:tem=\"http://tempuri.org/\"><soapenv:Header/><soapenv:Body><tem:ConsultaSaldoTarjeta1><tem:sNumeroTP>2510010062803</tem:sNumeroTP><tem:sLenguaje>es</tem:sLenguaje><tem:sTipoApp>APP_SALDO_ANDROID</tem:sTipoApp></tem:ConsultaSaldoTarjeta1></soapenv:Body></soapenv:Envelope>"
};

request(options, function(error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
