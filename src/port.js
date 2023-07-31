(function exportPort(){
function Port(name){
    this.name=name;
    this.ships=[];
}

//put ship instance into functions

Port.prototype={
    addShip(ship){
    this.ships.push(ship);
},

    removeShip (ship){
    //const indexRemove = this.ships.indexOf(ship)
    this.ships=this.ships.filter(dockedShip => dockedShip !==ship);
}
};

if(typeof module !== 'undefined' && module.exports){
    module.exports = Port;
}else{
    window.Port=Port;
}

}());

