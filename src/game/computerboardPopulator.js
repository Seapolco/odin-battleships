import elementFactory from "../helpers/elementFactory"

const computerboardPopulator = (gameboard, element) => {

    //const gameboardContainer = document.querySelector('.gameboard');


    while(element.lastChild) {
        element.removeChild(element.lastChild)
    }

    //Ship placement

    gameboard.gameBoardArray.forEach((e) => {
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
                    square.style.backgroundColor = 'blue';
                }
               
            } else {
                square.style.backgroundColor = 'blue';
            }
            square.style.border = 'solid white 2px'
    
            element.appendChild(square)
        })
    })

   

    //Hit placement 

}

export default computerboardPopulator