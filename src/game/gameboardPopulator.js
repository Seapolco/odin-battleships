
const gameboardPopulator = (gameboard) => {

    const gameboardContainer = document.querySelector('.gameboard');


    while(gameboardContainer.lastChild) {
        gameboardContainer.removeChild(gameboardContainer.lastChild)
    }

    //Ship placement

    gameboard.gameBoardArray.forEach((e) => {
        e.forEach((e,i) => {
          
            let square = document.createElement('div');
            square.setAttribute('data', Number(e));
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
            square.style.border = 'solid white 3px'
    
            gameboardContainer.appendChild(square)
        })
    })

    //Hit placement 





}


export default gameboardPopulator