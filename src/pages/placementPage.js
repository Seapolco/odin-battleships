
import elementFactory from "../helpers/elementFactory";

const placementPage = function placementPageGenerator() {

  let placementPageWrapper = elementFactory('div', {class: 'placementPageWrapper'});

  let placementBoard =   elementFactory('div', {class: 'placementBoard'})

  let shipContainer = elementFactory('div', {class: 'shipContainer'});

  let alignmentBtn = elementFactory('button', {class: 'alignmentBtn'});

  

  document.body.appendChild(placementBoard)


  //   let gameboardArray = [];

  //   let gameboardSubArray = [];



  //   for(let i = 1; i <= 100; i++) {
  //   gameboardSubArray.push(i);
  //   if(i % 10 === 0) {
  //       gameboardArray.push(gameboardSubArray);
  //       gameboardSubArray = [];
  //   }
  // }

  // return {
  //   gameboardArray
  // }


}

export default placementPage  







