
import elementFactory from "../helpers/elementFactory"


const battleshipsPopulator = (gameboard1, element1, gameboard2, element2) => {

    //const gameboardContainer = document.querySelector('.gameboard');


    // while(element.lastChild) {
    //     element.removeChild(element.lastChild)
    // }

    //Ship placement

    gameboard1.gameBoardArray.forEach((e) => {

        e.forEach((e,i) => {
          
            // let square = document.createElement('div');
            // square.setAttribute('data', Number(e));

            let square = elementFactory('div', {id : e, ondrop :"drop(event)", ondragover :"allowDrop(event)"})
            square.style.height = "30px";
            square.style.width = "30px";
            if(typeof e === 'string') {
                if(e === 'X') {
                    square.style.backgroundColor = 'red'
                } else if(e === 'O') {
                    square.style.backgroundColor = 'black'
                } else {
                    square.style.backgroundColor = 'green';
                }
               
            } else {
                square.style.backgroundColor = 'blue';
            }
            square.style.border = 'solid white 2px'
    
            element1.appendChild(square)
        })
    })

    gameboard2.gameBoardArray.forEach((e) => {
        e.forEach((e,i) => {
          
            // let square = document.createElement('div');
            // square.setAttribute('data', Number(e));

            let square = elementFactory('div', {id : e, ondrop :"drop(event)", ondragover :"allowDrop(event)"})
            square.style.height = "30px";
            square.style.width = "30px";
            if(typeof e === 'string') {
                if(e === 'X') {
                    square.style.backgroundColor = 'red'
                } else if(e === 'O') {
                    square.style.backgroundColor = 'black'
                } else {
                    square.style.backgroundColor = 'green';
                }
               
            } else {
                square.style.backgroundColor = 'blue';
            }
            square.style.border = 'solid white 2px'
    
            element2.appendChild(square)
        })
})
    

    //Hit placement 

}

export default battleshipsPopulator