
import elementFactory from "../helpers/elementFactory";

const placementPage = function placementPageGenerator() {

  let placementPageWrapper = elementFactory('div', {class: 'placementPageWrapper'});

  let placementBoard =   elementFactory('div', {class: 'placementBoard'})

  let shipContainer = elementFactory('div', {class: 'shipContainer'});

  let alignmentBtn = elementFactory('button', {class: 'alignmentBtn'});
  alignmentBtn.innerText = 'Switch to vertical placement';

  let placePlayButton = elementFactory('button', {class: 'placePlayBtn'})
  placePlayButton.innerText = 'Enter Battle!'
  placePlayButton.style.visibility = 'hidden';

  
  document.body.appendChild(placementPageWrapper);

  placementPageWrapper.appendChild(placementBoard)
  placementPageWrapper.appendChild(shipContainer)
  shipContainer.appendChild(alignmentBtn)
  shipContainer.appendChild(placePlayButton)
  


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







