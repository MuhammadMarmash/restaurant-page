/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/643.png */ "./src/img/643.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --khaki: #ffde73;
    --honey: #eca43b;
    --chocolate: #c16a08;
    --yellow: #FFC60B;
}

*,
*::after,
*::before {
    padding: 0;
    margin: 0;
}

html {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-attachment: fixed;
    background-size: cover;
    min-height: 100vh;
    min-width: 100vw;
    font-family: 'Yusei Magic', sans-serif;
    overflow-x: hidden;
}

/* header area */

header {
    background-color: var(--khaki);
    height: 50px;
    margin-bottom: 45px;
    padding-top: 5px;
    box-sizing: border-box;
}

nav {
    width: 380px;
    margin: 0 auto;
    position: relative;
}

#tab-list {
    display: flex;
    list-style: none;
    gap: 20px;
    height: 45px;
    padding: 0px 20px;
}

#tab-list>li {
    border: 1px solid black;
    border-bottom: none;
    border-radius: 5px 5px 0px 0px;
    padding-top: 8px;
    flex: 1;
    text-align: center;
    z-index: 2;
    cursor: pointer;
}

.disabled {
    pointer-events: none;
    user-select: none;
    cursor: text;
}

#cover {
    position: absolute;
    background-color: #eca43b;
    width: 98px;
    height: 45px;
    z-index: 1;
}

#dripping {
    height: 45px;
    width: 98px;
    position: absolute;
    bottom: -44px;
    left: 1px;
}

.home-tab {
    left: 21px;
    top: 1px;
}

.menu-tab {
    left: 141px;
    top: 1px;
}

.contact-tab {
    right: 21px;
    top: 1px;
}

/* main area */

#content {
    position: relative;
    max-width: 810px;
    background-color: var(--khaki);
    padding: 55px;
    margin: 0 auto;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px
}

#content>* {
    background-color: var(--chocolate);
}

h1 {
    font-size: 45px;
    font-family: 'Potta One', cursive;

}

.heading {
    position: relative;
    margin: 0 auto;
    margin-bottom: 70px;
    width: 710px;
    height: 60px;
    padding: 10px;
    clip-path: polygon(0 33.3%, 6% 0, 94% 0, 100% 33.3%, 100% 66.6%, 94% 100%, 6% 100%, 0 66.6%);
}

.heading-text {
    background-color: var(--yellow);
    width: 710px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    clip-path: polygon(0 33.3%, 5% 0, 95% 0, 100% 33.3%, 100% 66.6%, 95% 100%, 5% 100%, 0 66.6%);
}

.decorations {
    background-color: transparent !important;
    width: 50px;
    position: absolute;
    z-index: 1;
}

#bee-left {
    top: 5px;
    left: 30px;
}

#bee-right {
    bottom: 1px;
    right: 37px;
    transform: rotate(-240deg);
}

#hive {
    width: 10%;
    top: 185px;
    left: 45%;
}

.crop-out {
    margin: 0 auto;
    width: 450px;
    height: 225px;
    padding: 20px;
    clip-path: polygon(0 21%, 11% 0, 89% 0, 100% 21%, 100% 79%, 89% 100%, 11% 100%, 0 79%);
}

.crop-in {
    background-color: var(--yellow);
    box-sizing: border-box;
    width: 450px;
    height: 225px;
    padding: 20px;
    clip-path: polygon(0 20%, 10% 0, 90% 0, 100% 20%, 100% 80%, 90% 100%, 10% 100%, 0 80%);
}

#review {
    padding: 16px 0px;
}

#customer {
    margin-left: 40px;
    font-weight: bold;
    font-size: 1.2em;
}


.hours {
    height: 250px;
}

.location {
    height: 100px;
}

.hours>h3,
.location>h3 {
    padding-left: 42px;
    font-size: 25px;
}

.hours>p,
.location>p {
    text-align: center;
}

.contact-header {
    height: 120px !important;
    width: 300px !important;
}

.contact-outer,
.contact-inner {
    height: 175px;
    position: relative;
}

.contact-inner>p {
    padding-left: 50px;
}

.contact-inner>h3 {
    margin: 18.720px 0;
}

.contact-pic {
    height: 100px;
    width: 150px;
    background-size: cover;
    position: absolute;
    border-radius: 20px;
    top: 30px;
    right: 30px;
}

/* footer area */
footer {
    box-sizing: border-box;
    background-color: var(--khaki);
    width: 100vw;
    height: 56px;
    padding-top: 15px;
    padding-bottom: 17px;
    margin-top: 45px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

footer>* {
    text-decoration: none;
    color: black;
    font-size: 12px;
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --khaki: #ffde73;\n    --honey: #eca43b;\n    --chocolate: #c16a08;\n    --yellow: #FFC60B;\n}\n\n*,\n*::after,\n*::before {\n    padding: 0;\n    margin: 0;\n}\n\nhtml {\n    background-image: url(../img/643.png);\n    background-attachment: fixed;\n    background-size: cover;\n    min-height: 100vh;\n    min-width: 100vw;\n    font-family: 'Yusei Magic', sans-serif;\n    overflow-x: hidden;\n}\n\n/* header area */\n\nheader {\n    background-color: var(--khaki);\n    height: 50px;\n    margin-bottom: 45px;\n    padding-top: 5px;\n    box-sizing: border-box;\n}\n\nnav {\n    width: 380px;\n    margin: 0 auto;\n    position: relative;\n}\n\n#tab-list {\n    display: flex;\n    list-style: none;\n    gap: 20px;\n    height: 45px;\n    padding: 0px 20px;\n}\n\n#tab-list>li {\n    border: 1px solid black;\n    border-bottom: none;\n    border-radius: 5px 5px 0px 0px;\n    padding-top: 8px;\n    flex: 1;\n    text-align: center;\n    z-index: 2;\n    cursor: pointer;\n}\n\n.disabled {\n    pointer-events: none;\n    user-select: none;\n    cursor: text;\n}\n\n#cover {\n    position: absolute;\n    background-color: #eca43b;\n    width: 98px;\n    height: 45px;\n    z-index: 1;\n}\n\n#dripping {\n    height: 45px;\n    width: 98px;\n    position: absolute;\n    bottom: -44px;\n    left: 1px;\n}\n\n.home-tab {\n    left: 21px;\n    top: 1px;\n}\n\n.menu-tab {\n    left: 141px;\n    top: 1px;\n}\n\n.contact-tab {\n    right: 21px;\n    top: 1px;\n}\n\n/* main area */\n\n#content {\n    position: relative;\n    max-width: 810px;\n    background-color: var(--khaki);\n    padding: 55px;\n    margin: 0 auto;\n    border-radius: 30px;\n    display: flex;\n    flex-direction: column;\n    gap: 30px\n}\n\n#content>* {\n    background-color: var(--chocolate);\n}\n\nh1 {\n    font-size: 45px;\n    font-family: 'Potta One', cursive;\n\n}\n\n.heading {\n    position: relative;\n    margin: 0 auto;\n    margin-bottom: 70px;\n    width: 710px;\n    height: 60px;\n    padding: 10px;\n    clip-path: polygon(0 33.3%, 6% 0, 94% 0, 100% 33.3%, 100% 66.6%, 94% 100%, 6% 100%, 0 66.6%);\n}\n\n.heading-text {\n    background-color: var(--yellow);\n    width: 710px;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    clip-path: polygon(0 33.3%, 5% 0, 95% 0, 100% 33.3%, 100% 66.6%, 95% 100%, 5% 100%, 0 66.6%);\n}\n\n.decorations {\n    background-color: transparent !important;\n    width: 50px;\n    position: absolute;\n    z-index: 1;\n}\n\n#bee-left {\n    top: 5px;\n    left: 30px;\n}\n\n#bee-right {\n    bottom: 1px;\n    right: 37px;\n    transform: rotate(-240deg);\n}\n\n#hive {\n    width: 10%;\n    top: 185px;\n    left: 45%;\n}\n\n.crop-out {\n    margin: 0 auto;\n    width: 450px;\n    height: 225px;\n    padding: 20px;\n    clip-path: polygon(0 21%, 11% 0, 89% 0, 100% 21%, 100% 79%, 89% 100%, 11% 100%, 0 79%);\n}\n\n.crop-in {\n    background-color: var(--yellow);\n    box-sizing: border-box;\n    width: 450px;\n    height: 225px;\n    padding: 20px;\n    clip-path: polygon(0 20%, 10% 0, 90% 0, 100% 20%, 100% 80%, 90% 100%, 10% 100%, 0 80%);\n}\n\n#review {\n    padding: 16px 0px;\n}\n\n#customer {\n    margin-left: 40px;\n    font-weight: bold;\n    font-size: 1.2em;\n}\n\n\n.hours {\n    height: 250px;\n}\n\n.location {\n    height: 100px;\n}\n\n.hours>h3,\n.location>h3 {\n    padding-left: 42px;\n    font-size: 25px;\n}\n\n.hours>p,\n.location>p {\n    text-align: center;\n}\n\n.contact-header {\n    height: 120px !important;\n    width: 300px !important;\n}\n\n.contact-outer,\n.contact-inner {\n    height: 175px;\n    position: relative;\n}\n\n.contact-inner>p {\n    padding-left: 50px;\n}\n\n.contact-inner>h3 {\n    margin: 18.720px 0;\n}\n\n.contact-pic {\n    height: 100px;\n    width: 150px;\n    background-size: cover;\n    position: absolute;\n    border-radius: 20px;\n    top: 30px;\n    right: 30px;\n}\n\n/* footer area */\nfooter {\n    box-sizing: border-box;\n    background-color: var(--khaki);\n    width: 100vw;\n    height: 56px;\n    padding-top: 15px;\n    padding-bottom: 17px;\n    margin-top: 45px;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\nfooter>* {\n    text-decoration: none;\n    color: black;\n    font-size: 12px;\n}"],"sourceRoot":""}]);
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
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/functions/clearContent.js":
/*!***************************************!*\
  !*** ./src/functions/clearContent.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clearContent)
/* harmony export */ });
function clearContent() {
    const content = document.querySelector("#content");
    let child = content.lastElementChild;
    while (child) {
        content.removeChild(child);
        child = content.lastElementChild;
    }
}


/***/ }),

/***/ "./src/functions/createElement.js":
/*!****************************************!*\
  !*** ./src/functions/createElement.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createElement = function ({
    type = "div",
    classes = 0,
    id = 0,
    src = 0,
    alt = 0,
    textContent = 0,
    href = 0,
    father = 0,
    title = 0,
    style = 0,
} = {}) {
    const element = document.createElement(type);
    if (classes !== 0) for (let i in classes) element.classList.add(classes[i]);
    if (id !== 0) element.id = id;
    if (src !== 0) element.src = src;
    if (alt !== 0) element.alt = alt;
    if (textContent !== 0) element.textContent = textContent;
    if (href !== 0) element.href = href;
    if (father !== 0) father.appendChild(element);
    if (title !== 0) element.title = title;
    if (style !== 0) element.style = style;

    return element;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);


/***/ }),

/***/ "./src/functions/firstLoad.js":
/*!************************************!*\
  !*** ./src/functions/firstLoad.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/header */ "./src/pages/header.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/footer */ "./src/pages/footer.js");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createElement */ "./src/functions/createElement.js");
// preps site the first time it's opened by making a header and loading home page




const firstLoad = function () {
    const body = document.querySelector("body");
    body.appendChild((0,_pages_header__WEBPACK_IMPORTED_MODULE_0__["default"])());
    document.querySelector("#home").classList.add("disabled");
    const main = document.createElement("main");
    (0,_createElement__WEBPACK_IMPORTED_MODULE_3__["default"])({ id: "content", father: main });
    body.appendChild(main);
    (0,_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
    body.appendChild((0,_pages_footer__WEBPACK_IMPORTED_MODULE_2__["default"])());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firstLoad);


/***/ }),

/***/ "./src/functions/setNav.js":
/*!*********************************!*\
  !*** ./src/functions/setNav.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setNav)
/* harmony export */ });
function setNav(current) {
    const cover = document.querySelector("#cover");
    cover.className = "";
    cover.classList.add(`${current}-tab`);

    const nodes = document.querySelector("#tab-list").childNodes;
    for (let node of nodes) node.classList.remove("disabled");
    document.getElementById(current).classList.add("disabled");
}


/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/createElement */ "./src/functions/createElement.js");
/* harmony import */ var _img_bee_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/bee.svg */ "./src/img/bee.svg");
/* harmony import */ var _img_mamabear_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/mamabear.png */ "./src/img/mamabear.png");
/* harmony import */ var _img_papabear_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/papabear.jpeg */ "./src/img/papabear.jpeg");
/* harmony import */ var _img_babybear_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/babybear.jpeg */ "./src/img/babybear.jpeg");






const contact = function () {
    const content = document.querySelector("#content");

    const main_heading = (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        father: content,
        classes: ["contact-header", "heading"],
    });

    (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        type: "img",
        id: "bee-left",
        classes: ["decorations"],
        src: _img_bee_svg__WEBPACK_IMPORTED_MODULE_1__,
        alt: "bee img",
        father: main_heading,
    });

    (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        type: "img",
        id: "bee-right",
        classes: ["decorations"],
        src: _img_bee_svg__WEBPACK_IMPORTED_MODULE_1__,
        alt: "bee img",
        father: main_heading,
    });

    const heading_text = (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        father: main_heading,
        classes: ["contact-header", "heading-text"],
    });

    (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        type: "h1",
        textContent: "Contact Us",
        father: heading_text,
    });

    const makeCard = function (worker) {
        const hours_card = (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            classes: ["crop-out", "contact-outer"],
            father: content,
        });

        const hours_card_in = (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            classes: ["crop-in", "contact-inner"],
            father: hours_card,
        });

        (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            type: "h3",
            textContent: worker["name"],
            father: hours_card_in,
        });

        let days = [worker["role"], worker["number"], worker["email"]];
        for (let day of days) {
            (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
                type: "p",
                textContent: day,
                father: hours_card_in,
            });
        }
        (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            title: `${worker["name"]}'s Photo`,
            classes: ["contact-pic"],
            style: `background-image: url(${worker["photo"]});`,
            father: hours_card_in,
        });
    };

    for (let worker of [
        {
            name: "Mama Bear",
            role: "Chef",
            number: "555-555-5554",
            email: "totallyRealEmail@notFake.com",
            photo: _img_mamabear_png__WEBPACK_IMPORTED_MODULE_2__,
        },
        {
            name: "Papa Bear",
            role: "Manager",
            number: "555-555-5555",
            email: "perfectlyRealEmail@notFake.com",
            photo: _img_papabear_jpeg__WEBPACK_IMPORTED_MODULE_3__,
        },
        {
            name: "Baby Bear",
            role: "Waiter",
            number: "555-555-5556",
            email: "totallyRealEmail@notFake.com",
            photo: _img_babybear_jpeg__WEBPACK_IMPORTED_MODULE_4__,
        },
    ]) {
        makeCard(worker);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);


/***/ }),

/***/ "./src/pages/footer.js":
/*!*****************************!*\
  !*** ./src/pages/footer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/createElement */ "./src/functions/createElement.js");

const footer = function () {
    const theFooter = document.createElement("footer");

    (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        type: "a",
        href: "http://www.freepik.com",
        textContent: "Hive icon made by Freepik - www.flaticon.com",
        father: theFooter,
    });

    (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        type: "a",
        href: "https://www.flaticon.com/authors/smashicons",
        textContent: "Bee icons made by Smashicons - www.flaticon.com",
        father: theFooter,
    });

    (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        type: "a",
        href: "https://www.freepik.com/vectors/food",
        textContent:
            "Background image created by dgim-studio - www.freepik.com",
        father: theFooter,
    });

    (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        type: "p",
        textContent: "design by Ben Eck",
        father: theFooter,
    });
    return theFooter;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);


/***/ }),

/***/ "./src/pages/header.js":
/*!*****************************!*\
  !*** ./src/pages/header.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_dripping_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/dripping.png */ "./src/img/dripping.png");
/* harmony import */ var _functions_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/createElement */ "./src/functions/createElement.js");



const headerDiv = function () {
    const header = document.createElement("header");

    const nav = (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({ type: "nav", father: header });

    const cover = (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({
        id: "cover",
        classes: ["home-tab"],
        father: nav,
    });

    (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({
        type: "img",
        id: "dripping",
        classes: ["disabled"],
        src: _img_dripping_png__WEBPACK_IMPORTED_MODULE_0__,
        alt: "honey dripping img",
        father: cover,
    });

    const tab_list = (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({ type: "ul", id: "tab-list", father: nav });

    for (let text of ["Home", "Menu", "Contact"])
        (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({
            type: "li",
            textContent: text,
            father: tab_list,
            id: text.toLowerCase(),
        });

    return header;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerDiv);


/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_bee_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/bee.svg */ "./src/img/bee.svg");
/* harmony import */ var _img_honeycomb_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/honeycomb.svg */ "./src/img/honeycomb.svg");
/* harmony import */ var _functions_createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/createElement */ "./src/functions/createElement.js");




const home = function () {
    const content = document.querySelector("#content");

    const main_heading = (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        classes: ["heading"],
        father: content,
    });

    (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        type: "img",
        id: "bee-left",
        classes: ["decorations"],
        src: _img_bee_svg__WEBPACK_IMPORTED_MODULE_0__,
        alt: "bee img",
        father: main_heading,
    });

    (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        type: "img",
        id: "bee-right",
        classes: ["decorations"],
        src: _img_bee_svg__WEBPACK_IMPORTED_MODULE_0__,
        alt: "bee img",
        father: main_heading,
    });

    const heading_text = (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        classes: ["heading-text"],
        father: main_heading,
    });

    (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        type: "h1",
        textContent: "Beary's Breakfast Bar",
        father: heading_text,
    });

    const review_card = (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        id: "review-card",
        classes: ["crop-out"],
        father: content,
    });

    const review_card_in = (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        classes: ["crop-in"],
        father: review_card,
    });

    (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        type: "p",
        id: "review",
        textContent: `eary's has the best porridge! The atmosphere and customer service make you feel like you are
        sitting in
        the
        middle of
        the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.`,
        father: review_card_in,
    });
    (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        type: "p",
        id: "customer",
        textContent: "MohammadMarmash",
        father: review_card_in,
    });

    const hours_card = (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        classes: ["crop-out", "hours"],
        father: content,
    });

    const hours_card_in = (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        classes: ["crop-in", "hours"],
        father: hours_card,
    });

    (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({ type: "h3", textContent: "Hours", father: hours_card_in });

    let days = [
        ["sunday", "8am - 8pm"],
        ["monday", "6am - 6pm"],
        ["tuesday", "6am - 6pm"],
        ["wednesday", "6am - 6pm"],
        ["thursday", "6am - 10pm"],
        ["friday", "6am - 10pm"],
        ["saturday", "8am - 10pm"],
    ];
    for (let day of days) {
        (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
            type: "p",
            textContent: `${day[0]}: ${day[1]}`,
            id: day[0],
            father: hours_card_in,
        });
    }

    const location_card = (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        classes: ["crop-out", "location"],
        father: content,
    });

    const location_card_in = (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        classes: ["crop-in", "location"],
        father: location_card,
    });

    (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        type: "h3",
        textContent: "Location",
        father: location_card_in,
    });

    (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        type: "p",
        textContent: "123 Forest Drive, Forestville, Maine",
        father: location_card_in,
    });

    (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        type: "img",
        father: content,
        classes: ["decorations"],
        id: "hive",
        src: _img_honeycomb_svg__WEBPACK_IMPORTED_MODULE_1__,
        al: "hive img",
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);


/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menu = function () {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


/***/ }),

/***/ "./src/img/643.png":
/*!*************************!*\
  !*** ./src/img/643.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ee069ca56012f433906.png";

/***/ }),

/***/ "./src/img/babybear.jpeg":
/*!*******************************!*\
  !*** ./src/img/babybear.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39337ca0124e9a4d663d.jpeg";

/***/ }),

/***/ "./src/img/bee.svg":
/*!*************************!*\
  !*** ./src/img/bee.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5759589f026baa86e75a.svg";

/***/ }),

/***/ "./src/img/dripping.png":
/*!******************************!*\
  !*** ./src/img/dripping.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8ff550e9e7c6e821764.png";

/***/ }),

/***/ "./src/img/honeycomb.svg":
/*!*******************************!*\
  !*** ./src/img/honeycomb.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f6b40b263827ecffca7.svg";

/***/ }),

/***/ "./src/img/mamabear.png":
/*!******************************!*\
  !*** ./src/img/mamabear.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56c8195f994a40bdf4cb.png";

/***/ }),

/***/ "./src/img/papabear.jpeg":
/*!*******************************!*\
  !*** ./src/img/papabear.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0fbfbd8a7052bc48e4c7.jpeg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/header */ "./src/pages/header.js");
/* harmony import */ var _functions_firstLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/firstLoad */ "./src/functions/firstLoad.js");
/* harmony import */ var _functions_createElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/createElement */ "./src/functions/createElement.js");
/* harmony import */ var _pages_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/footer */ "./src/pages/footer.js");
/* harmony import */ var _functions_clearContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/clearContent */ "./src/functions/clearContent.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/contact */ "./src/pages/contact.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _functions_setNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./functions/setNav */ "./src/functions/setNav.js");











(0,_functions_firstLoad__WEBPACK_IMPORTED_MODULE_2__["default"])();

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");

homeButton.addEventListener("click", function () {
    console.log("home");
    (0,_functions_setNav__WEBPACK_IMPORTED_MODULE_9__["default"])("home");
    (0,_functions_clearContent__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

menuButton.addEventListener("click", function () {
    console.log("menu");
    (0,_functions_setNav__WEBPACK_IMPORTED_MODULE_9__["default"])("menu");
    (0,_functions_clearContent__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_pages_menu__WEBPACK_IMPORTED_MODULE_8__["default"])();
});

contactButton.addEventListener("click", function () {
    console.log("contact");
    (0,_functions_setNav__WEBPACK_IMPORTED_MODULE_9__["default"])("contact");
    (0,_functions_clearContent__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_pages_contact__WEBPACK_IMPORTED_MODULE_7__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLHdHQUFpQztBQUM3RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxvRkFBb0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxL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O0FBQ1IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSw2REFBTTtBQUNWLElBQUksbUVBQVk7QUFDaEIsSUFBSSwwREFBTztBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mdW5jdGlvbnMvY2xlYXJDb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mdW5jdGlvbnMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZnVuY3Rpb25zL2ZpcnN0TG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZnVuY3Rpb25zL3NldE5hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZy82NDMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1raGFraTogI2ZmZGU3MztcbiAgICAtLWhvbmV5OiAjZWNhNDNiO1xuICAgIC0tY2hvY29sYXRlOiAjYzE2YTA4O1xuICAgIC0teWVsbG93OiAjRkZDNjBCO1xufVxuXG4qLFxuKjo6YWZ0ZXIsXG4qOjpiZWZvcmUge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5odG1sIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIG1pbi13aWR0aDogMTAwdnc7XG4gICAgZm9udC1mYW1pbHk6ICdZdXNlaSBNYWdpYycsIHNhbnMtc2VyaWY7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4vKiBoZWFkZXIgYXJlYSAqL1xuXG5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWtoYWtpKTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbm5hdiB7XG4gICAgd2lkdGg6IDM4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI3RhYi1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbn1cblxuI3RhYi1saXN0PmxpIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIGZsZXg6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHotaW5kZXg6IDI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGlzYWJsZWQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGN1cnNvcjogdGV4dDtcbn1cblxuI2NvdmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjYTQzYjtcbiAgICB3aWR0aDogOThweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgei1pbmRleDogMTtcbn1cblxuI2RyaXBwaW5nIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDk4cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTQ0cHg7XG4gICAgbGVmdDogMXB4O1xufVxuXG4uaG9tZS10YWIge1xuICAgIGxlZnQ6IDIxcHg7XG4gICAgdG9wOiAxcHg7XG59XG5cbi5tZW51LXRhYiB7XG4gICAgbGVmdDogMTQxcHg7XG4gICAgdG9wOiAxcHg7XG59XG5cbi5jb250YWN0LXRhYiB7XG4gICAgcmlnaHQ6IDIxcHg7XG4gICAgdG9wOiAxcHg7XG59XG5cbi8qIG1haW4gYXJlYSAqL1xuXG4jY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC13aWR0aDogODEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta2hha2kpO1xuICAgIHBhZGRpbmc6IDU1cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAzMHB4XG59XG5cbiNjb250ZW50Pioge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNob2NvbGF0ZSk7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdQb3R0YSBPbmUnLCBjdXJzaXZlO1xuXG59XG5cbi5oZWFkaW5nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgICB3aWR0aDogNzEwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMzMuMyUsIDYlIDAsIDk0JSAwLCAxMDAlIDMzLjMlLCAxMDAlIDY2LjYlLCA5NCUgMTAwJSwgNiUgMTAwJSwgMCA2Ni42JSk7XG59XG5cbi5oZWFkaW5nLXRleHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XG4gICAgd2lkdGg6IDcxMHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMzMuMyUsIDUlIDAsIDk1JSAwLCAxMDAlIDMzLjMlLCAxMDAlIDY2LjYlLCA5NSUgMTAwJSwgNSUgMTAwJSwgMCA2Ni42JSk7XG59XG5cbi5kZWNvcmF0aW9ucyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbn1cblxuI2JlZS1sZWZ0IHtcbiAgICB0b3A6IDVweDtcbiAgICBsZWZ0OiAzMHB4O1xufVxuXG4jYmVlLXJpZ2h0IHtcbiAgICBib3R0b206IDFweDtcbiAgICByaWdodDogMzdweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjQwZGVnKTtcbn1cblxuI2hpdmUge1xuICAgIHdpZHRoOiAxMCU7XG4gICAgdG9wOiAxODVweDtcbiAgICBsZWZ0OiA0NSU7XG59XG5cbi5jcm9wLW91dCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIGhlaWdodDogMjI1cHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAyMSUsIDExJSAwLCA4OSUgMCwgMTAwJSAyMSUsIDEwMCUgNzklLCA4OSUgMTAwJSwgMTElIDEwMCUsIDAgNzklKTtcbn1cblxuLmNyb3AtaW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgaGVpZ2h0OiAyMjVweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDIwJSwgMTAlIDAsIDkwJSAwLCAxMDAlIDIwJSwgMTAwJSA4MCUsIDkwJSAxMDAlLCAxMCUgMTAwJSwgMCA4MCUpO1xufVxuXG4jcmV2aWV3IHtcbiAgICBwYWRkaW5nOiAxNnB4IDBweDtcbn1cblxuI2N1c3RvbWVyIHtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xufVxuXG5cbi5ob3VycyB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbn1cblxuLmxvY2F0aW9uIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uaG91cnM+aDMsXG4ubG9jYXRpb24+aDMge1xuICAgIHBhZGRpbmctbGVmdDogNDJweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5ob3Vycz5wLFxuLmxvY2F0aW9uPnAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhY3QtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDEyMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWN0LW91dGVyLFxuLmNvbnRhY3QtaW5uZXIge1xuICAgIGhlaWdodDogMTc1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29udGFjdC1pbm5lcj5wIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG5cbi5jb250YWN0LWlubmVyPmgzIHtcbiAgICBtYXJnaW46IDE4LjcyMHB4IDA7XG59XG5cbi5jb250YWN0LXBpYyB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0b3A6IDMwcHg7XG4gICAgcmlnaHQ6IDMwcHg7XG59XG5cbi8qIGZvb3RlciBhcmVhICovXG5mb290ZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta2hha2kpO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE3cHg7XG4gICAgbWFyZ2luLXRvcDogNDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmZvb3Rlcj4qIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFD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QUFFQSxnQkFBZ0I7QUFDaEI7SUFDSSxzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWtoYWtpOiAjZmZkZTczO1xcbiAgICAtLWhvbmV5OiAjZWNhNDNiO1xcbiAgICAtLWNob2NvbGF0ZTogI2MxNmEwODtcXG4gICAgLS15ZWxsb3c6ICNGRkM2MEI7XFxufVxcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy82NDMucG5nKTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIGZvbnQtZmFtaWx5OiAnWXVzZWkgTWFnaWMnLCBzYW5zLXNlcmlmO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi8qIGhlYWRlciBhcmVhICovXFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta2hha2kpO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbm5hdiB7XFxuICAgIHdpZHRoOiAzODBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3RhYi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcbn1cXG5cXG4jdGFiLWxpc3Q+bGkge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwcHggMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xcbiAgICBmbGV4OiAxO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRpc2FibGVkIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHRleHQ7XFxufVxcblxcbiNjb3ZlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjYTQzYjtcXG4gICAgd2lkdGg6IDk4cHg7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuI2RyaXBwaW5nIHtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICB3aWR0aDogOThweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC00NHB4O1xcbiAgICBsZWZ0OiAxcHg7XFxufVxcblxcbi5ob21lLXRhYiB7XFxuICAgIGxlZnQ6IDIxcHg7XFxuICAgIHRvcDogMXB4O1xcbn1cXG5cXG4ubWVudS10YWIge1xcbiAgICBsZWZ0OiAxNDFweDtcXG4gICAgdG9wOiAxcHg7XFxufVxcblxcbi5jb250YWN0LXRhYiB7XFxuICAgIHJpZ2h0OiAyMXB4O1xcbiAgICB0b3A6IDFweDtcXG59XFxuXFxuLyogbWFpbiBhcmVhICovXFxuXFxuI2NvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1heC13aWR0aDogODEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWtoYWtpKTtcXG4gICAgcGFkZGluZzogNTVweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweFxcbn1cXG5cXG4jY29udGVudD4qIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hvY29sYXRlKTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDQ1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG90dGEgT25lJywgY3Vyc2l2ZTtcXG5cXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xcbiAgICB3aWR0aDogNzEwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMzMuMyUsIDYlIDAsIDk0JSAwLCAxMDAlIDMzLjMlLCAxMDAlIDY2LjYlLCA5NCUgMTAwJSwgNiUgMTAwJSwgMCA2Ni42JSk7XFxufVxcblxcbi5oZWFkaW5nLXRleHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbiAgICB3aWR0aDogNzEwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDMzLjMlLCA1JSAwLCA5NSUgMCwgMTAwJSAzMy4zJSwgMTAwJSA2Ni42JSwgOTUlIDEwMCUsIDUlIDEwMCUsIDAgNjYuNiUpO1xcbn1cXG5cXG4uZGVjb3JhdGlvbnMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jYmVlLWxlZnQge1xcbiAgICB0b3A6IDVweDtcXG4gICAgbGVmdDogMzBweDtcXG59XFxuXFxuI2JlZS1yaWdodCB7XFxuICAgIGJvdHRvbTogMXB4O1xcbiAgICByaWdodDogMzdweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTI0MGRlZyk7XFxufVxcblxcbiNoaXZlIHtcXG4gICAgd2lkdGg6IDEwJTtcXG4gICAgdG9wOiAxODVweDtcXG4gICAgbGVmdDogNDUlO1xcbn1cXG5cXG4uY3JvcC1vdXQge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBoZWlnaHQ6IDIyNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAyMSUsIDExJSAwLCA4OSUgMCwgMTAwJSAyMSUsIDEwMCUgNzklLCA4OSUgMTAwJSwgMTElIDEwMCUsIDAgNzklKTtcXG59XFxuXFxuLmNyb3AtaW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGhlaWdodDogMjI1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDIwJSwgMTAlIDAsIDkwJSAwLCAxMDAlIDIwJSwgMTAwJSA4MCUsIDkwJSAxMDAlLCAxMCUgMTAwJSwgMCA4MCUpO1xcbn1cXG5cXG4jcmV2aWV3IHtcXG4gICAgcGFkZGluZzogMTZweCAwcHg7XFxufVxcblxcbiNjdXN0b21lciB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuXFxuLmhvdXJzIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLmhvdXJzPmgzLFxcbi5sb2NhdGlvbj5oMyB7XFxuICAgIHBhZGRpbmctbGVmdDogNDJweDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4uaG91cnM+cCxcXG4ubG9jYXRpb24+cCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxMjBweCAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLmNvbnRhY3Qtb3V0ZXIsXFxuLmNvbnRhY3QtaW5uZXIge1xcbiAgICBoZWlnaHQ6IDE3NXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jb250YWN0LWlubmVyPnAge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxufVxcblxcbi5jb250YWN0LWlubmVyPmgzIHtcXG4gICAgbWFyZ2luOiAxOC43MjBweCAwO1xcbn1cXG5cXG4uY29udGFjdC1waWMge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgdG9wOiAzMHB4O1xcbiAgICByaWdodDogMzBweDtcXG59XFxuXFxuLyogZm9vdGVyIGFyZWEgKi9cXG5mb290ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1raGFraSk7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiA1NnB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE3cHg7XFxuICAgIG1hcmdpbi10b3A6IDQ1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb290ZXI+KiB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgbGV0IGNoaWxkID0gY29udGVudC5sYXN0RWxlbWVudENoaWxkO1xuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgY2hpbGQgPSBjb250ZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgfVxufVxuIiwiY29uc3QgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh7XG4gICAgdHlwZSA9IFwiZGl2XCIsXG4gICAgY2xhc3NlcyA9IDAsXG4gICAgaWQgPSAwLFxuICAgIHNyYyA9IDAsXG4gICAgYWx0ID0gMCxcbiAgICB0ZXh0Q29udGVudCA9IDAsXG4gICAgaHJlZiA9IDAsXG4gICAgZmF0aGVyID0gMCxcbiAgICB0aXRsZSA9IDAsXG4gICAgc3R5bGUgPSAwLFxufSA9IHt9KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgaWYgKGNsYXNzZXMgIT09IDApIGZvciAobGV0IGkgaW4gY2xhc3NlcykgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzZXNbaV0pO1xuICAgIGlmIChpZCAhPT0gMCkgZWxlbWVudC5pZCA9IGlkO1xuICAgIGlmIChzcmMgIT09IDApIGVsZW1lbnQuc3JjID0gc3JjO1xuICAgIGlmIChhbHQgIT09IDApIGVsZW1lbnQuYWx0ID0gYWx0O1xuICAgIGlmICh0ZXh0Q29udGVudCAhPT0gMCkgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIGlmIChocmVmICE9PSAwKSBlbGVtZW50LmhyZWYgPSBocmVmO1xuICAgIGlmIChmYXRoZXIgIT09IDApIGZhdGhlci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICBpZiAodGl0bGUgIT09IDApIGVsZW1lbnQudGl0bGUgPSB0aXRsZTtcbiAgICBpZiAoc3R5bGUgIT09IDApIGVsZW1lbnQuc3R5bGUgPSBzdHlsZTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbiIsIi8vIHByZXBzIHNpdGUgdGhlIGZpcnN0IHRpbWUgaXQncyBvcGVuZWQgYnkgbWFraW5nIGEgaGVhZGVyIGFuZCBsb2FkaW5nIGhvbWUgcGFnZVxuaW1wb3J0IGhlYWRlckRpdiBmcm9tIFwiLi4vcGFnZXMvaGVhZGVyXCI7XG5pbXBvcnQgaG9tZSBmcm9tIFwiLi4vcGFnZXMvaG9tZVwiO1xuaW1wb3J0IGZvb3RlciBmcm9tIFwiLi4vcGFnZXMvZm9vdGVyXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5jb25zdCBmaXJzdExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KCkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZVwiKS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIGNyZWF0ZUVsZW1lbnQoeyBpZDogXCJjb250ZW50XCIsIGZhdGhlcjogbWFpbiB9KTtcbiAgICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGhvbWUoKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGZvb3RlcigpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZpcnN0TG9hZDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldE5hdihjdXJyZW50KSB7XG4gICAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdmVyXCIpO1xuICAgIGNvdmVyLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgY292ZXIuY2xhc3NMaXN0LmFkZChgJHtjdXJyZW50fS10YWJgKTtcblxuICAgIGNvbnN0IG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWItbGlzdFwiKS5jaGlsZE5vZGVzO1xuICAgIGZvciAobGV0IG5vZGUgb2Ygbm9kZXMpIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGN1cnJlbnQpLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbn1cbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi9mdW5jdGlvbnMvY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IGJlZUljb24gZnJvbSBcIi4uL2ltZy9iZWUuc3ZnXCI7XG5pbXBvcnQgbWFtYUJlYXIgZnJvbSBcIi4uL2ltZy9tYW1hYmVhci5wbmdcIjtcbmltcG9ydCBwYXBhQmVhciBmcm9tIFwiLi4vaW1nL3BhcGFiZWFyLmpwZWdcIjtcbmltcG9ydCBiYWJ5QmVhciBmcm9tIFwiLi4vaW1nL2JhYnliZWFyLmpwZWdcIjtcblxuY29uc3QgY29udGFjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgY29uc3QgbWFpbl9oZWFkaW5nID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIGZhdGhlcjogY29udGVudCxcbiAgICAgICAgY2xhc3NlczogW1wiY29udGFjdC1oZWFkZXJcIiwgXCJoZWFkaW5nXCJdLFxuICAgIH0pO1xuXG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHR5cGU6IFwiaW1nXCIsXG4gICAgICAgIGlkOiBcImJlZS1sZWZ0XCIsXG4gICAgICAgIGNsYXNzZXM6IFtcImRlY29yYXRpb25zXCJdLFxuICAgICAgICBzcmM6IGJlZUljb24sXG4gICAgICAgIGFsdDogXCJiZWUgaW1nXCIsXG4gICAgICAgIGZhdGhlcjogbWFpbl9oZWFkaW5nLFxuICAgIH0pO1xuXG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHR5cGU6IFwiaW1nXCIsXG4gICAgICAgIGlkOiBcImJlZS1yaWdodFwiLFxuICAgICAgICBjbGFzc2VzOiBbXCJkZWNvcmF0aW9uc1wiXSxcbiAgICAgICAgc3JjOiBiZWVJY29uLFxuICAgICAgICBhbHQ6IFwiYmVlIGltZ1wiLFxuICAgICAgICBmYXRoZXI6IG1haW5faGVhZGluZyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGhlYWRpbmdfdGV4dCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICBmYXRoZXI6IG1haW5faGVhZGluZyxcbiAgICAgICAgY2xhc3NlczogW1wiY29udGFjdC1oZWFkZXJcIiwgXCJoZWFkaW5nLXRleHRcIl0sXG4gICAgfSk7XG5cbiAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdHlwZTogXCJoMVwiLFxuICAgICAgICB0ZXh0Q29udGVudDogXCJDb250YWN0IFVzXCIsXG4gICAgICAgIGZhdGhlcjogaGVhZGluZ190ZXh0LFxuICAgIH0pO1xuXG4gICAgY29uc3QgbWFrZUNhcmQgPSBmdW5jdGlvbiAod29ya2VyKSB7XG4gICAgICAgIGNvbnN0IGhvdXJzX2NhcmQgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIGNsYXNzZXM6IFtcImNyb3Atb3V0XCIsIFwiY29udGFjdC1vdXRlclwiXSxcbiAgICAgICAgICAgIGZhdGhlcjogY29udGVudCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaG91cnNfY2FyZF9pbiA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgY2xhc3NlczogW1wiY3JvcC1pblwiLCBcImNvbnRhY3QtaW5uZXJcIl0sXG4gICAgICAgICAgICBmYXRoZXI6IGhvdXJzX2NhcmQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdHlwZTogXCJoM1wiLFxuICAgICAgICAgICAgdGV4dENvbnRlbnQ6IHdvcmtlcltcIm5hbWVcIl0sXG4gICAgICAgICAgICBmYXRoZXI6IGhvdXJzX2NhcmRfaW4sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBkYXlzID0gW3dvcmtlcltcInJvbGVcIl0sIHdvcmtlcltcIm51bWJlclwiXSwgd29ya2VyW1wiZW1haWxcIl1dO1xuICAgICAgICBmb3IgKGxldCBkYXkgb2YgZGF5cykge1xuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJwXCIsXG4gICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IGRheSxcbiAgICAgICAgICAgICAgICBmYXRoZXI6IGhvdXJzX2NhcmRfaW4sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIHRpdGxlOiBgJHt3b3JrZXJbXCJuYW1lXCJdfSdzIFBob3RvYCxcbiAgICAgICAgICAgIGNsYXNzZXM6IFtcImNvbnRhY3QtcGljXCJdLFxuICAgICAgICAgICAgc3R5bGU6IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHt3b3JrZXJbXCJwaG90b1wiXX0pO2AsXG4gICAgICAgICAgICBmYXRoZXI6IGhvdXJzX2NhcmRfaW4sXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmb3IgKGxldCB3b3JrZXIgb2YgW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIk1hbWEgQmVhclwiLFxuICAgICAgICAgICAgcm9sZTogXCJDaGVmXCIsXG4gICAgICAgICAgICBudW1iZXI6IFwiNTU1LTU1NS01NTU0XCIsXG4gICAgICAgICAgICBlbWFpbDogXCJ0b3RhbGx5UmVhbEVtYWlsQG5vdEZha2UuY29tXCIsXG4gICAgICAgICAgICBwaG90bzogbWFtYUJlYXIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiUGFwYSBCZWFyXCIsXG4gICAgICAgICAgICByb2xlOiBcIk1hbmFnZXJcIixcbiAgICAgICAgICAgIG51bWJlcjogXCI1NTUtNTU1LTU1NTVcIixcbiAgICAgICAgICAgIGVtYWlsOiBcInBlcmZlY3RseVJlYWxFbWFpbEBub3RGYWtlLmNvbVwiLFxuICAgICAgICAgICAgcGhvdG86IHBhcGFCZWFyLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkJhYnkgQmVhclwiLFxuICAgICAgICAgICAgcm9sZTogXCJXYWl0ZXJcIixcbiAgICAgICAgICAgIG51bWJlcjogXCI1NTUtNTU1LTU1NTZcIixcbiAgICAgICAgICAgIGVtYWlsOiBcInRvdGFsbHlSZWFsRW1haWxAbm90RmFrZS5jb21cIixcbiAgICAgICAgICAgIHBob3RvOiBiYWJ5QmVhcixcbiAgICAgICAgfSxcbiAgICBdKSB7XG4gICAgICAgIG1ha2VDYXJkKHdvcmtlcik7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vZnVuY3Rpb25zL2NyZWF0ZUVsZW1lbnRcIjtcbmNvbnN0IGZvb3RlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0aGVGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuXG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHR5cGU6IFwiYVwiLFxuICAgICAgICBocmVmOiBcImh0dHA6Ly93d3cuZnJlZXBpay5jb21cIixcbiAgICAgICAgdGV4dENvbnRlbnQ6IFwiSGl2ZSBpY29uIG1hZGUgYnkgRnJlZXBpayAtIHd3dy5mbGF0aWNvbi5jb21cIixcbiAgICAgICAgZmF0aGVyOiB0aGVGb290ZXIsXG4gICAgfSk7XG5cbiAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdHlwZTogXCJhXCIsXG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2F1dGhvcnMvc21hc2hpY29uc1wiLFxuICAgICAgICB0ZXh0Q29udGVudDogXCJCZWUgaWNvbnMgbWFkZSBieSBTbWFzaGljb25zIC0gd3d3LmZsYXRpY29uLmNvbVwiLFxuICAgICAgICBmYXRoZXI6IHRoZUZvb3RlcixcbiAgICB9KTtcblxuICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBcImFcIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL3d3dy5mcmVlcGlrLmNvbS92ZWN0b3JzL2Zvb2RcIixcbiAgICAgICAgdGV4dENvbnRlbnQ6XG4gICAgICAgICAgICBcIkJhY2tncm91bmQgaW1hZ2UgY3JlYXRlZCBieSBkZ2ltLXN0dWRpbyAtIHd3dy5mcmVlcGlrLmNvbVwiLFxuICAgICAgICBmYXRoZXI6IHRoZUZvb3RlcixcbiAgICB9KTtcblxuICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBcInBcIixcbiAgICAgICAgdGV4dENvbnRlbnQ6IFwiZGVzaWduIGJ5IEJlbiBFY2tcIixcbiAgICAgICAgZmF0aGVyOiB0aGVGb290ZXIsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoZUZvb3Rlcjtcbn07XG5leHBvcnQgZGVmYXVsdCBmb290ZXI7XG4iLCJpbXBvcnQgSWNvbiBmcm9tIFwiLi4vaW1nL2RyaXBwaW5nLnBuZ1wiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uL2Z1bmN0aW9ucy9jcmVhdGVFbGVtZW50XCI7XG5cbmNvbnN0IGhlYWRlckRpdiA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXG4gICAgY29uc3QgbmF2ID0gY3JlYXRlRWxlbWVudCh7IHR5cGU6IFwibmF2XCIsIGZhdGhlcjogaGVhZGVyIH0pO1xuXG4gICAgY29uc3QgY292ZXIgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgaWQ6IFwiY292ZXJcIixcbiAgICAgICAgY2xhc3NlczogW1wiaG9tZS10YWJcIl0sXG4gICAgICAgIGZhdGhlcjogbmF2LFxuICAgIH0pO1xuXG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHR5cGU6IFwiaW1nXCIsXG4gICAgICAgIGlkOiBcImRyaXBwaW5nXCIsXG4gICAgICAgIGNsYXNzZXM6IFtcImRpc2FibGVkXCJdLFxuICAgICAgICBzcmM6IEljb24sXG4gICAgICAgIGFsdDogXCJob25leSBkcmlwcGluZyBpbWdcIixcbiAgICAgICAgZmF0aGVyOiBjb3ZlcixcbiAgICB9KTtcblxuICAgIGNvbnN0IHRhYl9saXN0ID0gY3JlYXRlRWxlbWVudCh7IHR5cGU6IFwidWxcIiwgaWQ6IFwidGFiLWxpc3RcIiwgZmF0aGVyOiBuYXYgfSk7XG5cbiAgICBmb3IgKGxldCB0ZXh0IG9mIFtcIkhvbWVcIiwgXCJNZW51XCIsIFwiQ29udGFjdFwiXSlcbiAgICAgICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICB0eXBlOiBcImxpXCIsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogdGV4dCxcbiAgICAgICAgICAgIGZhdGhlcjogdGFiX2xpc3QsXG4gICAgICAgICAgICBpZDogdGV4dC50b0xvd2VyQ2FzZSgpLFxuICAgICAgICB9KTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJEaXY7XG4iLCJpbXBvcnQgYmVlSWNvbiBmcm9tIFwiLi4vaW1nL2JlZS5zdmdcIjtcbmltcG9ydCBoaXZlSWNvbiBmcm9tIFwiLi4vaW1nL2hvbmV5Y29tYi5zdmdcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi9mdW5jdGlvbnMvY3JlYXRlRWxlbWVudFwiO1xuXG5jb25zdCBob21lID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBjb25zdCBtYWluX2hlYWRpbmcgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgY2xhc3NlczogW1wiaGVhZGluZ1wiXSxcbiAgICAgICAgZmF0aGVyOiBjb250ZW50LFxuICAgIH0pO1xuXG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHR5cGU6IFwiaW1nXCIsXG4gICAgICAgIGlkOiBcImJlZS1sZWZ0XCIsXG4gICAgICAgIGNsYXNzZXM6IFtcImRlY29yYXRpb25zXCJdLFxuICAgICAgICBzcmM6IGJlZUljb24sXG4gICAgICAgIGFsdDogXCJiZWUgaW1nXCIsXG4gICAgICAgIGZhdGhlcjogbWFpbl9oZWFkaW5nLFxuICAgIH0pO1xuXG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHR5cGU6IFwiaW1nXCIsXG4gICAgICAgIGlkOiBcImJlZS1yaWdodFwiLFxuICAgICAgICBjbGFzc2VzOiBbXCJkZWNvcmF0aW9uc1wiXSxcbiAgICAgICAgc3JjOiBiZWVJY29uLFxuICAgICAgICBhbHQ6IFwiYmVlIGltZ1wiLFxuICAgICAgICBmYXRoZXI6IG1haW5faGVhZGluZyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGhlYWRpbmdfdGV4dCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICBjbGFzc2VzOiBbXCJoZWFkaW5nLXRleHRcIl0sXG4gICAgICAgIGZhdGhlcjogbWFpbl9oZWFkaW5nLFxuICAgIH0pO1xuXG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHR5cGU6IFwiaDFcIixcbiAgICAgICAgdGV4dENvbnRlbnQ6IFwiQmVhcnkncyBCcmVha2Zhc3QgQmFyXCIsXG4gICAgICAgIGZhdGhlcjogaGVhZGluZ190ZXh0LFxuICAgIH0pO1xuXG4gICAgY29uc3QgcmV2aWV3X2NhcmQgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgaWQ6IFwicmV2aWV3LWNhcmRcIixcbiAgICAgICAgY2xhc3NlczogW1wiY3JvcC1vdXRcIl0sXG4gICAgICAgIGZhdGhlcjogY29udGVudCxcbiAgICB9KTtcblxuICAgIGNvbnN0IHJldmlld19jYXJkX2luID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIGNsYXNzZXM6IFtcImNyb3AtaW5cIl0sXG4gICAgICAgIGZhdGhlcjogcmV2aWV3X2NhcmQsXG4gICAgfSk7XG5cbiAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdHlwZTogXCJwXCIsXG4gICAgICAgIGlkOiBcInJldmlld1wiLFxuICAgICAgICB0ZXh0Q29udGVudDogYGVhcnkncyBoYXMgdGhlIGJlc3QgcG9ycmlkZ2UhIFRoZSBhdG1vc3BoZXJlIGFuZCBjdXN0b21lciBzZXJ2aWNlIG1ha2UgeW91IGZlZWwgbGlrZSB5b3UgYXJlXG4gICAgICAgIHNpdHRpbmcgaW5cbiAgICAgICAgdGhlXG4gICAgICAgIG1pZGRsZSBvZlxuICAgICAgICB0aGUgd29vZHMsIGVhdGluZyBsaWtlIGEgYmVhciEgVGhpcyBpcyBleGFjdGx5IHRoZSBraW5kIG9mIHBsYWNlIHRoYXQgSSBsaWtlIHRvIHJldHVybiB0byBhZ2FpbiBhbmQgYWdhaW4uYCxcbiAgICAgICAgZmF0aGVyOiByZXZpZXdfY2FyZF9pbixcbiAgICB9KTtcbiAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdHlwZTogXCJwXCIsXG4gICAgICAgIGlkOiBcImN1c3RvbWVyXCIsXG4gICAgICAgIHRleHRDb250ZW50OiBcIk1vaGFtbWFkTWFybWFzaFwiLFxuICAgICAgICBmYXRoZXI6IHJldmlld19jYXJkX2luLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaG91cnNfY2FyZCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICBjbGFzc2VzOiBbXCJjcm9wLW91dFwiLCBcImhvdXJzXCJdLFxuICAgICAgICBmYXRoZXI6IGNvbnRlbnQsXG4gICAgfSk7XG5cbiAgICBjb25zdCBob3Vyc19jYXJkX2luID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIGNsYXNzZXM6IFtcImNyb3AtaW5cIiwgXCJob3Vyc1wiXSxcbiAgICAgICAgZmF0aGVyOiBob3Vyc19jYXJkLFxuICAgIH0pO1xuXG4gICAgY3JlYXRlRWxlbWVudCh7IHR5cGU6IFwiaDNcIiwgdGV4dENvbnRlbnQ6IFwiSG91cnNcIiwgZmF0aGVyOiBob3Vyc19jYXJkX2luIH0pO1xuXG4gICAgbGV0IGRheXMgPSBbXG4gICAgICAgIFtcInN1bmRheVwiLCBcIjhhbSAtIDhwbVwiXSxcbiAgICAgICAgW1wibW9uZGF5XCIsIFwiNmFtIC0gNnBtXCJdLFxuICAgICAgICBbXCJ0dWVzZGF5XCIsIFwiNmFtIC0gNnBtXCJdLFxuICAgICAgICBbXCJ3ZWRuZXNkYXlcIiwgXCI2YW0gLSA2cG1cIl0sXG4gICAgICAgIFtcInRodXJzZGF5XCIsIFwiNmFtIC0gMTBwbVwiXSxcbiAgICAgICAgW1wiZnJpZGF5XCIsIFwiNmFtIC0gMTBwbVwiXSxcbiAgICAgICAgW1wic2F0dXJkYXlcIiwgXCI4YW0gLSAxMHBtXCJdLFxuICAgIF07XG4gICAgZm9yIChsZXQgZGF5IG9mIGRheXMpIHtcbiAgICAgICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICB0eXBlOiBcInBcIixcbiAgICAgICAgICAgIHRleHRDb250ZW50OiBgJHtkYXlbMF19OiAke2RheVsxXX1gLFxuICAgICAgICAgICAgaWQ6IGRheVswXSxcbiAgICAgICAgICAgIGZhdGhlcjogaG91cnNfY2FyZF9pbixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgbG9jYXRpb25fY2FyZCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICBjbGFzc2VzOiBbXCJjcm9wLW91dFwiLCBcImxvY2F0aW9uXCJdLFxuICAgICAgICBmYXRoZXI6IGNvbnRlbnQsXG4gICAgfSk7XG5cbiAgICBjb25zdCBsb2NhdGlvbl9jYXJkX2luID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIGNsYXNzZXM6IFtcImNyb3AtaW5cIiwgXCJsb2NhdGlvblwiXSxcbiAgICAgICAgZmF0aGVyOiBsb2NhdGlvbl9jYXJkLFxuICAgIH0pO1xuXG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHR5cGU6IFwiaDNcIixcbiAgICAgICAgdGV4dENvbnRlbnQ6IFwiTG9jYXRpb25cIixcbiAgICAgICAgZmF0aGVyOiBsb2NhdGlvbl9jYXJkX2luLFxuICAgIH0pO1xuXG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHR5cGU6IFwicFwiLFxuICAgICAgICB0ZXh0Q29udGVudDogXCIxMjMgRm9yZXN0IERyaXZlLCBGb3Jlc3R2aWxsZSwgTWFpbmVcIixcbiAgICAgICAgZmF0aGVyOiBsb2NhdGlvbl9jYXJkX2luLFxuICAgIH0pO1xuXG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHR5cGU6IFwiaW1nXCIsXG4gICAgICAgIGZhdGhlcjogY29udGVudCxcbiAgICAgICAgY2xhc3NlczogW1wiZGVjb3JhdGlvbnNcIl0sXG4gICAgICAgIGlkOiBcImhpdmVcIixcbiAgICAgICAgc3JjOiBoaXZlSWNvbixcbiAgICAgICAgYWw6IFwiaGl2ZSBpbWdcIixcbiAgICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBob21lO1xuIiwiY29uc3QgbWVudSA9IGZ1bmN0aW9uICgpIHt9O1xuZXhwb3J0IGRlZmF1bHQgbWVudTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGhvbWUgZnJvbSBcIi4vcGFnZXMvaG9tZVwiO1xuaW1wb3J0IGhlYWRlckRpdiBmcm9tIFwiLi9wYWdlcy9oZWFkZXJcIjtcbmltcG9ydCBmaXJzdExvYWQgZnJvbSBcIi4vZnVuY3Rpb25zL2ZpcnN0TG9hZFwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vZnVuY3Rpb25zL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vcGFnZXMvZm9vdGVyXCI7XG5pbXBvcnQgY2xlYXJDb250ZW50IGZyb20gXCIuL2Z1bmN0aW9ucy9jbGVhckNvbnRlbnRcIjtcbmltcG9ydCBcIi4vY3NzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vcGFnZXMvY29udGFjdFwiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4vcGFnZXMvbWVudVwiO1xuaW1wb3J0IHNldE5hdiBmcm9tIFwiLi9mdW5jdGlvbnMvc2V0TmF2XCI7XG5cbmZpcnN0TG9hZCgpO1xuXG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpO1xuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKTtcbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RcIik7XG5cbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcImhvbWVcIik7XG4gICAgc2V0TmF2KFwiaG9tZVwiKTtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBob21lKCk7XG59KTtcblxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwibWVudVwiKTtcbiAgICBzZXROYXYoXCJtZW51XCIpO1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIG1lbnUoKTtcbn0pO1xuXG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJjb250YWN0XCIpO1xuICAgIHNldE5hdihcImNvbnRhY3RcIik7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgY29udGFjdCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=