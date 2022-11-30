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

import gameFlow from './game/tempGameFlow';

import playerOneBoard from '../src/game/playerOneBoard';


//let playerOneBoard = playerOneBoard
// let computerBoard = new computerGameboard();

placementPage();


let placementBoard = dom.placementBoard();


// let unplacedShips = [5,4,4,3,3,2];

let alignmentBtn = document.querySelector('.alignmentBtn');
let placePlayBtn = document.querySelector('.placePlayBtn');
console.log(placePlayBtn)


console.log(alignmentBtn)

let alignment = 'horizontal';

let currentPage = 'placement page'

// let notPlacedShips = [5,4,4,3,3,2];
// let alignments = ['vertical', 'horizontal', 'vertical', 'horizontal', 'vertical', 'horizontal'];

// function converter(num, direction) {
//         if(direction === 'left') {
//           return num + 1;
//         }
//         if(direction === 'right') {
//           return num - 1;
//         }
//         if(direction === 'up') {
//           return num -10;
//         }
//         if(direction === 'down') {
//           return num + 10;
//         }
// }
      
      
// let placements = []

// function shipCheck(placement) {

// while(placements.length > 0) {
//         placements.pop();
// }      

// let arr = ['left', 'right', 'up', 'down']

// for(let i = 0; i< 4; i++) {
//         console.log(i)
//         let nextAttack = converter(placement,arr[0]);
//         if( nextAttack <= 100 && nextAttack >= 1 ) {
//                 placements.push(nextAttack)
//                 console.log(placements)
//                 arr.shift();
//         }

// }

// }

// const placeAllCompShips =()=> {

        
        
//         let random = () => Math.floor(Math.random() * 100)  +1
        

//         let valid = computerBoard.placeShip(notPlacedShips[0], alignments[0], random());

//         console.log('VALIDDDDDDDDDD', valid)
//         if(valid === undefined) {
//                 console.log('cbarray',computerBoard.gameBoardArray)
//                 notPlacedShips.shift();
//                 alignments.shift();
                
//         } 



// }

const ships = document.querySelector('.ships');
const allShip = document.querySelectorAll('.ship');


alignmentBtn.addEventListener('click', () => {
        if(alignmentBtn.innerText === 'Switch to vertical placement') {
                alignmentBtn.innerText = 'Switch to horizontal placement';
                alignment = 'vertical';
                allShip.forEach((e) => e.style.display = 'block' )
                
                ships.style.gridTemplateRows = '';
                ships.style.gridTemplateColumns = "repeat(6,1fr)"

        } else if(alignmentBtn.innerText === 'Switch to horizontal placement') {
                alignmentBtn.innerText = 'Switch to vertical placement';
                alignment = 'horizontal'

                ships.style.gridTemplateColumns = '';
                 ships.style.gridTemplateRows = 'repeat(6,1fr)';
                 allShip.forEach((e) => e.style.display = 'flex')

        }
        
})

let unplacedShips = [5,4,4,3,3,2];


placePlayBtn.addEventListener('click', () => {
        console.log(unplacedShips.length === 0)
        gameFlow();


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

export {playerOneBoard}

