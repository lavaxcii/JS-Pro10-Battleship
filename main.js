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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./seaShipSunset.webp */ "./src/seaShipSunset.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  transition: 0.5s ease;\n  font-size: 1rem;\n  color: black;\n}\n\nbody {\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  height: 100vh;\n  width: 100vw;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), linear-gradient(100deg, #555555, rgb(0, 0, 0));\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: 0% 50%;\n  margin: 0;\n  font-family: 'Ubuntu', sans-serif;\n}\n\nbutton {\n  padding: 2rem;\n  border: solid 5px blueviolet;\n}\n\np {\n  color: rgb(185, 5, 5);\n  text-shadow: 4px 4px 4px rgb(0, 0, 0);\n  font-weight: 700;\n  font-size: 30px;\n  border: outset 5px rgb(120, 68, 169);\n  padding: 1rem;\n  background-color: rgb(20, 67, 20);\n}\n\ndiv {\n  color: white;\n  text-shadow: 2px 2px 3px rgb(1, 0, 0);\n}\n\n.content {\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 1rem;\n}\n\n.mainMenuContainer1 {\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 3rem;\n}\n\n.startBtn, \n.newRoundBtn, \n.quitGameBtn,\n.rndShipPlacementBtn  {\n  color: rgb(185, 5, 5);\n  text-shadow: 4px 4px 4px rgb(0, 0, 0);\n  font-weight: 700;\n  font-size: 30px;\n  background-color: rgb(6, 48, 6);\n  border: outset 8px rgb(120, 68, 169);\n  padding: 1rem;\n}\n\n.confirmInputBtn {\n  color: rgb(185, 5, 5);\n  text-shadow: 4px 4px 4px rgb(0, 0, 0);\n  font-weight: 700;\n  font-size: 15px;\n  background-color: rgb(6, 48, 6);\n  border: outset 8px rgb(120, 68, 169);\n  padding: 0.25rem;\n}\n\n.newRoundBtn, \n.quitGameBtn,\n.rndShipPlacementBtn {\n  font-size: 20px;\n}\n\n.startBtn:hover,\n.newRoundBtn:hover, \n.quitGameBtn:hover,\n.rndShipPlacementBtn:hover,\n.confirmInputBtn:hover {\n  background-color: rgb(11, 78, 11);\n}\n\n.startBtn:active,\n.newRoundBtn:active, \n.quitGameBtn:active,\n.rndShipPlacementBtn:active,\n.confirmInputBtn:active {\n  background-color: rgb(15, 103, 15);\n}\n\n.scoreDiv {\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n\n.gridDiv {\n  padding: 0rem;\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  border: dashed 5px orange;\n  background-image: linear-gradient(90deg, rgb(50, 65, 35), rgb(52, 88, 32));\n}\n\n.sunkStatusMessage {\n  display: flex;\n  position: absolute;\n  justify-content: center;\n  align-items: center;\n  background-image: linear-gradient(90deg, rgb(50, 65, 35), rgb(52, 88, 32));\n}\n\n.playerGrid,\n.aiGrid {\n  border: none;\n  display: grid;\n  justify-content: start;\n  align-items: stretch;\n  align-self: center;  \n  align-content: stretch;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 2px 2px;\n  border: dashed 5px blueviolet;\n  padding: 1rem;\n}\n\n.inputForm {\n  background-image: linear-gradient(90deg, rgb(52, 88, 32), rgb(50, 65, 35));\n  display: flex;\n  position: absolute;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  border: solid 5px rgb(72, 72, 181);\n  width: 26rem;\n}\n\nlabel {\n  font-size: 13px;\n  color: white;\n}\n\n.aiGrid {\n  padding-top: 2.57rem;\n  padding-bottom: 2.57rem;\n  border-left: none;\n  pointer-events: none;\n}\n\n.playerGrid {\n  border-right: none;\n}\n\n.humanSquare {\n  text-align: center;\n  height: 35px;\n  width: 35px;\n  border: solid 2px rgb(114, 123, 20);\n  padding: 0.2rem;\n}\n\n.aiSquare {\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  border: solid 2px rgb(116, 125, 20);\n  padding: 0.2rem;\n}", "",{"version":3,"sources":["webpack://./src/styleV.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,yGAA6F;EAC7F,sBAAsB;EACtB,4BAA4B;EAC5B,4BAA4B;EAC5B,2BAA2B;EAC3B,SAAS;EACT,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,4BAA4B;AAC9B;;AAEA;EACE,qBAAqB;EACrB,qCAAqC;EACrC,gBAAgB;EAChB,eAAe;EACf,oCAAoC;EACpC,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,YAAY;EACZ,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,aAAa;AACf;;AAEA;;;;EAIE,qBAAqB;EACrB,qCAAqC;EACrC,gBAAgB;EAChB,eAAe;EACf,+BAA+B;EAC/B,oCAAoC;EACpC,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,qCAAqC;EACrC,gBAAgB;EAChB,eAAe;EACf,+BAA+B;EAC/B,oCAAoC;EACpC,gBAAgB;AAClB;;AAEA;;;EAGE,eAAe;AACjB;;AAEA;;;;;EAKE,iCAAiC;AACnC;;AAEA;;;;;EAKE,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,yBAAyB;EACzB,0EAA0E;AAC5E;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;EACnB,0EAA0E;AAC5E;;AAEA;;EAEE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,oBAAoB;EACpB,kBAAkB;EAClB,sBAAsB;EACtB,sCAAsC;EACtC,YAAY;EACZ,6BAA6B;EAC7B,aAAa;AACf;;AAEA;EACE,0EAA0E;EAC1E,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;EACvB,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,mCAAmC;EACnC,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,mCAAmC;EACnC,eAAe;AACjB","sourcesContent":["* {\n  transition: 0.5s ease;\n  font-size: 1rem;\n  color: black;\n}\n\nbody {\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  height: 100vh;\n  width: 100vw;\n  background-image: url('./seaShipSunset.webp'), linear-gradient(100deg, #555555, rgb(0, 0, 0));\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: 0% 50%;\n  margin: 0;\n  font-family: 'Ubuntu', sans-serif;\n}\n\nbutton {\n  padding: 2rem;\n  border: solid 5px blueviolet;\n}\n\np {\n  color: rgb(185, 5, 5);\n  text-shadow: 4px 4px 4px rgb(0, 0, 0);\n  font-weight: 700;\n  font-size: 30px;\n  border: outset 5px rgb(120, 68, 169);\n  padding: 1rem;\n  background-color: rgb(20, 67, 20);\n}\n\ndiv {\n  color: white;\n  text-shadow: 2px 2px 3px rgb(1, 0, 0);\n}\n\n.content {\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 1rem;\n}\n\n.mainMenuContainer1 {\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 3rem;\n}\n\n.startBtn, \n.newRoundBtn, \n.quitGameBtn,\n.rndShipPlacementBtn  {\n  color: rgb(185, 5, 5);\n  text-shadow: 4px 4px 4px rgb(0, 0, 0);\n  font-weight: 700;\n  font-size: 30px;\n  background-color: rgb(6, 48, 6);\n  border: outset 8px rgb(120, 68, 169);\n  padding: 1rem;\n}\n\n.confirmInputBtn {\n  color: rgb(185, 5, 5);\n  text-shadow: 4px 4px 4px rgb(0, 0, 0);\n  font-weight: 700;\n  font-size: 15px;\n  background-color: rgb(6, 48, 6);\n  border: outset 8px rgb(120, 68, 169);\n  padding: 0.25rem;\n}\n\n.newRoundBtn, \n.quitGameBtn,\n.rndShipPlacementBtn {\n  font-size: 20px;\n}\n\n.startBtn:hover,\n.newRoundBtn:hover, \n.quitGameBtn:hover,\n.rndShipPlacementBtn:hover,\n.confirmInputBtn:hover {\n  background-color: rgb(11, 78, 11);\n}\n\n.startBtn:active,\n.newRoundBtn:active, \n.quitGameBtn:active,\n.rndShipPlacementBtn:active,\n.confirmInputBtn:active {\n  background-color: rgb(15, 103, 15);\n}\n\n.scoreDiv {\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n\n.gridDiv {\n  padding: 0rem;\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  border: dashed 5px orange;\n  background-image: linear-gradient(90deg, rgb(50, 65, 35), rgb(52, 88, 32));\n}\n\n.sunkStatusMessage {\n  display: flex;\n  position: absolute;\n  justify-content: center;\n  align-items: center;\n  background-image: linear-gradient(90deg, rgb(50, 65, 35), rgb(52, 88, 32));\n}\n\n.playerGrid,\n.aiGrid {\n  border: none;\n  display: grid;\n  justify-content: start;\n  align-items: stretch;\n  align-self: center;  \n  align-content: stretch;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 2px 2px;\n  border: dashed 5px blueviolet;\n  padding: 1rem;\n}\n\n.inputForm {\n  background-image: linear-gradient(90deg, rgb(52, 88, 32), rgb(50, 65, 35));\n  display: flex;\n  position: absolute;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  border: solid 5px rgb(72, 72, 181);\n  width: 26rem;\n}\n\nlabel {\n  font-size: 13px;\n  color: white;\n}\n\n.aiGrid {\n  padding-top: 2.57rem;\n  padding-bottom: 2.57rem;\n  border-left: none;\n  pointer-events: none;\n}\n\n.playerGrid {\n  border-right: none;\n}\n\n.humanSquare {\n  text-align: center;\n  height: 35px;\n  width: 35px;\n  border: solid 2px rgb(114, 123, 20);\n  padding: 0.2rem;\n}\n\n.aiSquare {\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  border: solid 2px rgb(116, 125, 20);\n  padding: 0.2rem;\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
          document.querySelector(`.playerGrid`).setAttribute('style', 'pointer-events: none');
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
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('form', 'inputForm', null, '.gridDiv', 1)
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
        document.querySelector(`.playerGrid`).setAttribute('style', 'pointer-events: all');
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


/***/ }),

/***/ "./src/seaShipSunset.webp":
/*!********************************!*\
  !*** ./src/seaShipSunset.webp ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1754907e962d25ef8d67.webp";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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




// window.gameLoop = gameLoop
_uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].createElement('div', 'mainMenuContainer', null, '.content', 1);
_uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].createElement('button', 'startBtn', null, '.mainMenuContainer', 1);
_uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement('.startBtn', 'START GAME');
_mainGameLoop__WEBPACK_IMPORTED_MODULE_1__["default"].generateGameElements();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDZ0I7QUFDQTs7QUFFdEM7QUFDQSxpRUFBd0I7QUFDeEIsaUVBQXdCO0FBQ3hCLHlFQUFnQztBQUNoQywwRUFBNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm8xMC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlVi5jc3MiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2pzLXBybzEwLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qcy1wcm8xMC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2pzLXBybzEwLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qcy1wcm8xMC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmRHZW4uanMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL3NyYy9tYWluR2FtZUxvb3AuanMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXJHZW4uanMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL3NyYy9zaGlwR2VuLmpzIiwid2VicGFjazovL2pzLXBybzEwLWJhdHRsZXNoaXAvLi9zcmMvdWlFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9qcy1wcm8xMC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlVi5jc3M/MGZjNyIsIndlYnBhY2s6Ly9qcy1wcm8xMC1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzLXBybzEwLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2pzLXBybzEwLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qcy1wcm8xMC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qcy1wcm8xMC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2pzLXBybzEwLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2pzLXBybzEwLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vc2VhU2hpcFN1bnNldC53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIiksIGxpbmVhci1ncmFkaWVudCgxMDBkZWcsICM1NTU1NTUsIHJnYigwLCAwLCAwKSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyOiBzb2xpZCA1cHggYmx1ZXZpb2xldDtcXG59XFxuXFxucCB7XFxuICBjb2xvcjogcmdiKDE4NSwgNSwgNSk7XFxuICB0ZXh0LXNoYWRvdzogNHB4IDRweCA0cHggcmdiKDAsIDAsIDApO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGJvcmRlcjogb3V0c2V0IDVweCByZ2IoMTIwLCA2OCwgMTY5KTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDY3LCAyMCk7XFxufVxcblxcbmRpdiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAzcHggcmdiKDEsIDAsIDApO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ubWFpbk1lbnVDb250YWluZXIxIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDNyZW07XFxufVxcblxcbi5zdGFydEJ0biwgXFxuLm5ld1JvdW5kQnRuLCBcXG4ucXVpdEdhbWVCdG4sXFxuLnJuZFNoaXBQbGFjZW1lbnRCdG4gIHtcXG4gIGNvbG9yOiByZ2IoMTg1LCA1LCA1KTtcXG4gIHRleHQtc2hhZG93OiA0cHggNHB4IDRweCByZ2IoMCwgMCwgMCk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDQ4LCA2KTtcXG4gIGJvcmRlcjogb3V0c2V0IDhweCByZ2IoMTIwLCA2OCwgMTY5KTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5jb25maXJtSW5wdXRCdG4ge1xcbiAgY29sb3I6IHJnYigxODUsIDUsIDUpO1xcbiAgdGV4dC1zaGFkb3c6IDRweCA0cHggNHB4IHJnYigwLCAwLCAwKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgNDgsIDYpO1xcbiAgYm9yZGVyOiBvdXRzZXQgOHB4IHJnYigxMjAsIDY4LCAxNjkpO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG59XFxuXFxuLm5ld1JvdW5kQnRuLCBcXG4ucXVpdEdhbWVCdG4sXFxuLnJuZFNoaXBQbGFjZW1lbnRCdG4ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uc3RhcnRCdG46aG92ZXIsXFxuLm5ld1JvdW5kQnRuOmhvdmVyLCBcXG4ucXVpdEdhbWVCdG46aG92ZXIsXFxuLnJuZFNoaXBQbGFjZW1lbnRCdG46aG92ZXIsXFxuLmNvbmZpcm1JbnB1dEJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEsIDc4LCAxMSk7XFxufVxcblxcbi5zdGFydEJ0bjphY3RpdmUsXFxuLm5ld1JvdW5kQnRuOmFjdGl2ZSwgXFxuLnF1aXRHYW1lQnRuOmFjdGl2ZSxcXG4ucm5kU2hpcFBsYWNlbWVudEJ0bjphY3RpdmUsXFxuLmNvbmZpcm1JbnB1dEJ0bjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxMDMsIDE1KTtcXG59XFxuXFxuLnNjb3JlRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmdyaWREaXYge1xcbiAgcGFkZGluZzogMHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGJvcmRlcjogZGFzaGVkIDVweCBvcmFuZ2U7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYig1MCwgNjUsIDM1KSwgcmdiKDUyLCA4OCwgMzIpKTtcXG59XFxuXFxuLnN1bmtTdGF0dXNNZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYig1MCwgNjUsIDM1KSwgcmdiKDUyLCA4OCwgMzIpKTtcXG59XFxuXFxuLnBsYXllckdyaWQsXFxuLmFpR3JpZCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyOyAgXFxuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBnYXA6IDJweCAycHg7XFxuICBib3JkZXI6IGRhc2hlZCA1cHggYmx1ZXZpb2xldDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5pbnB1dEZvcm0ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoNTIsIDg4LCAzMiksIHJnYig1MCwgNjUsIDM1KSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGJvcmRlcjogc29saWQgNXB4IHJnYig3MiwgNzIsIDE4MSk7XFxuICB3aWR0aDogMjZyZW07XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFpR3JpZCB7XFxuICBwYWRkaW5nLXRvcDogMi41N3JlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAyLjU3cmVtO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnBsYXllckdyaWQge1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbn1cXG5cXG4uaHVtYW5TcXVhcmUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMTE0LCAxMjMsIDIwKTtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG59XFxuXFxuLmFpU3F1YXJlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYm9yZGVyOiBzb2xpZCAycHggcmdiKDExNiwgMTI1LCAyMCk7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZVYuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1oseUdBQTZGO0VBQzdGLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixTQUFTO0VBQ1QsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBOzs7O0VBSUUscUJBQXFCO0VBQ3JCLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLCtCQUErQjtFQUMvQixvQ0FBb0M7RUFDcEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLCtCQUErQjtFQUMvQixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7RUFHRSxlQUFlO0FBQ2pCOztBQUVBOzs7OztFQUtFLGlDQUFpQztBQUNuQzs7QUFFQTs7Ozs7RUFLRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDBFQUEwRTtBQUM1RTs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwwRUFBMEU7QUFDNUU7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMEVBQTBFO0VBQzFFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQ0FBbUM7RUFDbkMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLG1DQUFtQztFQUNuQyxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vc2VhU2hpcFN1bnNldC53ZWJwJyksIGxpbmVhci1ncmFkaWVudCgxMDBkZWcsICM1NTU1NTUsIHJnYigwLCAwLCAwKSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyOiBzb2xpZCA1cHggYmx1ZXZpb2xldDtcXG59XFxuXFxucCB7XFxuICBjb2xvcjogcmdiKDE4NSwgNSwgNSk7XFxuICB0ZXh0LXNoYWRvdzogNHB4IDRweCA0cHggcmdiKDAsIDAsIDApO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGJvcmRlcjogb3V0c2V0IDVweCByZ2IoMTIwLCA2OCwgMTY5KTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDY3LCAyMCk7XFxufVxcblxcbmRpdiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAzcHggcmdiKDEsIDAsIDApO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ubWFpbk1lbnVDb250YWluZXIxIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDNyZW07XFxufVxcblxcbi5zdGFydEJ0biwgXFxuLm5ld1JvdW5kQnRuLCBcXG4ucXVpdEdhbWVCdG4sXFxuLnJuZFNoaXBQbGFjZW1lbnRCdG4gIHtcXG4gIGNvbG9yOiByZ2IoMTg1LCA1LCA1KTtcXG4gIHRleHQtc2hhZG93OiA0cHggNHB4IDRweCByZ2IoMCwgMCwgMCk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDQ4LCA2KTtcXG4gIGJvcmRlcjogb3V0c2V0IDhweCByZ2IoMTIwLCA2OCwgMTY5KTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5jb25maXJtSW5wdXRCdG4ge1xcbiAgY29sb3I6IHJnYigxODUsIDUsIDUpO1xcbiAgdGV4dC1zaGFkb3c6IDRweCA0cHggNHB4IHJnYigwLCAwLCAwKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgNDgsIDYpO1xcbiAgYm9yZGVyOiBvdXRzZXQgOHB4IHJnYigxMjAsIDY4LCAxNjkpO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG59XFxuXFxuLm5ld1JvdW5kQnRuLCBcXG4ucXVpdEdhbWVCdG4sXFxuLnJuZFNoaXBQbGFjZW1lbnRCdG4ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uc3RhcnRCdG46aG92ZXIsXFxuLm5ld1JvdW5kQnRuOmhvdmVyLCBcXG4ucXVpdEdhbWVCdG46aG92ZXIsXFxuLnJuZFNoaXBQbGFjZW1lbnRCdG46aG92ZXIsXFxuLmNvbmZpcm1JbnB1dEJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEsIDc4LCAxMSk7XFxufVxcblxcbi5zdGFydEJ0bjphY3RpdmUsXFxuLm5ld1JvdW5kQnRuOmFjdGl2ZSwgXFxuLnF1aXRHYW1lQnRuOmFjdGl2ZSxcXG4ucm5kU2hpcFBsYWNlbWVudEJ0bjphY3RpdmUsXFxuLmNvbmZpcm1JbnB1dEJ0bjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxMDMsIDE1KTtcXG59XFxuXFxuLnNjb3JlRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmdyaWREaXYge1xcbiAgcGFkZGluZzogMHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGJvcmRlcjogZGFzaGVkIDVweCBvcmFuZ2U7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYig1MCwgNjUsIDM1KSwgcmdiKDUyLCA4OCwgMzIpKTtcXG59XFxuXFxuLnN1bmtTdGF0dXNNZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYig1MCwgNjUsIDM1KSwgcmdiKDUyLCA4OCwgMzIpKTtcXG59XFxuXFxuLnBsYXllckdyaWQsXFxuLmFpR3JpZCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyOyAgXFxuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBnYXA6IDJweCAycHg7XFxuICBib3JkZXI6IGRhc2hlZCA1cHggYmx1ZXZpb2xldDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5pbnB1dEZvcm0ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoNTIsIDg4LCAzMiksIHJnYig1MCwgNjUsIDM1KSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGJvcmRlcjogc29saWQgNXB4IHJnYig3MiwgNzIsIDE4MSk7XFxuICB3aWR0aDogMjZyZW07XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFpR3JpZCB7XFxuICBwYWRkaW5nLXRvcDogMi41N3JlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAyLjU3cmVtO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnBsYXllckdyaWQge1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbn1cXG5cXG4uaHVtYW5TcXVhcmUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMTE0LCAxMjMsIDIwKTtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG59XFxuXFxuLmFpU3F1YXJlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYm9yZGVyOiBzb2xpZCAycHggcmdiKDExNiwgMTI1LCAyMCk7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXBHZW4nO1xuaW1wb3J0IGdhbWVMb29wIGZyb20gJy4vbWFpbkdhbWVMb29wJztcbmltcG9ydCB1aUVsZW1lbnRzIGZyb20gJy4vdWlFbGVtZW50cyc7XG5cbmNvbnN0IEdhbWVCb2FyZCA9IChuYW1lKSA9PiB7XG4gIGxldCBzaGlwc0RhdGEgPSBbXTtcbiAgbGV0IGdhbWVCb2FyZFNxcnMgPSBbXTtcblxuICBjb25zdCBTcXVhcmVzID0gZnVuY3Rpb24od2VzdE5yLCBub3J0aE5yLCBsYXN0U3F1YXJlKSB7XG4gICAgbGV0IHdlc3QgPSB3ZXN0TnI7XG4gICAgbGV0IG5vcnRoID0gbm9ydGhOcjtcbiAgICBsZXQgd2VzdEJ5Tm9ydGggPSBwYXJzZUludChgJHt3ZXN0TnJ9JHtub3J0aE5yfWApO1xuICAgIGxldCBzaGlwQXRMb2NhdGlvbiA9ICcnO1xuICAgIGxldCBsb2NhdGlvbkhpdCA9IGZhbHNlO1xuICAgIGxldCBzaGlwQW5jaG9yZWQgPSBmYWxzZTtcbiAgICBsZXQgbGFzdFJvd1NxdWFyZSA9IGxhc3RTcXVhcmU7XG5cbiAgICByZXR1cm4geyB3ZXN0LCBub3J0aCwgd2VzdEJ5Tm9ydGgsIHNoaXBBdExvY2F0aW9uLCBsb2NhdGlvbkhpdCwgc2hpcEFuY2hvcmVkLCBsYXN0Um93U3F1YXJlIH1cbiAgfTtcblxuICBjb25zdCBnZW5lcmF0ZVNxdWFyZXMgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgd2VzdE51bWJlciA9IDE7XG4gICAgbGV0IGxhc3RSb3dTcXVhcmUgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XG4gICAgICBnYW1lQm9hcmRTcXJzLnB1c2goU3F1YXJlcyh3ZXN0TnVtYmVyLCBpLCBsYXN0Um93U3F1YXJlKSk7XG4gICAgICBsYXN0Um93U3F1YXJlID0gZmFsc2U7XG4gICAgICAoaSA9PT0gOSkgPyBsYXN0Um93U3F1YXJlID0gdHJ1ZSA6IG51bGw7XG4gICAgICBpZiAoaSA+PSAxMCkge1xuICAgICAgICB3ZXN0TnVtYmVyKys7XG4gICAgICAgIGkgPSAwO1xuICAgICAgfTtcbiAgICAgIGlmICh3ZXN0TnVtYmVyID09PSAxMSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbiAgZ2VuZXJhdGVTcXVhcmVzKClcblxuICBjb25zdCBnZW5lcmF0ZVNoaXBzID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHNoaXBOciA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSB7XG4gICAgICBzaGlwTnIgKz0gMTtcbiAgICAgIHNoaXBzRGF0YS5wdXNoKFNoaXAoMiwgYFNtYWxsU2hpcCR7c2hpcE5yLnRvU3RyaW5nKCl9YCwgc2hpcE5yKSk7XG4gICAgfTtcbiAgICAoc2hpcE5yID4gMCkgPyBzaGlwTnIgPSAwIDogbnVsbDtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykge1xuICAgICAgc2hpcE5yICs9IDE7XG4gICAgICBzaGlwc0RhdGEucHVzaChTaGlwKDMsIGBNZWRpdW1TaGlwJHtzaGlwTnIudG9TdHJpbmcoKX1gLCBzaGlwTnIpKTtcbiAgICB9O1xuICAgIChzaGlwTnIgPiAwKSA/IHNoaXBOciA9IDAgOiBudWxsO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTsgaSsrKSB7XG4gICAgICBzaGlwTnIgKz0gMTtcbiAgICAgIHNoaXBzRGF0YS5wdXNoKFNoaXAoNSwgYExhcmdlU2hpcCR7c2hpcE5yLnRvU3RyaW5nKCl9YCwgc2hpcE5yKSk7XG4gICAgfTtcbiAgfTtcbiAgZ2VuZXJhdGVTaGlwcygpXG5cbiAgY29uc3QgcmVjaWV2ZUF0dGFjayA9IGZ1bmN0aW9uKGNvb3JkaW5hdGVzLCB0YXJnZXRMb2NhdGlvbikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZUJvYXJkU3Fycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGdhbWVCb2FyZFNxcnNbaV0ud2VzdEJ5Tm9ydGggPT09IGNvb3JkaW5hdGVzICYmIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEFuY2hvcmVkID09PSB0cnVlICYmIGdhbWVCb2FyZFNxcnNbaV0ubG9jYXRpb25IaXQgPT09IGZhbHNlKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcHNEYXRhLmxlbmd0aDsgaisrKSB7IFxuICAgICAgICAgIGlmIChzaGlwc0RhdGFbal0ubmFtZSA9PT0gZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQXRMb2NhdGlvbiAmJiBnYW1lQm9hcmRTcXJzW2ldLmxvY2F0aW9uSGl0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5sb2NhdGlvbkhpdCA9IHRydWU7XG4gICAgICAgICAgICBzaGlwc0RhdGFbal0uaGl0KCk7XG4gICAgICAgICAgICBzaGlwc0RhdGFbal0uaXNTdW5rKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU0hPVFMgRklSRUQgT04gVVMhIEhJVCBBVCAke2dhbWVCb2FyZFNxcnNbaV0ud2VzdEJ5Tm9ydGh9ICR7bmFtZX0hYCk7XG4gICAgICAgICAgICAobmFtZSA9PT0gJ0hBTDMwMDAnKSA/IGdhbWVMb29wLmFpUGxheWVyLmdhbWVCb2FyZC5jaGVja1N1bmtTdGF0dXMoKSA6IG51bGw7XG4gICAgICAgICAgICAobmFtZSA9PT0gJ0hVTUFOJykgPyBnYW1lTG9vcC5odW1hblBsYXllci5nYW1lQm9hcmQuY2hlY2tTdW5rU3RhdHVzKCkgOiBudWxsO1xuICAgICAgICAgICAgKG5hbWUgPT09ICdIQUwzMDAwJykgPyB0YXJnZXRMb2NhdGlvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2NvbG9yOiByZWQ7IGZvbnQtc2l6ZTogMjBweCcpIDogbnVsbDtcbiAgICAgICAgICAgIChuYW1lID09PSAnSEFMMzAwMCcpID8gdGFyZ2V0TG9jYXRpb24udGV4dENvbnRlbnQgPSAnWCcgOiBudWxsO1xuICAgICAgICAgICAgKG5hbWUgPT09ICdIVU1BTicpID8gdGFyZ2V0TG9jYXRpb24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdjb2xvcjogcmVkOyBmb250LXNpemU6IDI1cHgnKSA6IG51bGw7XG4gICAgICAgICAgICAobmFtZSA9PT0gJ0hVTUFOJykgPyB0YXJnZXRMb2NhdGlvbi50ZXh0Q29udGVudCA9ICdYJyA6IG51bGw7XG4gICAgICAgICAgICAobmFtZSA9PT0gJ0hBTDMwMDAnKSA/IGdhbWVMb29wLnR1cm5Mb2dpYygpIDogbnVsbDtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChnYW1lQm9hcmRTcXJzW2ldLndlc3RCeU5vcnRoID09PSBjb29yZGluYXRlcyAmJiBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpXS5sb2NhdGlvbkhpdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5sb2NhdGlvbkhpdCA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTSE9UUyBGSVJFRCBPTiBVUyEgQU1JU1MgQVQgJHtnYW1lQm9hcmRTcXJzW2ldLndlc3RCeU5vcnRofSAke25hbWV9IWApO1xuICAgICAgICAobmFtZSA9PT0gJ0hBTDMwMDAnKSA/IGdhbWVMb29wLmFpUGxheWVyLmdhbWVCb2FyZC5jaGVja1N1bmtTdGF0dXMoKSA6IG51bGw7XG4gICAgICAgIChuYW1lID09PSAnSFVNQU4nKSA/IGdhbWVMb29wLmh1bWFuUGxheWVyLmdhbWVCb2FyZC5jaGVja1N1bmtTdGF0dXMoKSA6IG51bGw7XG4gICAgICAgIChuYW1lID09PSAnSEFMMzAwMCcpID8gdGFyZ2V0TG9jYXRpb24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdjb2xvcjogcmVkOyBmb250LXNpemU6IDIwcHgnKSA6IG51bGw7XG4gICAgICAgIChuYW1lID09PSAnSFVNQU4nKSA/IHRhcmdldExvY2F0aW9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnY29sb3I6IHJlZDsgZm9udC1zaXplOiAyNXB4JykgOiBudWxsO1xuICAgICAgICAobmFtZSA9PT0gJ0hBTDMwMDAnKSA/IGdhbWVMb29wLnR1cm5Mb2dpYygpIDogbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAoZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0QnlOb3J0aCA9PT0gY29vcmRpbmF0ZXMgJiYgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaV0ubG9jYXRpb25IaXQgPT09IHRydWUpIHtcbiAgICAgICAgKG5hbWUgPT09ICdIVU1BTicpID8gY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKSA6IG51bGw7XG4gICAgICAgIChuYW1lID09PSAnSFVNQU4nKSA/IGNvbnNvbGUubG9nKCdIQUwgaXMgdHJ5aW5nIGFnYWluJykgOiBudWxsO1xuICAgICAgICAobmFtZSA9PT0gJ0hVTUFOJykgPyBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpIDogbnVsbDtcbiAgICAgICAgKG5hbWUgPT09ICdIVU1BTicpID8gZ2FtZUxvb3AudHVybkxvZ2ljKCkgOiBudWxsO1xuICAgICAgfSBlbHNlIGlmIChnYW1lQm9hcmRTcXJzW2ldLndlc3RCeU5vcnRoID09PSBjb29yZGluYXRlcyAmJiBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBbmNob3JlZCA9PT0gdHJ1ZSAmJiBnYW1lQm9hcmRTcXJzW2ldLmxvY2F0aW9uSGl0ID09PSB0cnVlKSB7XG4gICAgICAgIChuYW1lID09PSAnSFVNQU4nKSA/IGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJykgOiBudWxsO1xuICAgICAgICAobmFtZSA9PT0gJ0hVTUFOJykgPyBjb25zb2xlLmxvZygnSEFMIGlzIHRyeWluZyBhZ2FpbicpIDogbnVsbDtcbiAgICAgICAgKG5hbWUgPT09ICdIVU1BTicpID8gY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKSA6IG51bGw7XG4gICAgICAgIChuYW1lID09PSAnSFVNQU4nKSA/IGdhbWVMb29wLnR1cm5Mb2dpYygpIDogbnVsbDtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXBPblNxciA9IGZ1bmN0aW9uIChjb29yZGluYXRlcywgZGlyZWN0aW9uT2ZQbGFjZW1lbnQsIHNoaXBOYW1lU2l6ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZUJvYXJkU3Fycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGdhbWVCb2FyZFNxcnNbaV0ud2VzdEJ5Tm9ydGggPT09IGNvb3JkaW5hdGVzICYmIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSkge1xuICAgICAgICBsZXQgc2hpcENvdW50ZXIgPSAxO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXBzRGF0YS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGlmIChkaXJlY3Rpb25PZlBsYWNlbWVudCA9PT0gXCJub3J0aFwiKSB7XG5cbiAgICAgICAgICAgIC8vIHNhZmVndWFyZCBhZ2FpbnN0IGludmFsaWQgcGxhY2VtZW50IGFuZCB0byBpbmZvcm0gdXNlciBhYm91dCBpdFxuICAgICAgICAgICAgaWYgKChjb29yZGluYXRlcyA9PT0gZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0QnlOb3J0aCAmJiBzaGlwc0RhdGFbal0ubmFtZSA9PT0gYFNtYWxsU2hpcCR7c2hpcENvdW50ZXJ9YCAmJiBnYW1lQm9hcmRTcXJzW2ldLndlc3QgPT09IDEpIHx8IChjb29yZGluYXRlcyA9PT0gZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0QnlOb3J0aCAmJiBzaGlwc0RhdGFbal0ubmFtZSA9PT0gYE1lZGl1bVNoaXAke3NoaXBDb3VudGVyfWAgJiYgKGdhbWVCb2FyZFNxcnNbaV0ud2VzdCA9PT0gMSB8fCBnYW1lQm9hcmRTcXJzW2ldLndlc3QgPT09IDIpKSB8fCAoY29vcmRpbmF0ZXMgPT09IGdhbWVCb2FyZFNxcnNbaV0ud2VzdEJ5Tm9ydGggJiYgc2hpcHNEYXRhW2pdLm5hbWUgPT09IGBMYXJnZVNoaXAke3NoaXBDb3VudGVyfWAgJiYgKGdhbWVCb2FyZFNxcnNbaV0ud2VzdCA9PT0gMSB8fCBnYW1lQm9hcmRTcXJzW2ldLndlc3QgPT09IDIgfHwgZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0ID09PSAzIHx8IGdhbWVCb2FyZFNxcnNbaV0ud2VzdCA9PT0gNCkpKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEQU1OIGJyYWghJylcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2hpcHNEYXRhW2pdLm5hbWUgPT09IGAke3NoaXBOYW1lU2l6ZX0ke3NoaXBDb3VudGVyfWAgJiYgc2hpcHNEYXRhW2pdLm5hbWUgPT09IGBTbWFsbFNoaXAke3NoaXBDb3VudGVyfWAgJiYgc2hpcHNEYXRhW2pdLnNoaXBQbGFjZWRPbkJvYXJkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2kgLSAxMF0ubm9ydGggPiAwICYmIGdhbWVCb2FyZFNxcnNbaSAtIDEwXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIC8vVUkgY2hhbmdlc1xuICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ0hVTUFOJykge1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyAxfWAsIGBTUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSAtIDl9YCwgYFNTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgMX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgLSA5fWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgc2hpcHNEYXRhW2pdLnNoaXBQbGFjZWRPbkJvYXJkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSAxMF0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSAxMF0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICAgIHNoaXBDb3VudGVyPSAxO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBzRGF0YVtqXS5uYW1lID09PSBgJHtzaGlwTmFtZVNpemV9JHtzaGlwQ291bnRlcn1gICYmIHNoaXBzRGF0YVtqXS5uYW1lID09PSBgTWVkaXVtU2hpcCR7c2hpcENvdW50ZXJ9YCAmJiBzaGlwc0RhdGFbal0uc2hpcFBsYWNlZE9uQm9hcmQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaSAtIDEwXS5ub3J0aCA+IDAgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gMTBdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gMjBdLm5vcnRoID4gMCAmJiBnYW1lQm9hcmRTcXJzW2kgLSAyMF0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAvL1VJIGNoYW5nZXNcbiAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdIVU1BTicpIHtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgMX1gLCBgTVMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgLSA5fWAsIGBNUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSAtIDE5fWAsIGBNUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDF9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpIC0gOX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgLSAxOX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHNoaXBzRGF0YVtqXS5zaGlwUGxhY2VkT25Cb2FyZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gMTBdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDIwXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDEwXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSAyMF0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICAgIHNoaXBDb3VudGVyID0gMTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwc0RhdGFbal0ubmFtZSA9PT0gYCR7c2hpcE5hbWVTaXplfSR7c2hpcENvdW50ZXJ9YCAmJiBzaGlwc0RhdGFbal0ubmFtZSA9PT0gYExhcmdlU2hpcCR7c2hpcENvdW50ZXJ9YCAmJiBzaGlwc0RhdGFbal0uc2hpcFBsYWNlZE9uQm9hcmQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaSAtIDEwXS5ub3J0aCA+IDAgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gMTBdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gMjBdLm5vcnRoID4gMCAmJiBnYW1lQm9hcmRTcXJzW2kgLSAyMF0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2kgLSAzMF0ubm9ydGggPiAwICYmIGdhbWVCb2FyZFNxcnNbaSAtIDMwXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaSAtIDQwXS5ub3J0aCA+IDAgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gNDBdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgLy9VSSBjaGFuZ2VzXG4gICAgICAgICAgICAgIGlmIChuYW1lID09PSAnSFVNQU4nKSB7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDF9YCwgYExTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpIC0gOX1gLCBgTFMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgLSAxOX1gLCBgTFMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgLSAyOX1gLCBgTFMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgLSAzOX1gLCBgTFMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyAxfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSAtIDl9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpIC0gMTl9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpIC0gMjl9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpIC0gMzl9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBzaGlwc0RhdGFbal0uc2hpcFBsYWNlZE9uQm9hcmQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDEwXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSAyMF0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gMzBdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDQwXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDEwXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSAyMF0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gMzBdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDQwXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBqID0gMDtcbiAgICAgICAgICAgICAgc2hpcENvdW50ZXIgPSAxO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb25PZlBsYWNlbWVudCA9PT0gXCJzb3V0aFwiKSB7XG5cbiAgICAgICAgICAgIC8vIHNhZmVndWFyZCBhZ2FpbnN0IGludmFsaWQgcGxhY2VtZW50IGFuZCB0byBpbmZvcm0gdXNlciBhYm91dCBpdFxuICAgICAgICAgICAgaWYgKChjb29yZGluYXRlcyA9PT0gZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0QnlOb3J0aCAmJiBzaGlwc0RhdGFbal0ubmFtZSA9PT0gYFNtYWxsU2hpcCR7c2hpcENvdW50ZXJ9YCAmJiBnYW1lQm9hcmRTcXJzW2ldLndlc3QgPT09IDEwKSB8fCAoY29vcmRpbmF0ZXMgPT09IGdhbWVCb2FyZFNxcnNbaV0ud2VzdEJ5Tm9ydGggJiYgc2hpcHNEYXRhW2pdLm5hbWUgPT09IGBNZWRpdW1TaGlwJHtzaGlwQ291bnRlcn1gICYmIChnYW1lQm9hcmRTcXJzW2ldLndlc3QgPT09IDEwIHx8IGdhbWVCb2FyZFNxcnNbaV0ud2VzdCA9PT0gOSkpIHx8IChjb29yZGluYXRlcyA9PT0gZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0QnlOb3J0aCAmJiBzaGlwc0RhdGFbal0ubmFtZSA9PT0gYExhcmdlU2hpcCR7c2hpcENvdW50ZXJ9YCAmJiAoZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0ID09PSAxMCB8fCBnYW1lQm9hcmRTcXJzW2ldLndlc3QgPT09IDkgfHwgZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0ID09PSA4IHx8IGdhbWVCb2FyZFNxcnNbaV0ud2VzdCA9PT0gNykpKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEQU1OIGJyYWghJylcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2hpcHNEYXRhW2pdLm5hbWUgPT09IGAke3NoaXBOYW1lU2l6ZX0ke3NoaXBDb3VudGVyfWAgJiYgc2hpcHNEYXRhW2pdLm5hbWUgPT09IGBTbWFsbFNoaXAke3NoaXBDb3VudGVyfWAgJiYgc2hpcHNEYXRhW2pdLnNoaXBQbGFjZWRPbkJvYXJkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2kgKyAxMF0ubm9ydGggPiAwICYmIGdhbWVCb2FyZFNxcnNbaSArIDEwXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIC8vVUkgY2hhbmdlc1xuICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ0hVTUFOJykge1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyAxfWAsIGBTUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDExfWAsIGBTUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDF9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgMTF9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBzaGlwc0RhdGFbal0uc2hpcFBsYWNlZE9uQm9hcmQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDEwXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDEwXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBqID0gMDtcbiAgICAgICAgICAgICAgc2hpcENvdW50ZXI9IDE7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcHNEYXRhW2pdLm5hbWUgPT09IGAke3NoaXBOYW1lU2l6ZX0ke3NoaXBDb3VudGVyfWAgJiYgc2hpcHNEYXRhW2pdLm5hbWUgPT09IGBNZWRpdW1TaGlwJHtzaGlwQ291bnRlcn1gICYmIHNoaXBzRGF0YVtqXS5zaGlwUGxhY2VkT25Cb2FyZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpICsgMTBdLm5vcnRoID4gMCAmJiBnYW1lQm9hcmRTcXJzW2kgKyAxMF0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2kgKyAyMF0ubm9ydGggPiAwICYmIGdhbWVCb2FyZFNxcnNbaSArIDIwXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIC8vVUkgY2hhbmdlc1xuICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ0hVTUFOJykge1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyAxfWAsIGBNUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDExfWAsIGBNUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDIxfWAsIGBNUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDF9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgMTF9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgMjF9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBzaGlwc0RhdGFbal0uc2hpcFBsYWNlZE9uQm9hcmQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDEwXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyAyMF0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyAxMF0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgMjBdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGogPSAwO1xuICAgICAgICAgICAgICBzaGlwQ291bnRlciA9IDE7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcHNEYXRhW2pdLm5hbWUgPT09IGAke3NoaXBOYW1lU2l6ZX0ke3NoaXBDb3VudGVyfWAgJiYgc2hpcHNEYXRhW2pdLm5hbWUgPT09IGBMYXJnZVNoaXAke3NoaXBDb3VudGVyfWAgJiYgc2hpcHNEYXRhW2pdLnNoaXBQbGFjZWRPbkJvYXJkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2kgKyAxMF0ubm9ydGggPiAwICYmIGdhbWVCb2FyZFNxcnNbaSArIDEwXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaSArIDIwXS5ub3J0aCA+IDAgJiYgZ2FtZUJvYXJkU3Fyc1tpICsgMjBdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpICsgMzBdLm5vcnRoID4gMCAmJiBnYW1lQm9hcmRTcXJzW2kgKyAzMF0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2kgKyA0MF0ubm9ydGggPiAwICYmIGdhbWVCb2FyZFNxcnNbaSArIDQwXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIC8vVUkgY2hhbmdlc1xuICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ0hVTUFOJykge1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyAxfWAsIGBMUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDExfWAsIGBMUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDIxfWAsIGBMUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDMxfWAsIGBMUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDQxfWAsIGBMUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDF9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgMTF9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgMjF9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgMzF9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgNDF9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBzaGlwc0RhdGFbal0uc2hpcFBsYWNlZE9uQm9hcmQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDEwXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyAyMF0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgMzBdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDQwXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDEwXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyAyMF0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgMzBdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDQwXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBqID0gMDtcbiAgICAgICAgICAgICAgc2hpcENvdW50ZXIgPSAxO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb25PZlBsYWNlbWVudCA9PT0gXCJlYXN0XCIpIHtcblxuICAgICAgICAgICAgLy8gc2FmZWd1YXJkIGFnYWluc3QgaW52YWxpZCBwbGFjZW1lbnQgYW5kIHRvIGluZm9ybSB1c2VyIGFib3V0IGl0XG4gICAgICAgICAgICBpZiAoKGNvb3JkaW5hdGVzID09PSBnYW1lQm9hcmRTcXJzW2ldLndlc3RCeU5vcnRoICYmIHNoaXBzRGF0YVtqXS5uYW1lID09PSBgU21hbGxTaGlwJHtzaGlwQ291bnRlcn1gICYmIGdhbWVCb2FyZFNxcnNbaV0ubm9ydGggPT09IDEwKSB8fCAoY29vcmRpbmF0ZXMgPT09IGdhbWVCb2FyZFNxcnNbaV0ud2VzdEJ5Tm9ydGggJiYgc2hpcHNEYXRhW2pdLm5hbWUgPT09IGBNZWRpdW1TaGlwJHtzaGlwQ291bnRlcn1gICYmIChnYW1lQm9hcmRTcXJzW2ldLm5vcnRoID09PSAxMCB8fCBnYW1lQm9hcmRTcXJzW2ldLm5vcnRoID09PSA5KSkgfHwgKGNvb3JkaW5hdGVzID09PSBnYW1lQm9hcmRTcXJzW2ldLndlc3RCeU5vcnRoICYmIHNoaXBzRGF0YVtqXS5uYW1lID09PSBgTGFyZ2VTaGlwJHtzaGlwQ291bnRlcn1gICYmIChnYW1lQm9hcmRTcXJzW2ldLm5vcnRoID09PSAxMCB8fCBnYW1lQm9hcmRTcXJzW2ldLm5vcnRoID09PSA5IHx8IGdhbWVCb2FyZFNxcnNbaV0ubm9ydGggPT09IDggfHwgZ2FtZUJvYXJkU3Fyc1tpXS5ub3J0aCA9PT0gNykpKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEQU1OIGJyYWghJylcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2hpcHNEYXRhW2pdLm5hbWUgPT09IGAke3NoaXBOYW1lU2l6ZX0ke3NoaXBDb3VudGVyfWAgJiYgc2hpcHNEYXRhW2pdLm5hbWUgPT09IGBTbWFsbFNoaXAke3NoaXBDb3VudGVyfWAgJiYgIHNoaXBzRGF0YVtqXS5zaGlwUGxhY2VkT25Cb2FyZCA9PT0gZmFsc2UgICYmIGdhbWVCb2FyZFNxcnNbaV0ubGFzdFJvd1NxdWFyZSAhPT0gdHJ1ZSAmJiBnYW1lQm9hcmRTcXJzW2kgKyAxXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIC8vVUkgY2hhbmdlc1xuICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ0hVTUFOJykge1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyAxfWAsIGBTUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDJ9YCwgYFNTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgMX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyAyfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgc2hpcHNEYXRhW2pdLnNoaXBQbGFjZWRPbkJvYXJkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyAxXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDFdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGogPSAwO1xuICAgICAgICAgICAgICBzaGlwQ291bnRlcj0gMTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwc0RhdGFbal0ubmFtZSA9PT0gYCR7c2hpcE5hbWVTaXplfSR7c2hpcENvdW50ZXJ9YCAmJiBzaGlwc0RhdGFbal0ubmFtZSA9PT0gYE1lZGl1bVNoaXAke3NoaXBDb3VudGVyfWAgJiYgc2hpcHNEYXRhW2pdLnNoaXBQbGFjZWRPbkJvYXJkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2ldLmxhc3RSb3dTcXVhcmUgIT09IHRydWUgJiYgZ2FtZUJvYXJkU3Fyc1tpICsgMV0ubGFzdFJvd1NxdWFyZSAhPT0gdHJ1ZSAmJiBnYW1lQm9hcmRTcXJzW2kgKyAxXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaSArIDJdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgLy9VSSBjaGFuZ2VzXG4gICAgICAgICAgICAgIGlmIChuYW1lID09PSAnSFVNQU4nKSB7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDF9YCwgYE1TJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgMn1gLCBgTVMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyAzfWAsIGBNUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDF9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgMn1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyAzfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgc2hpcHNEYXRhW2pdLnNoaXBQbGFjZWRPbkJvYXJkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyAxXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyAyXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDFdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDJdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGogPSAwO1xuICAgICAgICAgICAgICBzaGlwQ291bnRlciA9IDE7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcHNEYXRhW2pdLm5hbWUgPT09IGAke3NoaXBOYW1lU2l6ZX0ke3NoaXBDb3VudGVyfWAgJiYgc2hpcHNEYXRhW2pdLm5hbWUgPT09IGBMYXJnZVNoaXAke3NoaXBDb3VudGVyfWAgJiYgc2hpcHNEYXRhW2pdLnNoaXBQbGFjZWRPbkJvYXJkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2ldLmxhc3RSb3dTcXVhcmUgIT09IHRydWUgJiYgZ2FtZUJvYXJkU3Fyc1tpICsgMV0ubGFzdFJvd1NxdWFyZSAhPT0gdHJ1ZSAmJiBnYW1lQm9hcmRTcXJzW2kgKyAyXS5sYXN0Um93U3F1YXJlICE9PSB0cnVlICYmIGdhbWVCb2FyZFNxcnNbaSArIDNdLmxhc3RSb3dTcXVhcmUgIT09IHRydWUgJiYgZ2FtZUJvYXJkU3Fyc1tpICsgMl0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2kgKyAzXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaSArIDRdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdIVU1BTicpIHtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgMX1gLCBgTFMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyAyfWAsIGBMUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDN9YCwgYExTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgNH1gLCBgTFMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyA1fWAsIGBMUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDF9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgMn1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyAzfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDR9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgNX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHNoaXBzRGF0YVtqXS5zaGlwUGxhY2VkT25Cb2FyZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgMV0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgMl0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgM10uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgNF0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyAxXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyAyXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyAzXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyA0XS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBqID0gMDtcbiAgICAgICAgICAgICAgc2hpcENvdW50ZXIgPSAxO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb25PZlBsYWNlbWVudCA9PT0gXCJ3ZXN0XCIpIHtcblxuICAgICAgICAgICAgLy8gc2FmZWd1YXJkIGFnYWluc3QgaW52YWxpZCBwbGFjZW1lbnQgYW5kIHRvIGluZm9ybSB1c2VyIGFib3V0IGl0XG4gICAgICAgICAgICBpZiAoKGNvb3JkaW5hdGVzID09PSBnYW1lQm9hcmRTcXJzW2ldLndlc3RCeU5vcnRoICYmIHNoaXBzRGF0YVtqXS5uYW1lID09PSBgU21hbGxTaGlwJHtzaGlwQ291bnRlcn1gICYmIGdhbWVCb2FyZFNxcnNbaV0ubm9ydGggPT09IDEpIHx8IChjb29yZGluYXRlcyA9PT0gZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0QnlOb3J0aCAmJiBzaGlwc0RhdGFbal0ubmFtZSA9PT0gYE1lZGl1bVNoaXAke3NoaXBDb3VudGVyfWAgJiYgKGdhbWVCb2FyZFNxcnNbaV0ubm9ydGggPT09IDEgfHwgZ2FtZUJvYXJkU3Fyc1tpXS5ub3J0aCA9PT0gMikpIHx8IChjb29yZGluYXRlcyA9PT0gZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0QnlOb3J0aCAmJiBzaGlwc0RhdGFbal0ubmFtZSA9PT0gYExhcmdlU2hpcCR7c2hpcENvdW50ZXJ9YCAmJiAoZ2FtZUJvYXJkU3Fyc1tpXS5ub3J0aCA9PT0gMSB8fCBnYW1lQm9hcmRTcXJzW2ldLm5vcnRoID09PSAyIHx8IGdhbWVCb2FyZFNxcnNbaV0ubm9ydGggPT09IDMgfHwgZ2FtZUJvYXJkU3Fyc1tpXS5ub3J0aCA9PT0gNCkpKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEQU1OIGJyYWghJylcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2hpcHNEYXRhW2pdLm5hbWUgPT09IGAke3NoaXBOYW1lU2l6ZX0ke3NoaXBDb3VudGVyfWAgJiYgc2hpcHNEYXRhW2pdLm5hbWUgPT09IGBTbWFsbFNoaXAke3NoaXBDb3VudGVyfWAgJiYgc2hpcHNEYXRhW2pdLnNoaXBQbGFjZWRPbkJvYXJkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2kgLSAxXS5sYXN0Um93U3F1YXJlICE9PSB0cnVlICYmIGdhbWVCb2FyZFNxcnNbaSAtIDFdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdIVU1BTicpIHtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgMX1gLCBgU1Mke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2l9YCwgYFNTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgMX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2l9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBzaGlwc0RhdGFbal0uc2hpcFBsYWNlZE9uQm9hcmQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDFdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gMV0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICAgIHNoaXBDb3VudGVyPSAxO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBzRGF0YVtqXS5uYW1lID09PSBgJHtzaGlwTmFtZVNpemV9JHtzaGlwQ291bnRlcn1gICYmIHNoaXBzRGF0YVtqXS5uYW1lID09PSBgTWVkaXVtU2hpcCR7c2hpcENvdW50ZXJ9YCAmJiBzaGlwc0RhdGFbal0uc2hpcFBsYWNlZE9uQm9hcmQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaSAtIDFdLmxhc3RSb3dTcXVhcmUgIT09IHRydWUgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gMl0ubGFzdFJvd1NxdWFyZSAhPT0gdHJ1ZSAmJiBnYW1lQm9hcmRTcXJzW2kgLSAxXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaSAtIDJdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdIVU1BTicpIHtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgMX1gLCBgTVMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2l9YCwgYE1TJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpIC0gMX1gLCBgTVMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyAxfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgLSAxfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgc2hpcHNEYXRhW2pdLnNoaXBQbGFjZWRPbkJvYXJkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSAxXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSAyXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDFdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDJdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGogPSAwO1xuICAgICAgICAgICAgICBzaGlwQ291bnRlciA9IDE7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcHNEYXRhW2pdLm5hbWUgPT09IGAke3NoaXBOYW1lU2l6ZX0ke3NoaXBDb3VudGVyfWAgJiYgc2hpcHNEYXRhW2pdLm5hbWUgPT09IGBMYXJnZVNoaXAke3NoaXBDb3VudGVyfWAgJiYgc2hpcHNEYXRhW2pdLnNoaXBQbGFjZWRPbkJvYXJkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2kgLSAxXS5sYXN0Um93U3F1YXJlICE9PSB0cnVlICYmIGdhbWVCb2FyZFNxcnNbaSAtIDJdLmxhc3RSb3dTcXVhcmUgIT09IHRydWUgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gM10ubGFzdFJvd1NxdWFyZSAhPT0gdHJ1ZSAmJiBnYW1lQm9hcmRTcXJzW2kgLSA0XS5sYXN0Um93U3F1YXJlICE9PSB0cnVlICYmIGdhbWVCb2FyZFNxcnNbaSAtIDJdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gM10uc2hpcEFuY2hvcmVkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2kgLSA0XS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIGlmIChuYW1lID09PSAnSFVNQU4nKSB7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDF9YCwgYExTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpfWAsIGBMUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSAtIDF9YCwgYExTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpIC0gMn1gLCBgTFMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgLSAzfWAsIGBMUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDF9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSAtIDF9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpIC0gMn1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgLSAzfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgc2hpcHNEYXRhW2pdLnNoaXBQbGFjZWRPbkJvYXJkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSAxXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSAyXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSAzXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSA0XS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDFdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDJdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDNdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDRdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGogPSAwO1xuICAgICAgICAgICAgICBzaGlwQ291bnRlciA9IDE7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfTtcbiAgICAgICAgICBzaGlwQ291bnRlcisrXG4gICAgICAgICAgKHNoaXBDb3VudGVyID4gMykgPyBzaGlwQ291bnRlciA9IDEgOiBudWxsO1xuICAgICAgICB9O1xuICAgICAgfSA7XG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBjaGVja1N1bmtTdGF0dXMgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoc2hpcHNEYXRhLmV2ZXJ5KGZ1bmN0aW9uKHNoaXApIHtcbiAgICAgICAgcmV0dXJuIHNoaXAuc2hpcExlbmd0aCA9PT0gMFxuICAgIH0pKSB7XG4gICAgICBpZiAobmFtZSA9PT0gJ0hBTDMwMDAnKSB7XG4gICAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgncCcsICdzdW5rU3RhdHVzTWVzc2FnZScsIG51bGwsICcuZ3JpZERpdicsIDEpO1xuICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudCgnLnN1bmtTdGF0dXNNZXNzYWdlJywgYCR7bmFtZX0gaXMgTE9TRVJgKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Vua1N0YXR1c01lc3NhZ2UnKS5yZW1vdmUoKTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgIGdhbWVMb29wLmFpUGxheWVyLnVwZGF0ZVNjb3JlKCk7XG5cbiAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoJy5wbGF5ZXJTY29yZScsIGAke2dhbWVMb29wLmFpUGxheWVyLnNjb3JlfWApO1xuICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZSgnLmFpR3JpZCcsICdzdHlsZScsICdwb2ludGVyLWV2ZW50czogbm9uZScpO1xuICAgICAgfSBlbHNlIGlmIChuYW1lID09PSAnSFVNQU4nKSB7XG4gICAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgncCcsICdzdW5rU3RhdHVzTWVzc2FnZScsIG51bGwsICcuZ3JpZERpdicsIDEpO1xuICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudCgnLnN1bmtTdGF0dXNNZXNzYWdlJywgYCR7bmFtZX0gaXMgTE9TRVJgKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bmtTdGF0dXNNZXNzYWdlJykucmVtb3ZlKCk7XG4gICAgICAgIH0sIDMwMDApO1xuICAgICAgICBnYW1lTG9vcC5odW1hblBsYXllci51cGRhdGVTY29yZSgpO1xuICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudCgnLmFpU2NvcmUnLCBgJHtnYW1lTG9vcC5odW1hblBsYXllci5zY29yZX1gKTtcbiAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoJy5haUdyaWQnLCAnc3R5bGUnLCAncG9pbnRlci1ldmVudHM6IG5vbmUnKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdBbGwgc2hpcHMgYXJlIHN1bmshJylcbiAgICAgIC8vIG1vxb5kYSBhbGVydCBnZGplIGJpcmHFoSByZXN0YXJ0IGlsaSBxdWl0XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTb21lIHNoaXBzIHN0aWxsIGFmbG9hdCEnKVxuICAgICAgLy8gbmnFoXRhXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4geyBzaGlwc0RhdGEsIGdhbWVCb2FyZFNxcnMsIGdlbmVyYXRlU2hpcHMsIGdlbmVyYXRlU3F1YXJlcywgcmVjaWV2ZUF0dGFjaywgY2hlY2tTdW5rU3RhdHVzLCBwbGFjZVNoaXBPblNxciB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lQm9hcmQ7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllckdlblwiXG5pbXBvcnQgdWlFbGVtZW50cyBmcm9tICcuL3VpRWxlbWVudHMnO1xuXG5jb25zdCBnYW1lTG9vcCA9ICgoKSA9PiB7XG5cbiAgLy8gaGVyZSBzaG91bGQgYmUgY29uZGl0aW9uYWwgd2hpY2ggdXBvbiBuZXcgZ2FtZSBvciByZXN0YXJ0IGdhbWUgZGVjbGFyZXMgYWdhaW5cbiAgLy8gdGhlc2Ugc2FtZSB2YXJpYWJsZXMgd2l0aCBzYW1lIGFzc2lnbWVudFxuICAvLyBhbmQgc2Vjb25kIGNhc2Ugc2hvdWxkIGJlIGNvbnRpbnVhbmNlIG9mIGdhbWUgd2l0aCBhZGRpbmcgc2NvcmVzIHRvIHBsYXllcnMgYW5kXG4gIC8vIHJlc2V0aW5nIGdhbWUgYm9hcmRzIGZvciBuZXcgZ2FtZVxuXG4gIGxldCBodW1hblBsYXllciA9IFBsYXllcignSFVNQU4nKTtcbiAgbGV0IGFpUGxheWVyID0gUGxheWVyKCdIQUwzMDAwJyk7XG5cbiAgY29uc3QgYWlQbGFjZW1lbnRMb29wID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgYWlQbGF5ZXIuZ2FtZUJvYXJkLnBsYWNlU2hpcE9uU3FyKGFpUGxheWVyLndlc3RCeU5vcnRoQWkoKSwgYWlQbGF5ZXIuZGlyZWN0aW9uT2ZQbGFjZW1lbnRBaSgpLCBhaVBsYXllci5zaGlwTmFtZUFpKCkpO1xuICAgIH0gd2hpbGUgKGFpUGxheWVyLmdhbWVCb2FyZC5zaGlwc0RhdGEuc29tZShmdW5jdGlvbihzaGlwKSB7XG4gICAgICByZXR1cm4gc2hpcC5zaGlwUGxhY2VkT25Cb2FyZCA9PT0gZmFsc2VcbiAgICB9KSlcbiAgfTtcblxuICBjb25zdCBwbGF5ZXJQbGFjZW1lbnRMb29wID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKGh1bWFuUGxheWVyLmdhbWVCb2FyZC5zaGlwc0RhdGEuc29tZShmdW5jdGlvbihzaGlwKSB7XG4gICAgICByZXR1cm4gc2hpcC5zaGlwUGxhY2VkT25Cb2FyZCA9PT0gZmFsc2VcbiAgICB9KSkge1xuICAgICAgZG8ge1xuICAgICAgICBodW1hblBsYXllci5nYW1lQm9hcmQucGxhY2VTaGlwT25TcXIoaHVtYW5QbGF5ZXIud2VzdEJ5Tm9ydGhBaSgpLCBodW1hblBsYXllci5kaXJlY3Rpb25PZlBsYWNlbWVudEFpKCksIGh1bWFuUGxheWVyLnNoaXBOYW1lQWkoKSk7XG4gICAgICB9IHdoaWxlIChodW1hblBsYXllci5nYW1lQm9hcmQuc2hpcHNEYXRhLnNvbWUoZnVuY3Rpb24oc2hpcCkge1xuICAgICAgICByZXR1cm4gc2hpcC5zaGlwUGxhY2VkT25Cb2FyZCA9PT0gZmFsc2VcbiAgICAgIH0pKTtcbiAgICB9O1xuICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKCcuYWlHcmlkJywgJ3N0eWxlJywgJ3BvaW50ZXItZXZlbnRzOiBhbGwnKVxuICB9O1xuXG4gIGNvbnN0IHR1cm5Mb2dpYyA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCdIVU1BTiBHT05OQSBHSVRIIElUISBZQUggTUFOIScpXG4gICAgbGV0IGNvb3JkaW5hdGU7XG4gICAgZG8ge1xuICAgICAgY29vcmRpbmF0ZSA9IGh1bWFuUGxheWVyLndlc3RCeU5vcnRoQWkoKTtcbiAgICB9IHdoaWxlIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaHVtYW5XZXN0QnlOb3J0aCR7Y29vcmRpbmF0ZX1gKSA9PT0gbnVsbCk7XG4gICAgbGV0IHBsYXllckhpdFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5odW1hbldlc3RCeU5vcnRoJHtjb29yZGluYXRlfWApO1xuICAgIGNvbnNvbGUubG9nKCdIQUwgY2hvb3NlIHJhbmRvbSBudW1iZXI6ICcgKyBjb29yZGluYXRlKVxuICAgIGNvbnNvbGUubG9nKCdIQUwgaXMgdGFyZ2V0aW5nOiAnICsgcGxheWVySGl0U3F1YXJlKVxuICAgIGh1bWFuUGxheWVyLmdhbWVCb2FyZC5yZWNpZXZlQXR0YWNrKGNvb3JkaW5hdGUsIHBsYXllckhpdFNxdWFyZSk7XG4gIH1cbiAgbGV0IGNsaWNrZWRWYWx1ZTtcbiAgbGV0IGNsaWNrZWRTcXVhcmU7XG4gIGNvbnN0IGdlbmVyYXRlR2FtZUVsZW1lbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydEJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5NZW51Q29udGFpbmVyJykucmVtb3ZlKCk7XG5cbiAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3Njb3JlRGl2JywgbnVsbCwgJy5jb250ZW50JywgMSk7XG4gICAgICB1aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ3AnLCAncGxheWVyU2NvcmUnLCBudWxsLCAnLnNjb3JlRGl2JywgMSk7XG4gICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudCgnLnBsYXllclNjb3JlJywgJzAnKTtcbiAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgncCcsICdhaVNjb3JlJywgbnVsbCwgJy5zY29yZURpdicsIDEpO1xuICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoJy5haVNjb3JlJywgJzAnKTtcblxuICAgICAgdWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdidXR0b24nLCAncm5kU2hpcFBsYWNlbWVudEJ0bicsIG51bGwsICcuc2NvcmVEaXYnLCAxKTtcbiAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KCcucm5kU2hpcFBsYWNlbWVudEJ0bicsICdSTkQgU0hJUCBQTEFDRU1FTlQnKTtcbiAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ25ld1JvdW5kQnRuJywgbnVsbCwgJy5zY29yZURpdicsIDEpO1xuICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoJy5uZXdSb3VuZEJ0bicsICdORVcgUk9VTkQnKTtcbiAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ3F1aXRHYW1lQnRuJywgbnVsbCwgJy5zY29yZURpdicsIDEpO1xuICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoJy5xdWl0R2FtZUJ0bicsICdRVUlUIEdBTUUnKTtcblxuICAgICAgdWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnZ3JpZERpdicsIG51bGwsICcuY29udGVudCcsIDEpO1xuICAgICAgdWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdkaXYnLCAncGxheWVyR3JpZCcsIG51bGwsICcuZ3JpZERpdicsIDEpO1xuICAgICAgdWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnaHVtYW5TcXVhcmUnLCAnaHVtYW5QbGF5ZXInLCAnLnBsYXllckdyaWQnLCAxMDApO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTAwOyBpKyspIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmh1bWFuU3F1YXJlJHtpfWApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGNsaWNrZWQpID0+IHtcbiAgICAgICAgICBjbGlja2VkVmFsdWUgPSBwYXJzZUludChjbGlja2VkLnNyY0VsZW1lbnQuaW5uZXJUZXh0KTtcbiAgICAgICAgICBjbGlja2VkU3F1YXJlID0gY2xpY2tlZC5vcmlnaW5hbFRhcmdldC5jbGFzc0xpc3RbMV07XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xpY2tlZFNxdWFyZX1gKS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JvcmRlcjogc29saWQgMnB4IHJlZCcpO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXJHcmlkYCkuc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb2ludGVyLWV2ZW50czogbm9uZScpO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dEZvcm0nKS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IHZpc2libGUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2l9YCwgYCR7aHVtYW5QbGF5ZXIuZ2FtZUJvYXJkLmdhbWVCb2FyZFNxcnNbaSAtIDFdLndlc3RCeU5vcnRofWApO1xuICAgICAgfTtcbiAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2FpR3JpZCcsIG51bGwsICcuZ3JpZERpdicsIDEpO1xuICAgICAgdWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnYWlTcXVhcmUnLCAnYWlQbGF5ZXInLCAnLmFpR3JpZCcsIDEwMCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDA7IGkrKykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYWlTcXVhcmUke2l9YCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoY2xpY2tlZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFpSGl0U3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xpY2tlZC5vcmlnaW5hbFRhcmdldC5jbGFzc0xpc3RbMV19YClcbiAgICAgICAgICBhaVBsYXllci5nYW1lQm9hcmQucmVjaWV2ZUF0dGFjayhwYXJzZUludChjbGlja2VkLnNyY0VsZW1lbnQuaW5uZXJUZXh0KSwgYWlIaXRTcXVhcmUpXG4gICAgICAgIH0pO1xuICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmFpU3F1YXJlJHtpfWAsIGAke2FpUGxheWVyLmdhbWVCb2FyZC5nYW1lQm9hcmRTcXJzW2kgLSAxXS53ZXN0QnlOb3J0aH1gKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIGhlcmUgYmUgZm9ybSBmb3Igc2hpcCBwbGFjZW1lbnQsIGJ1dCBtYXliZSBwdXQgaW4gdGhlIG1pZGRsZSBvZiBwbGF5ZXIgZ3JpZFxuICAgICAgLy8gYWxiZWl0IGludmlzaWJsZSBhbmQgb25seSB3aGVuIHNxdWFyZSBpcyBjbGlja2VkIGlzIG1hZGUgdmlzaWJsZVxuICAgICAgLy8gYW5kIHdoZW4gcGxheWVyIGNvbmZpcm1zIGlucHV0IGl0IGdvZXMgb3V0IGludmlzaWJsZSBhZ2FpbmVcbiAgICAgIC8vIHNob3VsZCBhZGQgbm8gcG9zc2liaWxpdHkgdG8gYXR0YWNrIGFpIHVudGlsIGFsbCBzaGlwcyBhcmUgcGxhY2VkIG9uIHBsYXllciBib29hcmRcbiAgICAgIC8vIHNlZSBob3cgdG8gZGlzYWJsZSBldmVudHMgb24gZWxlbWVudHMsIHlvdSBhbHJlYWR5IGRpZCB0aGF0IGluIHNvbWUgZWFybGllciBwcm9qZWN0c1xuICAgICAgdWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdmb3JtJywgJ2lucHV0Rm9ybScsIG51bGwsICcuZ3JpZERpdicsIDEpXG4gICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZSgnLmlucHV0Rm9ybScsICdzdHlsZScsICdkaXNwbGF5OiBub25lJywgJ2FjdGlvbicsICcnLCBudWxsLCBudWxsKVxuXG4gICAgICAvLyB1em1pIG9kIGNsaWNrZWQgdmFsdWUgemEga29vcmlkaW5hdHUgaSB0byDEh2XFoSBwcm9zbGplZGl0aSB1IHBsYWNlU2hpcE9uU3FyXG5cbiAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCAnY2hvaWNlVHdvJywgbnVsbCwgJy5pbnB1dEZvcm0nLCAxKVxuICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoJy5jaG9pY2VUd28nLCAnRGlyZWN0aW9uIChOLCBTLCBXLCBFKTonKTtcbiAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAnaW5wdXROb3J0aCcsIG51bGwsICcuaW5wdXRGb3JtJywgMSlcbiAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKCcuaW5wdXROb3J0aCcsICd0eXBlJywgJ3JhZGlvJywgJ3ZhbHVlJywgJ25vcnRoJywgJ25hbWUnLCAnY2hvaWNlVHdvJywgbnVsbCwgbnVsbClcbiAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAnaW5wdXRTb3V0aCcsIG51bGwsICcuaW5wdXRGb3JtJywgMSlcbiAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKCcuaW5wdXRTb3V0aCcsICd0eXBlJywgJ3JhZGlvJywgJ3ZhbHVlJywgJ3NvdXRoJywgJ25hbWUnLCAnY2hvaWNlVHdvJywgbnVsbCwgbnVsbClcbiAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAnaW5wdXRXZXN0JywgbnVsbCwgJy5pbnB1dEZvcm0nLCAxKVxuICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoJy5pbnB1dFdlc3QnLCAndHlwZScsICdyYWRpbycsICd2YWx1ZScsICd3ZXN0JywgJ25hbWUnLCAnY2hvaWNlVHdvJywgbnVsbCwgbnVsbClcbiAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAnaW5wdXRFYXN0JywgbnVsbCwgJy5pbnB1dEZvcm0nLCAxKVxuICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoJy5pbnB1dEVhc3QnLCAndHlwZScsICdyYWRpbycsICd2YWx1ZScsICdlYXN0JywgJ25hbWUnLCAnY2hvaWNlVHdvJywgbnVsbCwgbnVsbClcblxuICAgICAgdWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdsYWJlbCcsICdjaG9pY2VUaHJlZScsIG51bGwsICcuaW5wdXRGb3JtJywgMSlcbiAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KCcuY2hvaWNlVGhyZWUnLCBgU2l6ZSAoU21hbGxTaGlwLCBNZWRpdW1TaGlwLCBMYXJnZVNoaXApYCk7XG4gICAgICB1aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgJ2lucHV0U1MnLCBudWxsLCAnLmlucHV0Rm9ybScsIDEpXG4gICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZSgnLmlucHV0U1MnLCAndHlwZScsICdyYWRpbycsICd2YWx1ZScsICdTbWFsbFNoaXAnLCAnbmFtZScsICdjaG9pY2VUaHJlZScsIG51bGwsIG51bGwpXG4gICAgICB1aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgJ2lucHV0TVMnLCBudWxsLCAnLmlucHV0Rm9ybScsIDEpXG4gICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZSgnLmlucHV0TVMnLCAndHlwZScsICdyYWRpbycsICd2YWx1ZScsICdNZWRpdW1TaGlwJywgJ25hbWUnLCAnY2hvaWNlVGhyZWUnLCBudWxsLCBudWxsKVxuICAgICAgdWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdpbnB1dCcsICdpbnB1dExTJywgbnVsbCwgJy5pbnB1dEZvcm0nLCAxKVxuICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoJy5pbnB1dExTJywgJ3R5cGUnLCAncmFkaW8nLCAndmFsdWUnLCAnTGFyZ2VTaGlwJywgJ25hbWUnLCAnY2hvaWNlVGhyZWUnLCBudWxsLCBudWxsKVxuXG4gICAgICAvLyBhZGQgc2FmZWd1YXJkIHdoZW4gYWxsIHBsYXllcnMgc2hpcHMgYXJlIHBsYWNlcyBtYW51YWxseSBvciB3aXRoIHJhbmRvbSBidXR0b24gKytcbiAgICAgIC8vIGFkZCBoaWdobGlnaCB3aGVuIHNxdWFyZSBmb3IgbWFudWFsIHBsYWNlbWVudCBpcyBjbGlja2VkXG5cblxuICAgICAgdWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdidXR0b24nLCAnY29uZmlybUlucHV0QnRuJywgbnVsbCwgJy5pbnB1dEZvcm0nLCAxKTtcbiAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKCcuY29uZmlybUlucHV0QnRuJywgJ3R5cGUnLCAgJ2J1dHRvbicsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpXG4gICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudCgnLmNvbmZpcm1JbnB1dEJ0bicsICdDb25maXJtJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZmlybUlucHV0QnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJjaG9pY2VUd29cIl06Y2hlY2tlZCcpO1xuICAgICAgICBjb25zdCBzaGlwU2l6ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJjaG9pY2VUaHJlZVwiXTpjaGVja2VkJylcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Rm9ybScpLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZScpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsaWNrZWRTcXVhcmV9YCkuc2V0QXR0cmlidXRlKCdzdHlsZScsICdib3JkZXI6IHNvbGlkIDJweCByZ2IoMTE0LCAxMjMsIDIwKScpO1xuICAgICAgICBodW1hblBsYXllci5nYW1lQm9hcmQucGxhY2VTaGlwT25TcXIoY2xpY2tlZFZhbHVlLCAgZGlyZWN0aW9uLnZhbHVlLCBzaGlwU2l6ZS52YWx1ZSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXJHcmlkYCkuc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb2ludGVyLWV2ZW50czogYWxsJyk7XG4gICAgICAgIGlmIChodW1hblBsYXllci5nYW1lQm9hcmQuc2hpcHNEYXRhLmV2ZXJ5KGZ1bmN0aW9uKHNoaXApIHtcbiAgICAgICAgICAvLyBpdCBkb2Vzbid0IHdvcmsgYXMgaW50ZW5kZWQgaW4gcGxheGVTaGlwT25TcXIgbWV0aG9kXG4gICAgICAgICAgcmV0dXJuIHNoaXAuc2hpcFBsYWNlZE9uQm9hcmQgPT09IHRydWVcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnQnJhaCcpXG4gICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoJy5haUdyaWQnLCAnc3R5bGUnLCAncG9pbnRlci1ldmVudHM6IGFsbCcpXG4gICAgICAgIH1cbiAgICAgICAgY2xpY2tlZFZhbHVlID0gbnVsbDtcbiAgICAgICAgY2xpY2tlZFNxdWFyZSA9IG51bGw7XG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1aXRHYW1lQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZURpdicpLnJlbW92ZSgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZERpdicpLnJlbW92ZSgpO1xuICAgICAgICB1aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdtYWluTWVudUNvbnRhaW5lcicsIG51bGwsICcuY29udGVudCcsIDEpO1xuICAgICAgICB1aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdzdGFydEJ0bicsIG51bGwsICcubWFpbk1lbnVDb250YWluZXInLCAxKTtcbiAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoJy5zdGFydEJ0bicsICdTVEFSVCBHQU1FJyk7XG4gICAgICAgIGh1bWFuUGxheWVyID0gUGxheWVyKCdIVU1BTicpO1xuICAgICAgICBhaVBsYXllciA9IFBsYXllcignSEFMMzAwMCcpO1xuICAgICAgICBnYW1lTG9vcC5nZW5lcmF0ZUdhbWVFbGVtZW50cygpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ybmRTaGlwUGxhY2VtZW50QnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHBsYXllclBsYWNlbWVudExvb3AoKVxuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdSb3VuZEJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDA7IGkrKykge1xuICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2l9YCwgYCR7aHVtYW5QbGF5ZXIuZ2FtZUJvYXJkLmdhbWVCb2FyZFNxcnNbaSAtIDFdLndlc3RCeU5vcnRofWApO1xuICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2l9YCwgJ3N0eWxlJywgJ2NvbG9yOiB3aGl0ZScpXG4gICAgICAgIH07XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwMDsgaSsrKSB7XG4gICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5haVNxdWFyZSR7aX1gLCBgJHthaVBsYXllci5nYW1lQm9hcmQuZ2FtZUJvYXJkU3Fyc1tpIC0gMV0ud2VzdEJ5Tm9ydGh9YCk7XG4gICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5haVNxdWFyZSR7aX1gLCAnc3R5bGUnLCAnY29sb3I6IHdoaXRlJylcbiAgICAgICAgfTtcbiAgICAgICAgaHVtYW5QbGF5ZXIuZ2VuZXJhdGVOZXdHYW1lQm9hcmQoJ0hVTUFOJylcbiAgICAgICAgYWlQbGF5ZXIuZ2VuZXJhdGVOZXdHYW1lQm9hcmQoJ0hBTDMwMDAnKVxuICAgICAgICBhaVBsYWNlbWVudExvb3AoKTtcbiAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoJy5haUdyaWQnLCAnc3R5bGUnLCAncG9pbnRlci1ldmVudHM6IG5vbmUnKTtcbiAgICAgIH0pO1xuXG4gICAgICBhaVBsYWNlbWVudExvb3AoKTtcbiAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKCcuYWlHcmlkJywgJ3N0eWxlJywgJ3BvaW50ZXItZXZlbnRzOiBub25lJyk7XG4gICAgfSk7XG4gIH07XG4gIFxuXG4gIHJldHVybiB7IGh1bWFuUGxheWVyLCBhaVBsYXllciwgYWlQbGFjZW1lbnRMb29wLCBwbGF5ZXJQbGFjZW1lbnRMb29wLCB0dXJuTG9naWMsIGdlbmVyYXRlR2FtZUVsZW1lbnRzIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVMb29wO1xuXG4vLyBCVVQgbmV4dCBmaXJzdCB0aGluZyBpcyB0byBwdXQgaW4gZXZlbnQgZm9yIHN0YXJ0IGJ0biBhaVNoaXAgcGxhY2VtZW50ICsrXG4vLyBhbmQgZW5hYmxlIHBsYXllciBtYW51YWwgc2hpcCBwbGFjZW1lbnQgb24gaXRzIGJvYXJkIG9yIHZpYSBybmQgc2hpcCBwbGFjZW1lbnQgYnRuXG4vLyBhbmQgdW50aWwgYWxsIHNoaXBzIGFyZSBwbGFjZWQgcGxheWVyIGNhbnQgYXR0YWNrIGFpIGdyaWQsIGVuYWJsZWQgb25seSBhZnRlciBwbGFjZW1lbnRcbi8vIGFuZCwgb2YgY291cmNlLCBtYWtlIGl0IGFsbCB2aXNpYmxlIHRvIHBsYXllclxuXG4vLyBhZGQgbmV3IHJvdW5kIFVJIGZ1bmN0aW9uYWxpdHlcbiAgLy8gc2hvdWxkIHJlc2V0IHBsYXllciBhbmQgYWkgZ3JpZFxuICAvLyBzaG91bGQgZ2l2ZSBibGFuayBncmlkIGZvciBwbGF5ZXIgYW5kIHNldCBlbmVteSBzaGlwc1xuLy8gYWRkIHZpc2libGUgY2hhbmdlcyBvbiBwbGF5ZXIgYW5kIGFpIGdyaWQgYXQgZWFjaCB0dXJuXG4gIC8vIHNob3VsZCBzZXQgcGxheWVyIHNoaXBzIHZpc2libGUgb24gYm9hcmQgd2hpbGUgYWkgc2hpcHMgYXJlIG5vdCB2aXNpYmxlIHVudGlsIGhpdFxuLy8gYWRkIG1lc3NhZ2UgdG8gcGxheWVyIGluZm9ybWluZyBhYm91dCAobWlzKWhpdCBvciBnZXR0aW5nIChtaXMpaGl0XG4vLyBhZGQgdmlzaWJsZSBzY29yZSBjaGFuZ2UgaW4gcm91bmQgYW5kIGdhbWUgaXMgY29udGludWVkXG4vLyBhZGQgcXVpdCBnYW1lIHdoZXJlIHBsYXllcnMgYXJlIHJlc2V0XG4vLyBhZGQgYnV0dG9uIGZvciByYW5kb20gc2hpcCBwbGFjZW1lbnQgZm9yIHBsYXllciArK1xuLy8gcm91bmQgZW5kIHNob3VsZCBkZWNsYXJlIHRoYXQgYWxsIHNoaXAgYXJlIHN1bmsgYW5kIG1heWJlICdmcmVlemUnIGJvYXJkIGZ1bmN0aW9uYWxpdHlcbi8vIGFuZCBhdCByb3VuZCBlbmQgcGxheWVyIHNob3VsZCBjaG9vc2UgcmVzdGFydCByb3VuZCBvciBxdWl0XG4vLyByb3VuZCBlbmQgc2hvdWxkIGJlIHRyaWdnZXJlZCBmcm9tIGNoZWNrU2hpcFN1bmtTdGF0dXMgZnJvbSBwbGF5ZXIgZ2FtZWJvYXJkXG5cbi8vIHZpZGkga2FrbyB1c3R2YXJpIG1vxb5lxaEgcHJpa2F6YXRpIGNsYXNzTGlzdHUgdSBrb256b2xpXG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkR2VuJ1xuaW1wb3J0IGdhbWVMb29wIGZyb20gJy4vbWFpbkdhbWVMb29wJztcblxuY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcbiAgbGV0IHNjb3JlID0gMDtcbiAgbGV0IHBsYXllck5hbWUgPSBuYW1lO1xuICBcbiAgY29uc3QgdXBkYXRlU2NvcmUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNjb3JlICs9IDE7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKCdTQ09SRSBVUERBVEUhJyArIHRoaXMuc2NvcmUpO1xuICB9XG5cbiAgY29uc3Qgcm5kTnJBaSA9IGZ1bmN0aW9uICh1cHBlckxpbWl0LCBpbmNsdXNpdmVPck5vdCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB1cHBlckxpbWl0KSArIGluY2x1c2l2ZU9yTm90O1xuICB9O1xuXG4gIGNvbnN0IHdlc3RCeU5vcnRoQWkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQocm5kTnJBaSgxMCwgMSkudG9TdHJpbmcoKSArIHJuZE5yQWkoMTAsIDEpLnRvU3RyaW5nKCkpO1xuICB9O1xuICBjb25zdCBkaXJlY3Rpb25PZlBsYWNlbWVudEFpID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGRpcmVjdGlvbk9mUGxhY2VtZW50QXJyYXkgPSBbJ25vcnRoJywgJ3NvdXRoJywgJ2Vhc3QnLCAnd2VzdCddO1xuICAgIHJldHVybiBkaXJlY3Rpb25PZlBsYWNlbWVudEFycmF5W3JuZE5yQWkoNCwgMCldO1xuICB9O1xuICBjb25zdCBzaGlwTmFtZUFpID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHNoaXBOYW1lQXJyYXkgPSBbJ1NtYWxsU2hpcCcsICdNZWRpdW1TaGlwJywgJ0xhcmdlU2hpcCddO1xuICAgIHJldHVybiBzaGlwTmFtZUFycmF5W3JuZE5yQWkoMywgMCldXG4gIH07XG5cbiAgbGV0IGdhbWVCb2FyZCA9IEdhbWVCb2FyZChgJHtuYW1lfWApO1xuICBjb25zdCBnZW5lcmF0ZU5ld0dhbWVCb2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2FtZUJvYXJkID0gR2FtZUJvYXJkKGAke25hbWV9YCk7XG4gICAgLy8gZ2FtZUxvb3AuYWlQbGFjZW1lbnRMb29wKCk7XG4gIH1cblxuICByZXR1cm4geyBwbGF5ZXJOYW1lLCBzY29yZSwgdXBkYXRlU2NvcmUsIHdlc3RCeU5vcnRoQWksIGRpcmVjdGlvbk9mUGxhY2VtZW50QWksIHNoaXBOYW1lQWksIGdhbWVCb2FyZCwgZ2VuZXJhdGVOZXdHYW1lQm9hcmQgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiY29uc3QgU2hpcCA9IChzaGlwU2l6ZUxlbmd0aCwgc2hpcE5yRm9yTmFtZSwgc2hpcE5yKSA9PiB7XG4gIGxldCBuYW1lID0gYCR7c2hpcE5yRm9yTmFtZX1gO1xuICBsZXQgc2hpcExlbmd0aCA9IHNoaXBTaXplTGVuZ3RoO1xuICAvLyBsZXQgc2hpcEluZGV4ID0gc2hpcE5yIC0gMTtcbiAgbGV0IHNoaXBQbGFjZWRPbkJvYXJkID0gZmFsc2U7XG5cbiAgY29uc3QgaGl0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zaGlwTGVuZ3RoIC09IDE7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuc2hpcExlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBpcyBzdW5rIWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IGlzIEFMSVZFIWApO1xuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIHsgbmFtZSwgc2hpcExlbmd0aCwgc2hpcFBsYWNlZE9uQm9hcmQsIGlzU3VuaywgaGl0IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDsiLCJpbXBvcnQgZ2FtZUxvb3AgZnJvbSAnLi9tYWluR2FtZUxvb3AnO1xuXG5jb25zdCB1aUVsZW1lbnRzID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzTmFtZSwgc3BlY2lhbENsYXNzTmFtZSwgcXVlcnlTZWxlY3RvciwgbnJPZkVsZW1lbnRzKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnJPZkVsZW1lbnRzOyBpKyspIHtcbiAgICAgIGNvbnN0IHFTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnlTZWxlY3Rvcik7XG4gICAgICBjb25zdCBjcmVhdGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGNyZWF0ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgY3JlYXRlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSArIGkpO1xuICAgICAgaWYgKHNwZWNpYWxDbGFzc05hbWUgIT09IG51bGwgJiYgc3BlY2lhbENsYXNzTmFtZSA9PT0gJ2h1bWFuUGxheWVyJykge1xuICAgICAgICBjcmVhdGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoYGh1bWFuV2VzdEJ5Tm9ydGgke2dhbWVMb29wLmh1bWFuUGxheWVyLmdhbWVCb2FyZC5nYW1lQm9hcmRTcXJzW2kgLSAxXS53ZXN0QnlOb3J0aH1gKVxuICAgICAgfSBlbHNlIGlmIChzcGVjaWFsQ2xhc3NOYW1lICE9PSBudWxsICYmIHNwZWNpYWxDbGFzc05hbWUgPT09ICdhaVBsYXllcicpIHtcbiAgICAgICAgY3JlYXRlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGBhaVdlc3RCeU5vcnRoJHtnYW1lTG9vcC5haVBsYXllci5nYW1lQm9hcmQuZ2FtZUJvYXJkU3Fyc1tpIC0gMV0ud2VzdEJ5Tm9ydGh9YClcbiAgICAgIH1cbiAgICAgIHFTZWxlY3Rvci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KTtcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHRleHRDb250ZW50Rm9yRWxlbWVudCA9IGZ1bmN0aW9uIChxdWVyeVNlbGVjdG9yLCB0ZXh0KSB7XG4gICAgY29uc3QgcVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeVNlbGVjdG9yKVxuICAgIHFTZWxlY3Rvci50ZXh0Q29udGVudCA9IHRleHQ7XG4gIH07XG5cbiAgY29uc3Qgc2V0QXR0cmlidXRlID0gZnVuY3Rpb24oc2VsZWN0b3IsIHNldEF0dHJpYnV0ZTEsIGF0dDFWYWx1ZSwgc2V0QXR0cmlidXRlMiwgYXR0MlZhbHVlLCBzZXRBdHRyaWJ1dGUzLCBhdHQzVmFsdWUgKSB7XG4gICAgY29uc3QgcVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgcVNlbGVjdG9yLnNldEF0dHJpYnV0ZShzZXRBdHRyaWJ1dGUxLCBhdHQxVmFsdWUpO1xuICAgIChzZXRBdHRyaWJ1dGUyICE9PSBudWxsKSA/IHFTZWxlY3Rvci5zZXRBdHRyaWJ1dGUoc2V0QXR0cmlidXRlMiwgYXR0MlZhbHVlKSA6IG51bGw7XG4gICAgKHNldEF0dHJpYnV0ZTMgIT09IG51bGwpID8gcVNlbGVjdG9yLnNldEF0dHJpYnV0ZShzZXRBdHRyaWJ1dGUzLCBhdHQzVmFsdWUpIDogbnVsbDtcbiAgfTtcblxuICByZXR1cm4geyBjcmVhdGVFbGVtZW50LCB0ZXh0Q29udGVudEZvckVsZW1lbnQsIHNldEF0dHJpYnV0ZSB9XG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHVpRWxlbWVudHM7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVWLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVWLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVWLmNzcyc7XG5pbXBvcnQgZ2FtZUxvb3AgZnJvbSAnLi9tYWluR2FtZUxvb3AnO1xuaW1wb3J0IHVpRWxlbWVudHMgZnJvbSAnLi91aUVsZW1lbnRzJztcblxuLy8gd2luZG93LmdhbWVMb29wID0gZ2FtZUxvb3BcbnVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ21haW5NZW51Q29udGFpbmVyJywgbnVsbCwgJy5jb250ZW50JywgMSk7XG51aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdzdGFydEJ0bicsIG51bGwsICcubWFpbk1lbnVDb250YWluZXInLCAxKTtcbnVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KCcuc3RhcnRCdG4nLCAnU1RBUlQgR0FNRScpO1xuZ2FtZUxvb3AuZ2VuZXJhdGVHYW1lRWxlbWVudHMoKTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=