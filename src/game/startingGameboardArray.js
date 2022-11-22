
let startingGameboardArray = [];

let gameboardSubArray = [];



    for(let i = 1; i <= 100; i++) {
    gameboardSubArray.push(i);
    if(i % 10 === 0) {
        startingGameboardArray.push(gameboardSubArray);
        gameboardSubArray = [];
    }
  }

export default startingGameboardArray