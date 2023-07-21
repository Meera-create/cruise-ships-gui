
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
        throw new Error('End of Itinerary reached!')
    }

    this.previousPort=this.currentPort;
    this.previousPort.removeShip(this);
    this.currentPort=null;
    
}


Ship.prototype.docks=function(){
    const myItinerary= this.itinerary;
    const previousPortIndex = myItinerary.port.indexOf(this.previousPort);
    const currentPlace= myItinerary.port[previousPortIndex+1]
    this.currentPort=currentPlace
    this.currentPort.addShip(this)
    //must do the line above in one step instead of this.currentPort=currentPlace.addSHip()
   
    
    
   
    
}



module.exports = Ship;





