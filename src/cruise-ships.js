
const Port = require ('../src/port')
const Itinerary = require('../src/itinerary')

function Ship(itinerary){
    this.itinerary=itinerary;
    this.currentPort=itinerary.port[0];
    this.previousPort=null;
   
}

Ship.prototype.toSetSail = function () {
    this.currentPort=0;
    this.previousPort=null;
}

const port = new Port('location')

Ship.prototype.docks=function(port){
    const myItinerary= this.itinerary;
    const previousPortIndex = myItinerary.port.indexOf(this.previousPort);
    this.currentPort=myItinerary.port[previousPortIndex + 1];
}



module.exports = Ship;






//As a cruise ship captain, SO i can get passengers aboard a ship, I want a ship
//to have a starting point

//object:ship
//method: have
//properties: port

//object:ship
//method:add
//property:passengers