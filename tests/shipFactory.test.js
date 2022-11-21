import "../src/game/shipFactory";
import Ship from "../src/game/shipFactory";

test('creates a new ship object with correct values', () => {
    const newShip = new Ship(4);

    expect(newShip.length).toEqual(4);
    expect(newShip.hits).toEqual(0);
    expect(newShip.sunk).toEqual(false)
})

test('isHit method increments the hit property by one', () => {
    const newShip = new Ship(5);

    newShip.isHit();

    expect(newShip.hits).toEqual(1);
})

const testShip = new Ship(2);
testShip.isHit();
testShip.isHit();



test('isSunk returns true if hits === length of ship', () => {



        

 

})



