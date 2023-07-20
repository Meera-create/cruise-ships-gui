function Port(name){
    this.name=name;
    this.ships=[];
}

//put ship instance into functions

Port.prototype.addShip=function(shipInstance){
    this.ships=[shipInstance]
}

Port.prototype.removeShip = function(shipInstance){
    const indexRemove = this.ships.indexOf(shipInstance)
    this.ships.splice(indexRemove,indexRemove+1);
}



module.exports=Port;