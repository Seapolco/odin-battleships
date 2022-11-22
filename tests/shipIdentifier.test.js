import shipId from "../src/game/shipIdentifier";

test('identifies the correct ship name', () => {
    expect(shipId(5)).toBe("Carrier")
    expect(shipId(4)).toBe("Battleship")
    expect(shipId(3)).toBe("Cruiser")
    expect(shipId(2)).toBe("Destroyer")
    expect(shipId(1)).toBe("Patrol Boat")

})