
const home = function homePage() {
    let gameboardArray = [];

    let gameboardSubArray = [];



    for(let i = 1; i <= 100; i++) {
    gameboardSubArray.push(i);
    if(i % 10 === 0) {
        gameboardArray.push(gameboardSubArray);
        gameboardSubArray = [];
    }
  }

  return {
    gameboardArray
  }


}

export default home







