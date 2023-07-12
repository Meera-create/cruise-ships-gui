
/*globals describe it expect*/
const Ship= require('../src/cruise-ships')
//importing the constructor file

describe("constructor for ship",()=>{
    test("can be instatiated",()=>{
        expect(new Ship()).toBeInstanceOf(Object)
    })

    test("the ship has a start point",()=>{
        const myShip = new Ship ('Iceland')
        expect(myShip.ports).toEqual('Iceland')
    })
})


  


//object:ship
//method: have
//properties: startingport

//object:ship
//method:add
//property:passengers