import Gameboard from "../src/game/gameboard";

test('creates a new gameboard', () => {

    const newGameboard = new Gameboard();

    expect(newGameboard.gameBoardArray.length).toBe(10);
    expect(newGameboard.placedShipPositions).toEqual([])

})

test('placeShip method works if given valid starting position', () => {

    const newGameboard = new Gameboard();

    newGameboard.placeShip(4,'horizontal',1);

    expect(typeof newGameboard.gameBoardArray[0][0]).toEqual('string')
    expect(typeof newGameboard.gameBoardArray[0][1]).toEqual('string')
    expect(typeof newGameboard.gameBoardArray[0][2]).toEqual('string')
    expect(typeof newGameboard.gameBoardArray[0][3]).toEqual('string')

})

test.todo('placeship method throws error if given incorrect starting position', () => {
    // throws error if position exceeds grid
    //throws error if ship already placed in the desired area
    
})

