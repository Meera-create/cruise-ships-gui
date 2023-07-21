const Ship= require('../src/cruise-ships')
const Port = require ('../src/port')
const Itinerary=require('../src/itinerary')

describe('itinerary ',()=>{
    test('itinerary can be instantiated',()=>{
        expect(new Itinerary()).toBeInstanceOf(Object);
    })

    test('itinerary instance can have multiple ports',()=>{
        const mexico = new Port(jest.fn())
        const bali = new Port (jest.fn())
        const itineraryOfTrip = new Itinerary([mexico,bali])
        expect(itineraryOfTrip.port).toEqual([mexico,bali])
    })
})