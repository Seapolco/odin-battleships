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

let alignmentBtn = document.querySelector('.alignmentBtn');
let placePlayBtn = document.querySelector('.placePlayBtn');
console.log(placePlayBtn)


console.log(alignmentBtn)

let alignment = 'horizontal';

let currentPage = 'placement page'

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
                placements.push(nextAttack)
                console.log(placements)
                arr.shift();
        }

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


placePlayBtn.addEventListener('click', () => {
        console.log(unplacedShips.length === 0)
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
                        console.log(computerBoard.gameBoardArray)
                        console.log('cbobj',computerBoard.placedShipsObject)
                        console.log('pbobj',playerOneBoard.placedShipsObject)




                        
                }
                  
                  
                })
                

                gameboardPopulator(playerOneBoard, playerContainer) 
                computerboardPopulator(computerBoard, computerContainer) 
                //gameboardPopulator(playerOneBoard)

                console.log(e.target.id)
})



placementBoard.addEventListener('click', (e) => {

        if(unplacedShips.length === 1) {
                placePlayBtn.style.visibility = 'visible';
        }
        
        console.log(startingGameboardArray)
        if(unplacedShips.length === 0 ) {

        
        
        }

        let valid = playerOneBoard.placeShip(unplacedShips[0], alignment, Number(e.target.id));
        if(valid === undefined) {
                playerOneBoard.placeShip(unplacedShips[0], alignment, Number(e.target.id))
                gameboardPopulator(playerOneBoard, placementBoard)
                unplacedShips.shift();
                console.log(unplacedShips.length)
        }
        
 

})




gameboardPopulator(playerOneBoard, placementBoard)






console.log('POW!')

