
/*globals describe it expect*/
const Ship= require('../src/cruise-ships')
const Port = require ('../src/port')
//importing the constructor file

describe("constructor for ship",()=>{
    test("can be instatiated",()=>{
        expect(new Ship()).toBeInstanceOf(Object)
    })

    test("the ship has a start point",()=>{
        const Rome= new Port('Rome');
        const myShip = new Ship(Rome)
        expect(myShip.currentPort).toEqual(Rome)
    })

    test(" the ship can set sail",()=>{
        const Iceland=new Port('Iceland')
        const myShip = new Ship (Iceland);
        myShip.toSetSail()
        expect(myShip.currentPort).toBeFalsy();
    })

    test('it docks at another port',()=>{ 
        const Iceland=new Port('Iceland')
        const myship = new Ship (Iceland);
        const Vietnam = new Port ('Vietnam')
        myship.docks(Vietnam)
        expect(myship.currentPort).toEqual(Vietnam);
    })
})


//object:ship, method:set sail, property:port



  


//object:ship
//method: have
//properties: startingport

//object:ship
//method:add
//property:passengers