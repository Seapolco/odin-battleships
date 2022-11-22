import "./main.css"

import home from './pages/home';


let gameboardArray = home().gameboardArray

console.log(gameboardArray)

const gameboard = document.querySelector('.gameboard');

gameboardArray.forEach((e) => {
    e.forEach((e,i) => {
        console.log({e,i})
        let square = document.createElement('div');
        square.setAttribute('data', e);
        square.style.height = "30px";
        square.style.width = "30px";
        square.style.backgroundColor = 'blue';
        square.style.border = 'solid white 3px'

        gameboard.appendChild(square)
    })
})

console.log(gameboard)





console.log('POW!')

