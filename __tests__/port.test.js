const Port=require('../src/port')


describe('port constructor',()=>{
    test('new port can be instantiated',()=>{
        expect(new Port()).toBeInstanceOf(Object);
    })

    test('port has a name property',()=>{
        const London = new Port('London');
        expect(London.name).toBeTruthy();
    })
})