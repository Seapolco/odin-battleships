
import startingcompBoardArray from "./startingCompArray"


import shipId from './shipIdentifier';




class computerGameboard {
  constructor() {


    this.gameBoardArray = [...startingcompBoardArray];

    this.placedShipPositions = [];
    this.missedShots = [];
    this.successfulShots = [];



    this.placedShipsObject = {
      "Carrier": [],
      "Battleship": [],
      "Cruiser": [],
      "Destroyer": [],
      "Patrol Boat": []
    };

    this.resetGameBoardArray = () => {
      // console.log(this.placedShipPositions.length)
      this.gameBoardArray.forEach((e, i) => {
        e.forEach((j, k) => {
          if (typeof j === 'string') {
            // console.log('STRING!')
            this.gameBoardArray[i].splice(k, 1, Number(j));
            //e.splice(k, 1, Number(j))
          }
        });
      });

      while (this.placedShipPositions.length >= 1) {
        this.placedShipPositions.pop();
      }

      // console.log(this.placedShipPositions)
      // console.log(this.gameBoardArray)
    };



    this.placeShip = (shipLength, alignment, startingPosition) => {
      //console.log(startingPosition + shipLength -1)

      this.invalid = "Invalid placement";

      this.shipType = shipId(shipLength);

      this.position = [];

  

      console.log(this.placedShipPositions);

      if (this.placedShipPositions.includes(startingPosition)) {
        console.log(this.invalid);
        this.ok = false;
        return this.invalid;

      }

      if(startingPosition < 1) {
        console.log('LESS THAT ZERO')
        return this.invalid
      }

      this.ok = true;

      // Check to see if horizontal placement fits within the row
      if (alignment === 'horizontal') {

        this.gameBoardArray.forEach((e, i) => {

          if (e.includes(startingPosition)) {
            if ((e.indexOf(startingPosition) + shipLength > 10)) {

              this.ok = false;
            }
          } else {
            return true;
          }

        });

      }

      // Check to see if vertical placement fits within the gameboard
      if (alignment === 'vertical') {

        //console.log(startingPosition)
        if (startingPosition + (shipLength * 10) > 110) {
          this.ok = false;
          //console.log(this.invalid)
        }
      }



      // check to see if current placement passes x/y tests
      if (this.ok === false) {
        //console.log('not ok')
        //console.log(this.invalid)
        return this.invalid;
      }


      // Checks to see if ship already placed within the desired area & updates current position array
      if (alignment === 'horizontal') {
        for (let i = 0; i < shipLength; i++) {

          if (this.placedShipPositions.includes(startingPosition + i)) {
            console.log(`${this.invalid} ${startingPosition}`);
            this.ok = false;
            return `${this.invalid} ${startingPosition}`;
          }
          this.position.push(startingPosition + i);
        }
      }

      if (alignment === 'vertical') {
        for (let i = 0; i < shipLength; i++) {
          if (this.placedShipPositions.includes(startingPosition + (i * 10))) {
            console.log(`${this.invalid} ${startingPosition}`);
            return `${this.invalid} ${startingPosition}`;
          }
          this.position.push(startingPosition + (i * 10));
        }
      }

      // Updates gameBoardArray with the placement of the ship.
      this.gameBoardArray.forEach((e, i) => {

        e.forEach((j, k) => {

          if (this.position.includes(j)) {
            //console.log(e[e.length-1])
            this.gameBoardArray[i].splice(k, 1, `${this.gameBoardArray[i][k]}`);
          }
        });
      });

      // Updates the array with all the placedShipPositions
      this.position.forEach((e) => {
        this.placedShipPositions.push(e);
      });

      // Updates the placeShip obj, currently seems redundant
      this.placedShipsObject[this.shipType].push(this.position)
    };


    this.receiveAttack = (placement) => {

      console.log('PLACEMENT', placement)

      console.log(this.successfulShots, this.missedShots)

      if(placement === NaN) {
        return NaN
      }

      if(this.successfulShots.includes(placement) || this.missedShots.includes(placement)) {
        console.log('INVALID', placement)
        return null
      }

      let attempt = "Miss";
      //console.log(attempt);
      let done = false;

      for (let key in this.placedShipsObject) {
        //console.log(obj[key])
        this.placedShipsObject[key].forEach((e, i) => {
          e.forEach((j, k) => {
            if (j === placement) {
              console.log(key, e, j, k);
              e.splice(k, 1, `X`);
              this.successfulShots.push(j)
              attempt = "Hit!";
              done = true;
            }
          });
        });
      }

     // console.log('Before GBArry forEAch', attempt);


      this.gameBoardArray.forEach((e, i) => {

        e.forEach((j, k) => {

          if (j == placement) {

            if (attempt === "Hit!") {
              // this.successfulShots.push(j)
              this.gameBoardArray[i].splice(k, 1, `X`);
            } else if (attempt === "Miss") {
              console.log('imhere');
              this.gameBoardArray[i].splice(k, 1, `O`);
            }

          }
        });
      });

      console.log(attempt, placement, done);

      if (attempt === "Miss") {

        this.missedShots.push(placement);
        console.log(this.missedShots)

      }
      return attempt;


    };

  }
}

export default computerGameboard