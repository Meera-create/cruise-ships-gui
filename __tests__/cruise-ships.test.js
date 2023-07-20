
/*globals describe it expect*/
const Ship= require('../src/cruise-ships')
const Itinerary = require('../src/itinerary')
const Port = require ('../src/port')


describe("constructor for ship",()=>{
    test("can be instatiated",()=>{
        const myPort = new Port ('Dover');
        const myItinerary = new Itinerary([myPort]);
        const myShip = new Ship(myItinerary);
        expect(myShip).toBeInstanceOf(Object);

    })

    test("the ship has a start point",()=>{
        const portRome = new Port('Rome');
        const itineraryRome = new Itinerary([portRome]);
        const myShip = new Ship(itineraryRome);
        expect(myShip.currentPort).toBe(portRome)
    })

    test(" the ship can set sail",()=>{
        console.log(itinerary)
        const iceland = new Port('Iceland')
        const singapore =new Port('Singapore')
        const tripItinerary = new Itinerary([iceland,singapore])
        const myShip = new Ship (tripItinerary);
        myShip.currentPort=iceland;
        myShip.previousPort=null;
        myShip.toSetSail()
      
        
        expect(myShip.currentPort).toBeFalsy();
        expect(myShip.previousPort).toBe(iceland);
        //expect(iceland.ships).not.toContain(myShip);
    })

    xtest('it can\'t set sail further than the last item on itinerary',()=>{
        const paris = new Port ('Paris');
        const seoul = new Port('Seoul');
        const myItinerary=new Itinerary([paris,seoul]);
        const myShip = new Ship (myItinerary);
        myShip.toSetSail();
        myShip.docks();
        expect(()=>myShip.toSetSail()).toThrowError('End of Itinerary reached!');
    })

    
    xtest('it docks at another port',()=>{ 
        const peru = new Port ('Peru')
        const china = new Port ('China');
        const wholeItinerary = new Itinerary([peru,china])
        const myShip = new Ship (wholeItinerary)

        myShip.toSetSail()
        myShip.docks()
        console.log(myShip)
        
      
        expect(china.ships).toContain(myShip);
        expect(myShip.previousPort).toBe(peru);
        expect(myShip.currentPort).toBe(china);
        
    })

    test('new ship gets added to port on instatiation',()=>{
        const fiji = new Port ('Fiji')
        const myItinerary = new Itinerary([fiji])
        const newShip= new Ship(myItinerary);

        expect(fiji.ships).toContain(newShip)
    })
})


//object:ship, method:set sail, property:port



  


//object:ship
//method: have
//properties: startingport

//object:ship
//method:add
//property:passengers