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

#main-heading {
    position: relative;
    margin: 0 auto;
    margin-bottom: 70px;
    width: 710px;
    height: 60px;
    padding: 10px;
    clip-path: polygon(0 33.3%, 6% 0, 94% 0, 100% 33.3%, 100% 66.6%, 94% 100%, 6% 100%, 0 66.6%);
}

#heading-text {
    background-color: var(--yellow);
    width: 710px;
    height: 60px;
    text-align: center;
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
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,oBAAoB;IACpB,iBAAiB;AACrB;;AAEA;;;IAGI,UAAU;IACV,SAAS;AACb;;AAEA;IACI,yDAAqC;IACrC,4BAA4B;IAC5B,sBAAsB;IACtB,iBAAiB;IACjB,gBAAgB;IAChB,sCAAsC;IACtC,kBAAkB;AACtB;;AAEA,gBAAgB;;AAEhB;IACI,8BAA8B;IAC9B,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,SAAS;IACT,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,gBAAgB;IAChB,OAAO;IACP,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,UAAU;IACV,QAAQ;AACZ;;AAEA;IACI,WAAW;IACX,QAAQ;AACZ;;AAEA;IACI,WAAW;IACX,QAAQ;AACZ;;AAEA,cAAc;;AAEd;IACI,kBAAkB;IAClB,gBAAgB;IAChB,8BAA8B;IAC9B,aAAa;IACb,cAAc;IACd,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB;AACJ;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,eAAe;IACf,iCAAiC;;AAErC;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,4FAA4F;AAChG;;AAEA;IACI,+BAA+B;IAC/B,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,4FAA4F;AAChG;;AAEA;IACI,wCAAwC;IACxC,WAAW;IACX,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,QAAQ;IACR,UAAU;AACd;;AAEA;IACI,WAAW;IACX,WAAW;IACX,0BAA0B;AAC9B;;AAEA;IACI,UAAU;IACV,UAAU;IACV,SAAS;AACb;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sFAAsF;AAC1F;;AAEA;IACI,+BAA+B;IAC/B,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sFAAsF;AAC1F;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,gBAAgB;AACpB;;;AAGA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA,gBAAgB;AAChB;IACI,sBAAsB;IACtB,8BAA8B;IAC9B,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,oBAAoB;IACpB,gBAAgB;IAChB,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,eAAe;AACnB","sourcesContent":[":root {\n    --khaki: #ffde73;\n    --honey: #eca43b;\n    --chocolate: #c16a08;\n    --yellow: #FFC60B;\n}\n\n*,\n*::after,\n*::before {\n    padding: 0;\n    margin: 0;\n}\n\nhtml {\n    background-image: url(../img/643.png);\n    background-attachment: fixed;\n    background-size: cover;\n    min-height: 100vh;\n    min-width: 100vw;\n    font-family: 'Yusei Magic', sans-serif;\n    overflow-x: hidden;\n}\n\n/* header area */\n\nheader {\n    background-color: var(--khaki);\n    height: 50px;\n    margin-bottom: 45px;\n    padding-top: 5px;\n    box-sizing: border-box;\n}\n\nnav {\n    width: 380px;\n    margin: 0 auto;\n    position: relative;\n}\n\n#tab-list {\n    display: flex;\n    list-style: none;\n    gap: 20px;\n    height: 45px;\n    padding: 0px 20px;\n}\n\n#tab-list>li {\n    border: 1px solid black;\n    border-bottom: none;\n    border-radius: 5px 5px 0px 0px;\n    padding-top: 8px;\n    flex: 1;\n    text-align: center;\n    z-index: 2;\n}\n\n#cover {\n    position: absolute;\n    background-color: #eca43b;\n    width: 98px;\n    height: 45px;\n    z-index: 1;\n}\n\n#dripping {\n    height: 45px;\n    width: 98px;\n    position: absolute;\n    bottom: -44px;\n    left: 1px;\n}\n\n.home-tab {\n    left: 21px;\n    top: 1px;\n}\n\n.menu-tab {\n    left: 141px;\n    top: 1px;\n}\n\n.contact-tab {\n    right: 21px;\n    top: 1px;\n}\n\n/* main area */\n\n#content {\n    position: relative;\n    max-width: 810px;\n    background-color: var(--khaki);\n    padding: 55px;\n    margin: 0 auto;\n    border-radius: 30px;\n    display: flex;\n    flex-direction: column;\n    gap: 30px\n}\n\n#content>* {\n    background-color: var(--chocolate);\n}\n\nh1 {\n    font-size: 45px;\n    font-family: 'Potta One', cursive;\n\n}\n\n#main-heading {\n    position: relative;\n    margin: 0 auto;\n    margin-bottom: 70px;\n    width: 710px;\n    height: 60px;\n    padding: 10px;\n    clip-path: polygon(0 33.3%, 6% 0, 94% 0, 100% 33.3%, 100% 66.6%, 94% 100%, 6% 100%, 0 66.6%);\n}\n\n#heading-text {\n    background-color: var(--yellow);\n    width: 710px;\n    height: 60px;\n    text-align: center;\n    clip-path: polygon(0 33.3%, 5% 0, 95% 0, 100% 33.3%, 100% 66.6%, 95% 100%, 5% 100%, 0 66.6%);\n}\n\n.decorations {\n    background-color: transparent !important;\n    width: 50px;\n    position: absolute;\n    z-index: 1;\n}\n\n#bee-left {\n    top: 5px;\n    left: 30px;\n}\n\n#bee-right {\n    bottom: 1px;\n    right: 37px;\n    transform: rotate(-240deg);\n}\n\n#hive {\n    width: 10%;\n    top: 185px;\n    left: 45%;\n}\n\n.crop-out {\n    margin: 0 auto;\n    width: 450px;\n    height: 225px;\n    padding: 20px;\n    clip-path: polygon(0 21%, 11% 0, 89% 0, 100% 21%, 100% 79%, 89% 100%, 11% 100%, 0 79%);\n}\n\n.crop-in {\n    background-color: var(--yellow);\n    box-sizing: border-box;\n    width: 450px;\n    height: 225px;\n    padding: 20px;\n    clip-path: polygon(0 20%, 10% 0, 90% 0, 100% 20%, 100% 80%, 90% 100%, 10% 100%, 0 80%);\n}\n\n#review {\n    padding: 16px 0px;\n}\n\n#customer {\n    margin-left: 40px;\n    font-weight: bold;\n    font-size: 1.2em;\n}\n\n\n.hours {\n    height: 250px;\n}\n\n.location {\n    height: 100px;\n}\n\n.hours>h3,\n.location>h3 {\n    padding-left: 42px;\n    font-size: 25px;\n}\n\n.hours>p,\n.location>p {\n    text-align: center;\n}\n\n/* footer area */\nfooter {\n    box-sizing: border-box;\n    background-color: var(--khaki);\n    width: 100vw;\n    height: 56px;\n    padding-top: 15px;\n    padding-bottom: 17px;\n    margin-top: 45px;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\nfooter>* {\n    text-decoration: none;\n    color: black;\n    font-size: 12px;\n}"],"sourceRoot":""}]);
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
// preps site the first time it's opened by making a header and loading home page




const firstLoad = function () {
    const body = document.querySelector("body");
    const header = (0,_pages_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
    body.appendChild(header);
    const main = document.createElement("main");
    const content = document.createElement("div");
    content.id = "content";
    main.appendChild(content);
    body.appendChild(main);
    (0,_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
    body.appendChild((0,_pages_footer__WEBPACK_IMPORTED_MODULE_2__["default"])());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firstLoad);


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
const footer = function () {
    const theFooter = document.createElement("footer");

    const a1 = document.createElement("a");
    a1.href = "http://www.freepik.com";
    a1.textContent = "Hive icon made by Freepik - www.flaticon.com";
    theFooter.appendChild(a1);

    const a2 = document.createElement("a");
    a2.href = "https://www.flaticon.com/authors/smashicons";
    a2.textContent = "Bee icons made by Smashicons - www.flaticon.com";
    theFooter.appendChild(a2);

    const a3 = document.createElement("a");
    a3.href = "https://www.freepik.com/vectors/food";
    a3.textContent =
        "Background image created by dgim-studio - www.freepik.com";
    theFooter.appendChild(a3);

    const p = document.createElement("p");
    p.textContent = "design by Ben Eck";
    theFooter.appendChild(p);
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

const headerDiv = function () {
    const header = document.createElement("header");

    const nav = document.createElement("nav");
    header.appendChild(nav);

    const cover = document.createElement("div");
    cover.id = "cover";
    cover.classList.add("home-tab");
    nav.appendChild(cover);

    const dripping = new Image();
    dripping.id = "dripping";
    dripping.src = _img_dripping_png__WEBPACK_IMPORTED_MODULE_0__;
    dripping.alt = "honey dripping img";
    cover.appendChild(dripping);

    const tab_list = document.createElement("ul");
    tab_list.id = "tab-list";
    nav.appendChild(tab_list);

    const home = document.createElement("li");
    home.textContent = "Home";
    tab_list.appendChild(home);

    const menu = document.createElement("li");
    menu.textContent = "Menu";
    tab_list.appendChild(menu);

    const contact = document.createElement("li");
    contact.textContent = "contact";
    tab_list.appendChild(contact);

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


const home = function () {
    const content = document.querySelector("#content");

    const main_heading = document.createElement("div");
    main_heading.id = "main-heading";
    content.appendChild(main_heading);

    const bee1 = new Image();
    bee1.id = "bee-left";
    bee1.classList.add("decorations");
    bee1.src = _img_bee_svg__WEBPACK_IMPORTED_MODULE_0__;
    bee1.alt = "bee img";
    main_heading.appendChild(bee1);

    const bee2 = new Image();
    bee2.id = "bee-right";
    bee2.classList.add("decorations");
    bee2.src = _img_bee_svg__WEBPACK_IMPORTED_MODULE_0__;
    bee2.alt = "bee img";
    main_heading.appendChild(bee2);

    const heading_text = document.createElement("div");
    heading_text.id = "heading-text";
    main_heading.appendChild(heading_text);

    const heading_text_text = document.createElement("h1");
    heading_text_text.textContent = "Beary's Breakfast Bar";
    heading_text.appendChild(heading_text_text);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

//   <div class="crop-out" id="review-card">
//     <div class="crop-in">
//       <p id="review">Beary's has the best porridge! The atmosphere and customer service make you feel like you are
//         sitting in
//         the
//         middle of
//         the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.
//       </p>
//       <p id="customer">Mohammad Marmash</p>
//     </div>
//   </div>
//   <div class="crop-out hours">
//     <div class="crop-in hours">
//       <h3>Hours</h3>
//       <p id="sunday">Sunday: 8am - 8pm</p>
//       <p id="monday">Monday: 6am - 6pm</p>
//       <p id="tuesday">Tuesday: 6am - 6pm</p>
//       <p id="wednesday">Wednesday: 6am - 6pm</p>
//       <p id="thursday">Thursday: 6am - 10pm</p>
//       <p id="friday">Friday: 6am - 10pm</p>
//       <p id="saturday">Saturday: 8am - 10pm</p>
//     </div>
//   </div>
//   <div class="crop-out location">
//     <div class="crop-in location">
//       <h3>Location</h3>
//       <p>123 Forest Drive, Forestville, Maine</p>
//     </div>
//   </div>
//   <img class="decorations" id="hive" src="9f6b40b263827ecffca7.svg" alt="hive"></img>


/***/ }),

/***/ "./src/img/643.png":
/*!*************************!*\
  !*** ./src/img/643.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ee069ca56012f433906.png";

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
/* harmony import */ var _pages_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/footer */ "./src/pages/footer.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");






(0,_functions_firstLoad__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLHdHQUFpQztBQUM3RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG9GQUFvRixZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLGlDQUFpQyx1QkFBdUIsdUJBQXVCLDJCQUEyQix3QkFBd0IsR0FBRyw4QkFBOEIsaUJBQWlCLGdCQUFnQixHQUFHLFVBQVUsNENBQTRDLG1DQUFtQyw2QkFBNkIsd0JBQXdCLHVCQUF1Qiw2Q0FBNkMseUJBQXlCLEdBQUcsaUNBQWlDLHFDQUFxQyxtQkFBbUIsMEJBQTBCLHVCQUF1Qiw2QkFBNkIsR0FBRyxTQUFTLG1CQUFtQixxQkFBcUIseUJBQXlCLEdBQUcsZUFBZSxvQkFBb0IsdUJBQXVCLGdCQUFnQixtQkFBbUIsd0JBQXdCLEdBQUcsa0JBQWtCLDhCQUE4QiwwQkFBMEIscUNBQXFDLHVCQUF1QixjQUFjLHlCQUF5QixpQkFBaUIsR0FBRyxZQUFZLHlCQUF5QixnQ0FBZ0Msa0JBQWtCLG1CQUFtQixpQkFBaUIsR0FBRyxlQUFlLG1CQUFtQixrQkFBa0IseUJBQXlCLG9CQUFvQixnQkFBZ0IsR0FBRyxlQUFlLGlCQUFpQixlQUFlLEdBQUcsZUFBZSxrQkFBa0IsZUFBZSxHQUFHLGtCQUFrQixrQkFBa0IsZUFBZSxHQUFHLGlDQUFpQyx5QkFBeUIsdUJBQXVCLHFDQUFxQyxvQkFBb0IscUJBQXFCLDBCQUEwQixvQkFBb0IsNkJBQTZCLGtCQUFrQixnQkFBZ0IseUNBQXlDLEdBQUcsUUFBUSxzQkFBc0Isd0NBQXdDLEtBQUssbUJBQW1CLHlCQUF5QixxQkFBcUIsMEJBQTBCLG1CQUFtQixtQkFBbUIsb0JBQW9CLG1HQUFtRyxHQUFHLG1CQUFtQixzQ0FBc0MsbUJBQW1CLG1CQUFtQix5QkFBeUIsbUdBQW1HLEdBQUcsa0JBQWtCLCtDQUErQyxrQkFBa0IseUJBQXlCLGlCQUFpQixHQUFHLGVBQWUsZUFBZSxpQkFBaUIsR0FBRyxnQkFBZ0Isa0JBQWtCLGtCQUFrQixpQ0FBaUMsR0FBRyxXQUFXLGlCQUFpQixpQkFBaUIsZ0JBQWdCLEdBQUcsZUFBZSxxQkFBcUIsbUJBQW1CLG9CQUFvQixvQkFBb0IsNkZBQTZGLEdBQUcsY0FBYyxzQ0FBc0MsNkJBQTZCLG1CQUFtQixvQkFBb0Isb0JBQW9CLDZGQUE2RixHQUFHLGFBQWEsd0JBQXdCLEdBQUcsZUFBZSx3QkFBd0Isd0JBQXdCLHVCQUF1QixHQUFHLGNBQWMsb0JBQW9CLEdBQUcsZUFBZSxvQkFBb0IsR0FBRyw4QkFBOEIseUJBQXlCLHNCQUFzQixHQUFHLDRCQUE0Qix5QkFBeUIsR0FBRywrQkFBK0IsNkJBQTZCLHFDQUFxQyxtQkFBbUIsbUJBQW1CLHdCQUF3QiwyQkFBMkIsdUJBQXVCLG9CQUFvQixvQ0FBb0MsMEJBQTBCLEdBQUcsY0FBYyw0QkFBNEIsbUJBQW1CLHNCQUFzQixHQUFHLG1CQUFtQjtBQUN0OEs7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUN0TzFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDd0M7QUFDUDtBQUNJOztBQUVyQztBQUNBO0FBQ0EsbUJBQW1CLHlEQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQUk7QUFDUixxQkFBcUIseURBQU07QUFDM0I7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNsQnpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJpQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQiw4Q0FBSTtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDWTtBQUNPO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUseUNBQU87QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHlDQUFPO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSxFQUFDOztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOURBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZ0M7QUFDTztBQUNPO0FBQ1Y7QUFDWDs7QUFFekIsZ0VBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mdW5jdGlvbnMvZmlyc3RMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1nLzY0My5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLWtoYWtpOiAjZmZkZTczO1xuICAgIC0taG9uZXk6ICNlY2E0M2I7XG4gICAgLS1jaG9jb2xhdGU6ICNjMTZhMDg7XG4gICAgLS15ZWxsb3c6ICNGRkM2MEI7XG59XG5cbiosXG4qOjphZnRlcixcbio6OmJlZm9yZSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbmh0bWwge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWluLXdpZHRoOiAxMDB2dztcbiAgICBmb250LWZhbWlseTogJ1l1c2VpIE1hZ2ljJywgc2Fucy1zZXJpZjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi8qIGhlYWRlciBhcmVhICovXG5cbmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta2hha2kpO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxubmF2IHtcbiAgICB3aWR0aDogMzgwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jdGFiLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBnYXA6IDIwcHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4jdGFiLWxpc3Q+bGkge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwcHggMHB4O1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgZmxleDogMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgei1pbmRleDogMjtcbn1cblxuI2NvdmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjYTQzYjtcbiAgICB3aWR0aDogOThweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgei1pbmRleDogMTtcbn1cblxuI2RyaXBwaW5nIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDk4cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTQ0cHg7XG4gICAgbGVmdDogMXB4O1xufVxuXG4uaG9tZS10YWIge1xuICAgIGxlZnQ6IDIxcHg7XG4gICAgdG9wOiAxcHg7XG59XG5cbi5tZW51LXRhYiB7XG4gICAgbGVmdDogMTQxcHg7XG4gICAgdG9wOiAxcHg7XG59XG5cbi5jb250YWN0LXRhYiB7XG4gICAgcmlnaHQ6IDIxcHg7XG4gICAgdG9wOiAxcHg7XG59XG5cbi8qIG1haW4gYXJlYSAqL1xuXG4jY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC13aWR0aDogODEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta2hha2kpO1xuICAgIHBhZGRpbmc6IDU1cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAzMHB4XG59XG5cbiNjb250ZW50Pioge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNob2NvbGF0ZSk7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdQb3R0YSBPbmUnLCBjdXJzaXZlO1xuXG59XG5cbiNtYWluLWhlYWRpbmcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xuICAgIHdpZHRoOiA3MTBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAzMy4zJSwgNiUgMCwgOTQlIDAsIDEwMCUgMzMuMyUsIDEwMCUgNjYuNiUsIDk0JSAxMDAlLCA2JSAxMDAlLCAwIDY2LjYlKTtcbn1cblxuI2hlYWRpbmctdGV4dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcbiAgICB3aWR0aDogNzEwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAzMy4zJSwgNSUgMCwgOTUlIDAsIDEwMCUgMzMuMyUsIDEwMCUgNjYuNiUsIDk1JSAxMDAlLCA1JSAxMDAlLCAwIDY2LjYlKTtcbn1cblxuLmRlY29yYXRpb25zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4jYmVlLWxlZnQge1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDMwcHg7XG59XG5cbiNiZWUtcmlnaHQge1xuICAgIGJvdHRvbTogMXB4O1xuICAgIHJpZ2h0OiAzN3B4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yNDBkZWcpO1xufVxuXG4jaGl2ZSB7XG4gICAgd2lkdGg6IDEwJTtcbiAgICB0b3A6IDE4NXB4O1xuICAgIGxlZnQ6IDQ1JTtcbn1cblxuLmNyb3Atb3V0IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgaGVpZ2h0OiAyMjVweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDIxJSwgMTElIDAsIDg5JSAwLCAxMDAlIDIxJSwgMTAwJSA3OSUsIDg5JSAxMDAlLCAxMSUgMTAwJSwgMCA3OSUpO1xufVxuXG4uY3JvcC1pbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICBoZWlnaHQ6IDIyNXB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMjAlLCAxMCUgMCwgOTAlIDAsIDEwMCUgMjAlLCAxMDAlIDgwJSwgOTAlIDEwMCUsIDEwJSAxMDAlLCAwIDgwJSk7XG59XG5cbiNyZXZpZXcge1xuICAgIHBhZGRpbmc6IDE2cHggMHB4O1xufVxuXG4jY3VzdG9tZXIge1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cblxuLmhvdXJzIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xufVxuXG4ubG9jYXRpb24ge1xuICAgIGhlaWdodDogMTAwcHg7XG59XG5cbi5ob3Vycz5oMyxcbi5sb2NhdGlvbj5oMyB7XG4gICAgcGFkZGluZy1sZWZ0OiA0MnB4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmhvdXJzPnAsXG4ubG9jYXRpb24+cCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBmb290ZXIgYXJlYSAqL1xuZm9vdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWtoYWtpKTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxN3B4O1xuICAgIG1hcmdpbi10b3A6IDQ1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5mb290ZXI+KiB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDEycHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFFQTs7O0lBR0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHlEQUFxQztJQUNyQyw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBQ3RDLGtCQUFrQjtBQUN0Qjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsUUFBUTtBQUNaOztBQUVBLGNBQWM7O0FBRWQ7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLDRGQUE0RjtBQUNoRzs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw0RkFBNEY7QUFDaEc7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixzRkFBc0Y7QUFDMUY7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNGQUFzRjtBQUMxRjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQSxnQkFBZ0I7QUFDaEI7SUFDSSxzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWtoYWtpOiAjZmZkZTczO1xcbiAgICAtLWhvbmV5OiAjZWNhNDNiO1xcbiAgICAtLWNob2NvbGF0ZTogI2MxNmEwODtcXG4gICAgLS15ZWxsb3c6ICNGRkM2MEI7XFxufVxcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy82NDMucG5nKTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIGZvbnQtZmFtaWx5OiAnWXVzZWkgTWFnaWMnLCBzYW5zLXNlcmlmO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi8qIGhlYWRlciBhcmVhICovXFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta2hha2kpO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbm5hdiB7XFxuICAgIHdpZHRoOiAzODBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3RhYi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcbn1cXG5cXG4jdGFiLWxpc3Q+bGkge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwcHggMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xcbiAgICBmbGV4OiAxO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbiNjb3ZlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjYTQzYjtcXG4gICAgd2lkdGg6IDk4cHg7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuI2RyaXBwaW5nIHtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICB3aWR0aDogOThweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC00NHB4O1xcbiAgICBsZWZ0OiAxcHg7XFxufVxcblxcbi5ob21lLXRhYiB7XFxuICAgIGxlZnQ6IDIxcHg7XFxuICAgIHRvcDogMXB4O1xcbn1cXG5cXG4ubWVudS10YWIge1xcbiAgICBsZWZ0OiAxNDFweDtcXG4gICAgdG9wOiAxcHg7XFxufVxcblxcbi5jb250YWN0LXRhYiB7XFxuICAgIHJpZ2h0OiAyMXB4O1xcbiAgICB0b3A6IDFweDtcXG59XFxuXFxuLyogbWFpbiBhcmVhICovXFxuXFxuI2NvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1heC13aWR0aDogODEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWtoYWtpKTtcXG4gICAgcGFkZGluZzogNTVweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweFxcbn1cXG5cXG4jY29udGVudD4qIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hvY29sYXRlKTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDQ1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG90dGEgT25lJywgY3Vyc2l2ZTtcXG5cXG59XFxuXFxuI21haW4taGVhZGluZyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XFxuICAgIHdpZHRoOiA3MTBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAzMy4zJSwgNiUgMCwgOTQlIDAsIDEwMCUgMzMuMyUsIDEwMCUgNjYuNiUsIDk0JSAxMDAlLCA2JSAxMDAlLCAwIDY2LjYlKTtcXG59XFxuXFxuI2hlYWRpbmctdGV4dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxuICAgIHdpZHRoOiA3MTBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDMzLjMlLCA1JSAwLCA5NSUgMCwgMTAwJSAzMy4zJSwgMTAwJSA2Ni42JSwgOTUlIDEwMCUsIDUlIDEwMCUsIDAgNjYuNiUpO1xcbn1cXG5cXG4uZGVjb3JhdGlvbnMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jYmVlLWxlZnQge1xcbiAgICB0b3A6IDVweDtcXG4gICAgbGVmdDogMzBweDtcXG59XFxuXFxuI2JlZS1yaWdodCB7XFxuICAgIGJvdHRvbTogMXB4O1xcbiAgICByaWdodDogMzdweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTI0MGRlZyk7XFxufVxcblxcbiNoaXZlIHtcXG4gICAgd2lkdGg6IDEwJTtcXG4gICAgdG9wOiAxODVweDtcXG4gICAgbGVmdDogNDUlO1xcbn1cXG5cXG4uY3JvcC1vdXQge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBoZWlnaHQ6IDIyNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAyMSUsIDExJSAwLCA4OSUgMCwgMTAwJSAyMSUsIDEwMCUgNzklLCA4OSUgMTAwJSwgMTElIDEwMCUsIDAgNzklKTtcXG59XFxuXFxuLmNyb3AtaW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGhlaWdodDogMjI1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDIwJSwgMTAlIDAsIDkwJSAwLCAxMDAlIDIwJSwgMTAwJSA4MCUsIDkwJSAxMDAlLCAxMCUgMTAwJSwgMCA4MCUpO1xcbn1cXG5cXG4jcmV2aWV3IHtcXG4gICAgcGFkZGluZzogMTZweCAwcHg7XFxufVxcblxcbiNjdXN0b21lciB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuXFxuLmhvdXJzIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLmhvdXJzPmgzLFxcbi5sb2NhdGlvbj5oMyB7XFxuICAgIHBhZGRpbmctbGVmdDogNDJweDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4uaG91cnM+cCxcXG4ubG9jYXRpb24+cCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogZm9vdGVyIGFyZWEgKi9cXG5mb290ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1raGFraSk7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiA1NnB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE3cHg7XFxuICAgIG1hcmdpbi10b3A6IDQ1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb290ZXI+KiB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gcHJlcHMgc2l0ZSB0aGUgZmlyc3QgdGltZSBpdCdzIG9wZW5lZCBieSBtYWtpbmcgYSBoZWFkZXIgYW5kIGxvYWRpbmcgaG9tZSBwYWdlXG5pbXBvcnQgaGVhZGVyRGl2IGZyb20gXCIuLi9wYWdlcy9oZWFkZXJcIjtcbmltcG9ydCBob21lIGZyb20gXCIuLi9wYWdlcy9ob21lXCI7XG5pbXBvcnQgZm9vdGVyIGZyb20gXCIuLi9wYWdlcy9mb290ZXJcIjtcblxuY29uc3QgZmlyc3RMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBoZWFkZXJEaXYoKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgaG9tZSgpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmlyc3RMb2FkO1xuIiwiY29uc3QgZm9vdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRoZUZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG5cbiAgICBjb25zdCBhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGExLmhyZWYgPSBcImh0dHA6Ly93d3cuZnJlZXBpay5jb21cIjtcbiAgICBhMS50ZXh0Q29udGVudCA9IFwiSGl2ZSBpY29uIG1hZGUgYnkgRnJlZXBpayAtIHd3dy5mbGF0aWNvbi5jb21cIjtcbiAgICB0aGVGb290ZXIuYXBwZW5kQ2hpbGQoYTEpO1xuXG4gICAgY29uc3QgYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhMi5ocmVmID0gXCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vYXV0aG9ycy9zbWFzaGljb25zXCI7XG4gICAgYTIudGV4dENvbnRlbnQgPSBcIkJlZSBpY29ucyBtYWRlIGJ5IFNtYXNoaWNvbnMgLSB3d3cuZmxhdGljb24uY29tXCI7XG4gICAgdGhlRm9vdGVyLmFwcGVuZENoaWxkKGEyKTtcblxuICAgIGNvbnN0IGEzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYTMuaHJlZiA9IFwiaHR0cHM6Ly93d3cuZnJlZXBpay5jb20vdmVjdG9ycy9mb29kXCI7XG4gICAgYTMudGV4dENvbnRlbnQgPVxuICAgICAgICBcIkJhY2tncm91bmQgaW1hZ2UgY3JlYXRlZCBieSBkZ2ltLXN0dWRpbyAtIHd3dy5mcmVlcGlrLmNvbVwiO1xuICAgIHRoZUZvb3Rlci5hcHBlbmRDaGlsZChhMyk7XG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcC50ZXh0Q29udGVudCA9IFwiZGVzaWduIGJ5IEJlbiBFY2tcIjtcbiAgICB0aGVGb290ZXIuYXBwZW5kQ2hpbGQocCk7XG4gICAgcmV0dXJuIHRoZUZvb3Rlcjtcbn07XG5leHBvcnQgZGVmYXVsdCBmb290ZXI7XG4iLCJpbXBvcnQgSWNvbiBmcm9tIFwiLi4vaW1nL2RyaXBwaW5nLnBuZ1wiO1xuY29uc3QgaGVhZGVyRGl2ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuXG4gICAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvdmVyLmlkID0gXCJjb3ZlclwiO1xuICAgIGNvdmVyLmNsYXNzTGlzdC5hZGQoXCJob21lLXRhYlwiKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY292ZXIpO1xuXG4gICAgY29uc3QgZHJpcHBpbmcgPSBuZXcgSW1hZ2UoKTtcbiAgICBkcmlwcGluZy5pZCA9IFwiZHJpcHBpbmdcIjtcbiAgICBkcmlwcGluZy5zcmMgPSBJY29uO1xuICAgIGRyaXBwaW5nLmFsdCA9IFwiaG9uZXkgZHJpcHBpbmcgaW1nXCI7XG4gICAgY292ZXIuYXBwZW5kQ2hpbGQoZHJpcHBpbmcpO1xuXG4gICAgY29uc3QgdGFiX2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdGFiX2xpc3QuaWQgPSBcInRhYi1saXN0XCI7XG4gICAgbmF2LmFwcGVuZENoaWxkKHRhYl9saXN0KTtcblxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIHRhYl9saXN0LmFwcGVuZENoaWxkKGhvbWUpO1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgdGFiX2xpc3QuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcImNvbnRhY3RcIjtcbiAgICB0YWJfbGlzdC5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59O1xuZXhwb3J0IGRlZmF1bHQgaGVhZGVyRGl2O1xuIiwiaW1wb3J0IGJlZUljb24gZnJvbSBcIi4uL2ltZy9iZWUuc3ZnXCI7XG5pbXBvcnQgaGl2ZUljb24gZnJvbSBcIi4uL2ltZy9ob25leWNvbWIuc3ZnXCI7XG5jb25zdCBob21lID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBjb25zdCBtYWluX2hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5faGVhZGluZy5pZCA9IFwibWFpbi1oZWFkaW5nXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluX2hlYWRpbmcpO1xuXG4gICAgY29uc3QgYmVlMSA9IG5ldyBJbWFnZSgpO1xuICAgIGJlZTEuaWQgPSBcImJlZS1sZWZ0XCI7XG4gICAgYmVlMS5jbGFzc0xpc3QuYWRkKFwiZGVjb3JhdGlvbnNcIik7XG4gICAgYmVlMS5zcmMgPSBiZWVJY29uO1xuICAgIGJlZTEuYWx0ID0gXCJiZWUgaW1nXCI7XG4gICAgbWFpbl9oZWFkaW5nLmFwcGVuZENoaWxkKGJlZTEpO1xuXG4gICAgY29uc3QgYmVlMiA9IG5ldyBJbWFnZSgpO1xuICAgIGJlZTIuaWQgPSBcImJlZS1yaWdodFwiO1xuICAgIGJlZTIuY2xhc3NMaXN0LmFkZChcImRlY29yYXRpb25zXCIpO1xuICAgIGJlZTIuc3JjID0gYmVlSWNvbjtcbiAgICBiZWUyLmFsdCA9IFwiYmVlIGltZ1wiO1xuICAgIG1haW5faGVhZGluZy5hcHBlbmRDaGlsZChiZWUyKTtcblxuICAgIGNvbnN0IGhlYWRpbmdfdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGluZ190ZXh0LmlkID0gXCJoZWFkaW5nLXRleHRcIjtcbiAgICBtYWluX2hlYWRpbmcuYXBwZW5kQ2hpbGQoaGVhZGluZ190ZXh0KTtcblxuICAgIGNvbnN0IGhlYWRpbmdfdGV4dF90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRpbmdfdGV4dF90ZXh0LnRleHRDb250ZW50ID0gXCJCZWFyeSdzIEJyZWFrZmFzdCBCYXJcIjtcbiAgICBoZWFkaW5nX3RleHQuYXBwZW5kQ2hpbGQoaGVhZGluZ190ZXh0X3RleHQpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGhvbWU7XG5cbi8vICAgPGRpdiBjbGFzcz1cImNyb3Atb3V0XCIgaWQ9XCJyZXZpZXctY2FyZFwiPlxuLy8gICAgIDxkaXYgY2xhc3M9XCJjcm9wLWluXCI+XG4vLyAgICAgICA8cCBpZD1cInJldmlld1wiPkJlYXJ5J3MgaGFzIHRoZSBiZXN0IHBvcnJpZGdlISBUaGUgYXRtb3NwaGVyZSBhbmQgY3VzdG9tZXIgc2VydmljZSBtYWtlIHlvdSBmZWVsIGxpa2UgeW91IGFyZVxuLy8gICAgICAgICBzaXR0aW5nIGluXG4vLyAgICAgICAgIHRoZVxuLy8gICAgICAgICBtaWRkbGUgb2Zcbi8vICAgICAgICAgdGhlIHdvb2RzLCBlYXRpbmcgbGlrZSBhIGJlYXIhIFRoaXMgaXMgZXhhY3RseSB0aGUga2luZCBvZiBwbGFjZSB0aGF0IEkgbGlrZSB0byByZXR1cm4gdG8gYWdhaW4gYW5kIGFnYWluLlxuLy8gICAgICAgPC9wPlxuLy8gICAgICAgPHAgaWQ9XCJjdXN0b21lclwiPk1vaGFtbWFkIE1hcm1hc2g8L3A+XG4vLyAgICAgPC9kaXY+XG4vLyAgIDwvZGl2PlxuLy8gICA8ZGl2IGNsYXNzPVwiY3JvcC1vdXQgaG91cnNcIj5cbi8vICAgICA8ZGl2IGNsYXNzPVwiY3JvcC1pbiBob3Vyc1wiPlxuLy8gICAgICAgPGgzPkhvdXJzPC9oMz5cbi8vICAgICAgIDxwIGlkPVwic3VuZGF5XCI+U3VuZGF5OiA4YW0gLSA4cG08L3A+XG4vLyAgICAgICA8cCBpZD1cIm1vbmRheVwiPk1vbmRheTogNmFtIC0gNnBtPC9wPlxuLy8gICAgICAgPHAgaWQ9XCJ0dWVzZGF5XCI+VHVlc2RheTogNmFtIC0gNnBtPC9wPlxuLy8gICAgICAgPHAgaWQ9XCJ3ZWRuZXNkYXlcIj5XZWRuZXNkYXk6IDZhbSAtIDZwbTwvcD5cbi8vICAgICAgIDxwIGlkPVwidGh1cnNkYXlcIj5UaHVyc2RheTogNmFtIC0gMTBwbTwvcD5cbi8vICAgICAgIDxwIGlkPVwiZnJpZGF5XCI+RnJpZGF5OiA2YW0gLSAxMHBtPC9wPlxuLy8gICAgICAgPHAgaWQ9XCJzYXR1cmRheVwiPlNhdHVyZGF5OiA4YW0gLSAxMHBtPC9wPlxuLy8gICAgIDwvZGl2PlxuLy8gICA8L2Rpdj5cbi8vICAgPGRpdiBjbGFzcz1cImNyb3Atb3V0IGxvY2F0aW9uXCI+XG4vLyAgICAgPGRpdiBjbGFzcz1cImNyb3AtaW4gbG9jYXRpb25cIj5cbi8vICAgICAgIDxoMz5Mb2NhdGlvbjwvaDM+XG4vLyAgICAgICA8cD4xMjMgRm9yZXN0IERyaXZlLCBGb3Jlc3R2aWxsZSwgTWFpbmU8L3A+XG4vLyAgICAgPC9kaXY+XG4vLyAgIDwvZGl2PlxuLy8gICA8aW1nIGNsYXNzPVwiZGVjb3JhdGlvbnNcIiBpZD1cImhpdmVcIiBzcmM9XCI5ZjZiNDBiMjYzODI3ZWNmZmNhNy5zdmdcIiBhbHQ9XCJoaXZlXCI+PC9pbWc+XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBob21lIGZyb20gXCIuL3BhZ2VzL2hvbWVcIjtcbmltcG9ydCBoZWFkZXJEaXYgZnJvbSBcIi4vcGFnZXMvaGVhZGVyXCI7XG5pbXBvcnQgZmlyc3RMb2FkIGZyb20gXCIuL2Z1bmN0aW9ucy9maXJzdExvYWRcIjtcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vcGFnZXMvZm9vdGVyXCI7XG5pbXBvcnQgXCIuL2Nzcy9zdHlsZS5jc3NcIjtcblxuZmlyc3RMb2FkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=