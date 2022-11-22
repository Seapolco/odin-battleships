
import startingGameBoardArray from "./startingGameBoardArray"

import shipId from './shipIdentifier';



// No.	Class of ship	Size
// 1	Carrier	         5
// 2	Battleship     	 4
// 3	Cruiser	         3
// 4	Submarine	     3
// 5	Destroyer	     2



const Gameboard = function gameboardFactory() {


    this.gameBoardArray = startingGameBoardArray;

    this.placedShipPositions = [];

    this.placedShipsObject = {

    }

    

    this.placeShip = (shipLength, alignment, startingPosition) => {
    
     this.shipType = shipId(shipLength)
    
     this.position = [];
      
      if(alignment === 'horizontal') {
        for(let i = 0; i < shipLength; i++) {
          this.position.push(startingPosition + i);
        }
      }
      
      if(alignment === 'vertical') {
        for(let i = 0; i < shipLength; i++) {
          this.position.push(startingPosition + (i*10))
        }
      }
      this.gameBoardArray.forEach((e,i) => {

        e.forEach((j,k) => {
          if(this.position.includes(j)) {
            
            this.gameBoardArray[i].splice(k, 1, `${this.gameBoardArray[i][k]}`)
          }
        })
      })
      this.position.forEach((e) => {
        this.placedShipPositions.push(e)
      })

      this.placedShipsObject[this.shipType] = this.position


    }



}

export default Gameboard