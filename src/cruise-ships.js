
const Port = require ('../src/port')
const Itinerary = require('../src/itinerary')

function Ship(itinerary){
    this.itinerary=itinerary;
    this.currentPort=itinerary.port[0];
    this.previousPort=null;
   
}

Ship.prototype.toSetSail = function () {
  
    const newItinerary=this.itinerary;
    const currentPortIndex= newItinerary.port.indexOf(this.currentPort);

    if(currentPortIndex === (newItinerary.port.length -1)){
        throw new Error('End of itinerary reached!')
    }
    
    this.previousPort = this.currentPort;
    this.currentPort=null;
    
}

const port = new Port('location')

Ship.prototype.docks=function(){
    const myItinerary= this.itinerary;
    const previousPortIndex = myItinerary.port.indexOf(this.previousPort);
    //previousPortIndex -->logs -1 as index value not 0 
    this.currentPort=myItinerary.port[0][previousPortIndex+2];
    
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