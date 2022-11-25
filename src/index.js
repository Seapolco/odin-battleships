import "./main.css"

import dom from './helpers/DOMElements';

import placementPage from './pages/placementPage';
import elementFactory from "./helpers/elementFactory";

import Gameboard from './game/gameboard';
import computerGameboard from "./game/computerBoard";
import gameboardPopulator from "./game/gameboardPopulator";

import computerboardPopulator from "./game/computerboardPopulator";

import battleshipsPopulator from "./game/battleshipsPopulator";

import DOMInteraction from './game/DOMinteraction';

import battlePage from './pages/battlePage';

import startingGameboardArray from './game/startingGameboardArray';


let playerOneBoard = new Gameboard();
let computerBoard = new computerGameboard();

placementPage();

let placementBoard = dom.placementBoard();


// let unplacedShips = [5,4,4,3,3,2];

let alignmentBtn = document.querySelector('.alignment');

console.log(alignmentBtn)

let alignment = 'horizontal';

let currentPage = 'placement page'

let notPlacedShips = [5,4,4,3,3,2];
let alignments = ['vertical', 'horizontal', 'vertical', 'horizontal', 'vertical', 'horizontal'];

const placeAllCompShips =()=> {

        
        
        let random = () => Math.floor(Math.random() * 100)  +1
        

        let valid = computerBoard.placeShip(notPlacedShips[0], alignments[0], random());

        console.log('VALIDDDDDDDDDD', valid)
        if(valid === undefined) {
                console.log('cbarray',computerBoard.gameBoardArray)
                notPlacedShips.shift();
                alignments.shift();
                
        } 



}


alignmentBtn.addEventListener('click', () => {
        if(alignmentBtn.innerText === 'Switch to vertical placement') {
                alignmentBtn.innerText = 'Switch to horizontal placement';
                alignment = 'vertical'
        } else if(alignmentBtn.innerText === 'Switch to horizontal placement') {
                alignmentBtn.innerText = 'Switch to vertical placement';
                alignment = 'horizontal'
        }
        
})

let unplacedShips = [5,4,4,3,3,2];


placementBoard.addEventListener('click', (e) => {
        
        console.log(startingGameboardArray)
        if(unplacedShips.length === 0 ) {
                alert('All ships placed!')
                battlePage();
                currentPage = 'battleships page';
                console.log(currentPage)
                let battleShipsContainer = document.querySelector('.battleshipsContainer');
                let playerContainer = document.querySelector('.playerContainer');
                let computerContainer = document.querySelector('.computerContainer');
                console.log(battleShipsContainer);
                while(notPlacedShips.length > 0) {
                        placeAllCompShips();
                }

                computerContainer.addEventListener('click', (e) => {

                console.log(e.target.id)

                if(e.target.id !== 'O' && e.target.id !== 'X') {


                        let random = () => Math.floor(Math.random() * 100)  +1
                        console.log('BATTLEBABY', e.target.id)
      
      
                        
      
                        
      
                        
                        console.log(computerBoard.receiveAttack(Number(e.target.id)))
                             
                        
      
      
                      //   if(computerBoard.receiveAttack(Number(e.target.id)) !== null) {
                      //         computersturn = true
                      //   }
      
                        
      
                        console.log('random', random())
                        // optimise random first - ensure random shot
                        //hasn't already been taken.
      
                        //then need to ensure that if hit is made, the next shot
                        //is either one square x/y across,
                        //need to keep track of possible ships already destroyed.
                        // shiplengths, adjacents hits.
                        let number = random();
      
                        while(playerOneBoard.missedShots.includes(number)) {
                              console.log('WHILELOOP MATCH', number)
                              number = random()
                        }
                       console.log('randomnumber', number)
      
                       console.log(Number(e.target.id))
      
      
                              playerOneBoard.receiveAttack(number)
                              
                        
                        
                        console.log('plmissedshots', playerOneBoard.missedShots.sort((a,b) => a-b))
                        console.log('playerboardArray',playerOneBoard.gameBoardArray)
                        computerboardPopulator(computerBoard, computerContainer)
                        gameboardPopulator(playerOneBoard, playerContainer)
                        console.log('successfulShotsonComp',computerBoard.successfulShots)
                        if(computerBoard.successfulShots.length === 21) {
                              console.log('YOU WIN!!!!!!!!!!')
                        }
                        console.log(computerBoard.gameBoardArray)
                        console.log('cbobj',computerBoard.placedShipsObject)
                        console.log('pbobj',playerOneBoard.placedShipsObject)




                        
                }
                  
                  
                })
                

                gameboardPopulator(playerOneBoard, playerContainer) 
                computerboardPopulator(computerBoard, computerContainer) 
                //gameboardPopulator(playerOneBoard)

                console.log(e.target.id)
        
        
        }

        let valid = playerOneBoard.placeShip(unplacedShips[0], alignment, Number(e.target.id));
        if(valid === undefined) {
                playerOneBoard.placeShip(unplacedShips[0], alignment, Number(e.target.id))
                gameboardPopulator(playerOneBoard, placementBoard)
                unplacedShips.shift();
                console.log(unplacedShips.length)
        }
        
 

})







    

        // placementBoard.addEventListener('click', (e) => {

        //     console.log(unplacedShips.length)

        //    let goggle = playerOneBoard.placeShip(unplacedShips[0], 'vertical' ,Number(e.target.id))
        //    console.log(goggle)
        //    if(goggle == 'Invalid Placement') {
        //     return 'Invalid Placement'
        //    } else {
        //     playerOneBoard.placeShip(unplacedShips[0], 'vertical' ,Number(e.target.id))
        //     gameboardPopulator(playerOneBoard, placementBoard)
        //     unplacedShips.shift();
        //    }
        // })




// while(unplacedShips.length >= 1) {
//     placeShips('vertical');
// }



// placementBoard.addEventListener('click',(e) => {

//     DOMInteraction.displayShipPlacement(shipLength, alignment,e.target.id, playerOneBoard)

// })

//  playerOneBoard.placeShip(5, 'vertical', 44);

gameboardPopulator(playerOneBoard, placementBoard)

// console.log(playerOneBoard.placedShipPositions)
    
// console.log(playerOneBoard.gameBoardArray)





// let placementBoard = document.querySelector('.placementBoard')

// console.log(placementBoard)


//console.log(gameboardArray)

// No.	Class of ship	Size
// 1	Carrier	         5
// 2	Battleship     	 4
// 3	Cruiser	         3
// 4	Submarine	     3
// 5	Destroyer	     2


// playerOneBoard.placeShip(4, 'horizontal', 23);

// gameboardPopulator(playerOneBoard)



// playerOneBoard.placeShip(4, 'vertical', 1);

// gameboardPopulator(playerOneBoard)

// playerOneBoard.placeShip(3, 'vertical', 79);

// gameboardPopulator(playerOneBoard)

// playerOneBoard.placeShip(3, 'vertical', 10);

// gameboardPopulator(playerOneBoard)

// playerOneBoard.placeShip(2, 'horizontal', 58);

// gameboardPopulator(playerOneBoard)

// playerOneBoard.placeShip(2, 'horizontal', 91);

// gameboardPopulator(playerOneBoard)

// playerOneBoard.placeShip(2, 'horizontal', 46);

// gameboardPopulator(playerOneBoard)

// playerOneBoard.placeShip(1, 'horizontal', 51);

// gameboardPopulator(playerOneBoard)

// playerOneBoard.placeShip(1, 'horizontal', 76);

// gameboardPopulator(playerOneBoard)




// // console.log(gameboard)

// console.log(playerOneBoard.placedShipPositions)

// playerOneBoard.placeShip(4, 'horizontal', 22);

// gameboardPopulator(playerOneBoard)

// console.log(playerOneBoard.placedShipPositions)
// console.log(playerOneBoard.gameBoardArray.length)

// console.log(playerOneBoard.placedShipsObject);

// playerOneBoard.receiveAttack(23)
// playerOneBoard.receiveAttack(2);

// console.log(playerOneBoard.placedShipsObject);

// console.log(playerOneBoard.gameBoardArray)
// console.log(playerOneBoard.missedShots)

// gameboardPopulator(playerOneBoard)

// playerOneBoard.receiveAttack(95)
// playerOneBoard.receiveAttack(1);

// gameboardPopulator(playerOneBoard)





console.log('POW!')

