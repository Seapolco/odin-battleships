
const gameboardPopulator = (player) => {

    const gameboardContainer = document.querySelector('.gameboard');


    while(gameboardContainer.lastChild) {
        gameboardContainer.removeChild(gameboardContainer.lastChild)
    }

    player.gameBoardArray.forEach((e) => {
        e.forEach((e,i) => {
          
            let square = document.createElement('div');
            square.setAttribute('data', Number(e));
            square.style.height = "30px";
            square.style.width = "30px";
            if(typeof e === 'string') {
                square.style.backgroundColor = 'red';
            } else {
                square.style.backgroundColor = 'blue';
            }
            square.style.border = 'solid white 3px'
    
            gameboardContainer.appendChild(square)
        })
    })

}


export default gameboardPopulator