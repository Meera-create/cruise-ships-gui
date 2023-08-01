 (function exportController(){
 function Controller () {
 this.intialiseSea();
}

Controller.prototype={
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
};

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
}
};

if(typeof module !== 'undefined' && module.exports){
    module.exports = Controller;
}else{
    window.Controller=Controller;

};

}());

      