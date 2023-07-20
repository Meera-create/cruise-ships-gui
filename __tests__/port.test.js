const Ship = require('../src/cruise-ships');
const Itinerary = require('../src/itinerary');
const Port=require('../src/port')


describe('port constructor',()=>{
    test('new port can be instantiated',()=>{
        expect(new Port()).toBeInstanceOf(Object);
    })

    test('port has a name property',()=>{
        const London = new Port('London');
        expect(London.name).toBeTruthy();
    })

    test('port add a ship method',()=>{
        const japan = new Port('Japan');
        const myShip = {}
        japan.addShip(myShip);
        expect(japan.ships).toContain(myShip);
        //no need to create a new ship instance since we just want to check port.ship can store 
        //a collection on ships
    })

    test('port remove a ship method',()=>{
        const mexico = new Port('Mexico');
        const myShip = {};
        const myShip2 = {};

        mexico.addShip(myShip);
        mexico.addShip(myShip2);
        mexico.ships=[myShip,myShip2]
        mexico.removeShip(myShip2);
        expect(mexico.ships).toEqual([myShip]);
        
    })
})