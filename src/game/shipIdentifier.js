


const shipId = function shipIdentifier(shipLength) {

    let shipType = {
          5: "Carrier",
          4: "Battleship",
          3:   "Cruiser",
          2: "Destroyer",
          1: "Patrol Boat"
    }

    return shipType[shipLength]
}

export default shipId