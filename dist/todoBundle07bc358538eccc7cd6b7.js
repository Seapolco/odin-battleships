/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game/gameboard.js":
/*!*******************************!*\
  !*** ./src/game/gameboard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _startingGameBoardArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startingGameBoardArray */ "./src/game/startingGameBoardArray.js");
/* harmony import */ var _shipIdentifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipIdentifier */ "./src/game/shipIdentifier.js");



// No.	Class of ship	Size
// 1	Carrier	         5
// 2	Battleship     	 4
// 3	Cruiser	         3
// 4	Submarine	     3
// 5	Destroyer	     2

var Gameboard = function gameboardFactory() {
  var _this = this;
  this.gameBoardArray = _startingGameBoardArray__WEBPACK_IMPORTED_MODULE_0__["default"];
  this.placedShipPositions = [];
  this.missedShots = [];
  this.placedShipsObject = {
    "Carrier": [],
    "Battleship": [],
    "Cruiser": [],
    "Destroyer": [],
    "Patrol Boat": []
  };
  this.placeShip = function (shipLength, alignment, startingPosition) {
    _this.invalid = "Invalid placement";
    _this.shipType = (0,_shipIdentifier__WEBPACK_IMPORTED_MODULE_1__["default"])(shipLength);
    _this.position = [];
    if (_this.placedShipPositions.includes(startingPosition)) {
      return _this.invalid;
      console.log(_this.invalid);
    }
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
    _this.gameBoardArray.forEach(function (e, i) {
      e.forEach(function (j, k) {
        if (_this.position.includes(j)) {
          _this.gameBoardArray[i].splice(k, 1, "".concat(_this.gameBoardArray[i][k]));
        }
      });
    });
    _this.position.forEach(function (e) {
      _this.placedShipPositions.push(e);
    });
    console.log(_this.placedShipsObject[_this.shipType]);
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
    }
    return attempt;
  };

  // const obj = {
  //   "Battleships" : [[1,2,3,4], 
  //                    [5,6,7,8],
  //                   [9,10,11,12]],
  //   "Carrier" : [[13,14,15,16,17]],
  //   "Cruiser" : [[18,19,20],
  //               [21,22,23]],
  //   "Destroyer" : [[24,25],
  //                   [26,27],
  //                   [28,29]],
  //   "Patrol Boat" : [[51], [76]]
  // }

  // for(key in obj) {
  //   //console.log(obj[key])
  //   obj[key].forEach((e,i) => {
  //     e.forEach((j,k) => {
  //       if(j === 13) {
  //         console.log(key,e,j,k)
  //         e.splice(k,1,`${j}`)
  //       }
  //     })
  //   })
  // }

  // this.receiveAttack(position) {

  // }
};

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
    element.removeChild(gameboardContainer.lastChild);
  }

  //Ship placement

  gameboard.gameBoardArray.forEach(function (e) {
    e.forEach(function (e, i) {
      // let square = document.createElement('div');
      // square.setAttribute('data', Number(e));

      var square = (0,_helpers_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
        id: "el-".concat(e)
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
      square.style.border = 'solid white 3px';
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

/***/ "./src/game/startingGameBoardArray.js":
/*!********************************************!*\
  !*** ./src/game/startingGameBoardArray.js ***!
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
  return {
    placementBoard: placementBoard
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    color: pink;\n}\n\n.placementBoard {\n    display: grid;\n    grid-template-rows: repeat(10, 30px);\n    grid-template-columns: repeat(10, 30px)\n\n}", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC;;AAEJ","sourcesContent":["* {\n    color: pink;\n}\n\n.placementBoard {\n    display: grid;\n    grid-template-rows: repeat(10, 30px);\n    grid-template-columns: repeat(10, 30px)\n\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _game_gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/gameboard */ "./src/game/gameboard.js");
/* harmony import */ var _game_gameboardPopulator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/gameboardPopulator */ "./src/game/gameboardPopulator.js");





var playerOneBoard = new _game_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"]();
(0,_pages_placementPage__WEBPACK_IMPORTED_MODULE_2__["default"])();
var placementBoard = _helpers_DOMElements__WEBPACK_IMPORTED_MODULE_1__["default"].placementBoard();
console.log(placementBoard);
var shipLength = 4;
var alignment = 'vertical';
var two = document.querySelector('#el-2');
console.log(two);

//two.style.backgroundColor = 'black'

placementBoard.addEventListener('mouseover', function (e) {
  console.log(e.target);
});

// let placementBoard = document.querySelector('.placementBoard')

// console.log(placementBoard)
(0,_game_gameboardPopulator__WEBPACK_IMPORTED_MODULE_4__["default"])(playerOneBoard, placementBoard);

//console.log(gameboardArray)

// No.	Class of ship	Size
// 1	Carrier	         5
// 2	Battleship     	 4
// 3	Cruiser	         3
// 4	Submarine	     3
// 5	Destroyer	     2

// playerOneBoard.placeShip(4, 'horizontal', 23);

// gameboardPopulator(playerOneBoard)

// playerOneBoard.placeShip(5, 'vertical', 44);

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
//# sourceMappingURL=todoBundle07bc358538eccc7cd6b7.js.map