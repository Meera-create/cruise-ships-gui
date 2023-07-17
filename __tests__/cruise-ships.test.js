
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
        const portRome = new Port('Rome')
        const itineraryRome = new Itinerary([portRome])
        const myShip = new Ship(itineraryRome)
        expect(myShip.currentPort[0]).toBe(portRome)
    })

    test(" the ship can set sail",()=>{
        const Iceland = new Port('Iceland')
        const icelandItinerary = new Itinerary([Iceland])
        const myShip = new Ship (icelandItinerary);
        myShip.toSetSail()
        expect(myShip.currentPort).toBeFalsy();
        expect(myShip.previousPort).toBe(Iceland);
    })

    xtest('it can\'t set sail further than the last item on itinerary',()=>{
        const paris = new Port ('Paris');
        const seoul = new Port('Seoul');
        const myItinerary=new Itinerary([paris,seoul]);
        const myShip = new Ship (myItinerary);

        Ship.toSetSail();
        Ship.docks();
        expect(()=>Ship.toSetSail()).toThrowAnError('End of Itinerary reached!');
    })

    xtest('it docks at another port',()=>{ 
        const peru = new Port ('Peru')
        const china = new Port ('China');
        const wholeItinerary = new Itinerary([peru,china])
        const myShip = new Ship (wholeItinerary)
        myShip.toSetSail()
        myShip.docks()

        expect(myShip.currentPort).toBe(china);
        //expect(myShip.previousPort).toBe(peru);
    })
})


//object:ship, method:set sail, property:port



  


//object:ship
//method: have
//properties: startingport

//object:ship
//method:add
//property:passengers