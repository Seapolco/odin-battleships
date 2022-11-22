
import startingGameboardArray from "./startingGameboardArray"


// No.	Class of ship	Size
// 1	Carrier	         5
// 2	Battleship     	 4
// 3	Cruiser	         3
// 4	Submarine	     3
// 5	Destroyer	     2



const Gameboard = function gameboardFactory() {

    this.gameBoardArray = startingGameboardArray;

    

    this.placeShip = (shipLength, alignment, startingPosition) => {
    
     let position = [];
      
      if(alignment === 'horizontal') {
        for(let i = 0; i < shipLength; i++) {
          position.push(startingPosition + i);
        }
      }
      
      if(alignment === 'vertical') {
        for(let i = 0; i < shipLength; i++) {
          position.push(startingPosition + (i*10))
        }
      }
    }

    this.startingGameboardArray.forEach((e,i) => {

        e.forEach((j,k) => {
          if(position.includes(j)) {
            
            this.startingGameboardArray[i].splice(k, 1, `${this.startingGameboardArray[i][k]}`)
          }
        })
      })





}

export default Gameboard