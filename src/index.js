import "./main.css"

import dom from './helpers/DOMElements';

import placementPage from './pages/placementPage';
import elementFactory from "./helpers/elementFactory";

import Gameboard from './game/gameboard';
import gameboardPopulator from "./game/gameboardPopulator";

import DOMInteraction from './game/DOMinteraction';


let playerOneBoard = new Gameboard();

placementPage();

let placementBoard = dom.placementBoard();


let unplacedShips = [5,4,4,3,3,2];


placementBoard.addEventListener('click', (e) => {
        
        console.log(e.target.id)
        let valid = playerOneBoard.placeShip(unplacedShips[0], 'vertical', Number(e.target.id));
        if(valid !== 'Invalid placement') {
                playerOneBoard.placeShip(unplacedShips[0], 'vertical', Number(e.target.id))
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

