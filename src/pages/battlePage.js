
import elementFactory from "../helpers/elementFactory"

const battlePage = function battleShipsPage() {

    while(document.body.lastChild) {
        document.body.removeChild(document.body.lastChild)
    }

    const battleshipsContainer = elementFactory('div', {class: 'battleshipsContainer'})
    const title = elementFactory('h1', {class: 'battlePageTitle'});
    title.innerText = 'Battleships!'

    const playerContainer = elementFactory('div', {class: 'playerContainer'});
    const computerContainer = elementFactory('div', {class: 'computerContainer' });



    document.body.appendChild(title)
    document.body.appendChild(battleshipsContainer)
    battleshipsContainer.appendChild(playerContainer);
    battleshipsContainer.appendChild(computerContainer)

}

export default battlePage