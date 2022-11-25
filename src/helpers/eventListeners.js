
// import dom from "./DOMElements";

// import placeAllCompShips from '../game/placeAllCompShips';

// import Gameboard from '../game/gameboard';
// import computerGameboard from '../game/computerBoard';

// import gameboardPopulator from '../game/gameboardPopulator';
// import battlePage from '../pages/battlePage';


import dom from './helpers/DOMElements';

//import placementPage from '../pages/placementPage';
//import elementFactory from '../helpers/elementFactory';

import Gameboard from '../game/gameboard'
import computerGameboard from '../game/computerBoard';
import gameboardPopulator from '../game/gameboardPopulator';

import computerboardPopulator from '../game/computerboardPopulator'

//import battleshipsPopulator from '../game/battleshipsPopulator'

//import DOMInteraction from '../game/DOMinteraction'

import battlePage from '../pages/battlePage'

//import startingGameboardArray from '../game/startingGameboardArray'

//import eventsLis from './helpers/eventListeners';






let unplacedShips = [5,4,4,3,3,2];

let notPlacedShips = [5,4,4,3,3,2];
let alignments = ['vertical', 'horizontal', 'vertical', 'horizontal', 'vertical', 'horizontal'];

let alignment = 'horizontal';

let currentPage = 'placement page'

let playerOneBoard = new Gameboard();
let computerBoard = new computerGameboard();


const eventsLis = function allEventListeners() {

    const placementBoard = dom.placementBoard();


    const placementBoardLis = (() => {

        return placementBoard.addEventListener('click', (e) => {
        
        //console.log(startingGameboardArray)
        if(unplacedShips.length === 0 ) {
                alert('All ships placed!')
                battlePage();
                currentPage = 'battleships page';
                console.log(currentPage)


                let battleShipsContainer = dom.battleShipsContainer();
                let playerContainer = dom.playerContainer();
                let computerContainer = dom.computerContainer();
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

    })();

    return {
        placementBoardLis
    }

}

export default eventsLis

