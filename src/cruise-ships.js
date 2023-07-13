
//As a cruise ship captain, SO i can get passengers aboard a ship, I want a ship
//to have a starting point

//object:ship
//method: have
//properties: port

//object:ship
//method:add
//property:passengers
const Port = require ('../src/port')

function Ship(port,name){
    this.name=name;
    this.currentPort=port;
    this.passenger=0;
}

Ship.prototype.toSetSail = function () {
    this.currentPort=0;
}

const location = new Port('location')

Ship.prototype.docks=function(location){
    this.currentPort=location;
}


module.exports = Ship;





