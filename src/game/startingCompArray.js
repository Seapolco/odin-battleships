


let startingcompBoardArray = [];

let compBoardSubArray = [];



    for(let i = 1; i <= 100; i++) {
    compBoardSubArray.push(i);
    if(i % 10 === 0) {
        startingcompBoardArray.push(compBoardSubArray);
        compBoardSubArray = [];
    }
  }

export default startingcompBoardArray