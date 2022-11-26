import elementFactory from "../helpers/elementFactory"

const gameboardPopulator = (gameboard, element) => {

    //const gameboardContainer = document.querySelector('.gameboard');


    while(element.lastChild) {
        element.removeChild(element.lastChild)
    }

    //Ship placement

    gameboard.gameBoardArray.forEach((e) => {
        e.forEach((e,i) => {
          
            // let square = document.createElement('div');
            // square.setAttribute('data', Number(e));

            let square = elementFactory('div', {id : e})
            square.style.height = "30px";
            square.style.width = "30px";
            if(typeof e === 'string') {
                if(e === 'X') {
                    square.style.backgroundColor = 'red'
                } else if(e === 'O') {
                    square.style.backgroundColor = 'white'
                } else {
                    square.style.backgroundColor = 'green';
                }
               
            } else {
                square.style.backgroundColor = 'transparent';
            }
            square.style.border = 'solid white 1px'
    
            element.appendChild(square)
        })
    })

    //Hit placement 





}


export default gameboardPopulator