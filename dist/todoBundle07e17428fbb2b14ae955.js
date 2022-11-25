/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game/computerBoard.js":
/*!***********************************!*\
  !*** ./src/game/computerBoard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _startingCompArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startingCompArray */ "./src/game/startingCompArray.js");
/* harmony import */ var _shipIdentifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipIdentifier */ "./src/game/shipIdentifier.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var computerGameboard = /*#__PURE__*/_createClass(function computerGameboard() {
  var _this = this;
  _classCallCheck(this, computerGameboard);
  this.gameBoardArray = _toConsumableArray(_startingCompArray__WEBPACK_IMPORTED_MODULE_0__["default"]);
  this.placedShipPositions = [];
  this.missedShots = [];
  this.successfulShots = [];
  this.placedShipsObject = {
    "Carrier": [],
    "Battleship": [],
    "Cruiser": [],
    "Destroyer": [],
    "Patrol Boat": []
  };
  this.resetGameBoardArray = function () {
    // console.log(this.placedShipPositions.length)
    _this.gameBoardArray.forEach(function (e, i) {
      e.forEach(function (j, k) {
        if (typeof j === 'string') {
          // console.log('STRING!')
          _this.gameBoardArray[i].splice(k, 1, Number(j));
          //e.splice(k, 1, Number(j))
        }
      });
    });

    while (_this.placedShipPositions.length >= 1) {
      _this.placedShipPositions.pop();
    }

    // console.log(this.placedShipPositions)
    // console.log(this.gameBoardArray)
  };

  this.placeShip = function (shipLength, alignment, startingPosition) {
    //console.log(startingPosition + shipLength -1)

    _this.invalid = "Invalid placement";
    _this.shipType = (0,_shipIdentifier__WEBPACK_IMPORTED_MODULE_1__["default"])(shipLength);
    _this.position = [];
    console.log(_this.placedShipPositions);
    if (_this.placedShipPositions.includes(startingPosition)) {
      console.log(_this.invalid);
      _this.ok = false;
      return _this.invalid;
    }
    if (startingPosition < 1) {
      console.log('LESS THAT ZERO');
      return _this.invalid;
    }
    _this.ok = true;

    // Check to see if horizontal placement fits within the row
    if (alignment === 'horizontal') {
      _this.gameBoardArray.forEach(function (e, i) {
        if (e.includes(startingPosition)) {
          if (e.indexOf(startingPosition) + shipLength > 10) {
            _this.ok = false;
          }
        } else {
          return true;
        }
      });
    }

    // Check to see if vertical placement fits within the gameboard
    if (alignment === 'vertical') {
      //console.log(startingPosition)
      if (startingPosition + shipLength * 10 > 110) {
        _this.ok = false;
        //console.log(this.invalid)
      }
    }

    // check to see if current placement passes x/y tests
    if (_this.ok === false) {
      //console.log('not ok')
      //console.log(this.invalid)
      return _this.invalid;
    }

    // Checks to see if ship already placed within the desired area & updates current position array
    if (alignment === 'horizontal') {
      for (var i = 0; i < shipLength; i++) {
        if (_this.placedShipPositions.includes(startingPosition + i)) {
          console.log("".concat(_this.invalid, " ").concat(startingPosition));
          _this.ok = false;
          return "".concat(_this.invalid, " ").concat(startingPosition);
        }
        _this.position.push(startingPosition + i);
      }
    }
    if (alignment === 'vertical') {
      for (var _i = 0; _i < shipLength; _i++) {
        if (_this.placedShipPositions.includes(startingPosition + _i * 10)) {
          console.log("".concat(_this.invalid, " ").concat(startingPosition));
          return "".concat(_this.invalid, " ").concat(startingPosition);
        }
        _this.position.push(startingPosition + _i * 10);
      }
    }

    // Updates gameBoardArray with the placement of the ship.
    _this.gameBoardArray.forEach(function (e, i) {
      e.forEach(function (j, k) {
        if (_this.position.includes(j)) {
          //console.log(e[e.length-1])
          _this.gameBoardArray[i].splice(k, 1, "".concat(_this.gameBoardArray[i][k]));
        }
      });
    });

    // Updates the array with all the placedShipPositions
    _this.position.forEach(function (e) {
      _this.placedShipPositions.push(e);
    });

    // Updates the placeShip obj, currently seems redundant
    _this.placedShipsObject[_this.shipType].push(_this.position);
  };
  this.receiveAttack = function (placement) {
    console.log('PLACEMENT', placement);
    console.log(_this.successfulShots, _this.missedShots);
    if (placement === NaN) {
      return NaN;
    }
    if (_this.successfulShots.includes(placement) || _this.missedShots.includes(placement)) {
      console.log('INVALID', placement);
      return null;
    }
    var attempt = "Miss";
    //console.log(attempt);
    var done = false;
    var _loop = function _loop(key) {
      //console.log(obj[key])
      _this.placedShipsObject[key].forEach(function (e, i) {
        e.forEach(function (j, k) {
          if (j === placement) {
            console.log(key, e, j, k);
            e.splice(k, 1, "X");
            _this.successfulShots.push(j);
            attempt = "Hit!";
            done = true;
          }
        });
      });
    };
    for (var key in _this.placedShipsObject) {
      _loop(key);
    }

    // console.log('Before GBArry forEAch', attempt);

    _this.gameBoardArray.forEach(function (e, i) {
      e.forEach(function (j, k) {
        if (j == placement) {
          if (attempt === "Hit!") {
            // this.successfulShots.push(j)
            _this.gameBoardArray[i].splice(k, 1, "X");
          } else if (attempt === "Miss") {
            console.log('imhere');
            _this.gameBoardArray[i].splice(k, 1, "O");
          }
        }
      });
    });
    console.log(attempt, placement, done);
    if (attempt === "Miss") {
      _this.missedShots.push(placement);
      console.log(_this.missedShots);
    }
    return attempt;
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (computerGameboard);

/***/ }),

/***/ "./src/game/computerboardPopulator.js":
/*!********************************************!*\
  !*** ./src/game/computerboardPopulator.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/elementFactory */ "./src/helpers/elementFactory.js");

var computerboardPopulator = function computerboardPopulator(gameboard, element) {
  //const gameboardContainer = document.querySelector('.gameboard');

  while (element.lastChild) {
    element.removeChild(element.lastChild);
  }

  //Ship placement

  gameboard.gameBoardArray.forEach(function (e) {
    e.forEach(function (e, i) {
      // let square = document.createElement('div');
      // square.setAttribute('data', Number(e));

      var square = (0,_helpers_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
        id: e,
        ondrop: "drop(event)",
        ondragover: "allowDrop(event)"
      });
      square.style.height = "30px";
      square.style.width = "30px";
      if (typeof e === 'string') {
        if (e === 'X') {
          square.style.backgroundColor = 'red';
        } else if (e === 'O') {
          square.style.backgroundColor = 'black';
        } else {
          square.style.backgroundColor = 'blue';
        }
      } else {
        square.style.backgroundColor = 'blue';
      }
      square.style.border = 'solid white 2px';
      element.appendChild(square);
    });
  });

  //Hit placement 
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (computerboardPopulator);

/***/ }),

/***/ "./src/game/gameboard.js":
/*!*******************************!*\
  !*** ./src/game/gameboard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _startingGameboardArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startingGameboardArray */ "./src/game/startingGameboardArray.js");
/* harmony import */ var _shipIdentifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipIdentifier */ "./src/game/shipIdentifier.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



// No.	Class of ship	Size
// 1	Carrier	         5
// 2	Battleship     	 4
// 3	Cruiser	         3
// 4	Submarine	     3
// 5	Destroyer	     2

//let sg = startingGameBoardArray
var Gameboard = /*#__PURE__*/_createClass(function Gameboard() {
  var _this = this;
  _classCallCheck(this, Gameboard);
  this.gameBoardArray = _toConsumableArray(_startingGameboardArray__WEBPACK_IMPORTED_MODULE_0__["default"]);
  this.placedShipPositions = [];
  this.missedShots = [];
  this.successfulShots = [];
  this.placedShipsObject = {
    "Carrier": [],
    "Battleship": [],
    "Cruiser": [],
    "Destroyer": [],
    "Patrol Boat": []
  };
  this.resetGameBoardArray = function () {
    // console.log(this.placedShipPositions.length)
    _this.gameBoardArray.forEach(function (e, i) {
      e.forEach(function (j, k) {
        if (typeof j === 'string') {
          // console.log('STRING!')
          _this.gameBoardArray[i].splice(k, 1, Number(j));
          //e.splice(k, 1, Number(j))
        }
      });
    });

    while (_this.placedShipPositions.length >= 1) {
      _this.placedShipPositions.pop();
    }

    // console.log(this.placedShipPositions)
    // console.log(this.gameBoardArray)
  };

  this.placeShip = function (shipLength, alignment, startingPosition) {
    //console.log(startingPosition + shipLength -1)

    _this.invalid = "Invalid placement";
    _this.shipType = (0,_shipIdentifier__WEBPACK_IMPORTED_MODULE_1__["default"])(shipLength);
    _this.position = [];
    console.log(_this.placedShipPositions);
    if (_this.placedShipPositions.includes(startingPosition)) {
      console.log(_this.invalid);
      return _this.invalid;
    }
    if (startingPosition < 1) {
      console.log('LESS THAT ZERO');
      return _this.invalid;
    }
    _this.ok = true;

    // Check to see if horizontal placement fits within the row
    if (alignment === 'horizontal') {
      _this.gameBoardArray.forEach(function (e, i) {
        if (e.includes(startingPosition)) {
          if (e.indexOf(startingPosition) + shipLength > 10) {
            _this.ok = false;
          }
        } else {
          return true;
        }
      });
    }

    // Check to see if vertical placement fits within the gameboard
    if (alignment === 'vertical') {
      //console.log(startingPosition)
      if (startingPosition + shipLength * 10 > 110) {
        _this.ok = false;
        //console.log(this.invalid)
      }
    }

    // check to see if current placement passes x/y tests
    if (_this.ok === false) {
      //console.log('not ok')
      //console.log(this.invalid)
      return _this.invalid;
    }

    // Checks to see if ship already placed within the desired area & updates current position array
    if (alignment === 'horizontal') {
      for (var i = 0; i < shipLength; i++) {
        if (_this.placedShipPositions.includes(startingPosition + i)) {
          console.log("".concat(_this.invalid, " ").concat(startingPosition));
          return "".concat(_this.invalid, " ").concat(startingPosition);
        }
        _this.position.push(startingPosition + i);
      }
    }
    if (alignment === 'vertical') {
      for (var _i = 0; _i < shipLength; _i++) {
        if (_this.placedShipPositions.includes(startingPosition + _i * 10)) {
          console.log("".concat(_this.invalid, " ").concat(startingPosition));
          return "".concat(_this.invalid, " ").concat(startingPosition);
        }
        _this.position.push(startingPosition + _i * 10);
      }
    }

    // Updates gameBoardArray with the placement of the ship.
    _this.gameBoardArray.forEach(function (e, i) {
      e.forEach(function (j, k) {
        if (_this.position.includes(j)) {
          //console.log(e[e.length-1])
          _this.gameBoardArray[i].splice(k, 1, "".concat(_this.gameBoardArray[i][k]));
        }
      });
    });

    // Updates the array with all the placedShipPositions
    _this.position.forEach(function (e) {
      _this.placedShipPositions.push(e);
    });

    // Updates the placeShip obj, currently seems redundant
    _this.placedShipsObject[_this.shipType].push(_this.position);
  };
  this.receiveAttack = function (placement) {
    var attempt = "Miss";
    console.log(attempt);
    var done = false;
    var _loop = function _loop(key) {
      //console.log(obj[key])
      _this.placedShipsObject[key].forEach(function (e, i) {
        e.forEach(function (j, k) {
          if (j === placement) {
            console.log(key, e, j, k);
            e.splice(k, 1, "X");
            attempt = "Hit!";
            _this.successfulShots.push(j);
            done = true;
          }
        });
      });
    };
    for (var key in _this.placedShipsObject) {
      _loop(key);
    }
    console.log('Before GBArry forEAch', attempt);
    _this.gameBoardArray.forEach(function (e, i) {
      e.forEach(function (j, k) {
        if (j == placement) {
          if (attempt === "Hit!") {
            //this.successfulShots.push(j)
            _this.gameBoardArray[i].splice(k, 1, "X");
          } else if (attempt === "Miss") {
            console.log('imhere');
            // this.missedShots.push(placement)
            _this.gameBoardArray[i].splice(k, 1, "O");
          }
        }
      });
    });
    console.log(attempt, placement, done);
    if (attempt === "Miss") {
      _this.missedShots.push(placement);
    }
    return attempt;
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/game/gameboardPopulator.js":
/*!****************************************!*\
  !*** ./src/game/gameboardPopulator.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/elementFactory */ "./src/helpers/elementFactory.js");

var gameboardPopulator = function gameboardPopulator(gameboard, element) {
  //const gameboardContainer = document.querySelector('.gameboard');

  while (element.lastChild) {
    element.removeChild(element.lastChild);
  }

  //Ship placement

  gameboard.gameBoardArray.forEach(function (e) {
    e.forEach(function (e, i) {
      // let square = document.createElement('div');
      // square.setAttribute('data', Number(e));

      var square = (0,_helpers_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
        id: e
      });
      square.style.height = "30px";
      square.style.width = "30px";
      if (typeof e === 'string') {
        if (e === 'X') {
          square.style.backgroundColor = 'red';
        } else if (e === 'O') {
          square.style.backgroundColor = 'black';
        } else {
          square.style.backgroundColor = 'green';
        }
      } else {
        square.style.backgroundColor = 'blue';
      }
      square.style.border = 'solid white 2px';
      element.appendChild(square);
    });
  });

  //Hit placement 
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboardPopulator);

/***/ }),

/***/ "./src/game/shipIdentifier.js":
/*!************************************!*\
  !*** ./src/game/shipIdentifier.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var shipId = function shipIdentifier(shipLength) {
  var shipType = {
    5: "Carrier",
    4: "Battleship",
    3: "Cruiser",
    2: "Destroyer",
    1: "Patrol Boat"
  };
  return shipType[shipLength];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipId);

/***/ }),

/***/ "./src/game/startingCompArray.js":
/*!***************************************!*\
  !*** ./src/game/startingCompArray.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var startingcompBoardArray = [];
var compBoardSubArray = [];
for (var i = 1; i <= 100; i++) {
  compBoardSubArray.push(i);
  if (i % 10 === 0) {
    startingcompBoardArray.push(compBoardSubArray);
    compBoardSubArray = [];
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startingcompBoardArray);

/***/ }),

/***/ "./src/game/startingGameboardArray.js":
/*!********************************************!*\
  !*** ./src/game/startingGameboardArray.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var startingGameboardArray = [];
var gameboardSubArray = [];
for (var i = 1; i <= 100; i++) {
  gameboardSubArray.push(i);
  if (i % 10 === 0) {
    startingGameboardArray.push(gameboardSubArray);
    gameboardSubArray = [];
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startingGameboardArray);

/***/ }),

/***/ "./src/helpers/DOMElements.js":
/*!************************************!*\
  !*** ./src/helpers/DOMElements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dom = function DOMQuerySelectors() {
  var placementBoard = function placementBoard() {
    return document.querySelector('.placementBoard');
  };
  var alignmentBtn = function alignmentBtn() {
    return document.querySelector('.alignment');
  };
  var battleShipsContainer = function battleShipsContainer() {
    return document.querySelector('.battleshipsContainer');
  };
  var playerContainer = function playerContainer() {
    return document.querySelector('.playerContainer');
  };
  var computerContainer = function computerContainer() {
    return document.querySelector('.computerContainer');
  };
  return {
    placementBoard: placementBoard,
    alignmentBtn: alignmentBtn,
    battleShipsContainer: battleShipsContainer,
    playerContainer: playerContainer,
    computerContainer: computerContainer
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);

/***/ }),

/***/ "./src/helpers/elementFactory.js":
/*!***************************************!*\
  !*** ./src/helpers/elementFactory.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var elementFactory = function elementFactory(type, attributes) {
  var element = document.createElement(type);
  if (attributes) {
    for (var key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
  }
  return element;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elementFactory);

/***/ }),

/***/ "./src/helpers/eventListeners.js":
/*!***************************************!*\
  !*** ./src/helpers/eventListeners.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './helpers/DOMElements'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _game_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/gameboard */ "./src/game/gameboard.js");
/* harmony import */ var _game_computerBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game/computerBoard */ "./src/game/computerBoard.js");
/* harmony import */ var _game_gameboardPopulator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game/gameboardPopulator */ "./src/game/gameboardPopulator.js");
/* harmony import */ var _game_computerboardPopulator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game/computerboardPopulator */ "./src/game/computerboardPopulator.js");
/* harmony import */ var _pages_battlePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/battlePage */ "./src/pages/battlePage.js");
// import dom from "./DOMElements";

// import placeAllCompShips from '../game/placeAllCompShips';

// import Gameboard from '../game/gameboard';
// import computerGameboard from '../game/computerBoard';

// import gameboardPopulator from '../game/gameboardPopulator';
// import battlePage from '../pages/battlePage';



//import placementPage from '../pages/placementPage';
//import elementFactory from '../helpers/elementFactory';






//import battleshipsPopulator from '../game/battleshipsPopulator'

//import DOMInteraction from '../game/DOMinteraction'



//import startingGameboardArray from '../game/startingGameboardArray'

//import eventsLis from './helpers/eventListeners';

var unplacedShips = [5, 4, 4, 3, 3, 2];
var notPlacedShips = [5, 4, 4, 3, 3, 2];
var alignments = ['vertical', 'horizontal', 'vertical', 'horizontal', 'vertical', 'horizontal'];
var alignment = 'horizontal';
var currentPage = 'placement page';
var playerOneBoard = new _game_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]();
var computerBoard = new _game_computerBoard__WEBPACK_IMPORTED_MODULE_2__["default"]();
var eventsLis = function allEventListeners() {
  var placementBoard = Object(function webpackMissingModule() { var e = new Error("Cannot find module './helpers/DOMElements'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  var placementBoardLis = function () {
    return placementBoard.addEventListener('click', function (e) {
      //console.log(startingGameboardArray)
      if (unplacedShips.length === 0) {
        alert('All ships placed!');
        (0,_pages_battlePage__WEBPACK_IMPORTED_MODULE_5__["default"])();
        currentPage = 'battleships page';
        console.log(currentPage);
        var battleShipsContainer = Object(function webpackMissingModule() { var e = new Error("Cannot find module './helpers/DOMElements'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        var playerContainer = Object(function webpackMissingModule() { var e = new Error("Cannot find module './helpers/DOMElements'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        var computerContainer = Object(function webpackMissingModule() { var e = new Error("Cannot find module './helpers/DOMElements'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        console.log(battleShipsContainer);
        while (notPlacedShips.length > 0) {
          placeAllCompShips();
        }
        computerContainer.addEventListener('click', function (e) {
          console.log(e.target.id);
          if (e.target.id !== 'O' && e.target.id !== 'X') {
            var random = function random() {
              return Math.floor(Math.random() * 100) + 1;
            };
            console.log('BATTLEBABY', e.target.id);
            console.log(computerBoard.receiveAttack(Number(e.target.id)));

            //   if(computerBoard.receiveAttack(Number(e.target.id)) !== null) {
            //         computersturn = true
            //   }

            console.log('random', random());
            // optimise random first - ensure random shot
            //hasn't already been taken.

            //then need to ensure that if hit is made, the next shot
            //is either one square x/y across,
            //need to keep track of possible ships already destroyed.
            // shiplengths, adjacents hits.
            var number = random();
            while (playerOneBoard.missedShots.includes(number)) {
              console.log('WHILELOOP MATCH', number);
              number = random();
            }
            console.log('randomnumber', number);
            console.log(Number(e.target.id));
            playerOneBoard.receiveAttack(number);
            console.log('plmissedshots', playerOneBoard.missedShots.sort(function (a, b) {
              return a - b;
            }));
            console.log('playerboardArray', playerOneBoard.gameBoardArray);
            (0,_game_computerboardPopulator__WEBPACK_IMPORTED_MODULE_4__["default"])(computerBoard, computerContainer);
            (0,_game_gameboardPopulator__WEBPACK_IMPORTED_MODULE_3__["default"])(playerOneBoard, playerContainer);
            console.log('successfulShotsonComp', computerBoard.successfulShots);
            if (computerBoard.successfulShots.length === 21) {
              console.log('YOU WIN!!!!!!!!!!');
            }
            console.log(computerBoard.gameBoardArray);
            console.log('cbobj', computerBoard.placedShipsObject);
            console.log('pbobj', playerOneBoard.placedShipsObject);
          }
        });
        (0,_game_gameboardPopulator__WEBPACK_IMPORTED_MODULE_3__["default"])(playerOneBoard, playerContainer);
        (0,_game_computerboardPopulator__WEBPACK_IMPORTED_MODULE_4__["default"])(computerBoard, computerContainer);
        //gameboardPopulator(playerOneBoard)

        console.log(e.target.id);
      }
      var valid = playerOneBoard.placeShip(unplacedShips[0], alignment, Number(e.target.id));
      if (valid === undefined) {
        playerOneBoard.placeShip(unplacedShips[0], alignment, Number(e.target.id));
        (0,_game_gameboardPopulator__WEBPACK_IMPORTED_MODULE_3__["default"])(playerOneBoard, placementBoard);
        unplacedShips.shift();
        console.log(unplacedShips.length);
      }
    });
  }();
  return {
    placementBoardLis: placementBoardLis
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventsLis);

/***/ }),

/***/ "./src/pages/battlePage.js":
/*!*********************************!*\
  !*** ./src/pages/battlePage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/elementFactory */ "./src/helpers/elementFactory.js");

var battlePage = function battleShipsPage() {
  while (document.body.lastChild) {
    document.body.removeChild(document.body.lastChild);
  }
  var battleshipsContainer = (0,_helpers_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'battleshipsContainer'
  });
  var title = (0,_helpers_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('h1', {
    "class": 'battlePageTitle'
  });
  title.innerText = 'Battleships!';
  var playerContainer = (0,_helpers_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'playerContainer'
  });
  var computerContainer = (0,_helpers_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'computerContainer'
  });
  document.body.appendChild(title);
  document.body.appendChild(battleshipsContainer);
  battleshipsContainer.appendChild(playerContainer);
  battleshipsContainer.appendChild(computerContainer);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (battlePage);

/***/ }),

/***/ "./src/pages/placementPage.js":
/*!************************************!*\
  !*** ./src/pages/placementPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/elementFactory */ "./src/helpers/elementFactory.js");

var placementPage = function placementPageGenerator() {
  var placementBoard = (0,_helpers_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    "class": 'placementBoard'
  });
  document.body.appendChild(placementBoard);

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
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (placementPage);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    color: pink;\n    box-sizing: border-box;\n}\n\nbody  {\n    background-color: peru;\n}\n\n.placementBoard {\n    display: grid;\n    grid-template-rows: repeat(10, 30px);\n    grid-template-columns: repeat(10, 30px);\n    max-width: 0px;\n\n}\n.shipPart {\n    height: 30px;\n    width: 30px;\n    background-color: green;\n    border: solid 2px white;\n}\n\n.playerContainer, .computerContainer {\n    display: grid;\n    grid-template-rows: repeat(10, 30px);\n    grid-template-columns: repeat(10, 30px);\n}\n\n.battleshipsContainer {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,uCAAuC;IACvC,cAAc;;AAElB;AACA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC","sourcesContent":["* {\n    color: pink;\n    box-sizing: border-box;\n}\n\nbody  {\n    background-color: peru;\n}\n\n.placementBoard {\n    display: grid;\n    grid-template-rows: repeat(10, 30px);\n    grid-template-columns: repeat(10, 30px);\n    max-width: 0px;\n\n}\n.shipPart {\n    height: 30px;\n    width: 30px;\n    background-color: green;\n    border: solid 2px white;\n}\n\n.playerContainer, .computerContainer {\n    display: grid;\n    grid-template-rows: repeat(10, 30px);\n    grid-template-columns: repeat(10, 30px);\n}\n\n.battleshipsContainer {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _helpers_DOMElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/DOMElements */ "./src/helpers/DOMElements.js");
/* harmony import */ var _pages_placementPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/placementPage */ "./src/pages/placementPage.js");
/* harmony import */ var _helpers_eventListeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/eventListeners */ "./src/helpers/eventListeners.js");



// import elementFactory from "./helpers/elementFactory";

// import Gameboard from './game/gameboard';
// import computerGameboard from "./game/computerBoard";
// import gameboardPopulator from "./game/gameboardPopulator";

// import computerboardPopulator from "./game/computerboardPopulator";

// import battleshipsPopulator from "./game/battleshipsPopulator";

// import DOMInteraction from './game/DOMinteraction';

// import battlePage from './pages/battlePage';

// import startingGameboardArray from './game/startingGameboardArray';


(0,_pages_placementPage__WEBPACK_IMPORTED_MODULE_2__["default"])();
var placementBoard = _helpers_DOMElements__WEBPACK_IMPORTED_MODULE_1__["default"].placementBoard();

// let unplacedShips = [5,4,4,3,3,2];

var alignmentBtn = _helpers_DOMElements__WEBPACK_IMPORTED_MODULE_1__["default"].alignmentBtn();
console.log(alignmentBtn);
(0,_helpers_eventListeners__WEBPACK_IMPORTED_MODULE_3__["default"])();
alignmentBtn.addEventListener('click', function () {
  if (alignmentBtn.innerText === 'Switch to vertical placement') {
    alignmentBtn.innerText = 'Switch to horizontal placement';
    alignment = 'vertical';
  } else if (alignmentBtn.innerText === 'Switch to horizontal placement') {
    alignmentBtn.innerText = 'Switch to vertical placement';
    alignment = 'horizontal';
  }
});

// placementBoard.addEventListener('click', (e) => {

//     console.log(unplacedShips.length)

//    let goggle = playerOneBoard.placeShip(unplacedShips[0], 'vertical' ,Number(e.target.id))
//    console.log(goggle)
//    if(goggle == 'Invalid Placement') {
//     return 'Invalid Placement'
//    } else {
//     playerOneBoard.placeShip(unplacedShips[0], 'vertical' ,Number(e.target.id))
//     gameboardPopulator(playerOneBoard, placementBoard)
//     unplacedShips.shift();
//    }
// })

// while(unplacedShips.length >= 1) {
//     placeShips('vertical');
// }

// placementBoard.addEventListener('click',(e) => {

//     DOMInteraction.displayShipPlacement(shipLength, alignment,e.target.id, playerOneBoard)

// })

//  playerOneBoard.placeShip(5, 'vertical', 44);

gameboardPopulator(playerOneBoard, placementBoard);

// console.log(playerOneBoard.placedShipPositions)

// console.log(playerOneBoard.gameBoardArray)

// let placementBoard = document.querySelector('.placementBoard')

// console.log(placementBoard)

//console.log(gameboardArray)

// No.	Class of ship	Size
// 1	Carrier	         5
// 2	Battleship     	 4
// 3	Cruiser	         3
// 4	Submarine	     3
// 5	Destroyer	     2

// playerOneBoard.placeShip(4, 'horizontal', 23);

// gameboardPopulator(playerOneBoard)

// playerOneBoard.placeShip(4, 'vertical', 1);

// gameboardPopulator(playerOneBoard)

// playerOneBoard.placeShip(3, 'vertical', 79);

// gameboardPopulator(playerOneBoard)

// playerOneBoard.placeShip(3, 'vertical', 10);

// gameboardPopulator(playerOneBoard)

// playerOneBoard.placeShip(2, 'horizontal', 58);

// gameboardPopulator(playerOneBoard)

// playerOneBoard.placeShip(2, 'horizontal', 91);

// gameboardPopulator(playerOneBoard)

// playerOneBoard.placeShip(2, 'horizontal', 46);

// gameboardPopulator(playerOneBoard)

// playerOneBoard.placeShip(1, 'horizontal', 51);

// gameboardPopulator(playerOneBoard)

// playerOneBoard.placeShip(1, 'horizontal', 76);

// gameboardPopulator(playerOneBoard)

// // console.log(gameboard)

// console.log(playerOneBoard.placedShipPositions)

// playerOneBoard.placeShip(4, 'horizontal', 22);

// gameboardPopulator(playerOneBoard)

// console.log(playerOneBoard.placedShipPositions)
// console.log(playerOneBoard.gameBoardArray.length)

// console.log(playerOneBoard.placedShipsObject);

// playerOneBoard.receiveAttack(23)
// playerOneBoard.receiveAttack(2);

// console.log(playerOneBoard.placedShipsObject);

// console.log(playerOneBoard.gameBoardArray)
// console.log(playerOneBoard.missedShots)

// gameboardPopulator(playerOneBoard)

// playerOneBoard.receiveAttack(95)
// playerOneBoard.receiveAttack(1);

// gameboardPopulator(playerOneBoard)

console.log('POW!');
})();

/******/ })()
;
//# sourceMappingURL=todoBundle07e17428fbb2b14ae955.js.map