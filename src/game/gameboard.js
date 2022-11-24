
import startingGameBoardArray from "./startingGameBoardArray"


import shipId from './shipIdentifier';



// No.	Class of ship	Size
// 1	Carrier	         5
// 2	Battleship     	 4
// 3	Cruiser	         3
// 4	Submarine	     3
// 5	Destroyer	     2

//let sg = startingGameBoardArray




const Gameboard = function gameboardFactory() {


    this.gameBoardArray = startingGameBoardArray

    this.placedShipPositions = [];
    this.missedShots = [];



    this.placedShipsObject = {
        "Carrier" : [],
        "Battleship" : [],
        "Cruiser" : [],
        "Destroyer" : [],
        "Patrol Boat" : []
    }

    this.resetGameBoardArray = () => {
      // console.log(this.placedShipPositions.length)
      this.gameBoardArray.forEach((e,i) => {
        e.forEach((j,k) => {
          if(typeof j === 'string') {
            // console.log('STRING!')
            this.gameBoardArray[i].splice(k, 1, Number(j))
            //e.splice(k, 1, Number(j))
          }
        })
      })

      while(this.placedShipPositions.length >=1) {
        this.placedShipPositions.pop();
      }

      // console.log(this.placedShipPositions)
      // console.log(this.gameBoardArray)
    }

    

    this.placeShip = (shipLength, alignment, startingPosition) => {

      //console.log(startingPosition + shipLength -1)

     this.invalid = "Invalid placement"
    
     this.shipType = shipId(shipLength)
    
     this.position = [];

     console.log(this.placedShipPositions)

     if(this.placedShipPositions.includes(startingPosition)) {
      console.log(this.invalid)
      return this.invalid
      
     }

     this.ok = true;

     // Check to see if horizontal placement fits within the row

     if(alignment === 'horizontal') {

      this.gameBoardArray.forEach((e,i) => {
      
        if(e.includes(startingPosition)) {
         if((e.indexOf(startingPosition) + shipLength > 10)) {
     
           this.ok = false
         }
        } else {
         return true
        }
        
        })

     }

     // Check to see if vertical placement fits within the gameboard

     if(alignment === 'vertical') {

      //console.log(startingPosition)
      if(startingPosition + (shipLength *10) > 110) {
        this.ok = false;
        //console.log(this.invalid)
      }
     }



    // check to see if current placement passes x/y tests

     if(this.ok === false) {
      //console.log('not ok')
      //console.log(this.invalid)
      return this.invalid
     }


    // Checks to see if ship already placed within the desired area & updates current position array
      
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

    // Updates gameBoardArray with the placement of the ship.

      this.gameBoardArray.forEach((e,i) => {

        e.forEach((j,k) => {
        
          if(this.position.includes(j)) {
            //console.log(e[e.length-1])


            this.gameBoardArray[i].splice(k, 1, `${this.gameBoardArray[i][k]}`)
          }
        })
      })

      // Updates the array with all the placedShipPositions

      this.position.forEach((e) => {
        this.placedShipPositions.push(e)
      })

      // Updates the placeShip obj, currently seems redundant
      //this.placedShipsObject[this.shipType].push(this.position)


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