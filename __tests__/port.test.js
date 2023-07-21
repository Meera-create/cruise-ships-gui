const { beforeAll } = require('jest-circus');
const Ship = require('../src/cruise-ships');
const Itinerary = require('../src/itinerary');
const Port=require('../src/port')

describe('port',()=>{
describe('port constructor',()=>{
        let london;
        let myShip;
        let myShip2;
    beforeEach(()=>{
        london=new Port('London');
        myShip={};
        myShip2={};
        
    })



    test('new port can be instantiated',()=>{
        expect(new Port()).toBeInstanceOf(Object);
    })

    test('port has a name property',()=>{
         london = new Port('London');
        expect(london.name).toBeTruthy();
    })

    test('port add a ship method',()=>{
        london.addShip(myShip);
        expect(london.ships).toContain(myShip);
    
    })

    test('port remove a ship method',()=>{
        london.addShip(myShip);
        london.addShip(myShip2);
        london.ships=[myShip,myShip2]
        london.removeShip(myShip2);
        expect(london.ships).toEqual([myShip]);
        
    })
})
})