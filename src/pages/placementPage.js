
import elementFactory from "../helpers/elementFactory";

const placementPage = function placementPageGenerator() {

  let placementPageWrapper = elementFactory('div', {class: 'placementPageWrapper'});

  let placementBoard =   elementFactory('div', {class: 'placementBoard'})

  let shipContainer = elementFactory('div', {class: 'shipContainer'});

  let ships = elementFactory('div', {class:'ships'});

  let unplacedShips = [5,4,4,3,3,2];

  // let carrier = element('div', {class:'carrier'});
  // let battleshipOne = element('div', {class:'battleship'});
  // let battleshipTwo = element('div', {class:'battleship'});
  // let cruiserOne = element('div', {class:'cruiser'});
  // let cruiserTwo = element('div', {class: 'cruiser'});
  // let destroyer = element('div', {class:'destroyer'});


  // let a = unplacedShips[0];

  // while(a > 0) {
  //   let d = elementFactory('div',{})
  //   d.style.height = '30px'
  //   d.style.width = '30px'
  //   d.style.backgroundColor = 'green';
  //   d.style.border = 'solid white 1px'
  //   carrier.appendChild(d)
  //   a -= 1;

  // }

  // unplacedShips.shift();

  // a = unplacedShips[0];

  // while(a > 0) {
  //   let d = elementFactory('div',{})
  //   d.style.height = '30px'
  //   d.style.width = '30px'
  //   d.style.backgroundColor = 'green';
  //   d.style.border = 'solid white 1px'
  //   carrier.appendChild(d)
  //   a -= 1;
  // }

  //function shipConstr()


  while(unplacedShips.length > 0) {
    let a = unplacedShips[0];
    let ship = elementFactory('div', {class:'ship'})

    while(a > 0) {
      let d = elementFactory('div',{})
      d.style.height = '30px'
      d.style.width = '30px'
      d.style.backgroundColor = 'green';
      d.style.border = 'solid white 1px'
      ship.appendChild(d)
      a -= 1;
    }
    ships.appendChild(ship)
    unplacedShips.shift();

  }


// 1	Carrier	         5
// 2	Battleship     	 4
// 3	Cruiser	         3
// 4	Submarine	     3
// 5	Destroyer	     2



  let alignmentBtn = elementFactory('button', {class: 'alignmentBtn'});
  alignmentBtn.innerText = 'Switch to vertical placement';

  let placePlayButton = elementFactory('button', {class: 'placePlayBtn'})
  placePlayButton.innerText = 'Enter Battle!'
  placePlayButton.style.visibility = 'hidden';

  
  document.body.appendChild(placementPageWrapper);

  // ships.appendChild(destroyer)

  placementPageWrapper.appendChild(placementBoard)
  placementPageWrapper.appendChild(shipContainer)
  shipContainer.appendChild(ships)
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







