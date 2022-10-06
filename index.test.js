const index = require('./index');

test('sunk ship is sunk', () => {
    let myShip = index.Ship(3);
    myShip.ship.fill(1);
    expect(myShip.isSunk()).toBe(true);
})

test('ship not hit to be not sunk', () => {
    let myShip = index.Ship(3);
    expect(myShip.isSunk()).toBe(false);
})

test('ship hit but not sunk to be not sunk', () => {
    let myShip = index.Ship(3);
    myShip.ship.fill(1);
    myShip.ship[2] = 0;
    expect(myShip.isSunk()).toBe(false);
})

test('ship to get hit', () => {
    let myShip = index.Ship(3);
    myShip.hit(0)
    expect(myShip.ship).toEqual([1,0,0]);
})