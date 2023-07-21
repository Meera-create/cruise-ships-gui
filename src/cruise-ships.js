
const Port = require ('../src/port')
const Itinerary = require('../src/itinerary')

function Ship(itinerary){
    this.itinerary=itinerary;
    this.currentPort=itinerary.port[0];
    this.previousPort=null;
    this.currentPort.addShip(this);
   
}

Ship.prototype.toSetSail = function () {
  
    const newItinerary=this.itinerary;
    const currentPortIndex= newItinerary.port.indexOf(this.currentPort);

    if(currentPortIndex === (newItinerary.port.length -1)){
        throw new Error('End of itinerary reached!')
    }

    //const currentShip =newItinerary.port.ships;
   // currentShip=this.currentPort.ships[currentPortIndex];
    //this.previousPort = this.currentPort.removeShip(currentShip);
    this.previousPort=this.currentPort;
    //because the function returns nothing you cannot assign it to a value as it will assign undfined
    this.previousPort.removeShip(this);
    this.currentPort=null;
    
}


Ship.prototype.docks=function(){
    const myItinerary= this.itinerary;
    const previousPortIndex = myItinerary.port.indexOf(this.previousPort);
    //this.currentPort.addShip(this);
    //this.currentPort=myItinerary.port[previousPortIndex+1];
    
    
   
    
}



module.exports = Ship;





