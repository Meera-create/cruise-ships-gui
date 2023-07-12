
//As a cruise ship captain, SO i can get passengers aboard a ship, I want a ship
//to have a starting point

//object:ship
//method: have
//properties: port

//object:ship
//method:add
//property:passengers


function Ship(port,name){
    this.name=name;
    this.ports=port;
    this.passenger=0;
}


module.exports = Ship;





