
import gameboardPopulator from "./gameboardPopulator";
import dom from '../helpers/DOMElements';

const DOMInteraction = (function DOMHelperFunctions() {

    const displayShipPlacement = (length, alignment, shipPlacement, gameboard) => {
        gameboard.resetGameBoardArray();
        gameboardPopulator(gameboard, dom.placementBoard())
        gameboard.placeShip(length, alignment ,Number(shipPlacement))
        gameboardPopulator(gameboard, dom.placementBoard())
    }

    return {
        displayShipPlacement
    }
    
})();

export default DOMInteraction