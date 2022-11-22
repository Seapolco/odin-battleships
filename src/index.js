import "./main.css"

import home from './pages/home';

import Gameboard from './game/gameboard';
import gameboardPopulator from "./game/gameboardPopulator";


let playerOneBoard = new Gameboard();

gameboardPopulator(playerOneBoard)

//console.log(gameboardArray)

// No.	Class of ship	Size
// 1	Carrier	         5
// 2	Battleship     	 4
// 3	Cruiser	         3
// 4	Submarine	     3
// 5	Destroyer	     2


playerOneBoard.placeShip(4, 'horizontal', 23);

gameboardPopulator(playerOneBoard)

playerOneBoard.placeShip(5, 'vertical', 44);

gameboardPopulator(playerOneBoard)

playerOneBoard.placeShip(4, 'vertical', 1);

gameboardPopulator(playerOneBoard)

playerOneBoard.placeShip(3, 'vertical', 79);

gameboardPopulator(playerOneBoard)

playerOneBoard.placeShip(3, 'vertical', 10);

gameboardPopulator(playerOneBoard)

playerOneBoard.placeShip(2, 'horizontal', 58);

gameboardPopulator(playerOneBoard)

playerOneBoard.placeShip(2, 'horizontal', 91);

gameboardPopulator(playerOneBoard)

playerOneBoard.placeShip(1, 'horizontal', 46);

gameboardPopulator(playerOneBoard)

playerOneBoard.placeShip(1, 'horizontal', 51);

gameboardPopulator(playerOneBoard)

playerOneBoard.placeShip(1, 'horizontal', 76);

gameboardPopulator(playerOneBoard)




// console.log(gameboard)

console.log(playerOneBoard.placedShipPositions)

playerOneBoard.placeShip(4, 'horizontal', 22);

console.log(playerOneBoard.placedShipPositions)
console.log(playerOneBoard.gameBoardArray.length)






console.log('POW!')

