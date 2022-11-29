
import computerGameboard from "./computerBoard";

import battlePage from "../pages/battlePage";
import Gameboard  from "./gameboard";

import gameboardPopulator from './gameboardPopulator'
import computerboardPopulator from './computerboardPopulator'

import playerOneBoard from './playerOneBoard';

//import playerOneBoard from '../index';

let currentPage = 'placement page'

let computerBoard = new computerGameboard();


//let playerOneBoard = playerOneBoard



const gameFlow = function tempGameFlowLogic() {


let notPlacedShips = [5,4,4,3,3,2];
let alignments = ['vertical', 'horizontal', 'vertical', 'horizontal', 'vertical', 'horizontal'];

    function converter(num, direction) {
        if(direction === 'left') {
          return num + 1;
        }
        if(direction === 'right') {
          return num - 1;
        }
        if(direction === 'up') {
          return num -10;
        }
        if(direction === 'down') {
          return num + 10;
        }
}

    let placements = []

    function shipCheck(placement) {

        while(placements.length > 0) {
                placements.pop();
        }      
        
        let arr = ['left', 'right', 'up', 'down']
        
        for(let i = 0; i< 4; i++) {
                console.log(i)
                let nextAttack = converter(placement,arr[0]);
                if( nextAttack <= 100 && nextAttack >= 1 ) {
                        if(!playerOneBoard.successfulShots.includes(nextAttack) && !playerOneBoard.missedShots.includes(nextAttack)) {
                                                       
                        placements.push(nextAttack)
                        console.log(placements)
                        arr.shift();
                        } else {
                                arr.shift();
                        }
                        console.log('INSIDE SHIP CHECK', playerOneBoard.successfulShots.includes(nextAttack), 'SS--------------')
                        console.log('INSIDE SHIP CHECK', playerOneBoard.missedShots.includes(nextAttack), 'MS--------------')
 
                } 
                       
                
                console.log('INSIDE SHIP CHECK', placements, '--------------')
                
        
        }
        
        }

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


                            //alert('All ships placed!')
               
                
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
    
                            console.log('PREVIOUS ATTACK', playerOneBoard.lastAttack)
                            if(playerOneBoard.lastAttack === "Hit" && placements.length < 1) {
                            console.log('PLACEMENTS',placements)
                            console.log(playerOneBoard.successfulShots,'P1SUCCSHOTS **********************')
                            console.log(playerOneBoard.successfulShots, 'PLAYER SUCCESS!!!')
                            console.log(shipCheck(playerOneBoard.successfulShots[0]))
                            shipCheck(playerOneBoard.successfulShots[playerOneBoard.successfulShots.length -1])
                            }
                            if(placements.length > 0) {
                            console.log('BUGGGGING','hits:', playerOneBoard.successfulShots )
                            console.log('BUGGGGING','misses:', playerOneBoard.missedShots )
                            console.log('PLACEMENTS BEFORE', placements)
                            
                                playerOneBoard.receiveAttack(placements[0]);
                                console.log('PLACEMENTS AFTER', placements)
                                placements.shift();
                            

                            } else {
                            playerOneBoard.receiveAttack(number)
                            }
                            
                            
                    
                    
                    console.log('plmissedshots', playerOneBoard.missedShots.sort((a,b) => a-b))
                    console.log('playerboardArray',playerOneBoard.gameBoardArray)
                    computerboardPopulator(computerBoard, computerContainer)
                    gameboardPopulator(playerOneBoard, playerContainer)
                    console.log('successfulShotsonComp',computerBoard.successfulShots)
                    if(computerBoard.successfulShots.length === 21) {
                            console.log('YOU WIN!!!!!!!!!!')
                    }
                    console.table(computerBoard.gameBoardArray)
                    console.log('cbobj',computerBoard.placedShipsObject)
                    console.log('pbobj',playerOneBoard.placedShipsObject)




                    
            }
                
                
            })
            

            gameboardPopulator(playerOneBoard, playerContainer) 
            computerboardPopulator(computerBoard, computerContainer) 
            //gameboardPopulator(playerOneBoard)

            console.log(e.target.id)


}

export default gameFlow