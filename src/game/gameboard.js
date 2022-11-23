
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
    this.missedShots = [];

    this.placedShipsObject = {
        "Carrier" : [],
        "Battleship" : [],
        "Cruiser" : [],
        "Destroyer" : [],
        "Patrol Boat" : []
    }

    

    this.placeShip = (shipLength, alignment, startingPosition) => {

     this.invalid = "Invalid placement"
    
     this.shipType = shipId(shipLength)
    
     this.position = [];

     if(this.placedShipPositions.includes(startingPosition)) {
      return this.invalid
      console.log(this.invalid)
     }
      
      if(alignment === 'horizontal') {
        for(let i = 0; i < shipLength; i++) {

          if(this.placedShipPositions.includes(startingPosition + i)) {
            console.log(`${this.invalid} ${startingPosition}`)
            return `${this.invalid} ${startingPosition }`
          }
          this.position.push(startingPosition + i);
        }
      }
      
      if(alignment === 'vertical') {
        for(let i = 0; i < shipLength; i++) {
          if(this.placedShipPositions.includes(startingPosition + (i*10))) {
            console.log(`${this.invalid} ${startingPosition}`)
            return `${this.invalid} ${startingPosition}`
          }
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

      console.log(this.placedShipsObject[this.shipType])



      this.placedShipsObject[this.shipType].push(this.position)


    }

    this.receiveAttack = (placement) => {

      let attempt = "Miss";
      console.log(attempt)
      let done = false;

      for(let key in this.placedShipsObject) {
      //console.log(obj[key])
      this.placedShipsObject[key].forEach((e,i) => {
        e.forEach((j,k) => {
          if(j === placement) {
            console.log(key,e,j,k)
            e.splice(k,1,`X`)
            attempt = "Hit!";
            done = true;
          }
        })
      })
    }

    console.log('Before GBArry forEAch', attempt)


      this.gameBoardArray.forEach((e,i) => {

        e.forEach((j,k) => {
  
          if(j == placement) {
  
            if(attempt === "Hit!") {
            
              this.gameBoardArray[i].splice(k, 1, `X`)
            } else if(attempt === "Miss") {
              console.log('imhere')
              this.gameBoardArray[i].splice(k, 1, `O`)
            }
  
          }
        })
      })

    console.log(attempt, placement, done)

    if(attempt === "Miss") {

      this.missedShots.push(placement)

    }
    return attempt


    }


    // const obj = {
    //   "Battleships" : [[1,2,3,4], 
    //                    [5,6,7,8],
    //                   [9,10,11,12]],
    //   "Carrier" : [[13,14,15,16,17]],
    //   "Cruiser" : [[18,19,20],
    //               [21,22,23]],
    //   "Destroyer" : [[24,25],
    //                   [26,27],
    //                   [28,29]],
    //   "Patrol Boat" : [[51], [76]]
    // }
    
    // for(key in obj) {
    //   //console.log(obj[key])
    //   obj[key].forEach((e,i) => {
    //     e.forEach((j,k) => {
    //       if(j === 13) {
    //         console.log(key,e,j,k)
    //         e.splice(k,1,`${j}`)
    //       }
    //     })
    //   })
    // }

    // this.receiveAttack(position) {

    // }



}

export default Gameboard