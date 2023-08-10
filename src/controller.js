 (function exportController(){
 function Controller (ship) {
  this.ship=ship;

 this.intialiseSea();



 document.querySelector('#sailbutton').addEventListener('click',()=>{
  this.setSail();
 });
}
 

Controller.prototype = {
intialiseSea() {
  const backgrounds = [
    './images/water0.png',
    './images/water1.png',
  ];  
  let backgroundIndex = 0;
    window.setInterval(() => {
        document.querySelector('#viewport').style.backgroundImage = `url('${background[backgroundIndex % backgrounds.length]}')`;
        backgroundIndex += 1;
    },1000);
  },
  //need a comma here between prototype methods


renderPorts(ports){
  const portsElement=document.querySelector('#ports');
  portsElement.style.width=0;

  ports.forEach((port,index)=>{
    const newPortElement=document.createElemenet('div');
    newPortElement.className = 'port';
    newPortElement.dataset.portName=port.name;
    newPortElement.dataset.portIndex=port.index;
    //use classname not class in JS
    //newPortELement is the #port
    portsElement.appendChild(newPortElement);
    

    const portsElementWidth = parseInt(portsElement.style.width, 10);
    //10 is a radix? meaning we want to convert from a decimal
    portsElement.style.width=`${portsElementWidth + 256}px`;

  });

},

renderShip(){
  const ship=this.ship;

  const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
  const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);
  //finds the  .port element that has the same index as shipPortINdex

  const shipElement= document.querySelector('#ship');
  shipElement.style.top=`${portElement.offsetTop + 32 }px`;
  shipElement.style.left=`${portElement.offsetLeft - 32}px`;
  //offset give x/y co-ords from how far the element is from parent element
 

},
setSail(){
  const ship = this.ship;

  const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
  const nextPortIndex= currentPortIndex;
  const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);

  if(!nextPortElement){
    return alert('End of the line!')
  }

  const shipElement = document.querySelector('#ship');
  const sailInterval = setInterval(()=>{
    const shipLeft = parseInt(shipElement.style.left,10);
    if (shipLeft=== (nextPortElement.offsetLeft -32)){
      ship.setSail();
      ship.dock();
      clearInterval(sailInterval);
    }
    shipElement.style.left = `${shipLeft + 1}px`;
  },20);
 },
}

if(typeof module !== 'undefined' && module.exports){
    module.exports = Controller;
}else{
    window.Controller=Controller;

};

}());

      