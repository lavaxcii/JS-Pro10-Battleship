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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./seaShipSunset.jpg */ "./src/seaShipSunset.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  transition: 0.5s ease;\n  font-size: 1rem;\n  color: black;\n}\n\nbody {\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  height: 100vh;\n  width: 100vw;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), linear-gradient(100deg, #555555, rgb(0, 0, 0));\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: 0% 50%;\n  margin: 0;\n  font-family: 'Ubuntu', sans-serif;\n}\n\nbutton {\n  padding: 2rem;\n  border: solid 5px blueviolet;\n}\n\np {\n  color: rgb(185, 5, 5);\n  text-shadow: 4px 4px 4px rgb(0, 0, 0);\n  font-weight: 700;\n  font-size: 30px;\n  border: outset 5px rgb(120, 68, 169);\n  padding: 1rem;\n  background-color: rgb(20, 67, 20);\n}\n\ndiv {\n  color: white;\n  text-shadow: 2px 2px 3px rgb(1, 0, 0);\n}\n\n.content {\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 1rem;\n}\n\n.mainMenuContainer1 {\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 3rem;\n}\n\n.startBtn, \n.newRoundBtn, \n.quitGameBtn,\n.rndShipPlacementBtn  {\n  color: rgb(185, 5, 5);\n  text-shadow: 4px 4px 4px rgb(0, 0, 0);\n  font-weight: 700;\n  font-size: 30px;\n  background-color: rgb(6, 48, 6);\n  border: outset 8px rgb(120, 68, 169);\n  padding: 1rem;\n}\n\n.confirmInputBtn {\n  color: rgb(185, 5, 5);\n  text-shadow: 4px 4px 4px rgb(0, 0, 0);\n  font-weight: 700;\n  font-size: 15px;\n  background-color: rgb(6, 48, 6);\n  border: outset 8px rgb(120, 68, 169);\n  padding: 0.25rem;\n}\n\n.newRoundBtn, \n.quitGameBtn,\n.rndShipPlacementBtn {\n  font-size: 20px;\n}\n\n.startBtn:hover,\n.newRoundBtn:hover, \n.quitGameBtn:hover,\n.rndShipPlacementBtn:hover,\n.confirmInputBtn:hover {\n  background-color: rgb(11, 78, 11);\n}\n\n.startBtn:active,\n.newRoundBtn:active, \n.quitGameBtn:active,\n.rndShipPlacementBtn:active,\n.confirmInputBtn:active {\n  background-color: rgb(15, 103, 15);\n}\n\n.scoreDiv {\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n\n.gridDiv {\n  padding: 0rem;\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  border: dashed 5px orange;\n  background-image: linear-gradient(90deg, rgb(50, 65, 35), rgb(52, 88, 32));\n}\n\n.sunkStatusMessage {\n  display: flex;\n  position: absolute;\n  justify-content: center;\n  align-items: center;\n  background-image: linear-gradient(90deg, rgb(50, 65, 35), rgb(52, 88, 32));\n}\n\n.playerGrid,\n.aiGrid {\n  border: none;\n  display: grid;\n  justify-content: start;\n  align-items: stretch;\n  align-self: center;  \n  align-content: stretch;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 2px 2px;\n  border: dashed 5px blueviolet;\n  padding: 1rem;\n}\n\n.inputForm {\n  background-image: linear-gradient(90deg, rgb(52, 88, 32), rgb(50, 65, 35));\n  display: flex;\n  position: absolute;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  border: solid 5px rgb(72, 72, 181);\n  width: 26rem;\n}\n\nlabel {\n  font-size: 13px;\n  color: white;\n}\n\n.aiGrid {\n  padding-top: 2.57rem;\n  padding-bottom: 2.57rem;\n  border-left: none;\n  pointer-events: none;\n}\n\n.playerGrid {\n  border-right: none;\n}\n\n.humanSquare {\n  text-align: center;\n  height: 35px;\n  width: 35px;\n  border: solid 2px rgb(114, 123, 20);\n  padding: 0.2rem;\n}\n\n.aiSquare {\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  border: solid 2px rgb(116, 125, 20);\n  padding: 0.2rem;\n}", "",{"version":3,"sources":["webpack://./src/styleV.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,yGAA4F;EAC5F,sBAAsB;EACtB,4BAA4B;EAC5B,4BAA4B;EAC5B,2BAA2B;EAC3B,SAAS;EACT,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,4BAA4B;AAC9B;;AAEA;EACE,qBAAqB;EACrB,qCAAqC;EACrC,gBAAgB;EAChB,eAAe;EACf,oCAAoC;EACpC,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,YAAY;EACZ,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,aAAa;AACf;;AAEA;;;;EAIE,qBAAqB;EACrB,qCAAqC;EACrC,gBAAgB;EAChB,eAAe;EACf,+BAA+B;EAC/B,oCAAoC;EACpC,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,qCAAqC;EACrC,gBAAgB;EAChB,eAAe;EACf,+BAA+B;EAC/B,oCAAoC;EACpC,gBAAgB;AAClB;;AAEA;;;EAGE,eAAe;AACjB;;AAEA;;;;;EAKE,iCAAiC;AACnC;;AAEA;;;;;EAKE,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,yBAAyB;EACzB,0EAA0E;AAC5E;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;EACnB,0EAA0E;AAC5E;;AAEA;;EAEE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,oBAAoB;EACpB,kBAAkB;EAClB,sBAAsB;EACtB,sCAAsC;EACtC,YAAY;EACZ,6BAA6B;EAC7B,aAAa;AACf;;AAEA;EACE,0EAA0E;EAC1E,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;EACvB,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,mCAAmC;EACnC,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,mCAAmC;EACnC,eAAe;AACjB","sourcesContent":["* {\n  transition: 0.5s ease;\n  font-size: 1rem;\n  color: black;\n}\n\nbody {\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  height: 100vh;\n  width: 100vw;\n  background-image: url('./seaShipSunset.jpg'), linear-gradient(100deg, #555555, rgb(0, 0, 0));\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: 0% 50%;\n  margin: 0;\n  font-family: 'Ubuntu', sans-serif;\n}\n\nbutton {\n  padding: 2rem;\n  border: solid 5px blueviolet;\n}\n\np {\n  color: rgb(185, 5, 5);\n  text-shadow: 4px 4px 4px rgb(0, 0, 0);\n  font-weight: 700;\n  font-size: 30px;\n  border: outset 5px rgb(120, 68, 169);\n  padding: 1rem;\n  background-color: rgb(20, 67, 20);\n}\n\ndiv {\n  color: white;\n  text-shadow: 2px 2px 3px rgb(1, 0, 0);\n}\n\n.content {\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 1rem;\n}\n\n.mainMenuContainer1 {\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 3rem;\n}\n\n.startBtn, \n.newRoundBtn, \n.quitGameBtn,\n.rndShipPlacementBtn  {\n  color: rgb(185, 5, 5);\n  text-shadow: 4px 4px 4px rgb(0, 0, 0);\n  font-weight: 700;\n  font-size: 30px;\n  background-color: rgb(6, 48, 6);\n  border: outset 8px rgb(120, 68, 169);\n  padding: 1rem;\n}\n\n.confirmInputBtn {\n  color: rgb(185, 5, 5);\n  text-shadow: 4px 4px 4px rgb(0, 0, 0);\n  font-weight: 700;\n  font-size: 15px;\n  background-color: rgb(6, 48, 6);\n  border: outset 8px rgb(120, 68, 169);\n  padding: 0.25rem;\n}\n\n.newRoundBtn, \n.quitGameBtn,\n.rndShipPlacementBtn {\n  font-size: 20px;\n}\n\n.startBtn:hover,\n.newRoundBtn:hover, \n.quitGameBtn:hover,\n.rndShipPlacementBtn:hover,\n.confirmInputBtn:hover {\n  background-color: rgb(11, 78, 11);\n}\n\n.startBtn:active,\n.newRoundBtn:active, \n.quitGameBtn:active,\n.rndShipPlacementBtn:active,\n.confirmInputBtn:active {\n  background-color: rgb(15, 103, 15);\n}\n\n.scoreDiv {\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n\n.gridDiv {\n  padding: 0rem;\n  display: flex;\n  position: static;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  border: dashed 5px orange;\n  background-image: linear-gradient(90deg, rgb(50, 65, 35), rgb(52, 88, 32));\n}\n\n.sunkStatusMessage {\n  display: flex;\n  position: absolute;\n  justify-content: center;\n  align-items: center;\n  background-image: linear-gradient(90deg, rgb(50, 65, 35), rgb(52, 88, 32));\n}\n\n.playerGrid,\n.aiGrid {\n  border: none;\n  display: grid;\n  justify-content: start;\n  align-items: stretch;\n  align-self: center;  \n  align-content: stretch;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 2px 2px;\n  border: dashed 5px blueviolet;\n  padding: 1rem;\n}\n\n.inputForm {\n  background-image: linear-gradient(90deg, rgb(52, 88, 32), rgb(50, 65, 35));\n  display: flex;\n  position: absolute;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  border: solid 5px rgb(72, 72, 181);\n  width: 26rem;\n}\n\nlabel {\n  font-size: 13px;\n  color: white;\n}\n\n.aiGrid {\n  padding-top: 2.57rem;\n  padding-bottom: 2.57rem;\n  border-left: none;\n  pointer-events: none;\n}\n\n.playerGrid {\n  border-right: none;\n}\n\n.humanSquare {\n  text-align: center;\n  height: 35px;\n  width: 35px;\n  border: solid 2px rgb(114, 123, 20);\n  padding: 0.2rem;\n}\n\n.aiSquare {\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  border: solid 2px rgb(116, 125, 20);\n  padding: 0.2rem;\n}"],"sourceRoot":""}]);
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
    } else {
      console.log('Some ships still afloat!')
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

      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('form', 'inputForm', null, '.gridDiv', 1)
      _uiElements__WEBPACK_IMPORTED_MODULE_1__["default"].setAttribute('.inputForm', 'style', 'display: none', 'action', '', null, null)

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

/***/ "./src/seaShipSunset.jpg":
/*!*******************************!*\
  !*** ./src/seaShipSunset.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0015c8846e9e924691a3.jpg";

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




_uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].createElement('div', 'mainMenuContainer', null, '.content', 1);
_uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].createElement('button', 'startBtn', null, '.mainMenuContainer', 1);
_uiElements__WEBPACK_IMPORTED_MODULE_2__["default"].textContentForElement('.startBtn', 'START GAME');
_mainGameLoop__WEBPACK_IMPORTED_MODULE_1__["default"].generateGameElements();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNnQjtBQUNBOztBQUV0QyxpRUFBd0I7QUFDeEIsaUVBQXdCO0FBQ3hCLHlFQUFnQztBQUNoQywwRUFBNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm8xMC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlVi5jc3MiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2pzLXBybzEwLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qcy1wcm8xMC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2pzLXBybzEwLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qcy1wcm8xMC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmRHZW4uanMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL3NyYy9tYWluR2FtZUxvb3AuanMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXJHZW4uanMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC8uL3NyYy9zaGlwR2VuLmpzIiwid2VicGFjazovL2pzLXBybzEwLWJhdHRsZXNoaXAvLi9zcmMvdWlFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9qcy1wcm8xMC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlVi5jc3M/MGZjNyIsIndlYnBhY2s6Ly9qcy1wcm8xMC1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzLXBybzEwLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2pzLXBybzEwLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qcy1wcm8xMC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanMtcHJvMTAtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qcy1wcm8xMC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2pzLXBybzEwLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2pzLXBybzEwLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vc2VhU2hpcFN1bnNldC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSwgbGluZWFyLWdyYWRpZW50KDEwMGRlZywgIzU1NTU1NSwgcmdiKDAsIDAsIDApKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXI6IHNvbGlkIDVweCBibHVldmlvbGV0O1xcbn1cXG5cXG5wIHtcXG4gIGNvbG9yOiByZ2IoMTg1LCA1LCA1KTtcXG4gIHRleHQtc2hhZG93OiA0cHggNHB4IDRweCByZ2IoMCwgMCwgMCk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYm9yZGVyOiBvdXRzZXQgNXB4IHJnYigxMjAsIDY4LCAxNjkpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgNjcsIDIwKTtcXG59XFxuXFxuZGl2IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDNweCByZ2IoMSwgMCwgMCk7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5tYWluTWVudUNvbnRhaW5lcjEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogM3JlbTtcXG59XFxuXFxuLnN0YXJ0QnRuLCBcXG4ubmV3Um91bmRCdG4sIFxcbi5xdWl0R2FtZUJ0bixcXG4ucm5kU2hpcFBsYWNlbWVudEJ0biAge1xcbiAgY29sb3I6IHJnYigxODUsIDUsIDUpO1xcbiAgdGV4dC1zaGFkb3c6IDRweCA0cHggNHB4IHJnYigwLCAwLCAwKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgNDgsIDYpO1xcbiAgYm9yZGVyOiBvdXRzZXQgOHB4IHJnYigxMjAsIDY4LCAxNjkpO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmNvbmZpcm1JbnB1dEJ0biB7XFxuICBjb2xvcjogcmdiKDE4NSwgNSwgNSk7XFxuICB0ZXh0LXNoYWRvdzogNHB4IDRweCA0cHggcmdiKDAsIDAsIDApO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCA0OCwgNik7XFxuICBib3JkZXI6IG91dHNldCA4cHggcmdiKDEyMCwgNjgsIDE2OSk7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbn1cXG5cXG4ubmV3Um91bmRCdG4sIFxcbi5xdWl0R2FtZUJ0bixcXG4ucm5kU2hpcFBsYWNlbWVudEJ0biB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5zdGFydEJ0bjpob3ZlcixcXG4ubmV3Um91bmRCdG46aG92ZXIsIFxcbi5xdWl0R2FtZUJ0bjpob3ZlcixcXG4ucm5kU2hpcFBsYWNlbWVudEJ0bjpob3ZlcixcXG4uY29uZmlybUlucHV0QnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMSwgNzgsIDExKTtcXG59XFxuXFxuLnN0YXJ0QnRuOmFjdGl2ZSxcXG4ubmV3Um91bmRCdG46YWN0aXZlLCBcXG4ucXVpdEdhbWVCdG46YWN0aXZlLFxcbi5ybmRTaGlwUGxhY2VtZW50QnRuOmFjdGl2ZSxcXG4uY29uZmlybUlucHV0QnRuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDEwMywgMTUpO1xcbn1cXG5cXG4uc2NvcmVEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZ3JpZERpdiB7XFxuICBwYWRkaW5nOiAwcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYm9yZGVyOiBkYXNoZWQgNXB4IG9yYW5nZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDUwLCA2NSwgMzUpLCByZ2IoNTIsIDg4LCAzMikpO1xcbn1cXG5cXG4uc3Vua1N0YXR1c01lc3NhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDUwLCA2NSwgMzUpLCByZ2IoNTIsIDg4LCAzMikpO1xcbn1cXG5cXG4ucGxheWVyR3JpZCxcXG4uYWlHcmlkIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7ICBcXG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdhcDogMnB4IDJweDtcXG4gIGJvcmRlcjogZGFzaGVkIDVweCBibHVldmlvbGV0O1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmlucHV0Rm9ybSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYig1MiwgODgsIDMyKSwgcmdiKDUwLCA2NSwgMzUpKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYm9yZGVyOiBzb2xpZCA1cHggcmdiKDcyLCA3MiwgMTgxKTtcXG4gIHdpZHRoOiAyNnJlbTtcXG59XFxuXFxubGFiZWwge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWlHcmlkIHtcXG4gIHBhZGRpbmctdG9wOiAyLjU3cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDIuNTdyZW07XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ucGxheWVyR3JpZCB7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxufVxcblxcbi5odW1hblNxdWFyZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMzVweDtcXG4gIGJvcmRlcjogc29saWQgMnB4IHJnYigxMTQsIDEyMywgMjApO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbn1cXG5cXG4uYWlTcXVhcmUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMTE2LCAxMjUsIDIwKTtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlVi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWix5R0FBNEY7RUFDNUYsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLFNBQVM7RUFDVCxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7Ozs7RUFJRSxxQkFBcUI7RUFDckIscUNBQXFDO0VBQ3JDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLG9DQUFvQztFQUNwQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUNBQXFDO0VBQ3JDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLG9DQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLGVBQWU7QUFDakI7O0FBRUE7Ozs7O0VBS0UsaUNBQWlDO0FBQ25DOztBQUVBOzs7OztFQUtFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMEVBQTBFO0FBQzVFOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDBFQUEwRTtBQUM1RTs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwwRUFBMEU7RUFDMUUsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLG1DQUFtQztFQUNuQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9zZWFTaGlwU3Vuc2V0LmpwZycpLCBsaW5lYXItZ3JhZGllbnQoMTAwZGVnLCAjNTU1NTU1LCByZ2IoMCwgMCwgMCkpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJvcmRlcjogc29saWQgNXB4IGJsdWV2aW9sZXQ7XFxufVxcblxcbnAge1xcbiAgY29sb3I6IHJnYigxODUsIDUsIDUpO1xcbiAgdGV4dC1zaGFkb3c6IDRweCA0cHggNHB4IHJnYigwLCAwLCAwKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBib3JkZXI6IG91dHNldCA1cHggcmdiKDEyMCwgNjgsIDE2OSk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCA2NywgMjApO1xcbn1cXG5cXG5kaXYge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4IHJnYigxLCAwLCAwKTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLm1haW5NZW51Q29udGFpbmVyMSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAzcmVtO1xcbn1cXG5cXG4uc3RhcnRCdG4sIFxcbi5uZXdSb3VuZEJ0biwgXFxuLnF1aXRHYW1lQnRuLFxcbi5ybmRTaGlwUGxhY2VtZW50QnRuICB7XFxuICBjb2xvcjogcmdiKDE4NSwgNSwgNSk7XFxuICB0ZXh0LXNoYWRvdzogNHB4IDRweCA0cHggcmdiKDAsIDAsIDApO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCA0OCwgNik7XFxuICBib3JkZXI6IG91dHNldCA4cHggcmdiKDEyMCwgNjgsIDE2OSk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uY29uZmlybUlucHV0QnRuIHtcXG4gIGNvbG9yOiByZ2IoMTg1LCA1LCA1KTtcXG4gIHRleHQtc2hhZG93OiA0cHggNHB4IDRweCByZ2IoMCwgMCwgMCk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDQ4LCA2KTtcXG4gIGJvcmRlcjogb3V0c2V0IDhweCByZ2IoMTIwLCA2OCwgMTY5KTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxufVxcblxcbi5uZXdSb3VuZEJ0biwgXFxuLnF1aXRHYW1lQnRuLFxcbi5ybmRTaGlwUGxhY2VtZW50QnRuIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnN0YXJ0QnRuOmhvdmVyLFxcbi5uZXdSb3VuZEJ0bjpob3ZlciwgXFxuLnF1aXRHYW1lQnRuOmhvdmVyLFxcbi5ybmRTaGlwUGxhY2VtZW50QnRuOmhvdmVyLFxcbi5jb25maXJtSW5wdXRCdG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCA3OCwgMTEpO1xcbn1cXG5cXG4uc3RhcnRCdG46YWN0aXZlLFxcbi5uZXdSb3VuZEJ0bjphY3RpdmUsIFxcbi5xdWl0R2FtZUJ0bjphY3RpdmUsXFxuLnJuZFNoaXBQbGFjZW1lbnRCdG46YWN0aXZlLFxcbi5jb25maXJtSW5wdXRCdG46YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTAzLCAxNSk7XFxufVxcblxcbi5zY29yZURpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5ncmlkRGl2IHtcXG4gIHBhZGRpbmc6IDByZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBib3JkZXI6IGRhc2hlZCA1cHggb3JhbmdlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoNTAsIDY1LCAzNSksIHJnYig1MiwgODgsIDMyKSk7XFxufVxcblxcbi5zdW5rU3RhdHVzTWVzc2FnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoNTAsIDY1LCAzNSksIHJnYig1MiwgODgsIDMyKSk7XFxufVxcblxcbi5wbGF5ZXJHcmlkLFxcbi5haUdyaWQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjsgIFxcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiAycHggMnB4O1xcbiAgYm9yZGVyOiBkYXNoZWQgNXB4IGJsdWV2aW9sZXQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uaW5wdXRGb3JtIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDUyLCA4OCwgMzIpLCByZ2IoNTAsIDY1LCAzNSkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBib3JkZXI6IHNvbGlkIDVweCByZ2IoNzIsIDcyLCAxODEpO1xcbiAgd2lkdGg6IDI2cmVtO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5haUdyaWQge1xcbiAgcGFkZGluZy10b3A6IDIuNTdyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMi41N3JlbTtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5wbGF5ZXJHcmlkIHtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG59XFxuXFxuLmh1bWFuU3F1YXJlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAycHggcmdiKDExNCwgMTIzLCAyMCk7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxufVxcblxcbi5haVNxdWFyZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGJvcmRlcjogc29saWQgMnB4IHJnYigxMTYsIDEyNSwgMjApO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwR2VuJztcbmltcG9ydCBnYW1lTG9vcCBmcm9tICcuL21haW5HYW1lTG9vcCc7XG5pbXBvcnQgdWlFbGVtZW50cyBmcm9tICcuL3VpRWxlbWVudHMnO1xuXG5jb25zdCBHYW1lQm9hcmQgPSAobmFtZSkgPT4ge1xuICBsZXQgc2hpcHNEYXRhID0gW107XG4gIGxldCBnYW1lQm9hcmRTcXJzID0gW107XG5cbiAgY29uc3QgU3F1YXJlcyA9IGZ1bmN0aW9uKHdlc3ROciwgbm9ydGhOciwgbGFzdFNxdWFyZSkge1xuICAgIGxldCB3ZXN0ID0gd2VzdE5yO1xuICAgIGxldCBub3J0aCA9IG5vcnRoTnI7XG4gICAgbGV0IHdlc3RCeU5vcnRoID0gcGFyc2VJbnQoYCR7d2VzdE5yfSR7bm9ydGhOcn1gKTtcbiAgICBsZXQgc2hpcEF0TG9jYXRpb24gPSAnJztcbiAgICBsZXQgbG9jYXRpb25IaXQgPSBmYWxzZTtcbiAgICBsZXQgc2hpcEFuY2hvcmVkID0gZmFsc2U7XG4gICAgbGV0IGxhc3RSb3dTcXVhcmUgPSBsYXN0U3F1YXJlO1xuXG4gICAgcmV0dXJuIHsgd2VzdCwgbm9ydGgsIHdlc3RCeU5vcnRoLCBzaGlwQXRMb2NhdGlvbiwgbG9jYXRpb25IaXQsIHNoaXBBbmNob3JlZCwgbGFzdFJvd1NxdWFyZSB9XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVTcXVhcmVzID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHdlc3ROdW1iZXIgPSAxO1xuICAgIGxldCBsYXN0Um93U3F1YXJlID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xuICAgICAgZ2FtZUJvYXJkU3Fycy5wdXNoKFNxdWFyZXMod2VzdE51bWJlciwgaSwgbGFzdFJvd1NxdWFyZSkpO1xuICAgICAgbGFzdFJvd1NxdWFyZSA9IGZhbHNlO1xuICAgICAgKGkgPT09IDkpID8gbGFzdFJvd1NxdWFyZSA9IHRydWUgOiBudWxsO1xuICAgICAgaWYgKGkgPj0gMTApIHtcbiAgICAgICAgd2VzdE51bWJlcisrO1xuICAgICAgICBpID0gMDtcbiAgICAgIH07XG4gICAgICBpZiAod2VzdE51bWJlciA9PT0gMTEpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9O1xuICAgIH07XG4gIH07XG4gIGdlbmVyYXRlU3F1YXJlcygpXG5cbiAgY29uc3QgZ2VuZXJhdGVTaGlwcyA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBzaGlwTnIgPSAwO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykge1xuICAgICAgc2hpcE5yICs9IDE7XG4gICAgICBzaGlwc0RhdGEucHVzaChTaGlwKDIsIGBTbWFsbFNoaXAke3NoaXBOci50b1N0cmluZygpfWAsIHNoaXBOcikpO1xuICAgIH07XG4gICAgKHNoaXBOciA+IDApID8gc2hpcE5yID0gMCA6IG51bGw7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIHtcbiAgICAgIHNoaXBOciArPSAxO1xuICAgICAgc2hpcHNEYXRhLnB1c2goU2hpcCgzLCBgTWVkaXVtU2hpcCR7c2hpcE5yLnRvU3RyaW5nKCl9YCwgc2hpcE5yKSk7XG4gICAgfTtcbiAgICAoc2hpcE5yID4gMCkgPyBzaGlwTnIgPSAwIDogbnVsbDtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDE7IGkrKykge1xuICAgICAgc2hpcE5yICs9IDE7XG4gICAgICBzaGlwc0RhdGEucHVzaChTaGlwKDUsIGBMYXJnZVNoaXAke3NoaXBOci50b1N0cmluZygpfWAsIHNoaXBOcikpO1xuICAgIH07XG4gIH07XG4gIGdlbmVyYXRlU2hpcHMoKVxuXG4gIGNvbnN0IHJlY2lldmVBdHRhY2sgPSBmdW5jdGlvbihjb29yZGluYXRlcywgdGFyZ2V0TG9jYXRpb24pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVCb2FyZFNxcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChnYW1lQm9hcmRTcXJzW2ldLndlc3RCeU5vcnRoID09PSBjb29yZGluYXRlcyAmJiBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBbmNob3JlZCA9PT0gdHJ1ZSAmJiBnYW1lQm9hcmRTcXJzW2ldLmxvY2F0aW9uSGl0ID09PSBmYWxzZSkge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXBzRGF0YS5sZW5ndGg7IGorKykgeyBcbiAgICAgICAgICBpZiAoc2hpcHNEYXRhW2pdLm5hbWUgPT09IGdhbWVCb2FyZFNxcnNbaV0uc2hpcEF0TG9jYXRpb24gJiYgZ2FtZUJvYXJkU3Fyc1tpXS5sb2NhdGlvbkhpdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaV0ubG9jYXRpb25IaXQgPSB0cnVlO1xuICAgICAgICAgICAgc2hpcHNEYXRhW2pdLmhpdCgpO1xuICAgICAgICAgICAgc2hpcHNEYXRhW2pdLmlzU3VuaygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFNIT1RTIEZJUkVEIE9OIFVTISBISVQgQVQgJHtnYW1lQm9hcmRTcXJzW2ldLndlc3RCeU5vcnRofSAke25hbWV9IWApO1xuICAgICAgICAgICAgKG5hbWUgPT09ICdIQUwzMDAwJykgPyBnYW1lTG9vcC5haVBsYXllci5nYW1lQm9hcmQuY2hlY2tTdW5rU3RhdHVzKCkgOiBudWxsO1xuICAgICAgICAgICAgKG5hbWUgPT09ICdIVU1BTicpID8gZ2FtZUxvb3AuaHVtYW5QbGF5ZXIuZ2FtZUJvYXJkLmNoZWNrU3Vua1N0YXR1cygpIDogbnVsbDtcbiAgICAgICAgICAgIChuYW1lID09PSAnSEFMMzAwMCcpID8gdGFyZ2V0TG9jYXRpb24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdjb2xvcjogcmVkOyBmb250LXNpemU6IDIwcHgnKSA6IG51bGw7XG4gICAgICAgICAgICAobmFtZSA9PT0gJ0hBTDMwMDAnKSA/IHRhcmdldExvY2F0aW9uLnRleHRDb250ZW50ID0gJ1gnIDogbnVsbDtcbiAgICAgICAgICAgIChuYW1lID09PSAnSFVNQU4nKSA/IHRhcmdldExvY2F0aW9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnY29sb3I6IHJlZDsgZm9udC1zaXplOiAyNXB4JykgOiBudWxsO1xuICAgICAgICAgICAgKG5hbWUgPT09ICdIVU1BTicpID8gdGFyZ2V0TG9jYXRpb24udGV4dENvbnRlbnQgPSAnWCcgOiBudWxsO1xuICAgICAgICAgICAgKG5hbWUgPT09ICdIQUwzMDAwJykgPyBnYW1lTG9vcC50dXJuTG9naWMoKSA6IG51bGw7XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0QnlOb3J0aCA9PT0gY29vcmRpbmF0ZXMgJiYgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaV0ubG9jYXRpb25IaXQgPT09IGZhbHNlKSB7XG4gICAgICAgIGdhbWVCb2FyZFNxcnNbaV0ubG9jYXRpb25IaXQgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhgU0hPVFMgRklSRUQgT04gVVMhIEFNSVNTIEFUICR7Z2FtZUJvYXJkU3Fyc1tpXS53ZXN0QnlOb3J0aH0gJHtuYW1lfSFgKTtcbiAgICAgICAgKG5hbWUgPT09ICdIQUwzMDAwJykgPyBnYW1lTG9vcC5haVBsYXllci5nYW1lQm9hcmQuY2hlY2tTdW5rU3RhdHVzKCkgOiBudWxsO1xuICAgICAgICAobmFtZSA9PT0gJ0hVTUFOJykgPyBnYW1lTG9vcC5odW1hblBsYXllci5nYW1lQm9hcmQuY2hlY2tTdW5rU3RhdHVzKCkgOiBudWxsO1xuICAgICAgICAobmFtZSA9PT0gJ0hBTDMwMDAnKSA/IHRhcmdldExvY2F0aW9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnY29sb3I6IHJlZDsgZm9udC1zaXplOiAyMHB4JykgOiBudWxsO1xuICAgICAgICAobmFtZSA9PT0gJ0hVTUFOJykgPyB0YXJnZXRMb2NhdGlvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2NvbG9yOiByZWQ7IGZvbnQtc2l6ZTogMjVweCcpIDogbnVsbDtcbiAgICAgICAgKG5hbWUgPT09ICdIQUwzMDAwJykgPyBnYW1lTG9vcC50dXJuTG9naWMoKSA6IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKGdhbWVCb2FyZFNxcnNbaV0ud2VzdEJ5Tm9ydGggPT09IGNvb3JkaW5hdGVzICYmIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2ldLmxvY2F0aW9uSGl0ID09PSB0cnVlKSB7XG4gICAgICAgIChuYW1lID09PSAnSFVNQU4nKSA/IGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJykgOiBudWxsO1xuICAgICAgICAobmFtZSA9PT0gJ0hVTUFOJykgPyBjb25zb2xlLmxvZygnSEFMIGlzIHRyeWluZyBhZ2FpbicpIDogbnVsbDtcbiAgICAgICAgKG5hbWUgPT09ICdIVU1BTicpID8gY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKSA6IG51bGw7XG4gICAgICAgIChuYW1lID09PSAnSFVNQU4nKSA/IGdhbWVMb29wLnR1cm5Mb2dpYygpIDogbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAoZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0QnlOb3J0aCA9PT0gY29vcmRpbmF0ZXMgJiYgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQW5jaG9yZWQgPT09IHRydWUgJiYgZ2FtZUJvYXJkU3Fyc1tpXS5sb2NhdGlvbkhpdCA9PT0gdHJ1ZSkge1xuICAgICAgICAobmFtZSA9PT0gJ0hVTUFOJykgPyBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpIDogbnVsbDtcbiAgICAgICAgKG5hbWUgPT09ICdIVU1BTicpID8gY29uc29sZS5sb2coJ0hBTCBpcyB0cnlpbmcgYWdhaW4nKSA6IG51bGw7XG4gICAgICAgIChuYW1lID09PSAnSFVNQU4nKSA/IGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJykgOiBudWxsO1xuICAgICAgICAobmFtZSA9PT0gJ0hVTUFOJykgPyBnYW1lTG9vcC50dXJuTG9naWMoKSA6IG51bGw7XG4gICAgICB9O1xuICAgIH07XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwT25TcXIgPSBmdW5jdGlvbiAoY29vcmRpbmF0ZXMsIGRpcmVjdGlvbk9mUGxhY2VtZW50LCBzaGlwTmFtZVNpemUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVCb2FyZFNxcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChnYW1lQm9hcmRTcXJzW2ldLndlc3RCeU5vcnRoID09PSBjb29yZGluYXRlcyAmJiBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHNoaXBDb3VudGVyID0gMTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwc0RhdGEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBpZiAoZGlyZWN0aW9uT2ZQbGFjZW1lbnQgPT09IFwibm9ydGhcIikge1xuXG4gICAgICAgICAgICAvLyBzYWZlZ3VhcmQgYWdhaW5zdCBpbnZhbGlkIHBsYWNlbWVudCBhbmQgdG8gaW5mb3JtIHVzZXIgYWJvdXQgaXRcbiAgICAgICAgICAgIGlmICgoY29vcmRpbmF0ZXMgPT09IGdhbWVCb2FyZFNxcnNbaV0ud2VzdEJ5Tm9ydGggJiYgc2hpcHNEYXRhW2pdLm5hbWUgPT09IGBTbWFsbFNoaXAke3NoaXBDb3VudGVyfWAgJiYgZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0ID09PSAxKSB8fCAoY29vcmRpbmF0ZXMgPT09IGdhbWVCb2FyZFNxcnNbaV0ud2VzdEJ5Tm9ydGggJiYgc2hpcHNEYXRhW2pdLm5hbWUgPT09IGBNZWRpdW1TaGlwJHtzaGlwQ291bnRlcn1gICYmIChnYW1lQm9hcmRTcXJzW2ldLndlc3QgPT09IDEgfHwgZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0ID09PSAyKSkgfHwgKGNvb3JkaW5hdGVzID09PSBnYW1lQm9hcmRTcXJzW2ldLndlc3RCeU5vcnRoICYmIHNoaXBzRGF0YVtqXS5uYW1lID09PSBgTGFyZ2VTaGlwJHtzaGlwQ291bnRlcn1gICYmIChnYW1lQm9hcmRTcXJzW2ldLndlc3QgPT09IDEgfHwgZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0ID09PSAyIHx8IGdhbWVCb2FyZFNxcnNbaV0ud2VzdCA9PT0gMyB8fCBnYW1lQm9hcmRTcXJzW2ldLndlc3QgPT09IDQpKSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnREFNTiBicmFoIScpXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNoaXBzRGF0YVtqXS5uYW1lID09PSBgJHtzaGlwTmFtZVNpemV9JHtzaGlwQ291bnRlcn1gICYmIHNoaXBzRGF0YVtqXS5uYW1lID09PSBgU21hbGxTaGlwJHtzaGlwQ291bnRlcn1gICYmIHNoaXBzRGF0YVtqXS5zaGlwUGxhY2VkT25Cb2FyZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gMTBdLm5vcnRoID4gMCAmJiBnYW1lQm9hcmRTcXJzW2kgLSAxMF0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAvL1VJIGNoYW5nZXNcbiAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdIVU1BTicpIHtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgMX1gLCBgU1Mke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgLSA5fWAsIGBTUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDF9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpIC0gOX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHNoaXBzRGF0YVtqXS5zaGlwUGxhY2VkT25Cb2FyZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gMTBdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gMTBdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGogPSAwO1xuICAgICAgICAgICAgICBzaGlwQ291bnRlcj0gMTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwc0RhdGFbal0ubmFtZSA9PT0gYCR7c2hpcE5hbWVTaXplfSR7c2hpcENvdW50ZXJ9YCAmJiBzaGlwc0RhdGFbal0ubmFtZSA9PT0gYE1lZGl1bVNoaXAke3NoaXBDb3VudGVyfWAgJiYgc2hpcHNEYXRhW2pdLnNoaXBQbGFjZWRPbkJvYXJkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2kgLSAxMF0ubm9ydGggPiAwICYmIGdhbWVCb2FyZFNxcnNbaSAtIDEwXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaSAtIDIwXS5ub3J0aCA+IDAgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gMjBdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgLy9VSSBjaGFuZ2VzXG4gICAgICAgICAgICAgIGlmIChuYW1lID09PSAnSFVNQU4nKSB7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDF9YCwgYE1TJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpIC0gOX1gLCBgTVMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgLSAxOX1gLCBgTVMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyAxfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSAtIDl9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpIC0gMTl9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBzaGlwc0RhdGFbal0uc2hpcFBsYWNlZE9uQm9hcmQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDEwXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSAyMF0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSAxMF0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gMjBdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGogPSAwO1xuICAgICAgICAgICAgICBzaGlwQ291bnRlciA9IDE7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcHNEYXRhW2pdLm5hbWUgPT09IGAke3NoaXBOYW1lU2l6ZX0ke3NoaXBDb3VudGVyfWAgJiYgc2hpcHNEYXRhW2pdLm5hbWUgPT09IGBMYXJnZVNoaXAke3NoaXBDb3VudGVyfWAgJiYgc2hpcHNEYXRhW2pdLnNoaXBQbGFjZWRPbkJvYXJkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2kgLSAxMF0ubm9ydGggPiAwICYmIGdhbWVCb2FyZFNxcnNbaSAtIDEwXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaSAtIDIwXS5ub3J0aCA+IDAgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gMjBdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gMzBdLm5vcnRoID4gMCAmJiBnYW1lQm9hcmRTcXJzW2kgLSAzMF0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2kgLSA0MF0ubm9ydGggPiAwICYmIGdhbWVCb2FyZFNxcnNbaSAtIDQwXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIC8vVUkgY2hhbmdlc1xuICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ0hVTUFOJykge1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyAxfWAsIGBMUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSAtIDl9YCwgYExTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpIC0gMTl9YCwgYExTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpIC0gMjl9YCwgYExTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpIC0gMzl9YCwgYExTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgMX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgLSA5fWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSAtIDE5fWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSAtIDI5fWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSAtIDM5fWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgc2hpcHNEYXRhW2pdLnNoaXBQbGFjZWRPbkJvYXJkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSAxMF0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gMjBdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDMwXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSA0MF0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSAxMF0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gMjBdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDMwXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSA0MF0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICAgIHNoaXBDb3VudGVyID0gMTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uT2ZQbGFjZW1lbnQgPT09IFwic291dGhcIikge1xuXG4gICAgICAgICAgICAvLyBzYWZlZ3VhcmQgYWdhaW5zdCBpbnZhbGlkIHBsYWNlbWVudCBhbmQgdG8gaW5mb3JtIHVzZXIgYWJvdXQgaXRcbiAgICAgICAgICAgIGlmICgoY29vcmRpbmF0ZXMgPT09IGdhbWVCb2FyZFNxcnNbaV0ud2VzdEJ5Tm9ydGggJiYgc2hpcHNEYXRhW2pdLm5hbWUgPT09IGBTbWFsbFNoaXAke3NoaXBDb3VudGVyfWAgJiYgZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0ID09PSAxMCkgfHwgKGNvb3JkaW5hdGVzID09PSBnYW1lQm9hcmRTcXJzW2ldLndlc3RCeU5vcnRoICYmIHNoaXBzRGF0YVtqXS5uYW1lID09PSBgTWVkaXVtU2hpcCR7c2hpcENvdW50ZXJ9YCAmJiAoZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0ID09PSAxMCB8fCBnYW1lQm9hcmRTcXJzW2ldLndlc3QgPT09IDkpKSB8fCAoY29vcmRpbmF0ZXMgPT09IGdhbWVCb2FyZFNxcnNbaV0ud2VzdEJ5Tm9ydGggJiYgc2hpcHNEYXRhW2pdLm5hbWUgPT09IGBMYXJnZVNoaXAke3NoaXBDb3VudGVyfWAgJiYgKGdhbWVCb2FyZFNxcnNbaV0ud2VzdCA9PT0gMTAgfHwgZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0ID09PSA5IHx8IGdhbWVCb2FyZFNxcnNbaV0ud2VzdCA9PT0gOCB8fCBnYW1lQm9hcmRTcXJzW2ldLndlc3QgPT09IDcpKSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnREFNTiBicmFoIScpXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNoaXBzRGF0YVtqXS5uYW1lID09PSBgJHtzaGlwTmFtZVNpemV9JHtzaGlwQ291bnRlcn1gICYmIHNoaXBzRGF0YVtqXS5uYW1lID09PSBgU21hbGxTaGlwJHtzaGlwQ291bnRlcn1gICYmIHNoaXBzRGF0YVtqXS5zaGlwUGxhY2VkT25Cb2FyZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpICsgMTBdLm5vcnRoID4gMCAmJiBnYW1lQm9hcmRTcXJzW2kgKyAxMF0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAvL1VJIGNoYW5nZXNcbiAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdIVU1BTicpIHtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgMX1gLCBgU1Mke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyAxMX1gLCBgU1Mke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyAxfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDExfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgc2hpcHNEYXRhW2pdLnNoaXBQbGFjZWRPbkJvYXJkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyAxMF0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyAxMF0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICAgIHNoaXBDb3VudGVyPSAxO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBzRGF0YVtqXS5uYW1lID09PSBgJHtzaGlwTmFtZVNpemV9JHtzaGlwQ291bnRlcn1gICYmIHNoaXBzRGF0YVtqXS5uYW1lID09PSBgTWVkaXVtU2hpcCR7c2hpcENvdW50ZXJ9YCAmJiBzaGlwc0RhdGFbal0uc2hpcFBsYWNlZE9uQm9hcmQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaSArIDEwXS5ub3J0aCA+IDAgJiYgZ2FtZUJvYXJkU3Fyc1tpICsgMTBdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpICsgMjBdLm5vcnRoID4gMCAmJiBnYW1lQm9hcmRTcXJzW2kgKyAyMF0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAvL1VJIGNoYW5nZXNcbiAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdIVU1BTicpIHtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgMX1gLCBgTVMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyAxMX1gLCBgTVMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyAyMX1gLCBgTVMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyAxfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDExfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDIxfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgc2hpcHNEYXRhW2pdLnNoaXBQbGFjZWRPbkJvYXJkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyAxMF0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgMjBdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgMTBdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDIwXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBqID0gMDtcbiAgICAgICAgICAgICAgc2hpcENvdW50ZXIgPSAxO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBzRGF0YVtqXS5uYW1lID09PSBgJHtzaGlwTmFtZVNpemV9JHtzaGlwQ291bnRlcn1gICYmIHNoaXBzRGF0YVtqXS5uYW1lID09PSBgTGFyZ2VTaGlwJHtzaGlwQ291bnRlcn1gICYmIHNoaXBzRGF0YVtqXS5zaGlwUGxhY2VkT25Cb2FyZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpICsgMTBdLm5vcnRoID4gMCAmJiBnYW1lQm9hcmRTcXJzW2kgKyAxMF0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2kgKyAyMF0ubm9ydGggPiAwICYmIGdhbWVCb2FyZFNxcnNbaSArIDIwXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaSArIDMwXS5ub3J0aCA+IDAgJiYgZ2FtZUJvYXJkU3Fyc1tpICsgMzBdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpICsgNDBdLm5vcnRoID4gMCAmJiBnYW1lQm9hcmRTcXJzW2kgKyA0MF0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAvL1VJIGNoYW5nZXNcbiAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdIVU1BTicpIHtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgMX1gLCBgTFMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyAxMX1gLCBgTFMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyAyMX1gLCBgTFMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyAzMX1gLCBgTFMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyA0MX1gLCBgTFMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyAxfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDExfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDIxfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDMxfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDQxfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgc2hpcHNEYXRhW2pdLnNoaXBQbGFjZWRPbkJvYXJkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyAxMF0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgMjBdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDMwXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyA0MF0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyAxMF0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgMjBdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDMwXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyA0MF0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICAgIHNoaXBDb3VudGVyID0gMTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uT2ZQbGFjZW1lbnQgPT09IFwiZWFzdFwiKSB7XG5cbiAgICAgICAgICAgIC8vIHNhZmVndWFyZCBhZ2FpbnN0IGludmFsaWQgcGxhY2VtZW50IGFuZCB0byBpbmZvcm0gdXNlciBhYm91dCBpdFxuICAgICAgICAgICAgaWYgKChjb29yZGluYXRlcyA9PT0gZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0QnlOb3J0aCAmJiBzaGlwc0RhdGFbal0ubmFtZSA9PT0gYFNtYWxsU2hpcCR7c2hpcENvdW50ZXJ9YCAmJiBnYW1lQm9hcmRTcXJzW2ldLm5vcnRoID09PSAxMCkgfHwgKGNvb3JkaW5hdGVzID09PSBnYW1lQm9hcmRTcXJzW2ldLndlc3RCeU5vcnRoICYmIHNoaXBzRGF0YVtqXS5uYW1lID09PSBgTWVkaXVtU2hpcCR7c2hpcENvdW50ZXJ9YCAmJiAoZ2FtZUJvYXJkU3Fyc1tpXS5ub3J0aCA9PT0gMTAgfHwgZ2FtZUJvYXJkU3Fyc1tpXS5ub3J0aCA9PT0gOSkpIHx8IChjb29yZGluYXRlcyA9PT0gZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0QnlOb3J0aCAmJiBzaGlwc0RhdGFbal0ubmFtZSA9PT0gYExhcmdlU2hpcCR7c2hpcENvdW50ZXJ9YCAmJiAoZ2FtZUJvYXJkU3Fyc1tpXS5ub3J0aCA9PT0gMTAgfHwgZ2FtZUJvYXJkU3Fyc1tpXS5ub3J0aCA9PT0gOSB8fCBnYW1lQm9hcmRTcXJzW2ldLm5vcnRoID09PSA4IHx8IGdhbWVCb2FyZFNxcnNbaV0ubm9ydGggPT09IDcpKSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnREFNTiBicmFoIScpXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNoaXBzRGF0YVtqXS5uYW1lID09PSBgJHtzaGlwTmFtZVNpemV9JHtzaGlwQ291bnRlcn1gICYmIHNoaXBzRGF0YVtqXS5uYW1lID09PSBgU21hbGxTaGlwJHtzaGlwQ291bnRlcn1gICYmICBzaGlwc0RhdGFbal0uc2hpcFBsYWNlZE9uQm9hcmQgPT09IGZhbHNlICAmJiBnYW1lQm9hcmRTcXJzW2ldLmxhc3RSb3dTcXVhcmUgIT09IHRydWUgJiYgZ2FtZUJvYXJkU3Fyc1tpICsgMV0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAvL1VJIGNoYW5nZXNcbiAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdIVU1BTicpIHtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgMX1gLCBgU1Mke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyAyfWAsIGBTUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDF9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgMn1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHNoaXBzRGF0YVtqXS5zaGlwUGxhY2VkT25Cb2FyZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgMV0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyAxXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBqID0gMDtcbiAgICAgICAgICAgICAgc2hpcENvdW50ZXI9IDE7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcHNEYXRhW2pdLm5hbWUgPT09IGAke3NoaXBOYW1lU2l6ZX0ke3NoaXBDb3VudGVyfWAgJiYgc2hpcHNEYXRhW2pdLm5hbWUgPT09IGBNZWRpdW1TaGlwJHtzaGlwQ291bnRlcn1gICYmIHNoaXBzRGF0YVtqXS5zaGlwUGxhY2VkT25Cb2FyZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpXS5sYXN0Um93U3F1YXJlICE9PSB0cnVlICYmIGdhbWVCb2FyZFNxcnNbaSArIDFdLmxhc3RSb3dTcXVhcmUgIT09IHRydWUgJiYgZ2FtZUJvYXJkU3Fyc1tpICsgMV0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2kgKyAyXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIC8vVUkgY2hhbmdlc1xuICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ0hVTUFOJykge1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyAxfWAsIGBNUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDJ9YCwgYE1TJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgM31gLCBgTVMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyAxfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDJ9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgM31gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHNoaXBzRGF0YVtqXS5zaGlwUGxhY2VkT25Cb2FyZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgMV0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgMl0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyAxXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgKyAyXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBqID0gMDtcbiAgICAgICAgICAgICAgc2hpcENvdW50ZXIgPSAxO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBzRGF0YVtqXS5uYW1lID09PSBgJHtzaGlwTmFtZVNpemV9JHtzaGlwQ291bnRlcn1gICYmIHNoaXBzRGF0YVtqXS5uYW1lID09PSBgTGFyZ2VTaGlwJHtzaGlwQ291bnRlcn1gICYmIHNoaXBzRGF0YVtqXS5zaGlwUGxhY2VkT25Cb2FyZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpXS5sYXN0Um93U3F1YXJlICE9PSB0cnVlICYmIGdhbWVCb2FyZFNxcnNbaSArIDFdLmxhc3RSb3dTcXVhcmUgIT09IHRydWUgJiYgZ2FtZUJvYXJkU3Fyc1tpICsgMl0ubGFzdFJvd1NxdWFyZSAhPT0gdHJ1ZSAmJiBnYW1lQm9hcmRTcXJzW2kgKyAzXS5sYXN0Um93U3F1YXJlICE9PSB0cnVlICYmIGdhbWVCb2FyZFNxcnNbaSArIDJdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpICsgM10uc2hpcEFuY2hvcmVkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2kgKyA0XS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIGlmIChuYW1lID09PSAnSFVNQU4nKSB7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDF9YCwgYExTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgMn1gLCBgTFMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyAzfWAsIGBMUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDR9YCwgYExTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpICsgNX1gLCBgTFMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyAxfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDJ9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgM31gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyA0fWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDV9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBzaGlwc0RhdGFbal0uc2hpcFBsYWNlZE9uQm9hcmQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDFdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDJdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDNdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSArIDRdLnNoaXBBdExvY2F0aW9uID0gc2hpcHNEYXRhW2pdLm5hbWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgMV0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgMl0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgM10uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpICsgNF0uc2hpcEFuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICAgIHNoaXBDb3VudGVyID0gMTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uT2ZQbGFjZW1lbnQgPT09IFwid2VzdFwiKSB7XG5cbiAgICAgICAgICAgIC8vIHNhZmVndWFyZCBhZ2FpbnN0IGludmFsaWQgcGxhY2VtZW50IGFuZCB0byBpbmZvcm0gdXNlciBhYm91dCBpdFxuICAgICAgICAgICAgaWYgKChjb29yZGluYXRlcyA9PT0gZ2FtZUJvYXJkU3Fyc1tpXS53ZXN0QnlOb3J0aCAmJiBzaGlwc0RhdGFbal0ubmFtZSA9PT0gYFNtYWxsU2hpcCR7c2hpcENvdW50ZXJ9YCAmJiBnYW1lQm9hcmRTcXJzW2ldLm5vcnRoID09PSAxKSB8fCAoY29vcmRpbmF0ZXMgPT09IGdhbWVCb2FyZFNxcnNbaV0ud2VzdEJ5Tm9ydGggJiYgc2hpcHNEYXRhW2pdLm5hbWUgPT09IGBNZWRpdW1TaGlwJHtzaGlwQ291bnRlcn1gICYmIChnYW1lQm9hcmRTcXJzW2ldLm5vcnRoID09PSAxIHx8IGdhbWVCb2FyZFNxcnNbaV0ubm9ydGggPT09IDIpKSB8fCAoY29vcmRpbmF0ZXMgPT09IGdhbWVCb2FyZFNxcnNbaV0ud2VzdEJ5Tm9ydGggJiYgc2hpcHNEYXRhW2pdLm5hbWUgPT09IGBMYXJnZVNoaXAke3NoaXBDb3VudGVyfWAgJiYgKGdhbWVCb2FyZFNxcnNbaV0ubm9ydGggPT09IDEgfHwgZ2FtZUJvYXJkU3Fyc1tpXS5ub3J0aCA9PT0gMiB8fCBnYW1lQm9hcmRTcXJzW2ldLm5vcnRoID09PSAzIHx8IGdhbWVCb2FyZFNxcnNbaV0ubm9ydGggPT09IDQpKSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnREFNTiBicmFoIScpXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNoaXBzRGF0YVtqXS5uYW1lID09PSBgJHtzaGlwTmFtZVNpemV9JHtzaGlwQ291bnRlcn1gICYmIHNoaXBzRGF0YVtqXS5uYW1lID09PSBgU21hbGxTaGlwJHtzaGlwQ291bnRlcn1gICYmIHNoaXBzRGF0YVtqXS5zaGlwUGxhY2VkT25Cb2FyZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gMV0ubGFzdFJvd1NxdWFyZSAhPT0gdHJ1ZSAmJiBnYW1lQm9hcmRTcXJzW2kgLSAxXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIGlmIChuYW1lID09PSAnSFVNQU4nKSB7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDF9YCwgYFNTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpfWAsIGBTUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSArIDF9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgc2hpcHNEYXRhW2pdLnNoaXBQbGFjZWRPbkJvYXJkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSAxXS5zaGlwQXRMb2NhdGlvbiA9IHNoaXBzRGF0YVtqXS5uYW1lO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2ldLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaSAtIDFdLnNoaXBBbmNob3JlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGogPSAwO1xuICAgICAgICAgICAgICBzaGlwQ291bnRlcj0gMTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwc0RhdGFbal0ubmFtZSA9PT0gYCR7c2hpcE5hbWVTaXplfSR7c2hpcENvdW50ZXJ9YCAmJiBzaGlwc0RhdGFbal0ubmFtZSA9PT0gYE1lZGl1bVNoaXAke3NoaXBDb3VudGVyfWAgJiYgc2hpcHNEYXRhW2pdLnNoaXBQbGFjZWRPbkJvYXJkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2kgLSAxXS5sYXN0Um93U3F1YXJlICE9PSB0cnVlICYmIGdhbWVCb2FyZFNxcnNbaSAtIDJdLmxhc3RSb3dTcXVhcmUgIT09IHRydWUgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gMV0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSAmJiBnYW1lQm9hcmRTcXJzW2kgLSAyXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIGlmIChuYW1lID09PSAnSFVNQU4nKSB7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSArIDF9YCwgYE1TJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpfWAsIGBNUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSAtIDF9YCwgYE1TJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpICsgMX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2l9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpIC0gMX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHNoaXBzRGF0YVtqXS5zaGlwUGxhY2VkT25Cb2FyZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gMV0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gMl0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSAxXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSAyXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBqID0gMDtcbiAgICAgICAgICAgICAgc2hpcENvdW50ZXIgPSAxO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBzRGF0YVtqXS5uYW1lID09PSBgJHtzaGlwTmFtZVNpemV9JHtzaGlwQ291bnRlcn1gICYmIHNoaXBzRGF0YVtqXS5uYW1lID09PSBgTGFyZ2VTaGlwJHtzaGlwQ291bnRlcn1gICYmIHNoaXBzRGF0YVtqXS5zaGlwUGxhY2VkT25Cb2FyZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gMV0ubGFzdFJvd1NxdWFyZSAhPT0gdHJ1ZSAmJiBnYW1lQm9hcmRTcXJzW2kgLSAyXS5sYXN0Um93U3F1YXJlICE9PSB0cnVlICYmIGdhbWVCb2FyZFNxcnNbaSAtIDNdLmxhc3RSb3dTcXVhcmUgIT09IHRydWUgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gNF0ubGFzdFJvd1NxdWFyZSAhPT0gdHJ1ZSAmJiBnYW1lQm9hcmRTcXJzW2kgLSAyXS5zaGlwQW5jaG9yZWQgPT09IGZhbHNlICYmIGdhbWVCb2FyZFNxcnNbaSAtIDNdLnNoaXBBbmNob3JlZCA9PT0gZmFsc2UgJiYgZ2FtZUJvYXJkU3Fyc1tpIC0gNF0uc2hpcEFuY2hvcmVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ0hVTUFOJykge1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgKyAxfWAsIGBMUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aX1gLCBgTFMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KGAuaHVtYW5TcXVhcmUke2kgLSAxfWAsIGBMUyR7c2hpcENvdW50ZXJ9YCk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aSAtIDJ9YCwgYExTJHtzaGlwQ291bnRlcn1gKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpIC0gM31gLCBgTFMke3NoaXBDb3VudGVyfWApO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgKyAxfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aX1gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKGAuaHVtYW5TcXVhcmUke2kgLSAxfWAsICdzdHlsZScsICdjb2xvcjogdmlvbGV0Jyk7XG4gICAgICAgICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aSAtIDJ9YCwgJ3N0eWxlJywgJ2NvbG9yOiB2aW9sZXQnKTtcbiAgICAgICAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmh1bWFuU3F1YXJlJHtpIC0gM31gLCAnc3R5bGUnLCAnY29sb3I6IHZpb2xldCcpO1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHNoaXBzRGF0YVtqXS5zaGlwUGxhY2VkT25Cb2FyZCA9IHRydWU7XG4gICAgICAgICAgICAgIGdhbWVCb2FyZFNxcnNbaV0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gMV0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gMl0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gM10uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpIC0gNF0uc2hpcEF0TG9jYXRpb24gPSBzaGlwc0RhdGFbal0ubmFtZTtcbiAgICAgICAgICAgICAgZ2FtZUJvYXJkU3Fyc1tpXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSAxXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSAyXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSAzXS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBnYW1lQm9hcmRTcXJzW2kgLSA0XS5zaGlwQW5jaG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBqID0gMDtcbiAgICAgICAgICAgICAgc2hpcENvdW50ZXIgPSAxO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH07XG4gICAgICAgICAgc2hpcENvdW50ZXIrK1xuICAgICAgICAgIChzaGlwQ291bnRlciA+IDMpID8gc2hpcENvdW50ZXIgPSAxIDogbnVsbDtcbiAgICAgICAgfTtcbiAgICAgIH0gO1xuICAgIH07XG4gIH07XG5cbiAgY29uc3QgY2hlY2tTdW5rU3RhdHVzID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHNoaXBzRGF0YS5ldmVyeShmdW5jdGlvbihzaGlwKSB7XG4gICAgICAgIHJldHVybiBzaGlwLnNoaXBMZW5ndGggPT09IDBcbiAgICB9KSkge1xuICAgICAgaWYgKG5hbWUgPT09ICdIQUwzMDAwJykge1xuICAgICAgICB1aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ3AnLCAnc3Vua1N0YXR1c01lc3NhZ2UnLCBudWxsLCAnLmdyaWREaXYnLCAxKTtcbiAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoJy5zdW5rU3RhdHVzTWVzc2FnZScsIGAke25hbWV9IGlzIExPU0VSYClcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bmtTdGF0dXNNZXNzYWdlJykucmVtb3ZlKCk7XG4gICAgICAgIH0sIDMwMDApO1xuICAgICAgICBnYW1lTG9vcC5haVBsYXllci51cGRhdGVTY29yZSgpO1xuXG4gICAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KCcucGxheWVyU2NvcmUnLCBgJHtnYW1lTG9vcC5haVBsYXllci5zY29yZX1gKTtcbiAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoJy5haUdyaWQnLCAnc3R5bGUnLCAncG9pbnRlci1ldmVudHM6IG5vbmUnKTtcbiAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ0hVTUFOJykge1xuICAgICAgICB1aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ3AnLCAnc3Vua1N0YXR1c01lc3NhZ2UnLCBudWxsLCAnLmdyaWREaXYnLCAxKTtcbiAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoJy5zdW5rU3RhdHVzTWVzc2FnZScsIGAke25hbWV9IGlzIExPU0VSYClcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5rU3RhdHVzTWVzc2FnZScpLnJlbW92ZSgpO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgZ2FtZUxvb3AuaHVtYW5QbGF5ZXIudXBkYXRlU2NvcmUoKTtcbiAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoJy5haVNjb3JlJywgYCR7Z2FtZUxvb3AuaHVtYW5QbGF5ZXIuc2NvcmV9YCk7XG4gICAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKCcuYWlHcmlkJywgJ3N0eWxlJywgJ3BvaW50ZXItZXZlbnRzOiBub25lJyk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnQWxsIHNoaXBzIGFyZSBzdW5rIScpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTb21lIHNoaXBzIHN0aWxsIGFmbG9hdCEnKVxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIHsgc2hpcHNEYXRhLCBnYW1lQm9hcmRTcXJzLCBnZW5lcmF0ZVNoaXBzLCBnZW5lcmF0ZVNxdWFyZXMsIHJlY2lldmVBdHRhY2ssIGNoZWNrU3Vua1N0YXR1cywgcGxhY2VTaGlwT25TcXIgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkO1xuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJHZW5cIlxuaW1wb3J0IHVpRWxlbWVudHMgZnJvbSAnLi91aUVsZW1lbnRzJztcblxuY29uc3QgZ2FtZUxvb3AgPSAoKCkgPT4ge1xuICBsZXQgaHVtYW5QbGF5ZXIgPSBQbGF5ZXIoJ0hVTUFOJyk7XG4gIGxldCBhaVBsYXllciA9IFBsYXllcignSEFMMzAwMCcpO1xuXG4gIGNvbnN0IGFpUGxhY2VtZW50TG9vcCA9IGZ1bmN0aW9uKCkge1xuICAgIGRvIHtcbiAgICAgIGFpUGxheWVyLmdhbWVCb2FyZC5wbGFjZVNoaXBPblNxcihhaVBsYXllci53ZXN0QnlOb3J0aEFpKCksIGFpUGxheWVyLmRpcmVjdGlvbk9mUGxhY2VtZW50QWkoKSwgYWlQbGF5ZXIuc2hpcE5hbWVBaSgpKTtcbiAgICB9IHdoaWxlIChhaVBsYXllci5nYW1lQm9hcmQuc2hpcHNEYXRhLnNvbWUoZnVuY3Rpb24oc2hpcCkge1xuICAgICAgcmV0dXJuIHNoaXAuc2hpcFBsYWNlZE9uQm9hcmQgPT09IGZhbHNlXG4gICAgfSkpXG4gIH07XG5cbiAgY29uc3QgcGxheWVyUGxhY2VtZW50TG9vcCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChodW1hblBsYXllci5nYW1lQm9hcmQuc2hpcHNEYXRhLnNvbWUoZnVuY3Rpb24oc2hpcCkge1xuICAgICAgcmV0dXJuIHNoaXAuc2hpcFBsYWNlZE9uQm9hcmQgPT09IGZhbHNlXG4gICAgfSkpIHtcbiAgICAgIGRvIHtcbiAgICAgICAgaHVtYW5QbGF5ZXIuZ2FtZUJvYXJkLnBsYWNlU2hpcE9uU3FyKGh1bWFuUGxheWVyLndlc3RCeU5vcnRoQWkoKSwgaHVtYW5QbGF5ZXIuZGlyZWN0aW9uT2ZQbGFjZW1lbnRBaSgpLCBodW1hblBsYXllci5zaGlwTmFtZUFpKCkpO1xuICAgICAgfSB3aGlsZSAoaHVtYW5QbGF5ZXIuZ2FtZUJvYXJkLnNoaXBzRGF0YS5zb21lKGZ1bmN0aW9uKHNoaXApIHtcbiAgICAgICAgcmV0dXJuIHNoaXAuc2hpcFBsYWNlZE9uQm9hcmQgPT09IGZhbHNlXG4gICAgICB9KSk7XG4gICAgfTtcbiAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZSgnLmFpR3JpZCcsICdzdHlsZScsICdwb2ludGVyLWV2ZW50czogYWxsJylcbiAgfTtcblxuICBjb25zdCB0dXJuTG9naWMgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnSFVNQU4gR09OTkEgR0lUSCBJVCEgWUFIIE1BTiEnKVxuICAgIGxldCBjb29yZGluYXRlO1xuICAgIGRvIHtcbiAgICAgIGNvb3JkaW5hdGUgPSBodW1hblBsYXllci53ZXN0QnlOb3J0aEFpKCk7XG4gICAgfSB3aGlsZSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmh1bWFuV2VzdEJ5Tm9ydGgke2Nvb3JkaW5hdGV9YCkgPT09IG51bGwpO1xuICAgIGxldCBwbGF5ZXJIaXRTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaHVtYW5XZXN0QnlOb3J0aCR7Y29vcmRpbmF0ZX1gKTtcbiAgICBjb25zb2xlLmxvZygnSEFMIGNob29zZSByYW5kb20gbnVtYmVyOiAnICsgY29vcmRpbmF0ZSlcbiAgICBjb25zb2xlLmxvZygnSEFMIGlzIHRhcmdldGluZzogJyArIHBsYXllckhpdFNxdWFyZSlcbiAgICBodW1hblBsYXllci5nYW1lQm9hcmQucmVjaWV2ZUF0dGFjayhjb29yZGluYXRlLCBwbGF5ZXJIaXRTcXVhcmUpO1xuICB9XG4gIGxldCBjbGlja2VkVmFsdWU7XG4gIGxldCBjbGlja2VkU3F1YXJlO1xuICBjb25zdCBnZW5lcmF0ZUdhbWVFbGVtZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnRCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluTWVudUNvbnRhaW5lcicpLnJlbW92ZSgpO1xuXG4gICAgICB1aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdzY29yZURpdicsIG51bGwsICcuY29udGVudCcsIDEpO1xuICAgICAgdWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdwJywgJ3BsYXllclNjb3JlJywgbnVsbCwgJy5zY29yZURpdicsIDEpO1xuICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoJy5wbGF5ZXJTY29yZScsICcwJyk7XG4gICAgICB1aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ3AnLCAnYWlTY29yZScsIG51bGwsICcuc2NvcmVEaXYnLCAxKTtcbiAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KCcuYWlTY29yZScsICcwJyk7XG5cbiAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ3JuZFNoaXBQbGFjZW1lbnRCdG4nLCBudWxsLCAnLnNjb3JlRGl2JywgMSk7XG4gICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudCgnLnJuZFNoaXBQbGFjZW1lbnRCdG4nLCAnUk5EIFNISVAgUExBQ0VNRU5UJyk7XG4gICAgICB1aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICduZXdSb3VuZEJ0bicsIG51bGwsICcuc2NvcmVEaXYnLCAxKTtcbiAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KCcubmV3Um91bmRCdG4nLCAnTkVXIFJPVU5EJyk7XG4gICAgICB1aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdxdWl0R2FtZUJ0bicsIG51bGwsICcuc2NvcmVEaXYnLCAxKTtcbiAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KCcucXVpdEdhbWVCdG4nLCAnUVVJVCBHQU1FJyk7XG5cbiAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2dyaWREaXYnLCBudWxsLCAnLmNvbnRlbnQnLCAxKTtcbiAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3BsYXllckdyaWQnLCBudWxsLCAnLmdyaWREaXYnLCAxKTtcbiAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2h1bWFuU3F1YXJlJywgJ2h1bWFuUGxheWVyJywgJy5wbGF5ZXJHcmlkJywgMTAwKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwMDsgaSsrKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5odW1hblNxdWFyZSR7aX1gKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChjbGlja2VkKSA9PiB7XG4gICAgICAgICAgY2xpY2tlZFZhbHVlID0gcGFyc2VJbnQoY2xpY2tlZC5zcmNFbGVtZW50LmlubmVyVGV4dCk7XG4gICAgICAgICAgY2xpY2tlZFNxdWFyZSA9IGNsaWNrZWQub3JpZ2luYWxUYXJnZXQuY2xhc3NMaXN0WzFdO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsaWNrZWRTcXVhcmV9YCkuc2V0QXR0cmlidXRlKCdzdHlsZScsICdib3JkZXI6IHNvbGlkIDJweCByZWQnKTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyR3JpZGApLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncG9pbnRlci1ldmVudHM6IG5vbmUnKTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRGb3JtJykuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiB2aXNpYmxlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmh1bWFuU3F1YXJlJHtpfWAsIGAke2h1bWFuUGxheWVyLmdhbWVCb2FyZC5nYW1lQm9hcmRTcXJzW2kgLSAxXS53ZXN0QnlOb3J0aH1gKTtcbiAgICAgIH07XG4gICAgICB1aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdhaUdyaWQnLCBudWxsLCAnLmdyaWREaXYnLCAxKTtcbiAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2FpU3F1YXJlJywgJ2FpUGxheWVyJywgJy5haUdyaWQnLCAxMDApO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTAwOyBpKyspIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFpU3F1YXJlJHtpfWApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGNsaWNrZWQpID0+IHtcbiAgICAgICAgICBjb25zdCBhaUhpdFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsaWNrZWQub3JpZ2luYWxUYXJnZXQuY2xhc3NMaXN0WzFdfWApXG4gICAgICAgICAgYWlQbGF5ZXIuZ2FtZUJvYXJkLnJlY2lldmVBdHRhY2socGFyc2VJbnQoY2xpY2tlZC5zcmNFbGVtZW50LmlubmVyVGV4dCksIGFpSGl0U3F1YXJlKVxuICAgICAgICB9KTtcbiAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5haVNxdWFyZSR7aX1gLCBgJHthaVBsYXllci5nYW1lQm9hcmQuZ2FtZUJvYXJkU3Fyc1tpIC0gMV0ud2VzdEJ5Tm9ydGh9YCk7XG4gICAgICB9O1xuXG4gICAgICB1aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCAnaW5wdXRGb3JtJywgbnVsbCwgJy5ncmlkRGl2JywgMSlcbiAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKCcuaW5wdXRGb3JtJywgJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnLCAnYWN0aW9uJywgJycsIG51bGwsIG51bGwpXG5cbiAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCAnY2hvaWNlVHdvJywgbnVsbCwgJy5pbnB1dEZvcm0nLCAxKVxuICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoJy5jaG9pY2VUd28nLCAnRGlyZWN0aW9uIChOLCBTLCBXLCBFKTonKTtcbiAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAnaW5wdXROb3J0aCcsIG51bGwsICcuaW5wdXRGb3JtJywgMSlcbiAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKCcuaW5wdXROb3J0aCcsICd0eXBlJywgJ3JhZGlvJywgJ3ZhbHVlJywgJ25vcnRoJywgJ25hbWUnLCAnY2hvaWNlVHdvJywgbnVsbCwgbnVsbClcbiAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAnaW5wdXRTb3V0aCcsIG51bGwsICcuaW5wdXRGb3JtJywgMSlcbiAgICAgIHVpRWxlbWVudHMuc2V0QXR0cmlidXRlKCcuaW5wdXRTb3V0aCcsICd0eXBlJywgJ3JhZGlvJywgJ3ZhbHVlJywgJ3NvdXRoJywgJ25hbWUnLCAnY2hvaWNlVHdvJywgbnVsbCwgbnVsbClcbiAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAnaW5wdXRXZXN0JywgbnVsbCwgJy5pbnB1dEZvcm0nLCAxKVxuICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoJy5pbnB1dFdlc3QnLCAndHlwZScsICdyYWRpbycsICd2YWx1ZScsICd3ZXN0JywgJ25hbWUnLCAnY2hvaWNlVHdvJywgbnVsbCwgbnVsbClcbiAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAnaW5wdXRFYXN0JywgbnVsbCwgJy5pbnB1dEZvcm0nLCAxKVxuICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoJy5pbnB1dEVhc3QnLCAndHlwZScsICdyYWRpbycsICd2YWx1ZScsICdlYXN0JywgJ25hbWUnLCAnY2hvaWNlVHdvJywgbnVsbCwgbnVsbClcblxuICAgICAgdWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdsYWJlbCcsICdjaG9pY2VUaHJlZScsIG51bGwsICcuaW5wdXRGb3JtJywgMSlcbiAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KCcuY2hvaWNlVGhyZWUnLCBgU2l6ZSAoU21hbGxTaGlwLCBNZWRpdW1TaGlwLCBMYXJnZVNoaXApYCk7XG4gICAgICB1aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgJ2lucHV0U1MnLCBudWxsLCAnLmlucHV0Rm9ybScsIDEpXG4gICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZSgnLmlucHV0U1MnLCAndHlwZScsICdyYWRpbycsICd2YWx1ZScsICdTbWFsbFNoaXAnLCAnbmFtZScsICdjaG9pY2VUaHJlZScsIG51bGwsIG51bGwpXG4gICAgICB1aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgJ2lucHV0TVMnLCBudWxsLCAnLmlucHV0Rm9ybScsIDEpXG4gICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZSgnLmlucHV0TVMnLCAndHlwZScsICdyYWRpbycsICd2YWx1ZScsICdNZWRpdW1TaGlwJywgJ25hbWUnLCAnY2hvaWNlVGhyZWUnLCBudWxsLCBudWxsKVxuICAgICAgdWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdpbnB1dCcsICdpbnB1dExTJywgbnVsbCwgJy5pbnB1dEZvcm0nLCAxKVxuICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoJy5pbnB1dExTJywgJ3R5cGUnLCAncmFkaW8nLCAndmFsdWUnLCAnTGFyZ2VTaGlwJywgJ25hbWUnLCAnY2hvaWNlVGhyZWUnLCBudWxsLCBudWxsKVxuXG4gICAgICB1aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdjb25maXJtSW5wdXRCdG4nLCBudWxsLCAnLmlucHV0Rm9ybScsIDEpO1xuICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoJy5jb25maXJtSW5wdXRCdG4nLCAndHlwZScsICAnYnV0dG9uJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbClcbiAgICAgIHVpRWxlbWVudHMudGV4dENvbnRlbnRGb3JFbGVtZW50KCcuY29uZmlybUlucHV0QnRuJywgJ0NvbmZpcm0nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtSW5wdXRCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImNob2ljZVR3b1wiXTpjaGVja2VkJyk7XG4gICAgICAgIGNvbnN0IHNoaXBTaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImNob2ljZVRocmVlXCJdOmNoZWNrZWQnKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRGb3JtJykuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lJylcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xpY2tlZFNxdWFyZX1gKS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JvcmRlcjogc29saWQgMnB4IHJnYigxMTQsIDEyMywgMjApJyk7XG4gICAgICAgIGh1bWFuUGxheWVyLmdhbWVCb2FyZC5wbGFjZVNoaXBPblNxcihjbGlja2VkVmFsdWUsICBkaXJlY3Rpb24udmFsdWUsIHNoaXBTaXplLnZhbHVlKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllckdyaWRgKS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3BvaW50ZXItZXZlbnRzOiBhbGwnKTtcbiAgICAgICAgaWYgKGh1bWFuUGxheWVyLmdhbWVCb2FyZC5zaGlwc0RhdGEuZXZlcnkoZnVuY3Rpb24oc2hpcCkge1xuICAgICAgICAgIC8vIGl0IGRvZXNuJ3Qgd29yayBhcyBpbnRlbmRlZCBpbiBwbGF4ZVNoaXBPblNxciBtZXRob2RcbiAgICAgICAgICByZXR1cm4gc2hpcC5zaGlwUGxhY2VkT25Cb2FyZCA9PT0gdHJ1ZVxuICAgICAgICB9KSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdCcmFoJylcbiAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZSgnLmFpR3JpZCcsICdzdHlsZScsICdwb2ludGVyLWV2ZW50czogYWxsJylcbiAgICAgICAgfVxuICAgICAgICBjbGlja2VkVmFsdWUgPSBudWxsO1xuICAgICAgICBjbGlja2VkU3F1YXJlID0gbnVsbDtcbiAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpdEdhbWVCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlRGl2JykucmVtb3ZlKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkRGl2JykucmVtb3ZlKCk7XG4gICAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ21haW5NZW51Q29udGFpbmVyJywgbnVsbCwgJy5jb250ZW50JywgMSk7XG4gICAgICAgIHVpRWxlbWVudHMuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ3N0YXJ0QnRuJywgbnVsbCwgJy5tYWluTWVudUNvbnRhaW5lcicsIDEpO1xuICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudCgnLnN0YXJ0QnRuJywgJ1NUQVJUIEdBTUUnKTtcbiAgICAgICAgaHVtYW5QbGF5ZXIgPSBQbGF5ZXIoJ0hVTUFOJyk7XG4gICAgICAgIGFpUGxheWVyID0gUGxheWVyKCdIQUwzMDAwJyk7XG4gICAgICAgIGdhbWVMb29wLmdlbmVyYXRlR2FtZUVsZW1lbnRzKCk7XG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJuZFNoaXBQbGFjZW1lbnRCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcGxheWVyUGxhY2VtZW50TG9vcCgpXG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1JvdW5kQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwMDsgaSsrKSB7XG4gICAgICAgICAgdWlFbGVtZW50cy50ZXh0Q29udGVudEZvckVsZW1lbnQoYC5odW1hblNxdWFyZSR7aX1gLCBgJHtodW1hblBsYXllci5nYW1lQm9hcmQuZ2FtZUJvYXJkU3Fyc1tpIC0gMV0ud2VzdEJ5Tm9ydGh9YCk7XG4gICAgICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoYC5odW1hblNxdWFyZSR7aX1gLCAnc3R5bGUnLCAnY29sb3I6IHdoaXRlJylcbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTAwOyBpKyspIHtcbiAgICAgICAgICB1aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudChgLmFpU3F1YXJlJHtpfWAsIGAke2FpUGxheWVyLmdhbWVCb2FyZC5nYW1lQm9hcmRTcXJzW2kgLSAxXS53ZXN0QnlOb3J0aH1gKTtcbiAgICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZShgLmFpU3F1YXJlJHtpfWAsICdzdHlsZScsICdjb2xvcjogd2hpdGUnKVxuICAgICAgICB9O1xuICAgICAgICBodW1hblBsYXllci5nZW5lcmF0ZU5ld0dhbWVCb2FyZCgnSFVNQU4nKVxuICAgICAgICBhaVBsYXllci5nZW5lcmF0ZU5ld0dhbWVCb2FyZCgnSEFMMzAwMCcpXG4gICAgICAgIGFpUGxhY2VtZW50TG9vcCgpO1xuICAgICAgICB1aUVsZW1lbnRzLnNldEF0dHJpYnV0ZSgnLmFpR3JpZCcsICdzdHlsZScsICdwb2ludGVyLWV2ZW50czogbm9uZScpO1xuICAgICAgfSk7XG5cbiAgICAgIGFpUGxhY2VtZW50TG9vcCgpO1xuICAgICAgdWlFbGVtZW50cy5zZXRBdHRyaWJ1dGUoJy5haUdyaWQnLCAnc3R5bGUnLCAncG9pbnRlci1ldmVudHM6IG5vbmUnKTtcbiAgICB9KTtcbiAgfTtcbiAgXG5cbiAgcmV0dXJuIHsgaHVtYW5QbGF5ZXIsIGFpUGxheWVyLCBhaVBsYWNlbWVudExvb3AsIHBsYXllclBsYWNlbWVudExvb3AsIHR1cm5Mb2dpYywgZ2VuZXJhdGVHYW1lRWxlbWVudHMgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZUxvb3A7IiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tICcuL2dhbWVib2FyZEdlbidcblxuY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcbiAgbGV0IHNjb3JlID0gMDtcbiAgbGV0IHBsYXllck5hbWUgPSBuYW1lO1xuICBcbiAgY29uc3QgdXBkYXRlU2NvcmUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNjb3JlICs9IDE7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKCdTQ09SRSBVUERBVEUhJyArIHRoaXMuc2NvcmUpO1xuICB9XG5cbiAgY29uc3Qgcm5kTnJBaSA9IGZ1bmN0aW9uICh1cHBlckxpbWl0LCBpbmNsdXNpdmVPck5vdCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB1cHBlckxpbWl0KSArIGluY2x1c2l2ZU9yTm90O1xuICB9O1xuXG4gIGNvbnN0IHdlc3RCeU5vcnRoQWkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQocm5kTnJBaSgxMCwgMSkudG9TdHJpbmcoKSArIHJuZE5yQWkoMTAsIDEpLnRvU3RyaW5nKCkpO1xuICB9O1xuICBjb25zdCBkaXJlY3Rpb25PZlBsYWNlbWVudEFpID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGRpcmVjdGlvbk9mUGxhY2VtZW50QXJyYXkgPSBbJ25vcnRoJywgJ3NvdXRoJywgJ2Vhc3QnLCAnd2VzdCddO1xuICAgIHJldHVybiBkaXJlY3Rpb25PZlBsYWNlbWVudEFycmF5W3JuZE5yQWkoNCwgMCldO1xuICB9O1xuICBjb25zdCBzaGlwTmFtZUFpID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHNoaXBOYW1lQXJyYXkgPSBbJ1NtYWxsU2hpcCcsICdNZWRpdW1TaGlwJywgJ0xhcmdlU2hpcCddO1xuICAgIHJldHVybiBzaGlwTmFtZUFycmF5W3JuZE5yQWkoMywgMCldXG4gIH07XG5cbiAgbGV0IGdhbWVCb2FyZCA9IEdhbWVCb2FyZChgJHtuYW1lfWApO1xuICBjb25zdCBnZW5lcmF0ZU5ld0dhbWVCb2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2FtZUJvYXJkID0gR2FtZUJvYXJkKGAke25hbWV9YCk7XG4gIH1cblxuICByZXR1cm4geyBwbGF5ZXJOYW1lLCBzY29yZSwgdXBkYXRlU2NvcmUsIHdlc3RCeU5vcnRoQWksIGRpcmVjdGlvbk9mUGxhY2VtZW50QWksIHNoaXBOYW1lQWksIGdhbWVCb2FyZCwgZ2VuZXJhdGVOZXdHYW1lQm9hcmQgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiY29uc3QgU2hpcCA9IChzaGlwU2l6ZUxlbmd0aCwgc2hpcE5yRm9yTmFtZSwgc2hpcE5yKSA9PiB7XG4gIGxldCBuYW1lID0gYCR7c2hpcE5yRm9yTmFtZX1gO1xuICBsZXQgc2hpcExlbmd0aCA9IHNoaXBTaXplTGVuZ3RoO1xuICBsZXQgc2hpcFBsYWNlZE9uQm9hcmQgPSBmYWxzZTtcblxuICBjb25zdCBoaXQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNoaXBMZW5ndGggLT0gMTtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5zaGlwTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IGlzIHN1bmshYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gaXMgQUxJVkUhYCk7XG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4geyBuYW1lLCBzaGlwTGVuZ3RoLCBzaGlwUGxhY2VkT25Cb2FyZCwgaXNTdW5rLCBoaXQgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwOyIsImltcG9ydCBnYW1lTG9vcCBmcm9tICcuL21haW5HYW1lTG9vcCc7XG5cbmNvbnN0IHVpRWxlbWVudHMgPSAoKCkgPT4ge1xuICBjb25zdCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24oZWxlbWVudCwgY2xhc3NOYW1lLCBzcGVjaWFsQ2xhc3NOYW1lLCBxdWVyeVNlbGVjdG9yLCBuck9mRWxlbWVudHMpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuck9mRWxlbWVudHM7IGkrKykge1xuICAgICAgY29uc3QgcVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeVNlbGVjdG9yKTtcbiAgICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgY3JlYXRlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICBjcmVhdGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lICsgaSk7XG4gICAgICBpZiAoc3BlY2lhbENsYXNzTmFtZSAhPT0gbnVsbCAmJiBzcGVjaWFsQ2xhc3NOYW1lID09PSAnaHVtYW5QbGF5ZXInKSB7XG4gICAgICAgIGNyZWF0ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChgaHVtYW5XZXN0QnlOb3J0aCR7Z2FtZUxvb3AuaHVtYW5QbGF5ZXIuZ2FtZUJvYXJkLmdhbWVCb2FyZFNxcnNbaSAtIDFdLndlc3RCeU5vcnRofWApXG4gICAgICB9IGVsc2UgaWYgKHNwZWNpYWxDbGFzc05hbWUgIT09IG51bGwgJiYgc3BlY2lhbENsYXNzTmFtZSA9PT0gJ2FpUGxheWVyJykge1xuICAgICAgICBjcmVhdGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoYGFpV2VzdEJ5Tm9ydGgke2dhbWVMb29wLmFpUGxheWVyLmdhbWVCb2FyZC5nYW1lQm9hcmRTcXJzW2kgLSAxXS53ZXN0QnlOb3J0aH1gKVxuICAgICAgfVxuICAgICAgcVNlbGVjdG9yLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQpO1xuICAgIH07XG4gIH07XG5cbiAgY29uc3QgdGV4dENvbnRlbnRGb3JFbGVtZW50ID0gZnVuY3Rpb24gKHF1ZXJ5U2VsZWN0b3IsIHRleHQpIHtcbiAgICBjb25zdCBxU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5U2VsZWN0b3IpXG4gICAgcVNlbGVjdG9yLnRleHRDb250ZW50ID0gdGV4dDtcbiAgfTtcblxuICBjb25zdCBzZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbihzZWxlY3Rvciwgc2V0QXR0cmlidXRlMSwgYXR0MVZhbHVlLCBzZXRBdHRyaWJ1dGUyLCBhdHQyVmFsdWUsIHNldEF0dHJpYnV0ZTMsIGF0dDNWYWx1ZSApIHtcbiAgICBjb25zdCBxU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBxU2VsZWN0b3Iuc2V0QXR0cmlidXRlKHNldEF0dHJpYnV0ZTEsIGF0dDFWYWx1ZSk7XG4gICAgKHNldEF0dHJpYnV0ZTIgIT09IG51bGwpID8gcVNlbGVjdG9yLnNldEF0dHJpYnV0ZShzZXRBdHRyaWJ1dGUyLCBhdHQyVmFsdWUpIDogbnVsbDtcbiAgICAoc2V0QXR0cmlidXRlMyAhPT0gbnVsbCkgPyBxU2VsZWN0b3Iuc2V0QXR0cmlidXRlKHNldEF0dHJpYnV0ZTMsIGF0dDNWYWx1ZSkgOiBudWxsO1xuICB9O1xuXG4gIHJldHVybiB7IGNyZWF0ZUVsZW1lbnQsIHRleHRDb250ZW50Rm9yRWxlbWVudCwgc2V0QXR0cmlidXRlIH1cbn0pKCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgdWlFbGVtZW50cztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZVYuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZVYuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZVYuY3NzJztcbmltcG9ydCBnYW1lTG9vcCBmcm9tICcuL21haW5HYW1lTG9vcCc7XG5pbXBvcnQgdWlFbGVtZW50cyBmcm9tICcuL3VpRWxlbWVudHMnO1xuXG51aUVsZW1lbnRzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdtYWluTWVudUNvbnRhaW5lcicsIG51bGwsICcuY29udGVudCcsIDEpO1xudWlFbGVtZW50cy5jcmVhdGVFbGVtZW50KCdidXR0b24nLCAnc3RhcnRCdG4nLCBudWxsLCAnLm1haW5NZW51Q29udGFpbmVyJywgMSk7XG51aUVsZW1lbnRzLnRleHRDb250ZW50Rm9yRWxlbWVudCgnLnN0YXJ0QnRuJywgJ1NUQVJUIEdBTUUnKTtcbmdhbWVMb29wLmdlbmVyYXRlR2FtZUVsZW1lbnRzKCk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9