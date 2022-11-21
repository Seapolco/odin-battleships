



const Ship = function ShipFactory(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.isHit = () => {
      if(!this.sunk) {
        this.hits += 1;
      }
    }
    this.isSunk = () => {
      if(this.hits === this.length) {
        this.sunk = true;
        return true
      } else {
        return false
      }
    }
    
}

export default Ship