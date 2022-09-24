/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styleV.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styleV.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  transition: 0.5s ease;\n  font-size: 1rem;\n  color: black;\n}\n\nbody {\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  height: 100vh;\n  width: 100vw;\n  background-image: linear-gradient(100deg, #555555, rgb(0, 0, 0));\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: 0% 50%;\n  margin: 0;\n  font-family: 'Ubuntu', sans-serif;\n}\n\nbutton {\n  padding: 2rem;\n  border: solid 5px blueviolet;\n}\n\np {\n  color: rgb(185, 5, 5);\n  text-shadow: 4px 4px 4px rgb(0, 0, 0);\n  font-weight: 700;\n  font-size: 30px;\n  border: outset 5px rgb(120, 68, 169);\n  padding: 1rem;\n  background-color: rgb(20, 67, 20);\n}\n\ndiv {\n  color: white;\n  text-shadow: 2px 2px 3px rgb(1, 0, 0);\n}\n\n.content {\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  border: dashed 5px green;\n  padding: 1rem;\n}\n\n.mainMenuContainer1 {\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  border: dashed 5px blueviolet;\n  padding: 3rem;\n}\n\n.startBtn, \n.newRoundBtn, \n.quitGameBtn,\n.rndShipPlacementBtn  {\n  color: rgb(185, 5, 5);\n  text-shadow: 4px 4px 4px rgb(0, 0, 0);\n  font-weight: 700;\n  font-size: 30px;\n  background-color: rgb(6, 48, 6);\n  border: outset 8px rgb(120, 68, 169);\n  padding: 1rem;\n}\n\n.confirmInputBtn {\n  color: rgb(185, 5, 5);\n  text-shadow: 4px 4px 4px rgb(0, 0, 0);\n  font-weight: 700;\n  font-size: 15px;\n  background-color: rgb(6, 48, 6);\n  border: outset 8px rgb(120, 68, 169);\n  padding: 0.25rem;\n}\n\n.newRoundBtn, \n.quitGameBtn,\n.rndShipPlacementBtn {\n  font-size: 20px;\n}\n\n.startBtn:hover,\n.newRoundBtn:hover, \n.quitGameBtn:hover,\n.rndShipPlacementBtn:hover,\n.confirmInputBtn:hover {\n  background-color: rgb(11, 78, 11);\n}\n\n.startBtn:active,\n.newRoundBtn:active, \n.quitGameBtn:active,\n.rndShipPlacementBtn:active,\n.confirmInputBtn:active {\n  background-color: rgb(15, 103, 15);\n}\n\n.scoreDiv {\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  border: dashed 5px blueviolet;\n  padding: 0.5rem;\n}\n\n.gridDiv {\n  padding: 0rem;\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  border: dashed 5px orange;\n  background-image: linear-gradient(90deg, rgb(50, 65, 35), rgb(52, 88, 32));\n}\n\n.sunkStatusMessage {\n  display: flex;\n  position: absolute;\n  justify-content: center;\n  align-items: center;\n  background-image: linear-gradient(90deg, rgb(50, 65, 35), rgb(52, 88, 32));\n}\n\n.playerGrid,\n.aiGrid {\n  border: none;\n  display: grid;\n  justify-content: start;\n  align-items: stretch;\n  align-self: center;  \n  align-content: stretch;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 2px 2px;\n  border: dashed 5px blueviolet;\n  padding: 1rem;\n}\n\n.inputForm {\n  background-image: linear-gradient(90deg, rgb(52, 88, 32), rgb(50, 65, 35));\n  display: flex;\n  position: absolute;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  border: solid 5px rgb(72, 72, 181);\n  width: 26rem;\n}\n\nlabel {\n  font-size: 13px;\n  color: white;\n}\n\n.aiGrid {\n  padding-top: 2.6rem;\n  padding-bottom: 2.6rem;\n  border-left: none;\n  pointer-events: none;\n}\n\n.playerGrid {\n  border-right: none;\n}\n\n.humanSquare {\n  text-align: center;\n  height: 35px;\n  width: 35px;\n  border: solid 2px rgb(114, 123, 20);\n  padding: 0.2rem;\n}\n\n.aiSquare {\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  border: solid 2px rgb(116, 125, 20);\n  padding: 0.2rem;\n}", "",{"version":3,"sources":["webpack://./src/styleV.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,gEAAgE;EAChE,sBAAsB;EACtB,4BAA4B;EAC5B,4BAA4B;EAC5B,2BAA2B;EAC3B,SAAS;EACT,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,4BAA4B;AAC9B;;AAEA;EACE,qBAAqB;EACrB,qCAAqC;EACrC,gBAAgB;EAChB,eAAe;EACf,oCAAoC;EACpC,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,YAAY;EACZ,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,wBAAwB;EACxB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,6BAA6B;EAC7B,aAAa;AACf;;AAEA;;;;EAIE,qBAAqB;EACrB,qCAAqC;EACrC,gBAAgB;EAChB,eAAe;EACf,+BAA+B;EAC/B,oCAAoC;EACpC,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,qCAAqC;EACrC,gBAAgB;EAChB,eAAe;EACf,+BAA+B;EAC/B,oCAAoC;EACpC,gBAAgB;AAClB;;AAEA;;;EAGE,eAAe;AACjB;;AAEA;;;;;EAKE,iCAAiC;AACnC;;AAEA;;;;;EAKE,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,yBAAyB;EACzB,0EAA0E;AAC5E;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;EACnB,0EAA0E;AAC5E;;AAEA;;EAEE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,oBAAoB;EACpB,kBAAkB;EAClB,sBAAsB;EACtB,sCAAsC;EACtC,YAAY;EACZ,6BAA6B;EAC7B,aAAa;AACf;;AAEA;EACE,0EAA0E;EAC1E,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,mCAAmC;EACnC,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,mCAAmC;EACnC,eAAe;AACjB","sourcesContent":["* {\n  transition: 0.5s ease;\n  font-size: 1rem;\n  color: black;\n}\n\nbody {\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  height: 100vh;\n  width: 100vw;\n  background-image: linear-gradient(100deg, #555555, rgb(0, 0, 0));\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: 0% 50%;\n  margin: 0;\n  font-family: 'Ubuntu', sans-serif;\n}\n\nbutton {\n  padding: 2rem;\n  border: solid 5px blueviolet;\n}\n\np {\n  color: rgb(185, 5, 5);\n  text-shadow: 4px 4px 4px rgb(0, 0, 0);\n  font-weight: 700;\n  font-size: 30px;\n  border: outset 5px rgb(120, 68, 169);\n  padding: 1rem;\n  background-color: rgb(20, 67, 20);\n}\n\ndiv {\n  color: white;\n  text-shadow: 2px 2px 3px rgb(1, 0, 0);\n}\n\n.content {\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  border: dashed 5px green;\n  padding: 1rem;\n}\n\n.mainMenuContainer1 {\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  border: dashed 5px blueviolet;\n  padding: 3rem;\n}\n\n.startBtn, \n.newRoundBtn, \n.quitGameBtn,\n.rndShipPlacementBtn  {\n  color: rgb(185, 5, 5);\n  text-shadow: 4px 4px 4px rgb(0, 0, 0);\n  font-weight: 700;\n  font-size: 30px;\n  background-color: rgb(6, 48, 6);\n  border: outset 8px rgb(120, 68, 169);\n  padding: 1rem;\n}\n\n.confirmInputBtn {\n  color: rgb(185, 5, 5);\n  text-shadow: 4px 4px 4px rgb(0, 0, 0);\n  font-weight: 700;\n  font-size: 15px;\n  background-color: rgb(6, 48, 6);\n  border: outset 8px rgb(120, 68, 169);\n  padding: 0.25rem;\n}\n\n.newRoundBtn, \n.quitGameBtn,\n.rndShipPlacementBtn {\n  font-size: 20px;\n}\n\n.startBtn:hover,\n.newRoundBtn:hover, \n.quitGameBtn:hover,\n.rndShipPlacementBtn:hover,\n.confirmInputBtn:hover {\n  background-color: rgb(11, 78, 11);\n}\n\n.startBtn:active,\n.newRoundBtn:active, \n.quitGameBtn:active,\n.rndShipPlacementBtn:active,\n.confirmInputBtn:active {\n  background-color: rgb(15, 103, 15);\n}\n\n.scoreDiv {\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  border: dashed 5px blueviolet;\n  padding: 0.5rem;\n}\n\n.gridDiv {\n  padding: 0rem;\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  border: dashed 5px orange;\n  background-image: linear-gradient(90deg, rgb(50, 65, 35), rgb(52, 88, 32));\n}\n\n.sunkStatusMessage {\n  display: flex;\n  position: absolute;\n  justify-content: center;\n  align-items: center;\n  background-image: linear-gradient(90deg, rgb(50, 65, 35), rgb(52, 88, 32));\n}\n\n.playerGrid,\n.aiGrid {\n  border: none;\n  display: grid;\n  justify-content: start;\n  align-items: stretch;\n  align-self: center;  \n  align-content: stretch;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 2px 2px;\n  border: dashed 5px blueviolet;\n  padding: 1rem;\n}\n\n.inputForm {\n  background-image: linear-gradient(90deg, rgb(52, 88, 32), rgb(50, 65, 35));\n  display: flex;\n  position: absolute;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  border: solid 5px rgb(72, 72, 181);\n  width: 26rem;\n}\n\nlabel {\n  font-size: 13px;\n  color: white;\n}\n\n.aiGrid {\n  padding-top: 2.6rem;\n  padding-bottom: 2.6rem;\n  border-left: none;\n  pointer-events: none;\n}\n\n.playerGrid {\n  border-right: none;\n}\n\n.humanSquare {\n  text-align: center;\n  height: 35px;\n  width: 35px;\n  border: solid 2px rgb(114, 123, 20);\n  padding: 0.2rem;\n}\n\n.aiSquare {\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  border: solid 2px rgb(116, 125, 20);\n  padding: 0.2rem;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ }),

/***/ "./src/gameboardGen.js":
/*!*****************************!*\
  !*** ./src/gameboardGen.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shipGen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipGen */ "./src/shipGen.js");
/* harmony import */ var _mainGameLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainGameLoop */ "./src/mainGameLoop.js");
/* harmony import */ var _uiElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uiElements */ "./src/uiElements.js");




const GameBoard = (name) => {
  let shipsData = [];
  let gameBoardSqrs = [];

  const Squares = function(westNr, northNr, lastSquare) {
    let west = westNr;
    let north = northNr;
    let westByNorth = parseInt(`${westNr}${northNr}`);
    let shipAtLocation = '';
    let locationHit = false;
    let shipAnchored = false;
    let lastRowSquare = lastSquare;

    return { west, north, westByNorth, shipAtLocation, locationHit, shipAnchored, lastRowSquare }
  };

  const generateSquares = function() {
    let westNumber = 1;
    let lastRowSquare = false;
    for (let i = 1; i <= 10; i++) {
      gameBoardSqrs.push(Squares(westNumber, i, lastRowSquare));
      lastRowSquare = false;
      (i === 9) ? lastRowSquare = true : null;
      if (i >= 10) {
        westNumber++;
        i = 0;
      };
      if (westNumber === 11) {
        return
      };
    };
  };
  generateSquares()

  const generateShips = function() {
    let shipNr = 0;
    for (let i = 1; i <= 3; i++) {
      shipNr += 1;
      shipsData.push((0,_shipGen__WEBPACK_IMPORTED_MODULE_0__["default"])(2, `SmallShip${shipNr.toString()}`, shipNr));
    };
    (shipNr > 0) ? shipNr = 0 : null;

    for (let i = 1; i <= 3; i++) {
      shipNr += 1;
      shipsData.push((0,_shipGen__WEBPACK_IMPORTED_MODULE_0__["default"])(3, `MediumShip${shipNr.toString()}`, shipNr));
    };
    (shipNr > 0) ? shipNr = 0 : null;

    for (let i = 1; i <= 1; i++) {
      shipNr += 1;
      shipsData.push((0,_shipGen__WEBPACK_IMPORTED_MODULE_0__["default"])(5, `LargeShip${shipNr.toString()}`, shipNr));
    };
  };
  generateShips()

  const recieveAttack = function(coordinates, targetLocation) {
    for (let i = 0; i < gameBoardSqrs.length; i++) {
      if (gameBoardSqrs[i].westByNorth === coordinates && gameBoardSqrs[i].shipAnchored === true && gameBoardSqrs[i].locationHit === false) {
        for (let j = 0; j < shipsData.length; j++) { 
          if (shipsData[j].name === gameBoardSqrs[i].shipAtLocation && gameBoardSqrs[i].locationHit === false) {
            gameBoardSqrs[i].locationHit = true;
            shipsData[j].hit();
            shipsData[j].isSunk();
            console.log(`SHOTS FIRED ON US! HIT AT ${gameBoardSqrs[i].westByNorth} ${name}!`);
            (name === 'HAL3000') ? _mainGameLoop__WEBPACK_IMPORTED_MODULE_1__["default"].aiPlayer.gameBoard.checkSunkStatus() : null;
            (name === 'HUMAN') ? _mainGameLoop__WEBPACK_IMPORTED_MODULE_1__["default"].humanPlayer.gameBoard.checkSunkStatus() : null;
            (name === 'HAL3000') ? targetLocation.setAttribute('style', 'color: red; font-size: 20px') : null;
            (name === 'HAL3000') ? targetLocation.textContent = 'X' : null;
            (name === 'HUMAN') ? targetLocation.setAttribute('style', 'color: red; font-size: 25px') : null;
            (name === 'HUMAN') ? targetLocation.textContent = 'X' : null;
            (name === 'HAL3000') ? _mainGameLoop__WEBPACK_IMPORTED_MODULE_1__["default"].turnLogic() : null;
          };
        };
      } else if (gameBoardSqrs[i].westByNorth === coordinates && gameBoardSqrs[i].shipAnchored === false && gameBoardSqrs[i].locationHit === false) {
        gameBoardSqrs[i].locationHit = true;
        console.log(`SHOTS FIRED ON US! AMISS AT ${gameBoardSqrs[i].westByNorth} ${name}!`);
        (name === 'HAL3000') ? _mainGameLoop__WEBPACK_IMPORTED_MODULE_1__["default"].aiPlayer.gameBoard.checkSunkStatus() : null;
        (name === 'HUMAN') ? _mainGameLoop__WEBPACK_IMPORTED_MODULE_1__["default"].humanPlayer.gameBoard.checkSunkStatus() : null;
        (name === 'HAL3000') ? targetLocation.setAttribute('style', 'color: red; font-size: 20px') : null;
        (name === 'HUMAN') ? targetLocation.setAttribute('style', 'color: red; font-size: 25px') : null;
        (name === 'HAL3000') ? _mainGameLoop__WEBPACK_IMPORTED_MODULE_1__["default"].turnLogic() : null;
      } else if (gameBoardSqrs[i].westByNorth === coordinates && gameBoardSqrs[i].shipAnchored === false && gameBoardSqrs[i].locationHit === true) {
        (name === 'HUMAN') ? console.log('-------------------------------') : null;
        (name === 'HUMAN') ? console.log('HAL is trying again') : null;
        (name === 'HUMAN') ? console.log('-------------------------------') : null;
        (name === 'HUMAN') ? _mainGameLoop__WEBPACK_IMPORTED_MODULE_1__["default"].turnLogic() : null;
      } else if (gameBoardSqrs[i].westByNorth === coordinates && gameBoardSqrs[i].shipAnchored === true && gameBoardSqrs[i].locationHit === true) {
        (name === 'HUMAN') ? console.log('-------------------------------') : null;
        (name === 'HUMAN') ? console.log('HAL is trying again') : null;
        (name === 'HUMAN') ? console.log('-------------------------------') : null;
        (name === 'HUMAN') ? _mainGameLoop__WEBPACK_IMPORTED_MODULE_1__["default"].turnLogic() : null;
      };
    };
  };

  const placeShipOnSqr = function (coordinates, directionOfPlacement, shipNameSize) {
    for (let i = 0; i < gameBoardSqrs.length; i++) {
      if (gameBoardSqrs[i].westByNorth === coordinates && gameBoardSqrs[i].shipAnchored === false) {
        let shipCounter = 1;
        for (let j = 0; j < shipsData.length; j++) {
          if (directionOfPlacement === "north") {

            // safeguard against invalid placement and to inform user about it
            if ((coordinates === gameBoardSqrs[i].westByNorth && shipsData[j].name === `SmallShip${shipCounter}` && gameBoardSqrs[i].west === 1) || (coordinates === gameBoardSqrs[i].westByNorth && shipsData[j].name === `MediumShip${shipCounter}` && (gameBoardSqrs[i].west === 1 || gameBoardSqrs[i].west === 2)) || (coordinates === gameBoardSqrs[i].westByNorth && shipsData[j].name === `LargeShip${shipCounter}` && (gameBoardSqrs[i].west === 1 || gameBoardSqrs[i].west === 2 || gameBoardSqrs[i].west === 3 || gameBoardSqrs[i].west === 4))) {
              console.log('DAMN brah!')
              return;
            }

            if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `SmallShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i - 10].north > 0 && gameBoardSqrs[i - 10].shipAnchored === false) {
              //UI changes
              if (name === 'HUMAN') {
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 1}`, `SS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i - 9}`, `SS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 1}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i - 9}`, 'style', 'color: violet');
              };

              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 10].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i - 10].shipAnchored = true;
              j = 0;
              shipCounter= 1;
              return;
            } else if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `MediumShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i - 10].north > 0 && gameBoardSqrs[i - 10].shipAnchored === false && gameBoardSqrs[i - 20].north > 0 && gameBoardSqrs[i - 20].shipAnchored === false) {
              //UI changes
              if (name === 'HUMAN') {
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 1}`, `MS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i - 9}`, `MS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i - 19}`, `MS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 1}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i - 9}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i - 19}`, 'style', 'color: violet');
              };

              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 10].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 20].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i - 10].shipAnchored = true;
              gameBoardSqrs[i - 20].shipAnchored = true;
              j = 0;
              shipCounter = 1;
              return;
            } else if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `LargeShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i - 10].north > 0 && gameBoardSqrs[i - 10].shipAnchored === false && gameBoardSqrs[i - 20].north > 0 && gameBoardSqrs[i - 20].shipAnchored === false && gameBoardSqrs[i - 30].north > 0 && gameBoardSqrs[i - 30].shipAnchored === false && gameBoardSqrs[i - 40].north > 0 && gameBoardSqrs[i - 40].shipAnchored === false) {
              //UI changes
              if (name === 'HUMAN') {
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 1}`, `LS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i - 9}`, `LS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i - 19}`, `LS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i - 29}`, `LS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i - 39}`, `LS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 1}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i - 9}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i - 19}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i - 29}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i - 39}`, 'style', 'color: violet');
              };

              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 10].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 20].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 30].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 40].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i - 10].shipAnchored = true;
              gameBoardSqrs[i - 20].shipAnchored = true;
              gameBoardSqrs[i - 30].shipAnchored = true;
              gameBoardSqrs[i - 40].shipAnchored = true;
              j = 0;
              shipCounter = 1;
              return;
            }
          } else if (directionOfPlacement === "south") {

            // safeguard against invalid placement and to inform user about it
            if ((coordinates === gameBoardSqrs[i].westByNorth && shipsData[j].name === `SmallShip${shipCounter}` && gameBoardSqrs[i].west === 10) || (coordinates === gameBoardSqrs[i].westByNorth && shipsData[j].name === `MediumShip${shipCounter}` && (gameBoardSqrs[i].west === 10 || gameBoardSqrs[i].west === 9)) || (coordinates === gameBoardSqrs[i].westByNorth && shipsData[j].name === `LargeShip${shipCounter}` && (gameBoardSqrs[i].west === 10 || gameBoardSqrs[i].west === 9 || gameBoardSqrs[i].west === 8 || gameBoardSqrs[i].west === 7))) {
              console.log('DAMN brah!')
              return;
            }

            if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `SmallShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i + 10].north > 0 && gameBoardSqrs[i + 10].shipAnchored === false) {
              //UI changes
              if (name === 'HUMAN') {
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 1}`, `SS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 11}`, `SS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 1}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 11}`, 'style', 'color: violet');
              };

              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 10].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i + 10].shipAnchored = true;
              j = 0;
              shipCounter= 1;
              return;
            } else if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `MediumShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i + 10].north > 0 && gameBoardSqrs[i + 10].shipAnchored === false && gameBoardSqrs[i + 20].north > 0 && gameBoardSqrs[i + 20].shipAnchored === false) {
              //UI changes
              if (name === 'HUMAN') {
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 1}`, `MS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 11}`, `MS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 21}`, `MS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 1}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 11}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 21}`, 'style', 'color: violet');
              };

              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 10].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 20].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i + 10].shipAnchored = true;
              gameBoardSqrs[i + 20].shipAnchored = true;
              j = 0;
              shipCounter = 1;
              return;
            } else if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `LargeShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i + 10].north > 0 && gameBoardSqrs[i + 10].shipAnchored === false && gameBoardSqrs[i + 20].north > 0 && gameBoardSqrs[i + 20].shipAnchored === false && gameBoardSqrs[i + 30].north > 0 && gameBoardSqrs[i + 30].shipAnchored === false && gameBoardSqrs[i + 40].north > 0 && gameBoardSqrs[i + 40].shipAnchored === false) {
              //UI changes
              if (name === 'HUMAN') {
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 1}`, `LS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 11}`, `LS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 21}`, `LS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 31}`, `LS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 41}`, `LS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 1}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 11}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 21}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 31}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 41}`, 'style', 'color: violet');
              };

              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 10].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 20].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 30].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 40].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i + 10].shipAnchored = true;
              gameBoardSqrs[i + 20].shipAnchored = true;
              gameBoardSqrs[i + 30].shipAnchored = true;
              gameBoardSqrs[i + 40].shipAnchored = true;
              j = 0;
              shipCounter = 1;
              return;
            }
          } else if (directionOfPlacement === "east") {

            // safeguard against invalid placement and to inform user about it
            if ((coordinates === gameBoardSqrs[i].westByNorth && shipsData[j].name === `SmallShip${shipCounter}` && gameBoardSqrs[i].north === 10) || (coordinates === gameBoardSqrs[i].westByNorth && shipsData[j].name === `MediumShip${shipCounter}` && (gameBoardSqrs[i].north === 10 || gameBoardSqrs[i].north === 9)) || (coordinates === gameBoardSqrs[i].westByNorth && shipsData[j].name === `LargeShip${shipCounter}` && (gameBoardSqrs[i].north === 10 || gameBoardSqrs[i].north === 9 || gameBoardSqrs[i].north === 8 || gameBoardSqrs[i].north === 7))) {
              console.log('DAMN brah!')
              return;
            }

            if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `SmallShip${shipCounter}` &&  shipsData[j].shipPlacedOnBoard === false  && gameBoardSqrs[i].lastRowSquare !== true && gameBoardSqrs[i + 1].shipAnchored === false) {
              //UI changes
              if (name === 'HUMAN') {
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 1}`, `SS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 2}`, `SS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 1}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 2}`, 'style', 'color: violet');
              };

              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 1].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i + 1].shipAnchored = true;
              j = 0;
              shipCounter= 1;
              return;
            } else if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `MediumShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i].lastRowSquare !== true && gameBoardSqrs[i + 1].lastRowSquare !== true && gameBoardSqrs[i + 1].shipAnchored === false && gameBoardSqrs[i + 2].shipAnchored === false) {
              //UI changes
              if (name === 'HUMAN') {
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 1}`, `MS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 2}`, `MS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 3}`, `MS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 1}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 2}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 3}`, 'style', 'color: violet');
              };

              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 1].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 2].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i + 1].shipAnchored = true;
              gameBoardSqrs[i + 2].shipAnchored = true;
              j = 0;
              shipCounter = 1;
              return;
            } else if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `LargeShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i].lastRowSquare !== true && gameBoardSqrs[i + 1].lastRowSquare !== true && gameBoardSqrs[i + 2].lastRowSquare !== true && gameBoardSqrs[i + 3].lastRowSquare !== true && gameBoardSqrs[i + 2].shipAnchored === false && gameBoardSqrs[i + 3].shipAnchored === false && gameBoardSqrs[i + 4].shipAnchored === false) {
              if (name === 'HUMAN') {
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 1}`, `LS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 2}`, `LS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 3}`, `LS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 4}`, `LS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 5}`, `LS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 1}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 2}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 3}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 4}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 5}`, 'style', 'color: violet');
              };

              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 1].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 2].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 3].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 4].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i + 1].shipAnchored = true;
              gameBoardSqrs[i + 2].shipAnchored = true;
              gameBoardSqrs[i + 3].shipAnchored = true;
              gameBoardSqrs[i + 4].shipAnchored = true;
              j = 0;
              shipCounter = 1;
              return;
            }
          } else if (directionOfPlacement === "west") {

            // safeguard against invalid placement and to inform user about it
            if ((coordinates === gameBoardSqrs[i].westByNorth && shipsData[j].name === `SmallShip${shipCounter}` && gameBoardSqrs[i].north === 1) || (coordinates === gameBoardSqrs[i].westByNorth && shipsData[j].name === `MediumShip${shipCounter}` && (gameBoardSqrs[i].north === 1 || gameBoardSqrs[i].north === 2)) || (coordinates === gameBoardSqrs[i].westByNorth && shipsData[j].name === `LargeShip${shipCounter}` && (gameBoardSqrs[i].north === 1 || gameBoardSqrs[i].north === 2 || gameBoardSqrs[i].north === 3 || gameBoardSqrs[i].north === 4))) {
              console.log('DAMN brah!')
              return;
            }

            if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `SmallShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i - 1].lastRowSquare !== true && gameBoardSqrs[i - 1].shipAnchored === false) {
              if (name === 'HUMAN') {
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 1}`, `SS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i}`, `SS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 1}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i}`, 'style', 'color: violet');
              };

              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 1].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i - 1].shipAnchored = true;
              j = 0;
              shipCounter= 1;
              return;
            } else if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `MediumShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i - 1].lastRowSquare !== true && gameBoardSqrs[i - 2].lastRowSquare !== true && gameBoardSqrs[i - 1].shipAnchored === false && gameBoardSqrs[i - 2].shipAnchored === false) {
              if (name === 'HUMAN') {
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 1}`, `MS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i}`, `MS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i - 1}`, `MS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 1}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i - 1}`, 'style', 'color: violet');
              };

              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 1].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 2].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i - 1].shipAnchored = true;
              gameBoardSqrs[i - 2].shipAnchored = true;
              j = 0;
              shipCounter = 1;
              return;
            } else if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `LargeShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i - 1].lastRowSquare !== true && gameBoardSqrs[i - 2].lastRowSquare !== true && gameBoardSqrs[i - 3].lastRowSquare !== true && gameBoardSqrs[i - 4].lastRowSquare !== true && gameBoardSqrs[i - 2].shipAnchored === false && gameBoardSqrs[i - 3].shipAnchored === false && gameBoardSqrs[i - 4].shipAnchored === false) {
              if (name === 'HUMAN') {
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i + 1}`, `LS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i}`, `LS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i - 1}`, `LS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i - 2}`, `LS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement(`.humanSquare${i - 3}`, `LS${shipCounter}`);
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i + 1}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i - 1}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i - 2}`, 'style', 'color: violet');
                _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute(`.humanSquare${i - 3}`, 'style', 'color: violet');
              };

              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 1].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 2].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 3].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 4].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i - 1].shipAnchored = true;
              gameBoardSqrs[i - 2].shipAnchored = true;
              gameBoardSqrs[i - 3].shipAnchored = true;
              gameBoardSqrs[i - 4].shipAnchored = true;
              j = 0;
              shipCounter = 1;
              return;
            };
          };
          shipCounter++
          (shipCounter > 3) ? shipCounter = 1 : null;
        };
      } ;
    };
  };

  const checkSunkStatus = function() {
    if (shipsData.every(function(ship) {
        return ship.shipLength === 0
    })) {
      if (name === 'HAL3000') {
        _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].createElement('p', 'sunkStatusMessage', null, '.gridDiv', 1);
        _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement('.sunkStatusMessage', `${name} is LOSER`)
        setTimeout(() => {
          document.querySelector('.sunkStatusMessage').remove();
        }, 3000);
        _mainGameLoop__WEBPACK_IMPORTED_MODULE_1__["default"].aiPlayer.updateScore();

        _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement('.playerScore', `${_mainGameLoop__WEBPACK_IMPORTED_MODULE_1__["default"].aiPlayer.score}`);
        _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute('.aiGrid', 'style', 'pointer-events: none');
      } else if (name === 'HUMAN') {
        _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].createElement('p', 'sunkStatusMessage', null, '.gridDiv', 1);
        _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement('.sunkStatusMessage', `${name} is LOSER`)
        setTimeout(() => {
        document.querySelector('.sunkStatusMessage').remove();
        }, 3000);
        _mainGameLoop__WEBPACK_IMPORTED_MODULE_1__["default"].humanPlayer.updateScore();
        _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement('.aiScore', `${_mainGameLoop__WEBPACK_IMPORTED_MODULE_1__["default"].humanPlayer.score}`);
        _uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].setAttribute('.aiGrid', 'style', 'pointer-events: none');
      }
      console.log('All ships are sunk!')
      // možda alert gdje biraš restart ili quit
    } else {
      console.log('Some ships still afloat!')
      // ništa
    };
  };

  return { shipsData, gameBoardSqrs, generateShips, generateSquares, recieveAttack, checkSunkStatus, placeShipOnSqr }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);


/***/ }),

/***/ "./src/mainGameLoop.js":
/*!*****************************!*\
  !*** ./src/mainGameLoop.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _playerGen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerGen */ "./src/playerGen.js");
/* harmony import */ var _uiElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uiElements */ "./src/uiElements.js");



const gameLoop = (() => {

  // here should be conditional which upon new game or restart game declares again
  // these same variables with same assigment
  // and second case should be continuance of game with adding scores to players and
  // reseting game boards for new game

  let humanPlayer = (0,_playerGen__WEBPACK_IMPORTED_MODULE_0__["default"])('HUMAN');
  let aiPlayer = (0,_playerGen__WEBPACK_IMPORTED_MODULE_0__["default"])('HAL3000');

  const aiPlacementLoop = function() {
    do {
      aiPlayer.gameBoard.placeShipOnSqr(aiPlayer.westByNorthAi(), aiPlayer.directionOfPlacementAi(), aiPlayer.shipNameAi());
    } while (aiPlayer.gameBoard.shipsData.some(function(ship) {
      return ship.shipPlacedOnBoard === false
    }))
  };

  const playerPlacementLoop = function() {
    if (humanPlayer.gameBoard.shipsData.some(function(ship) {
      return ship.shipPlacedOnBoard === false
    })) {
      do {
        humanPlayer.gameBoard.placeShipOnSqr(humanPlayer.westByNorthAi(), humanPlayer.directionOfPlacementAi(), humanPlayer.shipNameAi());
      } while (humanPlayer.gameBoard.shipsData.some(function(ship) {
        return ship.shipPlacedOnBoard === false
      }));
    };
    _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].setAttribute('.aiGrid', 'style', 'pointer-events: all')
  };

  const turnLogic = function() {
    console.log('HUMAN GONNA GITH IT! YAH MAN!')
    let coordinate;
    do {
      coordinate = humanPlayer.westByNorthAi();
    } while (document.querySelector(`.humanWestByNorth${coordinate}`) === null);
    let playerHitSquare = document.querySelector(`.humanWestByNorth${coordinate}`);
    console.log('HAL choose random number: ' + coordinate)
    console.log('HAL is targeting: ' + playerHitSquare)
    humanPlayer.gameBoard.recieveAttack(coordinate, playerHitSquare);
  }
  let clickedValue;
  let clickedSquare;
  const generateGameElements = function () {
    document.querySelector('.startBtn').addEventListener('click', () => {
      document.querySelector('.mainMenuContainer').remove();

      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('div', 'scoreDiv', null, '.content', 1);
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('p', 'playerScore', null, '.scoreDiv', 1);
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].textContentForElement('.playerScore', '0');
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('p', 'aiScore', null, '.scoreDiv', 1);
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].textContentForElement('.aiScore', '0');

      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('button', 'rndShipPlacementBtn', null, '.scoreDiv', 1);
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].textContentForElement('.rndShipPlacementBtn', 'RND SHIP PLACEMENT');
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('button', 'newRoundBtn', null, '.scoreDiv', 1);
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].textContentForElement('.newRoundBtn', 'NEW ROUND');
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('button', 'quitGameBtn', null, '.scoreDiv', 1);
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].textContentForElement('.quitGameBtn', 'QUIT GAME');

      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('div', 'gridDiv', null, '.content', 1);
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('div', 'playerGrid', null, '.gridDiv', 1);
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('div', 'humanSquare', 'humanPlayer', '.playerGrid', 100);
      for (let i = 1; i <= 100; i++) {
        document.querySelector(`.humanSquare${i}`).addEventListener('click', (clicked) => {
          clickedValue = parseInt(clicked.srcElement.innerText);
          clickedSquare = clicked.originalTarget.classList[1];
          document.querySelector(`.${clickedSquare}`).setAttribute('style', 'border: solid 2px red');
          document.querySelector('.inputForm').setAttribute('style', 'display: visible');
        });
        _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].textContentForElement(`.humanSquare${i}`, `${humanPlayer.gameBoard.gameBoardSqrs[i - 1].westByNorth}`);
      };
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('div', 'aiGrid', null, '.gridDiv', 1);
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('div', 'aiSquare', 'aiPlayer', '.aiGrid', 100);
      for (let i = 1; i <= 100; i++) {
        document.querySelector(`.aiSquare${i}`).addEventListener('click', (clicked) => {
          const aiHitSquare = document.querySelector(`.${clicked.originalTarget.classList[1]}`)
          aiPlayer.gameBoard.recieveAttack(parseInt(clicked.srcElement.innerText), aiHitSquare)
        });
        _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].textContentForElement(`.aiSquare${i}`, `${aiPlayer.gameBoard.gameBoardSqrs[i - 1].westByNorth}`);
      };

      // here be form for ship placement, but maybe put in the middle of player grid
      // albeit invisible and only when square is clicked is made visible
      // and when player confirms input it goes out invisible againe
      // should add no possibility to attack ai until all ships are placed on player booard
      // see how to disable events on elements, you already did that in some earlier projects
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('form', 'inputForm', null, '.playerGrid', 1)
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].setAttribute('.inputForm', 'style', 'display: none', 'action', '', null, null)

      // uzmi od clicked value za kooridinatu i to ćeš prosljediti u placeShipOnSqr

      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('label', 'choiceTwo', null, '.inputForm', 1)
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].textContentForElement('.choiceTwo', 'Direction (N, S, W, E):');
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('input', 'inputNorth', null, '.inputForm', 1)
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].setAttribute('.inputNorth', 'type', 'radio', 'value', 'north', 'name', 'choiceTwo', null, null)
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('input', 'inputSouth', null, '.inputForm', 1)
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].setAttribute('.inputSouth', 'type', 'radio', 'value', 'south', 'name', 'choiceTwo', null, null)
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('input', 'inputWest', null, '.inputForm', 1)
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].setAttribute('.inputWest', 'type', 'radio', 'value', 'west', 'name', 'choiceTwo', null, null)
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('input', 'inputEast', null, '.inputForm', 1)
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].setAttribute('.inputEast', 'type', 'radio', 'value', 'east', 'name', 'choiceTwo', null, null)

      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('label', 'choiceThree', null, '.inputForm', 1)
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].textContentForElement('.choiceThree', `Size (SmallShip, MediumShip, LargeShip)`);
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('input', 'inputSS', null, '.inputForm', 1)
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].setAttribute('.inputSS', 'type', 'radio', 'value', 'SmallShip', 'name', 'choiceThree', null, null)
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('input', 'inputMS', null, '.inputForm', 1)
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].setAttribute('.inputMS', 'type', 'radio', 'value', 'MediumShip', 'name', 'choiceThree', null, null)
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('input', 'inputLS', null, '.inputForm', 1)
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].setAttribute('.inputLS', 'type', 'radio', 'value', 'LargeShip', 'name', 'choiceThree', null, null)

      // add safeguard when all players ships are places manually or with random button ++
      // add highligh when square for manual placement is clicked


      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('button', 'confirmInputBtn', null, '.inputForm', 1);
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].setAttribute('.confirmInputBtn', 'type',  'button', null, null, null, null, null, null)
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].textContentForElement('.confirmInputBtn', 'Confirm');
      document.querySelector('.confirmInputBtn').addEventListener('click', () => {
        const direction = document.querySelector('input[name="choiceTwo"]:checked');
        const shipSize = document.querySelector('input[name="choiceThree"]:checked')
        document.querySelector('.inputForm').setAttribute('style', 'display: none')
        document.querySelector(`.${clickedSquare}`).setAttribute('style', 'border: solid 2px rgb(114, 123, 20)');
        humanPlayer.gameBoard.placeShipOnSqr(clickedValue,  direction.value, shipSize.value);
        if (humanPlayer.gameBoard.shipsData.every(function(ship) {
          // it doesn't work as intended in plaxeShipOnSqr method
          return ship.shipPlacedOnBoard === true
        })) {
          console.log('Brah')
          _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].setAttribute('.aiGrid', 'style', 'pointer-events: all')
        }
        clickedValue = null;
        clickedSquare = null;
      });

      document.querySelector('.quitGameBtn').addEventListener('click', () => {
        document.querySelector('.scoreDiv').remove();
        document.querySelector('.gridDiv').remove();
        _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('div', 'mainMenuContainer', null, '.content', 1);
        _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('button', 'startBtn', null, '.mainMenuContainer', 1);
        _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].textContentForElement('.startBtn', 'START GAME');
        humanPlayer = (0,_playerGen__WEBPACK_IMPORTED_MODULE_0__["default"])('HUMAN');
        aiPlayer = (0,_playerGen__WEBPACK_IMPORTED_MODULE_0__["default"])('HAL3000');
        gameLoop.generateGameElements();
      });

      document.querySelector('.rndShipPlacementBtn').addEventListener('click', () => {
        playerPlacementLoop()
      });

      document.querySelector('.newRoundBtn').addEventListener('click', () => {
        for (let i = 1; i <= 100; i++) {
          _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].textContentForElement(`.humanSquare${i}`, `${humanPlayer.gameBoard.gameBoardSqrs[i - 1].westByNorth}`);
          _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].setAttribute(`.humanSquare${i}`, 'style', 'color: white')
        };
        for (let i = 1; i <= 100; i++) {
          _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].textContentForElement(`.aiSquare${i}`, `${aiPlayer.gameBoard.gameBoardSqrs[i - 1].westByNorth}`);
          _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].setAttribute(`.aiSquare${i}`, 'style', 'color: white')
        };
        humanPlayer.generateNewGameBoard('HUMAN')
        aiPlayer.generateNewGameBoard('HAL3000')
        aiPlacementLoop();
        _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].setAttribute('.aiGrid', 'style', 'pointer-events: none');
      });

      aiPlacementLoop();
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].setAttribute('.aiGrid', 'style', 'pointer-events: none');
    });
  };
  

  return { humanPlayer, aiPlayer, aiPlacementLoop, playerPlacementLoop, turnLogic, generateGameElements }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameLoop);

// BUT next first thing is to put in event for start btn aiShip placement ++
// and enable player manual ship placement on its board or via rnd ship placement btn
// and until all ships are placed player cant attack ai grid, enabled only after placement
// and, of cource, make it all visible to player

// add new round UI functionality
  // should reset player and ai grid
  // should give blank grid for player and set enemy ships
// add visible changes on player and ai grid at each turn
  // should set player ships visible on board while ai ships are not visible until hit
// add message to player informing about (mis)hit or getting (mis)hit
// add visible score change in round and game is continued
// add quit game where players are reset
// add button for random ship placement for player ++
// round end should declare that all ship are sunk and maybe 'freeze' board functionality
// and at round end player should choose restart round or quit
// round end should be triggered from checkShipSunkStatus from player gameboard

// vidi kako ustvari možeš prikazati classListu u konzoli


/***/ }),

/***/ "./src/playerGen.js":
/*!**************************!*\
  !*** ./src/playerGen.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboardGen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardGen */ "./src/gameboardGen.js");
/* harmony import */ var _mainGameLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainGameLoop */ "./src/mainGameLoop.js");



const Player = (name) => {
  let score = 0;
  let playerName = name;
  
  const updateScore = function() {
    this.score += 1;
    return console.log('SCORE UPDATE!' + this.score);
  }

  const rndNrAi = function (upperLimit, inclusiveOrNot) {
    return Math.floor(Math.random() * upperLimit) + inclusiveOrNot;
  };

  const westByNorthAi = function() {
    return parseInt(rndNrAi(10, 1).toString() + rndNrAi(10, 1).toString());
  };
  const directionOfPlacementAi = function() {
    let directionOfPlacementArray = ['north', 'south', 'east', 'west'];
    return directionOfPlacementArray[rndNrAi(4, 0)];
  };
  const shipNameAi = function() {
    let shipNameArray = ['SmallShip', 'MediumShip', 'LargeShip'];
    return shipNameArray[rndNrAi(3, 0)]
  };

  let gameBoard = (0,_gameboardGen__WEBPACK_IMPORTED_MODULE_0__["default"])(`${name}`);
  const generateNewGameBoard = function() {
    this.gameBoard = (0,_gameboardGen__WEBPACK_IMPORTED_MODULE_0__["default"])(`${name}`);
    // gameLoop.aiPlacementLoop();
  }

  return { playerName, score, updateScore, westByNorthAi, directionOfPlacementAi, shipNameAi, gameBoard, generateNewGameBoard }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/shipGen.js":
/*!************************!*\
  !*** ./src/shipGen.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (shipSizeLength, shipNrForName, shipNr) => {
  let name = `${shipNrForName}`;
  let shipLength = shipSizeLength;
  // let shipIndex = shipNr - 1;
  let shipPlacedOnBoard = false;

  const hit = function() {
    this.shipLength -= 1;
  };

  const isSunk = function() {
    if (this.shipLength === 0) {
      console.log(`${this.name} is sunk!`);
    } else {
      console.log(`${this.name} is ALIVE!`);
    };
  };

  return { name, shipLength, shipPlacedOnBoard, isSunk, hit }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/uiElements.js":
/*!***************************!*\
  !*** ./src/uiElements.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mainGameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainGameLoop */ "./src/mainGameLoop.js");


const uiElements = (() => {
  const createElement = function(element, className, specialClassName, querySelector, nrOfElements) {
    for (let i = 1; i <= nrOfElements; i++) {
      const qSelector = document.querySelector(querySelector);
      const createElement = document.createElement(element);
      createElement.classList.add(className);
      createElement.classList.add(className + i);
      if (specialClassName !== null && specialClassName === 'humanPlayer') {
        createElement.classList.add(`humanWestByNorth${_mainGameLoop__WEBPACK_IMPORTED_MODULE_0__["default"].humanPlayer.gameBoard.gameBoardSqrs[i - 1].westByNorth}`)
      } else if (specialClassName !== null && specialClassName === 'aiPlayer') {
        createElement.classList.add(`aiWestByNorth${_mainGameLoop__WEBPACK_IMPORTED_MODULE_0__["default"].aiPlayer.gameBoard.gameBoardSqrs[i - 1].westByNorth}`)
      }
      qSelector.appendChild(createElement);
    };
  };

  const textContentForElement = function (querySelector, text) {
    const qSelector = document.querySelector(querySelector)
    qSelector.textContent = text;
  };

  const setAttribute = function(selector, setAttribute1, att1Value, setAttribute2, att2Value, setAttribute3, att3Value ) {
    const qSelector = document.querySelector(selector);
    qSelector.setAttribute(setAttribute1, att1Value);
    (setAttribute2 !== null) ? qSelector.setAttribute(setAttribute2, att2Value) : null;
    (setAttribute3 !== null) ? qSelector.setAttribute(setAttribute3, att3Value) : null;
  };

  return { createElement, textContentForElement, setAttribute }
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uiElements);


/***/ }),

/***/ "./src/styleV.css":
/*!************************!*\
  !*** ./src/styleV.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styleV_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styleV.css */ "./node_modules/css-loader/dist/cjs.js!./src/styleV.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styleV_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styleV_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styleV_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styleV_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _styleV_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleV.css */ "./src/styleV.css");
/* harmony import */ var _mainGameLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainGameLoop */ "./src/mainGameLoop.js");
/* harmony import */ var _uiElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uiElements */ "./src/uiElements.js");




window.gameLoop = _mainGameLoop__WEBPACK_IMPORTED_MODULE_1__["default"]
_uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].createElement('div', 'mainMenuContainer', null, '.content', 1);
_uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].createElement('button', 'startBtn', null, '.mainMenuContainer', 1);
_uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement('.startBtn', 'START GAME');
_mainGameLoop__WEBPACK_IMPORTED_MODULE_1__["default"].generateGameElements();













})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLDBCQUEwQixvQkFBb0IsaUJBQWlCLEdBQUcsVUFBVSxrQkFBa0IscUJBQXFCLDRCQUE0Qix3QkFBd0Isd0JBQXdCLGtCQUFrQixpQkFBaUIscUVBQXFFLDJCQUEyQixpQ0FBaUMsaUNBQWlDLGdDQUFnQyxjQUFjLHNDQUFzQyxHQUFHLFlBQVksa0JBQWtCLGlDQUFpQyxHQUFHLE9BQU8sMEJBQTBCLDBDQUEwQyxxQkFBcUIsb0JBQW9CLHlDQUF5QyxrQkFBa0Isc0NBQXNDLEdBQUcsU0FBUyxpQkFBaUIsMENBQTBDLEdBQUcsY0FBYyxrQkFBa0IscUJBQXFCLDRCQUE0Qix3QkFBd0IsMkJBQTJCLDZCQUE2QixrQkFBa0IsR0FBRyx5QkFBeUIsa0JBQWtCLHFCQUFxQiw0QkFBNEIsd0JBQXdCLDJCQUEyQixrQ0FBa0Msa0JBQWtCLEdBQUcsdUVBQXVFLDBCQUEwQiwwQ0FBMEMscUJBQXFCLG9CQUFvQixvQ0FBb0MseUNBQXlDLGtCQUFrQixHQUFHLHNCQUFzQiwwQkFBMEIsMENBQTBDLHFCQUFxQixvQkFBb0Isb0NBQW9DLHlDQUF5QyxxQkFBcUIsR0FBRyx5REFBeUQsb0JBQW9CLEdBQUcsc0hBQXNILHNDQUFzQyxHQUFHLDJIQUEySCx1Q0FBdUMsR0FBRyxlQUFlLGtCQUFrQixxQkFBcUIsNEJBQTRCLHdCQUF3Qix3QkFBd0Isa0NBQWtDLG9CQUFvQixHQUFHLGNBQWMsa0JBQWtCLGtCQUFrQixxQkFBcUIsNEJBQTRCLHdCQUF3Qix3QkFBd0IsOEJBQThCLCtFQUErRSxHQUFHLHdCQUF3QixrQkFBa0IsdUJBQXVCLDRCQUE0Qix3QkFBd0IsK0VBQStFLEdBQUcsMkJBQTJCLGlCQUFpQixrQkFBa0IsMkJBQTJCLHlCQUF5Qix5QkFBeUIsMkJBQTJCLDJDQUEyQyxpQkFBaUIsa0NBQWtDLGtCQUFrQixHQUFHLGdCQUFnQiwrRUFBK0Usa0JBQWtCLHVCQUF1Qiw0QkFBNEIsd0JBQXdCLHdCQUF3Qix1Q0FBdUMsaUJBQWlCLEdBQUcsV0FBVyxvQkFBb0IsaUJBQWlCLEdBQUcsYUFBYSx3QkFBd0IsMkJBQTJCLHNCQUFzQix5QkFBeUIsR0FBRyxpQkFBaUIsdUJBQXVCLEdBQUcsa0JBQWtCLHVCQUF1QixpQkFBaUIsZ0JBQWdCLHdDQUF3QyxvQkFBb0IsR0FBRyxlQUFlLHVCQUF1QixpQkFBaUIsZ0JBQWdCLHdDQUF3QyxvQkFBb0IsR0FBRyxPQUFPLGlGQUFpRixZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLFFBQVEsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxPQUFPLFNBQVMsWUFBWSxPQUFPLFNBQVMsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyw2QkFBNkIsMEJBQTBCLG9CQUFvQixpQkFBaUIsR0FBRyxVQUFVLGtCQUFrQixxQkFBcUIsNEJBQTRCLHdCQUF3Qix3QkFBd0Isa0JBQWtCLGlCQUFpQixxRUFBcUUsMkJBQTJCLGlDQUFpQyxpQ0FBaUMsZ0NBQWdDLGNBQWMsc0NBQXNDLEdBQUcsWUFBWSxrQkFBa0IsaUNBQWlDLEdBQUcsT0FBTywwQkFBMEIsMENBQTBDLHFCQUFxQixvQkFBb0IseUNBQXlDLGtCQUFrQixzQ0FBc0MsR0FBRyxTQUFTLGlCQUFpQiwwQ0FBMEMsR0FBRyxjQUFjLGtCQUFrQixxQkFBcUIsNEJBQTRCLHdCQUF3QiwyQkFBMkIsNkJBQTZCLGtCQUFrQixHQUFHLHlCQUF5QixrQkFBa0IscUJBQXFCLDRCQUE0Qix3QkFBd0IsMkJBQTJCLGtDQUFrQyxrQkFBa0IsR0FBRyx1RUFBdUUsMEJBQTBCLDBDQUEwQyxxQkFBcUIsb0JBQW9CLG9DQUFvQyx5Q0FBeUMsa0JBQWtCLEdBQUcsc0JBQXNCLDBCQUEwQiwwQ0FBMEMscUJBQXFCLG9CQUFvQixvQ0FBb0MseUNBQXlDLHFCQUFxQixHQUFHLHlEQUF5RCxvQkFBb0IsR0FBRyxzSEFBc0gsc0NBQXNDLEdBQUcsMkhBQTJILHVDQUF1QyxHQUFHLGVBQWUsa0JBQWtCLHFCQUFxQiw0QkFBNEIsd0JBQXdCLHdCQUF3QixrQ0FBa0Msb0JBQW9CLEdBQUcsY0FBYyxrQkFBa0Isa0JBQWtCLHFCQUFxQiw0QkFBNEIsd0JBQXdCLHdCQUF3Qiw4QkFBOEIsK0VBQStFLEdBQUcsd0JBQXdCLGtCQUFrQix1QkFBdUIsNEJBQTRCLHdCQUF3QiwrRUFBK0UsR0FBRywyQkFBMkIsaUJBQWlCLGtCQUFrQiwyQkFBMkIseUJBQXlCLHlCQUF5QiwyQkFBMkIsMkNBQTJDLGlCQUFpQixrQ0FBa0Msa0JBQWtCLEdBQUcsZ0JBQWdCLCtFQUErRSxrQkFBa0IsdUJBQXVCLDRCQUE0Qix3QkFBd0Isd0JBQXdCLHVDQUF1QyxpQkFBaUIsR0FBRyxXQUFXLG9CQUFvQixpQkFBaUIsR0FBRyxhQUFhLHdCQUF3QiwyQkFBMkIsc0JBQXNCLHlCQUF5QixHQUFHLGlCQUFpQix1QkFBdUIsR0FBRyxrQkFBa0IsdUJBQXVCLGlCQUFpQixnQkFBZ0Isd0NBQXdDLG9CQUFvQixHQUFHLGVBQWUsdUJBQXVCLGlCQUFpQixnQkFBZ0Isd0NBQXdDLG9CQUFvQixHQUFHLG1CQUFtQjtBQUNwclM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JCYTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjZCO0FBQ1M7QUFDQTs7QUFFdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxPQUFPLEVBQUUsUUFBUTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0EscUJBQXFCLG9EQUFJLGdCQUFnQixrQkFBa0I7QUFDM0Q7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBLHFCQUFxQixvREFBSSxpQkFBaUIsa0JBQWtCO0FBQzVEO0FBQ0E7O0FBRUEsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQSxxQkFBcUIsb0RBQUksZ0JBQWdCLGtCQUFrQjtBQUMzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCw4QkFBOEIsRUFBRSxLQUFLO0FBQzFGLG1DQUFtQyx3RkFBMkM7QUFDOUUsaUNBQWlDLDJGQUE4QztBQUMvRSxxRkFBcUY7QUFDckY7QUFDQSxtRkFBbUY7QUFDbkY7QUFDQSxtQ0FBbUMsK0RBQWtCO0FBQ3JEO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxtREFBbUQsOEJBQThCLEVBQUUsS0FBSztBQUN4RiwrQkFBK0Isd0ZBQTJDO0FBQzFFLDZCQUE2QiwyRkFBOEM7QUFDM0UsaUZBQWlGO0FBQ2pGLCtFQUErRTtBQUMvRSwrQkFBK0IsK0RBQWtCO0FBQ2pELFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsK0RBQWtCO0FBQy9DLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsK0RBQWtCO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7O0FBRUE7QUFDQSxtR0FBbUcsWUFBWSx5SEFBeUgsWUFBWSx5SkFBeUosWUFBWTtBQUN6WjtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLGFBQWEsRUFBRSxZQUFZLHVDQUF1QyxZQUFZO0FBQ3ZIO0FBQ0E7QUFDQSxnQkFBZ0IseUVBQWdDLGdCQUFnQixNQUFNLFFBQVEsWUFBWTtBQUMxRixnQkFBZ0IseUVBQWdDLGdCQUFnQixNQUFNLFFBQVEsWUFBWTtBQUMxRixnQkFBZ0IsZ0VBQXVCLGdCQUFnQixNQUFNO0FBQzdELGdCQUFnQixnRUFBdUIsZ0JBQWdCLE1BQU07QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsa0NBQWtDLGFBQWEsRUFBRSxZQUFZLHdDQUF3QyxZQUFZO0FBQy9IO0FBQ0E7QUFDQSxnQkFBZ0IseUVBQWdDLGdCQUFnQixNQUFNLFFBQVEsWUFBWTtBQUMxRixnQkFBZ0IseUVBQWdDLGdCQUFnQixNQUFNLFFBQVEsWUFBWTtBQUMxRixnQkFBZ0IseUVBQWdDLGdCQUFnQixPQUFPLFFBQVEsWUFBWTtBQUMzRixnQkFBZ0IsZ0VBQXVCLGdCQUFnQixNQUFNO0FBQzdELGdCQUFnQixnRUFBdUIsZ0JBQWdCLE1BQU07QUFDN0QsZ0JBQWdCLGdFQUF1QixnQkFBZ0IsT0FBTztBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsa0NBQWtDLGFBQWEsRUFBRSxZQUFZLHVDQUF1QyxZQUFZO0FBQzlIO0FBQ0E7QUFDQSxnQkFBZ0IseUVBQWdDLGdCQUFnQixNQUFNLFFBQVEsWUFBWTtBQUMxRixnQkFBZ0IseUVBQWdDLGdCQUFnQixNQUFNLFFBQVEsWUFBWTtBQUMxRixnQkFBZ0IseUVBQWdDLGdCQUFnQixPQUFPLFFBQVEsWUFBWTtBQUMzRixnQkFBZ0IseUVBQWdDLGdCQUFnQixPQUFPLFFBQVEsWUFBWTtBQUMzRixnQkFBZ0IseUVBQWdDLGdCQUFnQixPQUFPLFFBQVEsWUFBWTtBQUMzRixnQkFBZ0IsZ0VBQXVCLGdCQUFnQixNQUFNO0FBQzdELGdCQUFnQixnRUFBdUIsZ0JBQWdCLE1BQU07QUFDN0QsZ0JBQWdCLGdFQUF1QixnQkFBZ0IsT0FBTztBQUM5RCxnQkFBZ0IsZ0VBQXVCLGdCQUFnQixPQUFPO0FBQzlELGdCQUFnQixnRUFBdUIsZ0JBQWdCLE9BQU87QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBLG1HQUFtRyxZQUFZLDBIQUEwSCxZQUFZLDBKQUEwSixZQUFZO0FBQzNaO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUMsYUFBYSxFQUFFLFlBQVksdUNBQXVDLFlBQVk7QUFDdkg7QUFDQTtBQUNBLGdCQUFnQix5RUFBZ0MsZ0JBQWdCLE1BQU0sUUFBUSxZQUFZO0FBQzFGLGdCQUFnQix5RUFBZ0MsZ0JBQWdCLE9BQU8sUUFBUSxZQUFZO0FBQzNGLGdCQUFnQixnRUFBdUIsZ0JBQWdCLE1BQU07QUFDN0QsZ0JBQWdCLGdFQUF1QixnQkFBZ0IsT0FBTztBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxrQ0FBa0MsYUFBYSxFQUFFLFlBQVksd0NBQXdDLFlBQVk7QUFDL0g7QUFDQTtBQUNBLGdCQUFnQix5RUFBZ0MsZ0JBQWdCLE1BQU0sUUFBUSxZQUFZO0FBQzFGLGdCQUFnQix5RUFBZ0MsZ0JBQWdCLE9BQU8sUUFBUSxZQUFZO0FBQzNGLGdCQUFnQix5RUFBZ0MsZ0JBQWdCLE9BQU8sUUFBUSxZQUFZO0FBQzNGLGdCQUFnQixnRUFBdUIsZ0JBQWdCLE1BQU07QUFDN0QsZ0JBQWdCLGdFQUF1QixnQkFBZ0IsT0FBTztBQUM5RCxnQkFBZ0IsZ0VBQXVCLGdCQUFnQixPQUFPO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxrQ0FBa0MsYUFBYSxFQUFFLFlBQVksdUNBQXVDLFlBQVk7QUFDOUg7QUFDQTtBQUNBLGdCQUFnQix5RUFBZ0MsZ0JBQWdCLE1BQU0sUUFBUSxZQUFZO0FBQzFGLGdCQUFnQix5RUFBZ0MsZ0JBQWdCLE9BQU8sUUFBUSxZQUFZO0FBQzNGLGdCQUFnQix5RUFBZ0MsZ0JBQWdCLE9BQU8sUUFBUSxZQUFZO0FBQzNGLGdCQUFnQix5RUFBZ0MsZ0JBQWdCLE9BQU8sUUFBUSxZQUFZO0FBQzNGLGdCQUFnQix5RUFBZ0MsZ0JBQWdCLE9BQU8sUUFBUSxZQUFZO0FBQzNGLGdCQUFnQixnRUFBdUIsZ0JBQWdCLE1BQU07QUFDN0QsZ0JBQWdCLGdFQUF1QixnQkFBZ0IsT0FBTztBQUM5RCxnQkFBZ0IsZ0VBQXVCLGdCQUFnQixPQUFPO0FBQzlELGdCQUFnQixnRUFBdUIsZ0JBQWdCLE9BQU87QUFDOUQsZ0JBQWdCLGdFQUF1QixnQkFBZ0IsT0FBTztBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOztBQUVaO0FBQ0EsbUdBQW1HLFlBQVksMkhBQTJILFlBQVksNEpBQTRKLFlBQVk7QUFDOVo7QUFDQTtBQUNBOztBQUVBLHlDQUF5QyxhQUFhLEVBQUUsWUFBWSx1Q0FBdUMsWUFBWTtBQUN2SDtBQUNBO0FBQ0EsZ0JBQWdCLHlFQUFnQyxnQkFBZ0IsTUFBTSxRQUFRLFlBQVk7QUFDMUYsZ0JBQWdCLHlFQUFnQyxnQkFBZ0IsTUFBTSxRQUFRLFlBQVk7QUFDMUYsZ0JBQWdCLGdFQUF1QixnQkFBZ0IsTUFBTTtBQUM3RCxnQkFBZ0IsZ0VBQXVCLGdCQUFnQixNQUFNO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGtDQUFrQyxhQUFhLEVBQUUsWUFBWSx3Q0FBd0MsWUFBWTtBQUMvSDtBQUNBO0FBQ0EsZ0JBQWdCLHlFQUFnQyxnQkFBZ0IsTUFBTSxRQUFRLFlBQVk7QUFDMUYsZ0JBQWdCLHlFQUFnQyxnQkFBZ0IsTUFBTSxRQUFRLFlBQVk7QUFDMUYsZ0JBQWdCLHlFQUFnQyxnQkFBZ0IsTUFBTSxRQUFRLFlBQVk7QUFDMUYsZ0JBQWdCLGdFQUF1QixnQkFBZ0IsTUFBTTtBQUM3RCxnQkFBZ0IsZ0VBQXVCLGdCQUFnQixNQUFNO0FBQzdELGdCQUFnQixnRUFBdUIsZ0JBQWdCLE1BQU07QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGtDQUFrQyxhQUFhLEVBQUUsWUFBWSx1Q0FBdUMsWUFBWTtBQUM5SDtBQUNBLGdCQUFnQix5RUFBZ0MsZ0JBQWdCLE1BQU0sUUFBUSxZQUFZO0FBQzFGLGdCQUFnQix5RUFBZ0MsZ0JBQWdCLE1BQU0sUUFBUSxZQUFZO0FBQzFGLGdCQUFnQix5RUFBZ0MsZ0JBQWdCLE1BQU0sUUFBUSxZQUFZO0FBQzFGLGdCQUFnQix5RUFBZ0MsZ0JBQWdCLE1BQU0sUUFBUSxZQUFZO0FBQzFGLGdCQUFnQix5RUFBZ0MsZ0JBQWdCLE1BQU0sUUFBUSxZQUFZO0FBQzFGLGdCQUFnQixnRUFBdUIsZ0JBQWdCLE1BQU07QUFDN0QsZ0JBQWdCLGdFQUF1QixnQkFBZ0IsTUFBTTtBQUM3RCxnQkFBZ0IsZ0VBQXVCLGdCQUFnQixNQUFNO0FBQzdELGdCQUFnQixnRUFBdUIsZ0JBQWdCLE1BQU07QUFDN0QsZ0JBQWdCLGdFQUF1QixnQkFBZ0IsTUFBTTtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOztBQUVaO0FBQ0EsbUdBQW1HLFlBQVksMEhBQTBILFlBQVksMkpBQTJKLFlBQVk7QUFDNVo7QUFDQTtBQUNBOztBQUVBLHlDQUF5QyxhQUFhLEVBQUUsWUFBWSx1Q0FBdUMsWUFBWTtBQUN2SDtBQUNBLGdCQUFnQix5RUFBZ0MsZ0JBQWdCLE1BQU0sUUFBUSxZQUFZO0FBQzFGLGdCQUFnQix5RUFBZ0MsZ0JBQWdCLEVBQUUsUUFBUSxZQUFZO0FBQ3RGLGdCQUFnQixnRUFBdUIsZ0JBQWdCLE1BQU07QUFDN0QsZ0JBQWdCLGdFQUF1QixnQkFBZ0IsRUFBRTtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxrQ0FBa0MsYUFBYSxFQUFFLFlBQVksd0NBQXdDLFlBQVk7QUFDL0g7QUFDQSxnQkFBZ0IseUVBQWdDLGdCQUFnQixNQUFNLFFBQVEsWUFBWTtBQUMxRixnQkFBZ0IseUVBQWdDLGdCQUFnQixFQUFFLFFBQVEsWUFBWTtBQUN0RixnQkFBZ0IseUVBQWdDLGdCQUFnQixNQUFNLFFBQVEsWUFBWTtBQUMxRixnQkFBZ0IsZ0VBQXVCLGdCQUFnQixNQUFNO0FBQzdELGdCQUFnQixnRUFBdUIsZ0JBQWdCLEVBQUU7QUFDekQsZ0JBQWdCLGdFQUF1QixnQkFBZ0IsTUFBTTtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsa0NBQWtDLGFBQWEsRUFBRSxZQUFZLHVDQUF1QyxZQUFZO0FBQzlIO0FBQ0EsZ0JBQWdCLHlFQUFnQyxnQkFBZ0IsTUFBTSxRQUFRLFlBQVk7QUFDMUYsZ0JBQWdCLHlFQUFnQyxnQkFBZ0IsRUFBRSxRQUFRLFlBQVk7QUFDdEYsZ0JBQWdCLHlFQUFnQyxnQkFBZ0IsTUFBTSxRQUFRLFlBQVk7QUFDMUYsZ0JBQWdCLHlFQUFnQyxnQkFBZ0IsTUFBTSxRQUFRLFlBQVk7QUFDMUYsZ0JBQWdCLHlFQUFnQyxnQkFBZ0IsTUFBTSxRQUFRLFlBQVk7QUFDMUYsZ0JBQWdCLGdFQUF1QixnQkFBZ0IsTUFBTTtBQUM3RCxnQkFBZ0IsZ0VBQXVCLGdCQUFnQixFQUFFO0FBQ3pELGdCQUFnQixnRUFBdUIsZ0JBQWdCLE1BQU07QUFDN0QsZ0JBQWdCLGdFQUF1QixnQkFBZ0IsTUFBTTtBQUM3RCxnQkFBZ0IsZ0VBQXVCLGdCQUFnQixNQUFNO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFFBQVEsaUVBQXdCO0FBQ2hDLFFBQVEseUVBQWdDLDBCQUEwQixNQUFNO0FBQ3hFO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUSwwRUFBNkI7O0FBRXJDLFFBQVEseUVBQWdDLG9CQUFvQixvRUFBdUIsQ0FBQztBQUNwRixRQUFRLGdFQUF1QjtBQUMvQixRQUFRO0FBQ1IsUUFBUSxpRUFBd0I7QUFDaEMsUUFBUSx5RUFBZ0MsMEJBQTBCLE1BQU07QUFDeEU7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRLDZFQUFnQztBQUN4QyxRQUFRLHlFQUFnQyxnQkFBZ0IsdUVBQTBCLENBQUM7QUFDbkYsUUFBUSxnRUFBdUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL2JPO0FBQ007O0FBRXRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixzREFBTTtBQUMxQixpQkFBaUIsc0RBQU07O0FBRXZCO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLE9BQU87QUFDUDtBQUNBLElBQUksZ0VBQXVCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGtEQUFrRCxXQUFXO0FBQ25FLHFFQUFxRSxXQUFXO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLGlFQUF3QjtBQUM5QixNQUFNLGlFQUF3QjtBQUM5QixNQUFNLHlFQUFnQztBQUN0QyxNQUFNLGlFQUF3QjtBQUM5QixNQUFNLHlFQUFnQzs7QUFFdEMsTUFBTSxpRUFBd0I7QUFDOUIsTUFBTSx5RUFBZ0M7QUFDdEMsTUFBTSxpRUFBd0I7QUFDOUIsTUFBTSx5RUFBZ0M7QUFDdEMsTUFBTSxpRUFBd0I7QUFDOUIsTUFBTSx5RUFBZ0M7O0FBRXRDLE1BQU0saUVBQXdCO0FBQzlCLE1BQU0saUVBQXdCO0FBQzlCLE1BQU0saUVBQXdCO0FBQzlCLHNCQUFzQixVQUFVO0FBQ2hDLDhDQUE4QyxFQUFFO0FBQ2hEO0FBQ0E7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBLFNBQVM7QUFDVCxRQUFRLHlFQUFnQyxnQkFBZ0IsRUFBRSxNQUFNLHVEQUF1RDtBQUN2SDtBQUNBLE1BQU0saUVBQXdCO0FBQzlCLE1BQU0saUVBQXdCO0FBQzlCLHNCQUFzQixVQUFVO0FBQ2hDLDJDQUEyQyxFQUFFO0FBQzdDLHlEQUF5RCxvQ0FBb0M7QUFDN0Y7QUFDQSxTQUFTO0FBQ1QsUUFBUSx5RUFBZ0MsYUFBYSxFQUFFLE1BQU0sb0RBQW9EO0FBQ2pIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlFQUF3QjtBQUM5QixNQUFNLGdFQUF1Qjs7QUFFN0I7O0FBRUEsTUFBTSxpRUFBd0I7QUFDOUIsTUFBTSx5RUFBZ0M7QUFDdEMsTUFBTSxpRUFBd0I7QUFDOUIsTUFBTSxnRUFBdUI7QUFDN0IsTUFBTSxpRUFBd0I7QUFDOUIsTUFBTSxnRUFBdUI7QUFDN0IsTUFBTSxpRUFBd0I7QUFDOUIsTUFBTSxnRUFBdUI7QUFDN0IsTUFBTSxpRUFBd0I7QUFDOUIsTUFBTSxnRUFBdUI7O0FBRTdCLE1BQU0saUVBQXdCO0FBQzlCLE1BQU0seUVBQWdDO0FBQ3RDLE1BQU0saUVBQXdCO0FBQzlCLE1BQU0sZ0VBQXVCO0FBQzdCLE1BQU0saUVBQXdCO0FBQzlCLE1BQU0sZ0VBQXVCO0FBQzdCLE1BQU0saUVBQXdCO0FBQzlCLE1BQU0sZ0VBQXVCOztBQUU3QjtBQUNBOzs7QUFHQSxNQUFNLGlFQUF3QjtBQUM5QixNQUFNLGdFQUF1QjtBQUM3QixNQUFNLHlFQUFnQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxjQUFjO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsVUFBVSxnRUFBdUI7QUFDakM7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUF3QjtBQUNoQyxRQUFRLGlFQUF3QjtBQUNoQyxRQUFRLHlFQUFnQztBQUN4QyxzQkFBc0Isc0RBQU07QUFDNUIsbUJBQW1CLHNEQUFNO0FBQ3pCO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLHdCQUF3QixVQUFVO0FBQ2xDLFVBQVUseUVBQWdDLGdCQUFnQixFQUFFLE1BQU0sdURBQXVEO0FBQ3pILFVBQVUsZ0VBQXVCLGdCQUFnQixFQUFFO0FBQ25EO0FBQ0Esd0JBQXdCLFVBQVU7QUFDbEMsVUFBVSx5RUFBZ0MsYUFBYSxFQUFFLE1BQU0sb0RBQW9EO0FBQ25ILFVBQVUsZ0VBQXVCLGFBQWEsRUFBRTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0VBQXVCO0FBQy9CLE9BQU87O0FBRVA7QUFDQSxNQUFNLGdFQUF1QjtBQUM3QixLQUFLO0FBQ0w7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxpRUFBZSxRQUFRLEVBQUM7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2TXNDO0FBQ0E7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHlEQUFTLElBQUksS0FBSztBQUNwQztBQUNBLHFCQUFxQix5REFBUyxJQUFJLEtBQUs7QUFDdkM7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUEsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7QUNyQ3JCO0FBQ0EsZ0JBQWdCLGNBQWM7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLFdBQVc7QUFDaEMsTUFBTTtBQUNOLHFCQUFxQixXQUFXO0FBQ2hDO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQ3JCbUI7O0FBRXRDO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQseUZBQTRDLG9CQUFvQjtBQUN2SCxRQUFRO0FBQ1Isb0RBQW9ELHNGQUF5QyxvQkFBb0I7QUFDakg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOzs7QUFHRCxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakMxQixNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSw4RkFBYyxHQUFHLDhGQUFjLFlBQVksRUFBQzs7Ozs7OztVQzFCN0U7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ2dCO0FBQ0E7O0FBRXRDLGtCQUFrQixxREFBUTtBQUMxQixpRUFBd0I7QUFDeEIsaUVBQXdCO0FBQ3hCLHlFQUFnQztBQUNoQywwRUFBNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm8xMC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlVi5jc3MiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2pzLXBybzEwLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qcy1wcm8xMC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2pzLXBybzEwLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qcy1wcm8xMC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmRHZW4uanMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL3NyYy9tYWluR2FtZUxvb3AuanMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXJHZW4uanMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL3NyYy9zaGlwR2VuLmpzIiwid2VicGFjazovL2pzLXBybzEwLWJhdHRsZXNoaXAvLi9zcmMvdWlFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9qcy1wcm8xMC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlVi5jc3M/MGZjNyIsIndlYnBhY2s6Ly9qcy1wcm8xMC1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzLXBybzEwLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzLXBybzEwLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qcy1wcm8xMC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9qcy1wcm8xMC1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMDBkZWcsICM1NTU1NTUsIHJnYigwLCAwLCAwKSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyOiBzb2xpZCA1cHggYmx1ZXZpb2xldDtcXG59XFxuXFxucCB7XFxuICBjb2xvcjogcmdiKDE4NSwgNSwgNSk7XFxuICB0ZXh0LXNoYWRvdzogNHB4IDRweCA0cHggcmdiKDAsIDAsIDApO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGJvcmRlcjogb3V0c2V0IDVweCByZ2IoMTIwLCA2OCwgMTY5KTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDY3LCAyMCk7XFxufVxcblxcbmRpdiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAzcHggcmdiKDEsIDAsIDApO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IGRhc2hlZCA1cHggZ3JlZW47XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ubWFpbk1lbnVDb250YWluZXIxIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogZGFzaGVkIDVweCBibHVldmlvbGV0O1xcbiAgcGFkZGluZzogM3JlbTtcXG59XFxuXFxuLnN0YXJ0QnRuLCBcXG4ubmV3Um91bmRCdG4sIFxcbi5xdWl0R2FtZUJ0bixcXG4ucm5kU2hpcFBsYWNlbWVudEJ0biAge1xcbiAgY29sb3I6IHJnYigxODUsIDUsIDUpO1xcbiAgdGV4dC1zaGFkb3c6IDRweCA0cHggNHB4IHJnYigwLCAwLCAwKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgNDgsIDYpO1xcbiAgYm9yZGVyOiBvdXRzZXQgOHB4IHJnYigxMjAsIDY4LCAxNjkpO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmNvbmZpcm1JbnB1dEJ0biB7XFxuICBjb2xvcjogcmdiKDE4NSwgNSwgNSk7XFxuICB0ZXh0LXNoYWRvdzogNHB4IDRweCA0cHggcmdiKDAsIDAsIDApO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCA0OCwgNik7XFxuICBib3JkZXI6IG91dHNldCA4cHggcmdiKDEyMCwgNjgsIDE2OSk7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbn1cXG5cXG4ubmV3Um91bmRCdG4sIFxcbi5xdWl0R2FtZUJ0bixcXG4ucm5kU2hpcFBsYWNlbWVudEJ0biB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5zdGFydEJ0bjpob3ZlcixcXG4ubmV3Um91bmRCdG46aG92ZXIsIFxcbi5xdWl0R2FtZUJ0bjpob3ZlcixcXG4ucm5kU2hpcFBsYWNlbWVudEJ0bjpob3ZlcixcXG4uY29uZmlybUlucHV0QnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMSwgNzgsIDExKTtcXG59XFxuXFxuLnN0YXJ0QnRuOmFjdGl2ZSxcXG4ubmV3Um91bmRCdG46YWN0aXZlLCBcXG4ucXVpdEdhbWVCdG46YWN0aXZlLFxcbi5ybmRTaGlwUGxhY2VtZW50QnRuOmFjdGl2ZSxcXG4uY29uZmlybUlucHV0QnRuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDEwMywgMTUpO1xcbn1cXG5cXG4uc2NvcmVEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYm9yZGVyOiBkYXNoZWQgNXB4IGJsdWV2aW9sZXQ7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5ncmlkRGl2IHtcXG4gIHBhZGRpbmc6IDByZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBib3JkZXI6IGRhc2hlZCA1cHggb3JhbmdlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoNTAsIDY1LCAzNSksIHJnYig1MiwgODgsIDMyKSk7XFxufVxcblxcbi5zdW5rU3RhdHVzTWVzc2FnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoNTAsIDY1LCAzNSksIHJnYig1MiwgODgsIDMyKSk7XFxufVxcblxcbi5wbGF5ZXJHcmlkLFxcbi5haUdyaWQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjsgIFxcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiAycHggMnB4O1xcbiAgYm9yZGVyOiBkYXNoZWQgNXB4IGJsdWV2aW9sZXQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uaW5wdXRGb3JtIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDUyLCA4OCwgMzIpLCByZ2IoNTAsIDY1LCAzNSkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBib3JkZXI6IHNvbGlkIDVweCByZ2IoNzIsIDcyLCAxODEpO1xcbiAgd2lkdGg6IDI2cmVtO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5haUdyaWQge1xcbiAgcGFkZGluZy10b3A6IDIuNnJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAyLjZyZW07XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ucGxheWVyR3JpZCB7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxufVxcblxcbi5odW1hblNxdWFyZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMzVweDtcXG4gIGJvcmRlcjogc29saWQgMnB4IHJnYigxMTQsIDEyMywgMjApO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbn1cXG5cXG4uYWlTcXVhcmUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMTE2LCAxMjUsIDIwKTtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlVi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixnRUFBZ0U7RUFDaEUsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLFNBQVM7RUFDVCxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGFBQWE7QUFDZjs7QUFFQTs7OztFQUlFLHFCQUFxQjtFQUNyQixxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0Isb0NBQW9DO0VBQ3BDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0Isb0NBQW9DO0VBQ3BDLGdCQUFnQjtBQUNsQjs7QUFFQTs7O0VBR0UsZUFBZTtBQUNqQjs7QUFFQTs7Ozs7RUFLRSxpQ0FBaUM7QUFDbkM7O0FBRUE7Ozs7O0VBS0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwwRUFBMEU7QUFDNUU7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMEVBQTBFO0FBQzVFOztBQUVBOztFQUVFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDBFQUEwRTtFQUMxRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQ0FBbUM7RUFDbkMsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEwMGRlZywgIzU1NTU1NSwgcmdiKDAsIDAsIDApKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXI6IHNvbGlkIDVweCBibHVldmlvbGV0O1xcbn1cXG5cXG5wIHtcXG4gIGNvbG9yOiByZ2IoMTg1LCA1LCA1KTtcXG4gIHRleHQtc2hhZG93OiA0cHggNHB4IDRweCByZ2IoMCwgMCwgMCk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYm9yZGVyOiBvdXRzZXQgNXB4IHJnYigxMjAsIDY4LCAxNjkpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgNjcsIDIwKTtcXG59XFxuXFxuZGl2IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDNweCByZ2IoMSwgMCwgMCk7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogZGFzaGVkIDVweCBncmVlbjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5tYWluTWVudUNvbnRhaW5lcjEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiBkYXNoZWQgNXB4IGJsdWV2aW9sZXQ7XFxuICBwYWRkaW5nOiAzcmVtO1xcbn1cXG5cXG4uc3RhcnRCdG4sIFxcbi5uZXdSb3VuZEJ0biwgXFxuLnF1aXRHYW1lQnRuLFxcbi5ybmRTaGlwUGxhY2VtZW50QnRuICB7XFxuICBjb2xvcjogcmdiKDE4NSwgNSwgNSk7XFxuICB0ZXh0LXNoYWRvdzogNHB4IDRweCA0cHggcmdiKDAsIDAsIDApO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCA0OCwgNik7XFxuICBib3JkZXI6IG91dHNldCA4cHggcmdiKDEyMCwgNjgsIDE2OSk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uY29uZmlybUlucHV0QnRuIHtcXG4gIGNvbG9yOiByZ2IoMTg1LCA1LCA1KTtcXG4gIHRleHQtc2hhZG93OiA0cHggNHB4IDRweCByZ2IoMCwgMCwgMCk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDQ4LCA2KTtcXG4gIGJvcmRlcjogb3V0c2V0IDhweCByZ2IoMTIwLCA2OCwgMTY5KTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxufVxcblxcbi5uZXdSb3VuZEJ0biwgXFxuLnF1aXRHYW1lQnRuLFxcbi5ybmRTaGlwUGxhY2VtZW50QnRuIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnN0YXJ0QnRuOmhvdmVyLFxcbi5uZXdSb3VuZEJ0bjpob3ZlciwgXFxuLnF1aXRHYW1lQnRuOmhvdmVyLFxcbi5ybmRTaGlwUGxhY2VtZW50QnRuOmhvdmVyLFxcbi5jb25maXJtSW5wdXRCdG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCA3OCwgMTEpO1xcbn1cXG5cXG4uc3RhcnRCdG46YWN0aXZlLFxcbi5uZXdSb3VuZEJ0bjphY3RpdmUsIFxcbi5xdWl0R2FtZUJ0bjphY3RpdmUsXFxuLnJuZFNoaXBQbGFjZW1lbnRCdG46YWN0aXZlLFxcbi5jb25maXJtSW5wdXRCdG46YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTAzLCAxNSk7XFxufVxcblxcbi5zY29yZURpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBib3JkZXI6IGRhc2hlZCA1cHggYmx1ZXZpb2xldDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmdyaWREaXYge1xcbiAgcGFkZGluZzogMHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGJvcmRlcjogZGFzaGVkIDVweCBvcmFuZ2U7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYig1MCwgNjUsIDM1KSwgcmdiKDUyLCA4OCwgMzIpKTtcXG59XFxuXFxuLnN1bmtTdGF0dXNNZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYig1MCwgNjUsIDM1KSwgcmdiKDUyLCA4OCwgMzIpKTtcXG59XFxuXFxuLnBsYXllckdyaWQsXFxuLmFpR3JpZCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyOyAgXFxuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBnYXA6IDJweCAycHg7XFxuICBib3JkZXI6IGRhc2hlZCA1cHggYmx1ZXZpb2xldDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5pbnB1dEZvcm0ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoNTIsIDg4LCAzMiksIHJnYig1MCwgNjUsIDM1KSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGJvcmRlcjogc29saWQgNXB4IHJnYig3MiwgNzIsIDE4MSk7XFxuICB3aWR0aDogMjZyZW07XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFpR3JpZCB7XFxuICBwYWRkaW5nLXRvcDogMi42cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDIuNnJlbTtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5wbGF5ZXJHcmlkIHtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG59XFxuXFxuLmh1bWFuU3F1YXJlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAycHggcmdiKDExNCwgMTIzLCAyMCk7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxufVxcblxcbi5haVNxdWFyZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGJvcmRlcjogc29saWQgMnB4IHJnYigxMTYsIDEyNSwgMjApO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcEdlbic7XG5pbXBvcnQgZ2FtZUxvb3AgZnJvbSAnLi9tYWluR2FtZUxvb3AnO1xuaW1wb3J0IHVpRWxlbWVudHMgZnJvbSAnLi91aUVsZW1lbnRzJztcblxuY29uc3QgR2FtZUJvYXJkID0gKG5hbWUpID0+IHtcbiAgbGV0IHNoaXBzRGF0YSA9IFtdO1xuICBsZXQgZ2FtZUJvYXJkU3FycyA9IFtdO1xuXG4gIGNvbnN0IFNxdWFyZXMgPSBmdW5jdGlvbih3ZXN0TnIsIG5vcnRoTnIsIGxhc3RTcXVhcmUpIHtcbiAgICBsZXQgd2VzdCA9IHdlc3ROcjtcbiAgICBsZXQgbm9ydGggPSBub3J0aE5yO1xuICAgIGxldCB3ZXN0QnlOb3J0aCA9IHBhcnNlSW50KGAke3dlc3ROcn0ke25vcnRoTnJ9YCk7XG4gICAgbGV0IHNoaXBBdExvY2F0aW9uID0gJyc7XG4gICAgbGV0IGxvY2F0aW9uSGl0ID0gZmFsc2U7XG4gICAgbGV0IHNoaXBBbmNob3JlZCA9IGZhbHNlO1xuICAgIGxldCBsYXN0Um93U3F1YXJlID0gbGFzdFNxdWFyZTtcblxuICAgIHJldHVybiB7IHdlc3QsIG5vcnRoLCB3ZXN0QnlOb3J0aCwgc2hpcEF0TG9jYXRpb24sIGxvY2F0aW9uSGl0LCBzaGlwQW5jaG9yZWQsIGxhc3RSb3dTcXVhcmUgfVxuICB9O1xuXG4gIGNvbnN0IGdlbmVyYXRlU3F1YXJlcyA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCB3ZXN0TnVtYmVyID0gMTtcbiAgICBsZXQgbGFzdFJvd1NxdWFyZSA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICAgIGdhbWVCb2FyZFNxcnMucHVzaChTcXVhcmVzKHdlc3ROdW1iZXIsIGksIGxhc3RSb3dTcXVhcmUpKTtcbiAgICAgIGxhc3RSb3dTcXVhcmUgPSBmYWxzZTtcbiAgICAgIChpID09PSA5KSA/IGxhc3RSb3dTcXVhcmUgPSB0cnVlIDogbnVsbDtcbiAgICAgIGlmIChpID49IDEwKSB7XG4gICAgICAgIHdlc3ROdW1iZXIrKztcbiAgICAgICAgaSA9IDA7XG4gICAgICB9O1xuICAgICAgaWYgKHdlc3ROdW1iZXIgPT09IDExKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfTtcbiAgICB9O1xuICB9O1xuICBnZW5lcmF0ZVNxdWFyZXMoKVxuXG4gIGNvbnN0IGdlbmVyYXRlU2hpcHMgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgc2hpcE5yID0gMDtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIHtcbiAgICAgIHNoaXBOciArPSAxO1xuICAgICAgc2hpcHNEYXRhLnB1c2goU2hpcCgyLCBgU21hbGxTaGlwJHtzaGlwTnIudG9TdHJpbmcoKX1gLCBzaGlwTnIpKTtcbiAgICB9O1xuICAgIChzaGlwTnIgPiAwKSA/IHNoaXBOciA9IDAgOiBudWxsO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSB7XG4gICAgICBzaGlwTnIgKz0gMTtcbiAgICAgIHNoaXBzRGF0YS5wdXNoKFNoaXAoMywgYE1lZGl1bVNoaXAke3NoaXBOci50b1N0cmluZygpfWAsIHNoaXBOcikpO1xuICAgIH07XG4gICAgKHNoaXBOciA+IDApID8gc2hpcE5yID0gMCA6IG51bGw7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxOyBpKyspIHtcbiAgICAgIHNoaXBOciArPSAxO1xuICAgICAgc2hpcHNEYXRhLnB1c2goU2hpcCg1LCBgTGFyZ2VTaGlwJHtzaGlwTnIudG9TdHJpbmcoKX1gLCBzaGlwTnIpKTtcbiAgICB9O1xuICB9O1xuICBnZW5lcmF0ZVNoaXBzKClcblxuICBjb25zdCByZWNpZXZlQXR0YWNrID0gZnVuY3Rpb24oY29vcmRpbmF0ZXMsIHRhcmdldExvY2F0aW9uKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lQm9hcmRTcXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0QnlOb3J0aCA9PT0gY29vcmRpbmF0ZXMgJiYgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQW5jaG9yZWQgPT09IHRydWUgJiYgZ2FtZUJvYXJkU3Fyc1tpXS5sb2NhdGlvbkhpdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwc0RhdGEubGVuZ3RoOyBqKyspIHsgXG4gICAgICAgICAgaWYgKHNoaXBzRGF0YVtqXS5uYW1lID09PSBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBdExvY2F0aW9uICYmIGdhbWVCb2FyZFNxcnNbaV0ubG9jYXRpb25IaXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLmxvY2F0aW9uSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHNoaXBzRGF0YVtqXS5oaXQoKTtcbiAgICAgICAgICAgIHNoaXBzRGF0YVtqXS5pc1N1bmsoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTSE9UUyBGSVJFRCBPTiBVUyEgSElUIEFUICR7Z2FtZUJvYXJkU3Fyc1tpXS53ZXN0QnlOb3J0aH0gJHtuYW1lfSFgKTtcbiAgICAgICAgICAgIChuYW1lID09PSAnSEFMMzAwMCcpID8gZ2FtZUxvb3AuYWlQbGF5ZXIuZ2FtZUJvYXJkLmNoZWNrU3Vua1N0YXR1cygpIDogbnVsbDtcbiAgICAgICAgICAgIChuYW1lID09PSAnSFVNQU4nKSA/IGdhbWVMb29wLmh1bWFuUGxheWVyLmdhbWVCb2FyZC5jaGVja1N1bmtTdGF0dXMoKSA6IG51bGw7XG4gICAgICAgICAgICAobmFtZSA9PT0gJ0hBTDMwMDAnKSA/IHRhcmdldExvY2F0aW9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnY29sb3I6IHJlZDsgZm9udC1zaXplOiAyMHB4JykgOiBudWxsO1xuICAgICAgICAgICAgKG5hbWUgPT09ICdIQUwzMDAwJykgPyB0YXJnZXRMb2NhdGlvbi50ZXh0Q29udGVudCA9ICdYJyA6IG51bGw7XG4gICAgICAgICAgICAobmFtZSA9PT0gJ0hVTUFOJykgPyB0YXJnZXRMb2NhdGlvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2NvbG9yOiByZWQ7IGZvbnQtc2l6ZTogMjVweCcpIDogbnVsbDtcbiAgICAgICAgICAgIChuYW1lID09PSAnSFVNQU4nKSA/IHRhcmdldExvY2F0aW9uLnRleHRDb250ZW50ID0gJ1gnIDogbnVsbDtcbiAgICAgICAgICAgIChuYW1lID09PSAnSEFMMzAwMCcpID8gZ2FtZUxvb3AudHVybkxvZ2ljKCkgOiBudWxsO1xuICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKGdhbWVCb2FyZFNxcnNbaV0ud2VzdEJ5Tm9ydGggPT09IGNvb3JkaW5hdGVzICYmIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2ldLmxvY2F0aW9uSGl0ID09PSBmYWxzZSkge1xuICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLmxvY2F0aW9uSGl0ID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coYFNIT1RTIEZJUkVEIE9OIFVTISBBTUlTUyBBVCAke2dhbWVCb2FyZFNxcnNbaV0ud2VzdEJ5Tm9ydGh9ICR7bmFtZX0hYCk7XG4gICAgICAgIChuYW1lID09PSAnSEFMMzAwMCcpID8gZ2FtZUxvb3AuYWlQbGF5ZXIuZ2FtZUJvYXJkLmNoZWNrU3Vua1N0YXR1cygpIDogbnVsbDtcbiAgICAgICAgKG5hbWUgPT09ICdIVU1BTicpID8gZ2FtZUxvb3AuaHVtYW5QbGF5ZXIuZ2FtZUJvYXJkLmNoZWNrU3Vua1N0YXR1cygpIDogbnVsbDtcbiAgICAgICAgKG5hbWUgPT09ICdIQUwzMDAwJykgPyB0YXJnZXRMb2NhdGlvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2NvbG9yOiByZWQ7IGZvbnQtc2l6ZTogMjBweCcpIDogbnVsbDtcbiAgICAgICAgKG5hbWUgPT09ICdIVU1BTicpID8gdGFyZ2V0TG9jYXRpb24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdjb2xvcjogcmVkOyBmb250LXNpemU6IDI1cHgnKSA6IG51bGw7XG4gICAgICAgIChuYW1lID09PSAnSEFMMzAwMCcpID8gZ2FtZUxvb3AudHVybkxvZ2ljKCkgOiBudWxsO1xuICAgICAgfSBlbHNlIGlmIChnYW1lQm9hcmRTcXJzW2ldLndlc3RCeU5vcnRoID09PSBjb29yZGluYXRlcyAmJiBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpXS5sb2NhdGlvbkhpdCA9PT0gdHJ1ZSkge1xuICAgICAgICAobmFtZSA9PT0gJ0hVTUFOJykgPyBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpIDogbnVsbDtcbiAgICAgICAgKG5hbWUgPT09ICdIVU1BTicpID8gY29uc29sZS5sb2coJ0hBTCBpcyB0cnlpbmcgYWdhaW4nKSA6IG51bGw7XG4gICAgICAgIChuYW1lID09PSAnSFVNQU4nKSA/IGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJykgOiBudWxsO1xuICAgICAgICAobmFtZSA9PT0gJ0hVTUFOJykgPyBnYW1lTG9vcC50dXJuTG9naWMoKSA6IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKGdhbWVCb2FyZFNxcnNbaV0ud2VzdEJ5Tm9ydGggPT09IGNvb3JkaW5hdGVzICYmIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEFuY2hvcmVkID09PSB0cnVlICYmIGdhbWVCb2FyZFNxcnNbaV0ubG9jYXRpb25IaXQgPT09IHRydWUpIHtcbiAgICAgICAgKG5hbWUgPT09ICdIVU1BTicpID8gY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKSA6IG51bGw7XG4gICAgICAgIChuYW1lID09PSAnSFVNQU4nKSA/IGNvbnNvbGUubG9nKCdIQUwgaXMgdHJ5aW5nIGFnYWluJykgOiBudWxsO1xuICAgICAgICAobmFtZSA9PT0gJ0hVTUFOJykgPyBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpIDogbnVsbDtcbiAgICAgICAgKG5hbWUgPT09ICdIVU1BTicpID8gZ2FtZUxvb3AudHVybkxvZ2ljKCkgOiBudWxsO1xuICAgICAgfTtcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcE9uU3FyID0gZnVuY3Rpb24gKGNvb3JkaW5hdGVzLCBkaXJlY3Rpb25PZlBsYWNlbWVudCwgc2hpcE5hbWVTaXplKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lQm9hcmRTcXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0QnlOb3J0aCA9PT0gY29vcmRpbmF0ZXMgJiYgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGxldCBzaGlwQ291bnRlciA9IDE7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcHNEYXRhLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgaWYgKGRpcmVjdGlvbk9mUGxhY2VtZW50ID09PSBcIm5vcnRoXCIpIHtcblxuICAgICAgICAgICAgLy8gc2FmZWd1YXJkIGFnYWluc3QgaW52YWxpZCBwbGFjZW1lbnQgYW5kIHRvIGluZm9ybSB1c2VyIGFib3V0IGl0XG4gICAgICAgICAgICBpZiAoKGNvb3JkaW5hdGVzID09PSBnYW1lQm9hcmRTcXJzW2ldLndlc3RCeU5vcnRoICYmIHNoaXBzRGF0YVtqXS5uYW1lID09PSBgU21hbGxTaGlwJHtzaGlwQ291bnRlcn1gICYmIGdhbWVCb2FyZFNxcnNbaV0ud2VzdCA9PT0gMSkgfHwgKGNvb3JkaW5hdGVzID09PSBnYW1lQm9hcmRTcXJzW2ldLndlc3RCeU5vcnRoICYmIHNoaXBzRGF0YVtqXS5uYW1lID09PSBgTWVkaXVtU2hpcCR7c2hpcENvdW50ZXJ9YCAmJiAoZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0ID09PSAxIHx8IGdhbWVCb2FyZFNxcnNbaV0ud2VzdCA9PT0gMikpIHx8IChjb29yZGluYXRlcyA9PT0gZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0QnlOb3J0aCAmJiBzaGlwc0RhdGFbal0ubmFtZSA9PT0gYExhcmdlU2hpcCR7c2hpcENvdW50ZXJ9YCAmJiAoZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0ID09PSAxIHx8IGdhbWVCb2FyZFNxcnNbaV0ud2VzdCA9PT0gMiB8fCBnYW1lQm9hcmRTcXJzW2ldLndlc3QgPT09IDMgfHwgZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0ID09PSA0KSkpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RBTU4gYnJhaCEnKVxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzaGlwc0RhdGFbal0ubmFtZSA9PT0gYCR7c2hpcE5hbWVTaXplfSR7c2hpcENvdW50ZXJ9YCAmJiBzaGlwc0RhdGFbal0ubmFtZSA9PT0gYFNtYWxsU2hpcCR7c2hpcENvdW50ZXJ9YCAmJiBzaGlwc0RhdGFbal0uc2hpcFBsYWNlZE9uQm9hcmQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaSAtIDEwXS5ub3J0aCA+IDAgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gMTBdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgLy9VSSBjaGFuZ2VzXG4gICAgICAgICAgICAgIGlmIChuYW1lID09PSAnSFVNQU4nKSB7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDF9YCwgYFNTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpIC0gOX1gLCBgU1Mke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyAxfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSAtIDl9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBzaGlwc0RhdGFbal0uc2hpcFBsYWNlZE9uQm9hcmQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDEwXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDEwXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBqID0gMDtcbiAgICAgICAgICAgICAgc2hpcENvdW50ZXI9IDE7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcHNEYXRhW2pdLm5hbWUgPT09IGAke3NoaXBOYW1lU2l6ZX0ke3NoaXBDb3VudGVyfWAgJiYgc2hpcHNEYXRhW2pdLm5hbWUgPT09IGBNZWRpdW1TaGlwJHtzaGlwQ291bnRlcn1gICYmIHNoaXBzRGF0YVtqXS5zaGlwUGxhY2VkT25Cb2FyZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gMTBdLm5vcnRoID4gMCAmJiBnYW1lQm9hcmRTcXJzW2kgLSAxMF0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2kgLSAyMF0ubm9ydGggPiAwICYmIGdhbWVCb2FyZFNxcnNbaSAtIDIwXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIC8vVUkgY2hhbmdlc1xuICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ0hVTUFOJykge1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyAxfWAsIGBNUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSAtIDl9YCwgYE1TJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpIC0gMTl9YCwgYE1TJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgMX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgLSA5fWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSAtIDE5fWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgc2hpcHNEYXRhW2pdLnNoaXBQbGFjZWRPbkJvYXJkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSAxMF0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gMjBdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gMTBdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDIwXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBqID0gMDtcbiAgICAgICAgICAgICAgc2hpcENvdW50ZXIgPSAxO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBzRGF0YVtqXS5uYW1lID09PSBgJHtzaGlwTmFtZVNpemV9JHtzaGlwQ291bnRlcn1gICYmIHNoaXBzRGF0YVtqXS5uYW1lID09PSBgTGFyZ2VTaGlwJHtzaGlwQ291bnRlcn1gICYmIHNoaXBzRGF0YVtqXS5zaGlwUGxhY2VkT25Cb2FyZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gMTBdLm5vcnRoID4gMCAmJiBnYW1lQm9hcmRTcXJzW2kgLSAxMF0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2kgLSAyMF0ubm9ydGggPiAwICYmIGdhbWVCb2FyZFNxcnNbaSAtIDIwXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaSAtIDMwXS5ub3J0aCA+IDAgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gMzBdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gNDBdLm5vcnRoID4gMCAmJiBnYW1lQm9hcmRTcXJzW2kgLSA0MF0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAvL1VJIGNoYW5nZXNcbiAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdIVU1BTicpIHtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgMX1gLCBgTFMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgLSA5fWAsIGBMUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSAtIDE5fWAsIGBMUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSAtIDI5fWAsIGBMUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSAtIDM5fWAsIGBMUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDF9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpIC0gOX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgLSAxOX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgLSAyOX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgLSAzOX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHNoaXBzRGF0YVtqXS5zaGlwUGxhY2VkT25Cb2FyZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gMTBdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDIwXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSAzMF0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gNDBdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gMTBdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDIwXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSAzMF0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gNDBdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGogPSAwO1xuICAgICAgICAgICAgICBzaGlwQ291bnRlciA9IDE7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbk9mUGxhY2VtZW50ID09PSBcInNvdXRoXCIpIHtcblxuICAgICAgICAgICAgLy8gc2FmZWd1YXJkIGFnYWluc3QgaW52YWxpZCBwbGFjZW1lbnQgYW5kIHRvIGluZm9ybSB1c2VyIGFib3V0IGl0XG4gICAgICAgICAgICBpZiAoKGNvb3JkaW5hdGVzID09PSBnYW1lQm9hcmRTcXJzW2ldLndlc3RCeU5vcnRoICYmIHNoaXBzRGF0YVtqXS5uYW1lID09PSBgU21hbGxTaGlwJHtzaGlwQ291bnRlcn1gICYmIGdhbWVCb2FyZFNxcnNbaV0ud2VzdCA9PT0gMTApIHx8IChjb29yZGluYXRlcyA9PT0gZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0QnlOb3J0aCAmJiBzaGlwc0RhdGFbal0ubmFtZSA9PT0gYE1lZGl1bVNoaXAke3NoaXBDb3VudGVyfWAgJiYgKGdhbWVCb2FyZFNxcnNbaV0ud2VzdCA9PT0gMTAgfHwgZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0ID09PSA5KSkgfHwgKGNvb3JkaW5hdGVzID09PSBnYW1lQm9hcmRTcXJzW2ldLndlc3RCeU5vcnRoICYmIHNoaXBzRGF0YVtqXS5uYW1lID09PSBgTGFyZ2VTaGlwJHtzaGlwQ291bnRlcn1gICYmIChnYW1lQm9hcmRTcXJzW2ldLndlc3QgPT09IDEwIHx8IGdhbWVCb2FyZFNxcnNbaV0ud2VzdCA9PT0gOSB8fCBnYW1lQm9hcmRTcXJzW2ldLndlc3QgPT09IDggfHwgZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0ID09PSA3KSkpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RBTU4gYnJhaCEnKVxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzaGlwc0RhdGFbal0ubmFtZSA9PT0gYCR7c2hpcE5hbWVTaXplfSR7c2hpcENvdW50ZXJ9YCAmJiBzaGlwc0RhdGFbal0ubmFtZSA9PT0gYFNtYWxsU2hpcCR7c2hpcENvdW50ZXJ9YCAmJiBzaGlwc0RhdGFbal0uc2hpcFBsYWNlZE9uQm9hcmQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaSArIDEwXS5ub3J0aCA+IDAgJiYgZ2FtZUJvYXJkU3Fyc1tpICsgMTBdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgLy9VSSBjaGFuZ2VzXG4gICAgICAgICAgICAgIGlmIChuYW1lID09PSAnSFVNQU4nKSB7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDF9YCwgYFNTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgMTF9YCwgYFNTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgMX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyAxMX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHNoaXBzRGF0YVtqXS5zaGlwUGxhY2VkT25Cb2FyZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgMTBdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgMTBdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGogPSAwO1xuICAgICAgICAgICAgICBzaGlwQ291bnRlcj0gMTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwc0RhdGFbal0ubmFtZSA9PT0gYCR7c2hpcE5hbWVTaXplfSR7c2hpcENvdW50ZXJ9YCAmJiBzaGlwc0RhdGFbal0ubmFtZSA9PT0gYE1lZGl1bVNoaXAke3NoaXBDb3VudGVyfWAgJiYgc2hpcHNEYXRhW2pdLnNoaXBQbGFjZWRPbkJvYXJkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2kgKyAxMF0ubm9ydGggPiAwICYmIGdhbWVCb2FyZFNxcnNbaSArIDEwXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaSArIDIwXS5ub3J0aCA+IDAgJiYgZ2FtZUJvYXJkU3Fyc1tpICsgMjBdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgLy9VSSBjaGFuZ2VzXG4gICAgICAgICAgICAgIGlmIChuYW1lID09PSAnSFVNQU4nKSB7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDF9YCwgYE1TJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgMTF9YCwgYE1TJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgMjF9YCwgYE1TJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgMX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyAxMX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyAyMX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHNoaXBzRGF0YVtqXS5zaGlwUGxhY2VkT25Cb2FyZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgMTBdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDIwXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDEwXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyAyMF0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICAgIHNoaXBDb3VudGVyID0gMTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwc0RhdGFbal0ubmFtZSA9PT0gYCR7c2hpcE5hbWVTaXplfSR7c2hpcENvdW50ZXJ9YCAmJiBzaGlwc0RhdGFbal0ubmFtZSA9PT0gYExhcmdlU2hpcCR7c2hpcENvdW50ZXJ9YCAmJiBzaGlwc0RhdGFbal0uc2hpcFBsYWNlZE9uQm9hcmQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaSArIDEwXS5ub3J0aCA+IDAgJiYgZ2FtZUJvYXJkU3Fyc1tpICsgMTBdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpICsgMjBdLm5vcnRoID4gMCAmJiBnYW1lQm9hcmRTcXJzW2kgKyAyMF0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2kgKyAzMF0ubm9ydGggPiAwICYmIGdhbWVCb2FyZFNxcnNbaSArIDMwXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaSArIDQwXS5ub3J0aCA+IDAgJiYgZ2FtZUJvYXJkU3Fyc1tpICsgNDBdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgLy9VSSBjaGFuZ2VzXG4gICAgICAgICAgICAgIGlmIChuYW1lID09PSAnSFVNQU4nKSB7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDF9YCwgYExTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgMTF9YCwgYExTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgMjF9YCwgYExTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgMzF9YCwgYExTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgNDF9YCwgYExTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgMX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyAxMX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyAyMX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyAzMX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyA0MX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHNoaXBzRGF0YVtqXS5zaGlwUGxhY2VkT25Cb2FyZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgMTBdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDIwXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyAzMF0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgNDBdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgMTBdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDIwXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyAzMF0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgNDBdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGogPSAwO1xuICAgICAgICAgICAgICBzaGlwQ291bnRlciA9IDE7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbk9mUGxhY2VtZW50ID09PSBcImVhc3RcIikge1xuXG4gICAgICAgICAgICAvLyBzYWZlZ3VhcmQgYWdhaW5zdCBpbnZhbGlkIHBsYWNlbWVudCBhbmQgdG8gaW5mb3JtIHVzZXIgYWJvdXQgaXRcbiAgICAgICAgICAgIGlmICgoY29vcmRpbmF0ZXMgPT09IGdhbWVCb2FyZFNxcnNbaV0ud2VzdEJ5Tm9ydGggJiYgc2hpcHNEYXRhW2pdLm5hbWUgPT09IGBTbWFsbFNoaXAke3NoaXBDb3VudGVyfWAgJiYgZ2FtZUJvYXJkU3Fyc1tpXS5ub3J0aCA9PT0gMTApIHx8IChjb29yZGluYXRlcyA9PT0gZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0QnlOb3J0aCAmJiBzaGlwc0RhdGFbal0ubmFtZSA9PT0gYE1lZGl1bVNoaXAke3NoaXBDb3VudGVyfWAgJiYgKGdhbWVCb2FyZFNxcnNbaV0ubm9ydGggPT09IDEwIHx8IGdhbWVCb2FyZFNxcnNbaV0ubm9ydGggPT09IDkpKSB8fCAoY29vcmRpbmF0ZXMgPT09IGdhbWVCb2FyZFNxcnNbaV0ud2VzdEJ5Tm9ydGggJiYgc2hpcHNEYXRhW2pdLm5hbWUgPT09IGBMYXJnZVNoaXAke3NoaXBDb3VudGVyfWAgJiYgKGdhbWVCb2FyZFNxcnNbaV0ubm9ydGggPT09IDEwIHx8IGdhbWVCb2FyZFNxcnNbaV0ubm9ydGggPT09IDkgfHwgZ2FtZUJvYXJkU3Fyc1tpXS5ub3J0aCA9PT0gOCB8fCBnYW1lQm9hcmRTcXJzW2ldLm5vcnRoID09PSA3KSkpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RBTU4gYnJhaCEnKVxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzaGlwc0RhdGFbal0ubmFtZSA9PT0gYCR7c2hpcE5hbWVTaXplfSR7c2hpcENvdW50ZXJ9YCAmJiBzaGlwc0RhdGFbal0ubmFtZSA9PT0gYFNtYWxsU2hpcCR7c2hpcENvdW50ZXJ9YCAmJiAgc2hpcHNEYXRhW2pdLnNoaXBQbGFjZWRPbkJvYXJkID09PSBmYWxzZSAgJiYgZ2FtZUJvYXJkU3Fyc1tpXS5sYXN0Um93U3F1YXJlICE9PSB0cnVlICYmIGdhbWVCb2FyZFNxcnNbaSArIDFdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgLy9VSSBjaGFuZ2VzXG4gICAgICAgICAgICAgIGlmIChuYW1lID09PSAnSFVNQU4nKSB7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDF9YCwgYFNTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgMn1gLCBgU1Mke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyAxfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDJ9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBzaGlwc0RhdGFbal0uc2hpcFBsYWNlZE9uQm9hcmQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDFdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgMV0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICAgIHNoaXBDb3VudGVyPSAxO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBzRGF0YVtqXS5uYW1lID09PSBgJHtzaGlwTmFtZVNpemV9JHtzaGlwQ291bnRlcn1gICYmIHNoaXBzRGF0YVtqXS5uYW1lID09PSBgTWVkaXVtU2hpcCR7c2hpcENvdW50ZXJ9YCAmJiBzaGlwc0RhdGFbal0uc2hpcFBsYWNlZE9uQm9hcmQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaV0ubGFzdFJvd1NxdWFyZSAhPT0gdHJ1ZSAmJiBnYW1lQm9hcmRTcXJzW2kgKyAxXS5sYXN0Um93U3F1YXJlICE9PSB0cnVlICYmIGdhbWVCb2FyZFNxcnNbaSArIDFdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpICsgMl0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAvL1VJIGNoYW5nZXNcbiAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdIVU1BTicpIHtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgMX1gLCBgTVMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyAyfWAsIGBNUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDN9YCwgYE1TJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgMX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyAyfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDN9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBzaGlwc0RhdGFbal0uc2hpcFBsYWNlZE9uQm9hcmQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDFdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDJdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgMV0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgMl0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICAgIHNoaXBDb3VudGVyID0gMTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwc0RhdGFbal0ubmFtZSA9PT0gYCR7c2hpcE5hbWVTaXplfSR7c2hpcENvdW50ZXJ9YCAmJiBzaGlwc0RhdGFbal0ubmFtZSA9PT0gYExhcmdlU2hpcCR7c2hpcENvdW50ZXJ9YCAmJiBzaGlwc0RhdGFbal0uc2hpcFBsYWNlZE9uQm9hcmQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaV0ubGFzdFJvd1NxdWFyZSAhPT0gdHJ1ZSAmJiBnYW1lQm9hcmRTcXJzW2kgKyAxXS5sYXN0Um93U3F1YXJlICE9PSB0cnVlICYmIGdhbWVCb2FyZFNxcnNbaSArIDJdLmxhc3RSb3dTcXVhcmUgIT09IHRydWUgJiYgZ2FtZUJvYXJkU3Fyc1tpICsgM10ubGFzdFJvd1NxdWFyZSAhPT0gdHJ1ZSAmJiBnYW1lQm9hcmRTcXJzW2kgKyAyXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaSArIDNdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpICsgNF0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ0hVTUFOJykge1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyAxfWAsIGBMUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDJ9YCwgYExTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgM31gLCBgTFMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyA0fWAsIGBMUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDV9YCwgYExTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgMX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyAyfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDN9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgNH1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyA1fWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgc2hpcHNEYXRhW2pdLnNoaXBQbGFjZWRPbkJvYXJkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyAxXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyAyXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyAzXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyA0XS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDFdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDJdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDNdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDRdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGogPSAwO1xuICAgICAgICAgICAgICBzaGlwQ291bnRlciA9IDE7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbk9mUGxhY2VtZW50ID09PSBcIndlc3RcIikge1xuXG4gICAgICAgICAgICAvLyBzYWZlZ3VhcmQgYWdhaW5zdCBpbnZhbGlkIHBsYWNlbWVudCBhbmQgdG8gaW5mb3JtIHVzZXIgYWJvdXQgaXRcbiAgICAgICAgICAgIGlmICgoY29vcmRpbmF0ZXMgPT09IGdhbWVCb2FyZFNxcnNbaV0ud2VzdEJ5Tm9ydGggJiYgc2hpcHNEYXRhW2pdLm5hbWUgPT09IGBTbWFsbFNoaXAke3NoaXBDb3VudGVyfWAgJiYgZ2FtZUJvYXJkU3Fyc1tpXS5ub3J0aCA9PT0gMSkgfHwgKGNvb3JkaW5hdGVzID09PSBnYW1lQm9hcmRTcXJzW2ldLndlc3RCeU5vcnRoICYmIHNoaXBzRGF0YVtqXS5uYW1lID09PSBgTWVkaXVtU2hpcCR7c2hpcENvdW50ZXJ9YCAmJiAoZ2FtZUJvYXJkU3Fyc1tpXS5ub3J0aCA9PT0gMSB8fCBnYW1lQm9hcmRTcXJzW2ldLm5vcnRoID09PSAyKSkgfHwgKGNvb3JkaW5hdGVzID09PSBnYW1lQm9hcmRTcXJzW2ldLndlc3RCeU5vcnRoICYmIHNoaXBzRGF0YVtqXS5uYW1lID09PSBgTGFyZ2VTaGlwJHtzaGlwQ291bnRlcn1gICYmIChnYW1lQm9hcmRTcXJzW2ldLm5vcnRoID09PSAxIHx8IGdhbWVCb2FyZFNxcnNbaV0ubm9ydGggPT09IDIgfHwgZ2FtZUJvYXJkU3Fyc1tpXS5ub3J0aCA9PT0gMyB8fCBnYW1lQm9hcmRTcXJzW2ldLm5vcnRoID09PSA0KSkpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RBTU4gYnJhaCEnKVxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzaGlwc0RhdGFbal0ubmFtZSA9PT0gYCR7c2hpcE5hbWVTaXplfSR7c2hpcENvdW50ZXJ9YCAmJiBzaGlwc0RhdGFbal0ubmFtZSA9PT0gYFNtYWxsU2hpcCR7c2hpcENvdW50ZXJ9YCAmJiBzaGlwc0RhdGFbal0uc2hpcFBsYWNlZE9uQm9hcmQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaSAtIDFdLmxhc3RSb3dTcXVhcmUgIT09IHRydWUgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gMV0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ0hVTUFOJykge1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyAxfWAsIGBTUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aX1gLCBgU1Mke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyAxfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHNoaXBzRGF0YVtqXS5zaGlwUGxhY2VkT25Cb2FyZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gMV0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSAxXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBqID0gMDtcbiAgICAgICAgICAgICAgc2hpcENvdW50ZXI9IDE7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcHNEYXRhW2pdLm5hbWUgPT09IGAke3NoaXBOYW1lU2l6ZX0ke3NoaXBDb3VudGVyfWAgJiYgc2hpcHNEYXRhW2pdLm5hbWUgPT09IGBNZWRpdW1TaGlwJHtzaGlwQ291bnRlcn1gICYmIHNoaXBzRGF0YVtqXS5zaGlwUGxhY2VkT25Cb2FyZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gMV0ubGFzdFJvd1NxdWFyZSAhPT0gdHJ1ZSAmJiBnYW1lQm9hcmRTcXJzW2kgLSAyXS5sYXN0Um93U3F1YXJlICE9PSB0cnVlICYmIGdhbWVCb2FyZFNxcnNbaSAtIDFdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gMl0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ0hVTUFOJykge1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyAxfWAsIGBNUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aX1gLCBgTVMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgLSAxfWAsIGBNUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDF9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSAtIDF9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBzaGlwc0RhdGFbal0uc2hpcFBsYWNlZE9uQm9hcmQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDFdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDJdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gMV0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gMl0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICAgIHNoaXBDb3VudGVyID0gMTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwc0RhdGFbal0ubmFtZSA9PT0gYCR7c2hpcE5hbWVTaXplfSR7c2hpcENvdW50ZXJ9YCAmJiBzaGlwc0RhdGFbal0ubmFtZSA9PT0gYExhcmdlU2hpcCR7c2hpcENvdW50ZXJ9YCAmJiBzaGlwc0RhdGFbal0uc2hpcFBsYWNlZE9uQm9hcmQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaSAtIDFdLmxhc3RSb3dTcXVhcmUgIT09IHRydWUgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gMl0ubGFzdFJvd1NxdWFyZSAhPT0gdHJ1ZSAmJiBnYW1lQm9hcmRTcXJzW2kgLSAzXS5sYXN0Um93U3F1YXJlICE9PSB0cnVlICYmIGdhbWVCb2FyZFNxcnNbaSAtIDRdLmxhc3RSb3dTcXVhcmUgIT09IHRydWUgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gMl0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2kgLSAzXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaSAtIDRdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdIVU1BTicpIHtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgMX1gLCBgTFMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2l9YCwgYExTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpIC0gMX1gLCBgTFMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgLSAyfWAsIGBMUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSAtIDN9YCwgYExTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgMX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2l9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpIC0gMX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgLSAyfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSAtIDN9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBzaGlwc0RhdGFbal0uc2hpcFBsYWNlZE9uQm9hcmQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDFdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDJdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDNdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDRdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gMV0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gMl0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gM10uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gNF0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICAgIHNoaXBDb3VudGVyID0gMTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHNoaXBDb3VudGVyKytcbiAgICAgICAgICAoc2hpcENvdW50ZXIgPiAzKSA/IHNoaXBDb3VudGVyID0gMSA6IG51bGw7XG4gICAgICAgIH07XG4gICAgICB9IDtcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrU3Vua1N0YXR1cyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChzaGlwc0RhdGEuZXZlcnkoZnVuY3Rpb24oc2hpcCkge1xuICAgICAgICByZXR1cm4gc2hpcC5zaGlwTGVuZ3RoID09PSAwXG4gICAgfSkpIHtcbiAgICAgIGlmIChuYW1lID09PSAnSEFMMzAwMCcpIHtcbiAgICAgICAgdWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdwJywgJ3N1bmtTdGF0dXNNZXNzYWdlJywgbnVsbCwgJy5ncmlkRGl2JywgMSk7XG4gICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KCcuc3Vua1N0YXR1c01lc3NhZ2UnLCBgJHtuYW1lfSBpcyBMT1NFUmApXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5rU3RhdHVzTWVzc2FnZScpLnJlbW92ZSgpO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgZ2FtZUxvb3AuYWlQbGF5ZXIudXBkYXRlU2NvcmUoKTtcblxuICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudCgnLnBsYXllclNjb3JlJywgYCR7Z2FtZUxvb3AuYWlQbGF5ZXIuc2NvcmV9YCk7XG4gICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKCcuYWlHcmlkJywgJ3N0eWxlJywgJ3BvaW50ZXItZXZlbnRzOiBub25lJyk7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdIVU1BTicpIHtcbiAgICAgICAgdWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdwJywgJ3N1bmtTdGF0dXNNZXNzYWdlJywgbnVsbCwgJy5ncmlkRGl2JywgMSk7XG4gICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KCcuc3Vua1N0YXR1c01lc3NhZ2UnLCBgJHtuYW1lfSBpcyBMT1NFUmApXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Vua1N0YXR1c01lc3NhZ2UnKS5yZW1vdmUoKTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgIGdhbWVMb29wLmh1bWFuUGxheWVyLnVwZGF0ZVNjb3JlKCk7XG4gICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KCcuYWlTY29yZScsIGAke2dhbWVMb29wLmh1bWFuUGxheWVyLnNjb3JlfWApO1xuICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZSgnLmFpR3JpZCcsICdzdHlsZScsICdwb2ludGVyLWV2ZW50czogbm9uZScpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ0FsbCBzaGlwcyBhcmUgc3VuayEnKVxuICAgICAgLy8gbW/FvmRhIGFsZXJ0IGdkamUgYmlyYcWhIHJlc3RhcnQgaWxpIHF1aXRcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ1NvbWUgc2hpcHMgc3RpbGwgYWZsb2F0IScpXG4gICAgICAvLyBuacWhdGFcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiB7IHNoaXBzRGF0YSwgZ2FtZUJvYXJkU3FycywgZ2VuZXJhdGVTaGlwcywgZ2VuZXJhdGVTcXVhcmVzLCByZWNpZXZlQXR0YWNrLCBjaGVja1N1bmtTdGF0dXMsIHBsYWNlU2hpcE9uU3FyIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVCb2FyZDtcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyR2VuXCJcbmltcG9ydCB1aUVsZW1lbnRzIGZyb20gJy4vdWlFbGVtZW50cyc7XG5cbmNvbnN0IGdhbWVMb29wID0gKCgpID0+IHtcblxuICAvLyBoZXJlIHNob3VsZCBiZSBjb25kaXRpb25hbCB3aGljaCB1cG9uIG5ldyBnYW1lIG9yIHJlc3RhcnQgZ2FtZSBkZWNsYXJlcyBhZ2FpblxuICAvLyB0aGVzZSBzYW1lIHZhcmlhYmxlcyB3aXRoIHNhbWUgYXNzaWdtZW50XG4gIC8vIGFuZCBzZWNvbmQgY2FzZSBzaG91bGQgYmUgY29udGludWFuY2Ugb2YgZ2FtZSB3aXRoIGFkZGluZyBzY29yZXMgdG8gcGxheWVycyBhbmRcbiAgLy8gcmVzZXRpbmcgZ2FtZSBib2FyZHMgZm9yIG5ldyBnYW1lXG5cbiAgbGV0IGh1bWFuUGxheWVyID0gUGxheWVyKCdIVU1BTicpO1xuICBsZXQgYWlQbGF5ZXIgPSBQbGF5ZXIoJ0hBTDMwMDAnKTtcblxuICBjb25zdCBhaVBsYWNlbWVudExvb3AgPSBmdW5jdGlvbigpIHtcbiAgICBkbyB7XG4gICAgICBhaVBsYXllci5nYW1lQm9hcmQucGxhY2VTaGlwT25TcXIoYWlQbGF5ZXIud2VzdEJ5Tm9ydGhBaSgpLCBhaVBsYXllci5kaXJlY3Rpb25PZlBsYWNlbWVudEFpKCksIGFpUGxheWVyLnNoaXBOYW1lQWkoKSk7XG4gICAgfSB3aGlsZSAoYWlQbGF5ZXIuZ2FtZUJvYXJkLnNoaXBzRGF0YS5zb21lKGZ1bmN0aW9uKHNoaXApIHtcbiAgICAgIHJldHVybiBzaGlwLnNoaXBQbGFjZWRPbkJvYXJkID09PSBmYWxzZVxuICAgIH0pKVxuICB9O1xuXG4gIGNvbnN0IHBsYXllclBsYWNlbWVudExvb3AgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoaHVtYW5QbGF5ZXIuZ2FtZUJvYXJkLnNoaXBzRGF0YS5zb21lKGZ1bmN0aW9uKHNoaXApIHtcbiAgICAgIHJldHVybiBzaGlwLnNoaXBQbGFjZWRPbkJvYXJkID09PSBmYWxzZVxuICAgIH0pKSB7XG4gICAgICBkbyB7XG4gICAgICAgIGh1bWFuUGxheWVyLmdhbWVCb2FyZC5wbGFjZVNoaXBPblNxcihodW1hblBsYXllci53ZXN0QnlOb3J0aEFpKCksIGh1bWFuUGxheWVyLmRpcmVjdGlvbk9mUGxhY2VtZW50QWkoKSwgaHVtYW5QbGF5ZXIuc2hpcE5hbWVBaSgpKTtcbiAgICAgIH0gd2hpbGUgKGh1bWFuUGxheWVyLmdhbWVCb2FyZC5zaGlwc0RhdGEuc29tZShmdW5jdGlvbihzaGlwKSB7XG4gICAgICAgIHJldHVybiBzaGlwLnNoaXBQbGFjZWRPbkJvYXJkID09PSBmYWxzZVxuICAgICAgfSkpO1xuICAgIH07XG4gICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoJy5haUdyaWQnLCAnc3R5bGUnLCAncG9pbnRlci1ldmVudHM6IGFsbCcpXG4gIH07XG5cbiAgY29uc3QgdHVybkxvZ2ljID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ0hVTUFOIEdPTk5BIEdJVEggSVQhIFlBSCBNQU4hJylcbiAgICBsZXQgY29vcmRpbmF0ZTtcbiAgICBkbyB7XG4gICAgICBjb29yZGluYXRlID0gaHVtYW5QbGF5ZXIud2VzdEJ5Tm9ydGhBaSgpO1xuICAgIH0gd2hpbGUgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5odW1hbldlc3RCeU5vcnRoJHtjb29yZGluYXRlfWApID09PSBudWxsKTtcbiAgICBsZXQgcGxheWVySGl0U3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmh1bWFuV2VzdEJ5Tm9ydGgke2Nvb3JkaW5hdGV9YCk7XG4gICAgY29uc29sZS5sb2coJ0hBTCBjaG9vc2UgcmFuZG9tIG51bWJlcjogJyArIGNvb3JkaW5hdGUpXG4gICAgY29uc29sZS5sb2coJ0hBTCBpcyB0YXJnZXRpbmc6ICcgKyBwbGF5ZXJIaXRTcXVhcmUpXG4gICAgaHVtYW5QbGF5ZXIuZ2FtZUJvYXJkLnJlY2lldmVBdHRhY2soY29vcmRpbmF0ZSwgcGxheWVySGl0U3F1YXJlKTtcbiAgfVxuICBsZXQgY2xpY2tlZFZhbHVlO1xuICBsZXQgY2xpY2tlZFNxdWFyZTtcbiAgY29uc3QgZ2VuZXJhdGVHYW1lRWxlbWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0QnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbk1lbnVDb250YWluZXInKS5yZW1vdmUoKTtcblxuICAgICAgdWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnc2NvcmVEaXYnLCBudWxsLCAnLmNvbnRlbnQnLCAxKTtcbiAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgncCcsICdwbGF5ZXJTY29yZScsIG51bGwsICcuc2NvcmVEaXYnLCAxKTtcbiAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KCcucGxheWVyU2NvcmUnLCAnMCcpO1xuICAgICAgdWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdwJywgJ2FpU2NvcmUnLCBudWxsLCAnLnNjb3JlRGl2JywgMSk7XG4gICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudCgnLmFpU2NvcmUnLCAnMCcpO1xuXG4gICAgICB1aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdybmRTaGlwUGxhY2VtZW50QnRuJywgbnVsbCwgJy5zY29yZURpdicsIDEpO1xuICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoJy5ybmRTaGlwUGxhY2VtZW50QnRuJywgJ1JORCBTSElQIFBMQUNFTUVOVCcpO1xuICAgICAgdWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdidXR0b24nLCAnbmV3Um91bmRCdG4nLCBudWxsLCAnLnNjb3JlRGl2JywgMSk7XG4gICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudCgnLm5ld1JvdW5kQnRuJywgJ05FVyBST1VORCcpO1xuICAgICAgdWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdidXR0b24nLCAncXVpdEdhbWVCdG4nLCBudWxsLCAnLnNjb3JlRGl2JywgMSk7XG4gICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudCgnLnF1aXRHYW1lQnRuJywgJ1FVSVQgR0FNRScpO1xuXG4gICAgICB1aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdncmlkRGl2JywgbnVsbCwgJy5jb250ZW50JywgMSk7XG4gICAgICB1aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdwbGF5ZXJHcmlkJywgbnVsbCwgJy5ncmlkRGl2JywgMSk7XG4gICAgICB1aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdodW1hblNxdWFyZScsICdodW1hblBsYXllcicsICcucGxheWVyR3JpZCcsIDEwMCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDA7IGkrKykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaHVtYW5TcXVhcmUke2l9YCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoY2xpY2tlZCkgPT4ge1xuICAgICAgICAgIGNsaWNrZWRWYWx1ZSA9IHBhcnNlSW50KGNsaWNrZWQuc3JjRWxlbWVudC5pbm5lclRleHQpO1xuICAgICAgICAgIGNsaWNrZWRTcXVhcmUgPSBjbGlja2VkLm9yaWdpbmFsVGFyZ2V0LmNsYXNzTGlzdFsxXTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGlja2VkU3F1YXJlfWApLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYm9yZGVyOiBzb2xpZCAycHggcmVkJyk7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Rm9ybScpLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogdmlzaWJsZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aX1gLCBgJHtodW1hblBsYXllci5nYW1lQm9hcmQuZ2FtZUJvYXJkU3Fyc1tpIC0gMV0ud2VzdEJ5Tm9ydGh9YCk7XG4gICAgICB9O1xuICAgICAgdWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnYWlHcmlkJywgbnVsbCwgJy5ncmlkRGl2JywgMSk7XG4gICAgICB1aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdhaVNxdWFyZScsICdhaVBsYXllcicsICcuYWlHcmlkJywgMTAwKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwMDsgaSsrKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5haVNxdWFyZSR7aX1gKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChjbGlja2VkKSA9PiB7XG4gICAgICAgICAgY29uc3QgYWlIaXRTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGlja2VkLm9yaWdpbmFsVGFyZ2V0LmNsYXNzTGlzdFsxXX1gKVxuICAgICAgICAgIGFpUGxheWVyLmdhbWVCb2FyZC5yZWNpZXZlQXR0YWNrKHBhcnNlSW50KGNsaWNrZWQuc3JjRWxlbWVudC5pbm5lclRleHQpLCBhaUhpdFNxdWFyZSlcbiAgICAgICAgfSk7XG4gICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuYWlTcXVhcmUke2l9YCwgYCR7YWlQbGF5ZXIuZ2FtZUJvYXJkLmdhbWVCb2FyZFNxcnNbaSAtIDFdLndlc3RCeU5vcnRofWApO1xuICAgICAgfTtcblxuICAgICAgLy8gaGVyZSBiZSBmb3JtIGZvciBzaGlwIHBsYWNlbWVudCwgYnV0IG1heWJlIHB1dCBpbiB0aGUgbWlkZGxlIG9mIHBsYXllciBncmlkXG4gICAgICAvLyBhbGJlaXQgaW52aXNpYmxlIGFuZCBvbmx5IHdoZW4gc3F1YXJlIGlzIGNsaWNrZWQgaXMgbWFkZSB2aXNpYmxlXG4gICAgICAvLyBhbmQgd2hlbiBwbGF5ZXIgY29uZmlybXMgaW5wdXQgaXQgZ29lcyBvdXQgaW52aXNpYmxlIGFnYWluZVxuICAgICAgLy8gc2hvdWxkIGFkZCBubyBwb3NzaWJpbGl0eSB0byBhdHRhY2sgYWkgdW50aWwgYWxsIHNoaXBzIGFyZSBwbGFjZWQgb24gcGxheWVyIGJvb2FyZFxuICAgICAgLy8gc2VlIGhvdyB0byBkaXNhYmxlIGV2ZW50cyBvbiBlbGVtZW50cywgeW91IGFscmVhZHkgZGlkIHRoYXQgaW4gc29tZSBlYXJsaWVyIHByb2plY3RzXG4gICAgICB1aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCAnaW5wdXRGb3JtJywgbnVsbCwgJy5wbGF5ZXJHcmlkJywgMSlcbiAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKCcuaW5wdXRGb3JtJywgJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnLCAnYWN0aW9uJywgJycsIG51bGwsIG51bGwpXG5cbiAgICAgIC8vIHV6bWkgb2QgY2xpY2tlZCB2YWx1ZSB6YSBrb29yaWRpbmF0dSBpIHRvIMSHZcWhIHByb3NsamVkaXRpIHUgcGxhY2VTaGlwT25TcXJcblxuICAgICAgdWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdsYWJlbCcsICdjaG9pY2VUd28nLCBudWxsLCAnLmlucHV0Rm9ybScsIDEpXG4gICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudCgnLmNob2ljZVR3bycsICdEaXJlY3Rpb24gKE4sIFMsIFcsIEUpOicpO1xuICAgICAgdWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdpbnB1dCcsICdpbnB1dE5vcnRoJywgbnVsbCwgJy5pbnB1dEZvcm0nLCAxKVxuICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoJy5pbnB1dE5vcnRoJywgJ3R5cGUnLCAncmFkaW8nLCAndmFsdWUnLCAnbm9ydGgnLCAnbmFtZScsICdjaG9pY2VUd28nLCBudWxsLCBudWxsKVxuICAgICAgdWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdpbnB1dCcsICdpbnB1dFNvdXRoJywgbnVsbCwgJy5pbnB1dEZvcm0nLCAxKVxuICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoJy5pbnB1dFNvdXRoJywgJ3R5cGUnLCAncmFkaW8nLCAndmFsdWUnLCAnc291dGgnLCAnbmFtZScsICdjaG9pY2VUd28nLCBudWxsLCBudWxsKVxuICAgICAgdWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdpbnB1dCcsICdpbnB1dFdlc3QnLCBudWxsLCAnLmlucHV0Rm9ybScsIDEpXG4gICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZSgnLmlucHV0V2VzdCcsICd0eXBlJywgJ3JhZGlvJywgJ3ZhbHVlJywgJ3dlc3QnLCAnbmFtZScsICdjaG9pY2VUd28nLCBudWxsLCBudWxsKVxuICAgICAgdWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdpbnB1dCcsICdpbnB1dEVhc3QnLCBudWxsLCAnLmlucHV0Rm9ybScsIDEpXG4gICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZSgnLmlucHV0RWFzdCcsICd0eXBlJywgJ3JhZGlvJywgJ3ZhbHVlJywgJ2Vhc3QnLCAnbmFtZScsICdjaG9pY2VUd28nLCBudWxsLCBudWxsKVxuXG4gICAgICB1aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgJ2Nob2ljZVRocmVlJywgbnVsbCwgJy5pbnB1dEZvcm0nLCAxKVxuICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoJy5jaG9pY2VUaHJlZScsIGBTaXplIChTbWFsbFNoaXAsIE1lZGl1bVNoaXAsIExhcmdlU2hpcClgKTtcbiAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAnaW5wdXRTUycsIG51bGwsICcuaW5wdXRGb3JtJywgMSlcbiAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKCcuaW5wdXRTUycsICd0eXBlJywgJ3JhZGlvJywgJ3ZhbHVlJywgJ1NtYWxsU2hpcCcsICduYW1lJywgJ2Nob2ljZVRocmVlJywgbnVsbCwgbnVsbClcbiAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAnaW5wdXRNUycsIG51bGwsICcuaW5wdXRGb3JtJywgMSlcbiAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKCcuaW5wdXRNUycsICd0eXBlJywgJ3JhZGlvJywgJ3ZhbHVlJywgJ01lZGl1bVNoaXAnLCAnbmFtZScsICdjaG9pY2VUaHJlZScsIG51bGwsIG51bGwpXG4gICAgICB1aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgJ2lucHV0TFMnLCBudWxsLCAnLmlucHV0Rm9ybScsIDEpXG4gICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZSgnLmlucHV0TFMnLCAndHlwZScsICdyYWRpbycsICd2YWx1ZScsICdMYXJnZVNoaXAnLCAnbmFtZScsICdjaG9pY2VUaHJlZScsIG51bGwsIG51bGwpXG5cbiAgICAgIC8vIGFkZCBzYWZlZ3VhcmQgd2hlbiBhbGwgcGxheWVycyBzaGlwcyBhcmUgcGxhY2VzIG1hbnVhbGx5IG9yIHdpdGggcmFuZG9tIGJ1dHRvbiArK1xuICAgICAgLy8gYWRkIGhpZ2hsaWdoIHdoZW4gc3F1YXJlIGZvciBtYW51YWwgcGxhY2VtZW50IGlzIGNsaWNrZWRcblxuXG4gICAgICB1aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdjb25maXJtSW5wdXRCdG4nLCBudWxsLCAnLmlucHV0Rm9ybScsIDEpO1xuICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoJy5jb25maXJtSW5wdXRCdG4nLCAndHlwZScsICAnYnV0dG9uJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbClcbiAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KCcuY29uZmlybUlucHV0QnRuJywgJ0NvbmZpcm0nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtSW5wdXRCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImNob2ljZVR3b1wiXTpjaGVja2VkJyk7XG4gICAgICAgIGNvbnN0IHNoaXBTaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImNob2ljZVRocmVlXCJdOmNoZWNrZWQnKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRGb3JtJykuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lJylcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xpY2tlZFNxdWFyZX1gKS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JvcmRlcjogc29saWQgMnB4IHJnYigxMTQsIDEyMywgMjApJyk7XG4gICAgICAgIGh1bWFuUGxheWVyLmdhbWVCb2FyZC5wbGFjZVNoaXBPblNxcihjbGlja2VkVmFsdWUsICBkaXJlY3Rpb24udmFsdWUsIHNoaXBTaXplLnZhbHVlKTtcbiAgICAgICAgaWYgKGh1bWFuUGxheWVyLmdhbWVCb2FyZC5zaGlwc0RhdGEuZXZlcnkoZnVuY3Rpb24oc2hpcCkge1xuICAgICAgICAgIC8vIGl0IGRvZXNuJ3Qgd29yayBhcyBpbnRlbmRlZCBpbiBwbGF4ZVNoaXBPblNxciBtZXRob2RcbiAgICAgICAgICByZXR1cm4gc2hpcC5zaGlwUGxhY2VkT25Cb2FyZCA9PT0gdHJ1ZVxuICAgICAgICB9KSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdCcmFoJylcbiAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZSgnLmFpR3JpZCcsICdzdHlsZScsICdwb2ludGVyLWV2ZW50czogYWxsJylcbiAgICAgICAgfVxuICAgICAgICBjbGlja2VkVmFsdWUgPSBudWxsO1xuICAgICAgICBjbGlja2VkU3F1YXJlID0gbnVsbDtcbiAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpdEdhbWVCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlRGl2JykucmVtb3ZlKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkRGl2JykucmVtb3ZlKCk7XG4gICAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ21haW5NZW51Q29udGFpbmVyJywgbnVsbCwgJy5jb250ZW50JywgMSk7XG4gICAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ3N0YXJ0QnRuJywgbnVsbCwgJy5tYWluTWVudUNvbnRhaW5lcicsIDEpO1xuICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudCgnLnN0YXJ0QnRuJywgJ1NUQVJUIEdBTUUnKTtcbiAgICAgICAgaHVtYW5QbGF5ZXIgPSBQbGF5ZXIoJ0hVTUFOJyk7XG4gICAgICAgIGFpUGxheWVyID0gUGxheWVyKCdIQUwzMDAwJyk7XG4gICAgICAgIGdhbWVMb29wLmdlbmVyYXRlR2FtZUVsZW1lbnRzKCk7XG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJuZFNoaXBQbGFjZW1lbnRCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcGxheWVyUGxhY2VtZW50TG9vcCgpXG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1JvdW5kQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwMDsgaSsrKSB7XG4gICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aX1gLCBgJHtodW1hblBsYXllci5nYW1lQm9hcmQuZ2FtZUJvYXJkU3Fyc1tpIC0gMV0ud2VzdEJ5Tm9ydGh9YCk7XG4gICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aX1gLCAnc3R5bGUnLCAnY29sb3I6IHdoaXRlJylcbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTAwOyBpKyspIHtcbiAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmFpU3F1YXJlJHtpfWAsIGAke2FpUGxheWVyLmdhbWVCb2FyZC5nYW1lQm9hcmRTcXJzW2kgLSAxXS53ZXN0QnlOb3J0aH1gKTtcbiAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmFpU3F1YXJlJHtpfWAsICdzdHlsZScsICdjb2xvcjogd2hpdGUnKVxuICAgICAgICB9O1xuICAgICAgICBodW1hblBsYXllci5nZW5lcmF0ZU5ld0dhbWVCb2FyZCgnSFVNQU4nKVxuICAgICAgICBhaVBsYXllci5nZW5lcmF0ZU5ld0dhbWVCb2FyZCgnSEFMMzAwMCcpXG4gICAgICAgIGFpUGxhY2VtZW50TG9vcCgpO1xuICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZSgnLmFpR3JpZCcsICdzdHlsZScsICdwb2ludGVyLWV2ZW50czogbm9uZScpO1xuICAgICAgfSk7XG5cbiAgICAgIGFpUGxhY2VtZW50TG9vcCgpO1xuICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoJy5haUdyaWQnLCAnc3R5bGUnLCAncG9pbnRlci1ldmVudHM6IG5vbmUnKTtcbiAgICB9KTtcbiAgfTtcbiAgXG5cbiAgcmV0dXJuIHsgaHVtYW5QbGF5ZXIsIGFpUGxheWVyLCBhaVBsYWNlbWVudExvb3AsIHBsYXllclBsYWNlbWVudExvb3AsIHR1cm5Mb2dpYywgZ2VuZXJhdGVHYW1lRWxlbWVudHMgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZUxvb3A7XG5cbi8vIEJVVCBuZXh0IGZpcnN0IHRoaW5nIGlzIHRvIHB1dCBpbiBldmVudCBmb3Igc3RhcnQgYnRuIGFpU2hpcCBwbGFjZW1lbnQgKytcbi8vIGFuZCBlbmFibGUgcGxheWVyIG1hbnVhbCBzaGlwIHBsYWNlbWVudCBvbiBpdHMgYm9hcmQgb3IgdmlhIHJuZCBzaGlwIHBsYWNlbWVudCBidG5cbi8vIGFuZCB1bnRpbCBhbGwgc2hpcHMgYXJlIHBsYWNlZCBwbGF5ZXIgY2FudCBhdHRhY2sgYWkgZ3JpZCwgZW5hYmxlZCBvbmx5IGFmdGVyIHBsYWNlbWVudFxuLy8gYW5kLCBvZiBjb3VyY2UsIG1ha2UgaXQgYWxsIHZpc2libGUgdG8gcGxheWVyXG5cbi8vIGFkZCBuZXcgcm91bmQgVUkgZnVuY3Rpb25hbGl0eVxuICAvLyBzaG91bGQgcmVzZXQgcGxheWVyIGFuZCBhaSBncmlkXG4gIC8vIHNob3VsZCBnaXZlIGJsYW5rIGdyaWQgZm9yIHBsYXllciBhbmQgc2V0IGVuZW15IHNoaXBzXG4vLyBhZGQgdmlzaWJsZSBjaGFuZ2VzIG9uIHBsYXllciBhbmQgYWkgZ3JpZCBhdCBlYWNoIHR1cm5cbiAgLy8gc2hvdWxkIHNldCBwbGF5ZXIgc2hpcHMgdmlzaWJsZSBvbiBib2FyZCB3aGlsZSBhaSBzaGlwcyBhcmUgbm90IHZpc2libGUgdW50aWwgaGl0XG4vLyBhZGQgbWVzc2FnZSB0byBwbGF5ZXIgaW5mb3JtaW5nIGFib3V0IChtaXMpaGl0IG9yIGdldHRpbmcgKG1pcyloaXRcbi8vIGFkZCB2aXNpYmxlIHNjb3JlIGNoYW5nZSBpbiByb3VuZCBhbmQgZ2FtZSBpcyBjb250aW51ZWRcbi8vIGFkZCBxdWl0IGdhbWUgd2hlcmUgcGxheWVycyBhcmUgcmVzZXRcbi8vIGFkZCBidXR0b24gZm9yIHJhbmRvbSBzaGlwIHBsYWNlbWVudCBmb3IgcGxheWVyICsrXG4vLyByb3VuZCBlbmQgc2hvdWxkIGRlY2xhcmUgdGhhdCBhbGwgc2hpcCBhcmUgc3VuayBhbmQgbWF5YmUgJ2ZyZWV6ZScgYm9hcmQgZnVuY3Rpb25hbGl0eVxuLy8gYW5kIGF0IHJvdW5kIGVuZCBwbGF5ZXIgc2hvdWxkIGNob29zZSByZXN0YXJ0IHJvdW5kIG9yIHF1aXRcbi8vIHJvdW5kIGVuZCBzaG91bGQgYmUgdHJpZ2dlcmVkIGZyb20gY2hlY2tTaGlwU3Vua1N0YXR1cyBmcm9tIHBsYXllciBnYW1lYm9hcmRcblxuLy8gdmlkaSBrYWtvIHVzdHZhcmkgbW/FvmXFoSBwcmlrYXphdGkgY2xhc3NMaXN0dSB1IGtvbnpvbGlcbiIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9nYW1lYm9hcmRHZW4nXG5pbXBvcnQgZ2FtZUxvb3AgZnJvbSAnLi9tYWluR2FtZUxvb3AnO1xuXG5jb25zdCBQbGF5ZXIgPSAobmFtZSkgPT4ge1xuICBsZXQgc2NvcmUgPSAwO1xuICBsZXQgcGxheWVyTmFtZSA9IG5hbWU7XG4gIFxuICBjb25zdCB1cGRhdGVTY29yZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2NvcmUgKz0gMTtcbiAgICByZXR1cm4gY29uc29sZS5sb2coJ1NDT1JFIFVQREFURSEnICsgdGhpcy5zY29yZSk7XG4gIH1cblxuICBjb25zdCBybmROckFpID0gZnVuY3Rpb24gKHVwcGVyTGltaXQsIGluY2x1c2l2ZU9yTm90KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHVwcGVyTGltaXQpICsgaW5jbHVzaXZlT3JOb3Q7XG4gIH07XG5cbiAgY29uc3Qgd2VzdEJ5Tm9ydGhBaSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBwYXJzZUludChybmROckFpKDEwLCAxKS50b1N0cmluZygpICsgcm5kTnJBaSgxMCwgMSkudG9TdHJpbmcoKSk7XG4gIH07XG4gIGNvbnN0IGRpcmVjdGlvbk9mUGxhY2VtZW50QWkgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgZGlyZWN0aW9uT2ZQbGFjZW1lbnRBcnJheSA9IFsnbm9ydGgnLCAnc291dGgnLCAnZWFzdCcsICd3ZXN0J107XG4gICAgcmV0dXJuIGRpcmVjdGlvbk9mUGxhY2VtZW50QXJyYXlbcm5kTnJBaSg0LCAwKV07XG4gIH07XG4gIGNvbnN0IHNoaXBOYW1lQWkgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgc2hpcE5hbWVBcnJheSA9IFsnU21hbGxTaGlwJywgJ01lZGl1bVNoaXAnLCAnTGFyZ2VTaGlwJ107XG4gICAgcmV0dXJuIHNoaXBOYW1lQXJyYXlbcm5kTnJBaSgzLCAwKV1cbiAgfTtcblxuICBsZXQgZ2FtZUJvYXJkID0gR2FtZUJvYXJkKGAke25hbWV9YCk7XG4gIGNvbnN0IGdlbmVyYXRlTmV3R2FtZUJvYXJkID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5nYW1lQm9hcmQgPSBHYW1lQm9hcmQoYCR7bmFtZX1gKTtcbiAgICAvLyBnYW1lTG9vcC5haVBsYWNlbWVudExvb3AoKTtcbiAgfVxuXG4gIHJldHVybiB7IHBsYXllck5hbWUsIHNjb3JlLCB1cGRhdGVTY29yZSwgd2VzdEJ5Tm9ydGhBaSwgZGlyZWN0aW9uT2ZQbGFjZW1lbnRBaSwgc2hpcE5hbWVBaSwgZ2FtZUJvYXJkLCBnZW5lcmF0ZU5ld0dhbWVCb2FyZCB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJjb25zdCBTaGlwID0gKHNoaXBTaXplTGVuZ3RoLCBzaGlwTnJGb3JOYW1lLCBzaGlwTnIpID0+IHtcbiAgbGV0IG5hbWUgPSBgJHtzaGlwTnJGb3JOYW1lfWA7XG4gIGxldCBzaGlwTGVuZ3RoID0gc2hpcFNpemVMZW5ndGg7XG4gIC8vIGxldCBzaGlwSW5kZXggPSBzaGlwTnIgLSAxO1xuICBsZXQgc2hpcFBsYWNlZE9uQm9hcmQgPSBmYWxzZTtcblxuICBjb25zdCBoaXQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNoaXBMZW5ndGggLT0gMTtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5zaGlwTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IGlzIHN1bmshYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gaXMgQUxJVkUhYCk7XG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4geyBuYW1lLCBzaGlwTGVuZ3RoLCBzaGlwUGxhY2VkT25Cb2FyZCwgaXNTdW5rLCBoaXQgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwOyIsImltcG9ydCBnYW1lTG9vcCBmcm9tICcuL21haW5HYW1lTG9vcCc7XG5cbmNvbnN0IHVpRWxlbWVudHMgPSAoKCkgPT4ge1xuICBjb25zdCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24oZWxlbWVudCwgY2xhc3NOYW1lLCBzcGVjaWFsQ2xhc3NOYW1lLCBxdWVyeVNlbGVjdG9yLCBuck9mRWxlbWVudHMpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuck9mRWxlbWVudHM7IGkrKykge1xuICAgICAgY29uc3QgcVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeVNlbGVjdG9yKTtcbiAgICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgY3JlYXRlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICBjcmVhdGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lICsgaSk7XG4gICAgICBpZiAoc3BlY2lhbENsYXNzTmFtZSAhPT0gbnVsbCAmJiBzcGVjaWFsQ2xhc3NOYW1lID09PSAnaHVtYW5QbGF5ZXInKSB7XG4gICAgICAgIGNyZWF0ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChgaHVtYW5XZXN0QnlOb3J0aCR7Z2FtZUxvb3AuaHVtYW5QbGF5ZXIuZ2FtZUJvYXJkLmdhbWVCb2FyZFNxcnNbaSAtIDFdLndlc3RCeU5vcnRofWApXG4gICAgICB9IGVsc2UgaWYgKHNwZWNpYWxDbGFzc05hbWUgIT09IG51bGwgJiYgc3BlY2lhbENsYXNzTmFtZSA9PT0gJ2FpUGxheWVyJykge1xuICAgICAgICBjcmVhdGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoYGFpV2VzdEJ5Tm9ydGgke2dhbWVMb29wLmFpUGxheWVyLmdhbWVCb2FyZC5nYW1lQm9hcmRTcXJzW2kgLSAxXS53ZXN0QnlOb3J0aH1gKVxuICAgICAgfVxuICAgICAgcVNlbGVjdG9yLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQpO1xuICAgIH07XG4gIH07XG5cbiAgY29uc3QgdGV4dENvbnRlbnRGb3JFbGVtZW50ID0gZnVuY3Rpb24gKHF1ZXJ5U2VsZWN0b3IsIHRleHQpIHtcbiAgICBjb25zdCBxU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5U2VsZWN0b3IpXG4gICAgcVNlbGVjdG9yLnRleHRDb250ZW50ID0gdGV4dDtcbiAgfTtcblxuICBjb25zdCBzZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbihzZWxlY3Rvciwgc2V0QXR0cmlidXRlMSwgYXR0MVZhbHVlLCBzZXRBdHRyaWJ1dGUyLCBhdHQyVmFsdWUsIHNldEF0dHJpYnV0ZTMsIGF0dDNWYWx1ZSApIHtcbiAgICBjb25zdCBxU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBxU2VsZWN0b3Iuc2V0QXR0cmlidXRlKHNldEF0dHJpYnV0ZTEsIGF0dDFWYWx1ZSk7XG4gICAgKHNldEF0dHJpYnV0ZTIgIT09IG51bGwpID8gcVNlbGVjdG9yLnNldEF0dHJpYnV0ZShzZXRBdHRyaWJ1dGUyLCBhdHQyVmFsdWUpIDogbnVsbDtcbiAgICAoc2V0QXR0cmlidXRlMyAhPT0gbnVsbCkgPyBxU2VsZWN0b3Iuc2V0QXR0cmlidXRlKHNldEF0dHJpYnV0ZTMsIGF0dDNWYWx1ZSkgOiBudWxsO1xuICB9O1xuXG4gIHJldHVybiB7IGNyZWF0ZUVsZW1lbnQsIHRleHRDb250ZW50Rm9yRWxlbWVudCwgc2V0QXR0cmlidXRlIH1cbn0pKCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgdWlFbGVtZW50cztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZVYuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZVYuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlVi5jc3MnO1xuaW1wb3J0IGdhbWVMb29wIGZyb20gJy4vbWFpbkdhbWVMb29wJztcbmltcG9ydCB1aUVsZW1lbnRzIGZyb20gJy4vdWlFbGVtZW50cyc7XG5cbndpbmRvdy5nYW1lTG9vcCA9IGdhbWVMb29wXG51aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdtYWluTWVudUNvbnRhaW5lcicsIG51bGwsICcuY29udGVudCcsIDEpO1xudWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdidXR0b24nLCAnc3RhcnRCdG4nLCBudWxsLCAnLm1haW5NZW51Q29udGFpbmVyJywgMSk7XG51aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudCgnLnN0YXJ0QnRuJywgJ1NUQVJUIEdBTUUnKTtcbmdhbWVMb29wLmdlbmVyYXRlR2FtZUVsZW1lbnRzKCk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=