


let notPlacedShips = [5,4,4,3,3,2];
let alignments = ['vertical', 'horizontal', 'vertical', 'horizontal', 'vertical', 'horizontal'];



const placeAllCompShips =()=> {

        
        
        let random = () => Math.floor(Math.random() * 100)  +1
        

        let valid = computerBoard.placeShip(notPlacedShips[0], alignments[0], random());

        console.log('VALIDDDDDDDDDD', valid)
        if(valid === undefined) {
                console.log('cbarray',computerBoard.gameBoardArray)
                notPlacedShips.shift();
                alignments.shift();
                
        } 



}
export default placeAllCompShips