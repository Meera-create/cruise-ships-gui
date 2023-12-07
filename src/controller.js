// const { describe } = require("yargs");

 (function exportController(){
 function Controller (ship) {
  this.ship=ship;

 this.intialiseSea();



 document.querySelector('#sailbutton').addEventListener('click',()=>{
  this.setSail();
 });
 }
   //on clicking setSail , we add an event listener to click which runs
   //setSail Function
 

Controller.prototype = {
intialiseSea() {
  const backgrounds = [
    './images/water0.png',
    './images/water1.png',
    ];  
    //want to alternate between two background images

    let backgroundIndex = 0;
    //this backgroundINdex is a counter variable to help keep tracl
    //of which backgorund we are using

    window.setInterval(() => {
      document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
      //backgroundIndex is currently 0 , remainder operator background length = 0 divided by 2 = 0
      //so the first image will be shown
      //then the backgrounfIndex is increased by 1, 1 divided by 2, is 1 remainder, so the second image displays
        backgroundIndex += 1;
    },1000);
  },
  //need a comma here between prototype methods


renderPorts(ports){
  const portsElement=document.querySelector('#ports');
  portsElement.style.width = '0px';
  //we want to set the width as 0 so we can manipulate the width of the container
  //everytime we add a new child element

  ports.forEach((port, index) => {
    //you want to iterate over the array of ports given to Port from itiernerary
    //each should render a new div
    const newPortElement=document.createElemenet('div');
    newPortElement.className = 'port';
    newPortElement.dataset.portName=port.name;
    newPortElement.dataset.portIndex = port.index;
    //asigning each new Prt div created a classname, attributes of name and index

    //use classname not class in JS
    //newPortELement is the #port
    portsElement.appendChild(newPortElement);
    //add the newly created divs to the original port ID
    

    const portsElementWidth = parseInt(portsElement.style.width, 10);
    //parseINt will just extract the number part of the string
    //10 is a radix meaning we want to convert it from a decimal
   
    portsElement.style.width=`${portsElementWidth + 256}px`;

  });

},

renderShip(){
  const ship=this.ship;

  const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
  const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);
  //finds the  .port element that has the same index as shipPortINdex
  //atribute selectors

  const shipElement= document.querySelector('#ship');
  shipElement.style.top=`${portElement.offsetTop + 32 }px`;
  shipElement.style.left=`${portElement.offsetLeft - 32}px`;
  //offset give x/y co-ords from how far the element is from parent element
 

},
setSail(){
  const ship = this.ship;

  const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
  const nextPortIndex= currentPortIndex + 1;
  const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);

  if(!nextPortElement){
    // return alert('End of the line!')
    return this.renderMessage('this is the end of the line!')
  }

  this.renderMessage(`Now departing from ${ship.currentPort.name}`);

  const shipElement = document.querySelector('#ship');
  const sailInterval = setInterval(()=>{
    const shipLeft = parseInt(shipElement.style.left,10);
    if (shipLeft=== (nextPortElement.offsetLeft -32)){
      ship.setSail();
      ship.dock();
      this.renderMessage(`you have arrived at ${ship.currentPort.name}`)
      this.renderDisplay();
      clearInterval(sailInterval);
    }
    shipElement.style.left = `${shipLeft + 1}px`;
  }, 20);



  

 },

  renderDisplay() {

    const ship = this.ship
    const headerDisplay = document.querySelector('#headerPort');
    const currentPortDisplay = document.querySelector('#current-port')
    currentPortDisplay.innerHTML = `Current Port: ${ship.currentPort.name}`;

    const nextPortIndex = ship.itinerary.ports.indexOf(ship.currentPort)+1
    
    const nextPort = ship.itinerary.ports[nextPortIndex];

    let nextPortDisplay;

    if (!nextPort) {
      return nextPortDisplay.innerHTML = '';
    } else {
      nextPortDisplay.innerHTML = `Next Port: ${nextPort.name}`
    }


  

  
},


 //message box
 renderMessage(message){
  const messageID = document.createElement('div');
  messageID.id='message'
  messageID.innerHTML=message;
   const viewPort = document.querySelector('#viewport')
   viewPort.appendChild(messageID);
   //appended the newly created message ID to the viewport ID
  
  setTimeout(() => {
    viewPort.removeChild(messageID)
  }, 2000);
   //settimeout removes the message from the DOM after 2s
 
  //method when ship goes too far????


 },

}

if(typeof module !== 'undefined' && module.exports){
    module.exports = Controller;
}else{
    window.Controller=Controller;

};

}());

      