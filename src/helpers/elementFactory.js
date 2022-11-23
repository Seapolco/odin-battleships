

const elementFactory = (type, attributes) => {
    let element = document.createElement(type)

    if(attributes) {
        for(let key in attributes) {
            element.setAttribute(key, attributes[key])
        }
    }
    return element
}

export default elementFactory