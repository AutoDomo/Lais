// MQTT Setup
var mqtt = require('mqtt');
console.log('Conectado para o Servidor Broker MQTT...');
var mqtt = require('mqtt');
var options = {
  port: 1883,
  host: 'localhost',
  username: 'autohome',     //muda aqui quando mudar dados de acesso
  password: 'comida05',     //muda aqui quando mudar dados de acesso
  clientId: '15AAB7CED3B1' //muda aqui para cada novo dispositivo
};
var client = mqtt.connect(options);
console.log('Dispositivo Conectado para MQTT broker');

client.subscribe('/house/confirma/15AAB7CED3B1');
client.on('message', function(topic, message) {
  console.log('Temp = ' + message);
  
  
    if (message == 'On') {
    	LAMPADA_AUTOHOME.powerOn = true;
    light
      .getService(Service.Lightbulb)
		.updateCharacteristic(Characteristic.On, true);
      console.log('on');
   	}
    else {
      LAMPADA_AUTOHOME.powerOn = false;
	light
      .getService(Service.Lightbulb)
		.updateCharacteristic(Characteristic.On, false);
      console.log('false');
   };


});

var Accessory = require('../').Accessory;
var Service = require('../').Service;
var Characteristic = require('../').Characteristic;
var uuid = require('../').uuid;

// here's a fake hardware device that we'll expose to HomeKit
var LAMPADA_AUTOHOME = {
  powerOn: false,

  setPowerOn: function(on) {
    console.log('Atuando Dispositvo %s!', on ? '1' : '0');
    if (on) {
      client.publish('/house/agrupamento/15AAB7CED3B1', '1', {retain: true});   //Topico a Ser alterado
      LAMPADA_AUTOHOME.powerOn = on;
   	}
    else {
	    client.publish('/house/agrupamento/15AAB7CED3B1','0', {retain: true});   //Topico a ser alterado
      LAMPADA_AUTOHOME.powerOn = false;
   };

  },
  identify: function() {
    console.log('Identificando o Dispositivo!');
  }
}

// Generate a consistent UUID for our light Accessory that will remain the same even when
// restarting our server. We use the `uuid.generate` helper function to create a deterministic
// UUID based on an arbitrary 'namespace' and the word 'Christmaslight'.
var lightUUID = uuid.generate('hap-nodejs:accessories:TodaaCasa');

// This is the Accessory that we'll return to HAP-NodeJS that represents our fake light.
var light = exports.accessory = new Accessory('Toda a Casa', lightUUID);


// Add properties for publishing (in case we're using Core.js and not BridgedCore.js)
light.username = '15:AA:B7:CE:D3:B1:D8:C7';
light.pincode = '537-61-788';

// set some basic properties (these values are arbitrary and setting them is optional)
light
  .getService(Service.AccessoryInformation)
  .setCharacteristic(Characteristic.Manufacturer, 'AutoHome')
  .setCharacteristic(Characteristic.Model, '001')
  .setCharacteristic(Characteristic.SerialNumber, 'A10001');

// listen for the 'identify' event for this Accessory
light.on('identify', function(paired, callback) {
  LAMPADA_AUTOHOME.identify();
  callback(); // success
});

// Add the actual Lightbulb Service and listen for change events from iOS.
// We can see the complete list of Services and Characteristics in `lib/gen/HomeKitTypes.js`
light
  .addService(Service.Lightbulb, 'Toda a Casa') // services exposed to the user should have 'names' like 'Fake Light' for us
  .getCharacteristic(Characteristic.On)
  .on('set', function(value, callback) {
    LAMPADA_AUTOHOME.setPowerOn(value);
    callback(); // Our fake Light is synchronous - this value has been successfully set
  });

// We want to intercept requests for our current power state so we can query the hardware itself instead of
// allowing HAP-NodeJS to return the cached Characteristic.value.
light
  .getService(Service.Lightbulb)
  .getCharacteristic(Characteristic.On)
  .on('get', function(callback) {

    // this event is emitted when you ask Siri directly whether your light is on or not. you might query
    // the light hardware itself to find this out, then call the callback. But if you take longer than a
    // few seconds to respond, Siri will give up.
    
    var err = null; // in case there were any problems

    if (LAMPADA_AUTOHOME.powerOn) {
//      console.log('Ligar lampada ? Sim.');
      callback(err, true);
    }
    else {
 //     console.log('Desligar Lampada? Nao.');
      callback(err, false);
    }
  });