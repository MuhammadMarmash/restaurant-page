/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    --dark-orange: #df880a;
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

.sub-container {
    width: 350px !important;
    height: 60px !important;
    margin-bottom: 0 !important;
    margin-top: 70px;
}

.sub-header {
    width: 350px !important;
    height: 60px !important;
}

h2 {
    font-size: 35px;
    font-family: 'Potta One', cursive;
}

.menu-hive {
    top: 25px;
    right: 7px;
}

.menu-pic {
    height: 250px;
    width: 250px;
    background-size: cover;
    border-radius: 20px;
    position: absolute;
    bottom: 10px;
    right: 45px;
    border: 2px solid var(--dark-orange);
}

.menu-outer {
    position: relative;
    height: 480px;
}

.menu-outer>h3 {
    padding-left: 20px;
    font-size: 25px;
    margin: 25px 0;
}

.menu-outer>p {
    padding-left: 50px;
    margin: 16px 0;
}

.item-price {
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0;
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
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --khaki: #ffde73;\n    --honey: #eca43b;\n    --chocolate: #c16a08;\n    --yellow: #FFC60B;\n    --dark-orange: #df880a;\n}\n\n*,\n*::after,\n*::before {\n    padding: 0;\n    margin: 0;\n}\n\nhtml {\n    background-image: url(../img/643.png);\n    background-attachment: fixed;\n    background-size: cover;\n    min-height: 100vh;\n    min-width: 100vw;\n    font-family: 'Yusei Magic', sans-serif;\n    overflow-x: hidden;\n}\n\n/* header area */\n\nheader {\n    background-color: var(--khaki);\n    height: 50px;\n    margin-bottom: 45px;\n    padding-top: 5px;\n    box-sizing: border-box;\n}\n\nnav {\n    width: 380px;\n    margin: 0 auto;\n    position: relative;\n}\n\n#tab-list {\n    display: flex;\n    list-style: none;\n    gap: 20px;\n    height: 45px;\n    padding: 0px 20px;\n}\n\n#tab-list>li {\n    border: 1px solid black;\n    border-bottom: none;\n    border-radius: 5px 5px 0px 0px;\n    padding-top: 8px;\n    flex: 1;\n    text-align: center;\n    z-index: 2;\n    cursor: pointer;\n}\n\n.disabled {\n    pointer-events: none;\n    user-select: none;\n    cursor: text;\n}\n\n#cover {\n    position: absolute;\n    background-color: #eca43b;\n    width: 98px;\n    height: 45px;\n    z-index: 1;\n}\n\n#dripping {\n    height: 45px;\n    width: 98px;\n    position: absolute;\n    bottom: -44px;\n    left: 1px;\n}\n\n.home-tab {\n    left: 21px;\n    top: 1px;\n}\n\n.menu-tab {\n    left: 141px;\n    top: 1px;\n}\n\n.contact-tab {\n    right: 21px;\n    top: 1px;\n}\n\n/* main area */\n\n#content {\n    position: relative;\n    max-width: 810px;\n    background-color: var(--khaki);\n    padding: 55px;\n    margin: 0 auto;\n    border-radius: 30px;\n    display: flex;\n    flex-direction: column;\n    gap: 30px\n}\n\n#content>* {\n    background-color: var(--chocolate);\n}\n\nh1 {\n    font-size: 45px;\n    font-family: 'Potta One', cursive;\n\n}\n\n.heading {\n    position: relative;\n    margin: 0 auto;\n    margin-bottom: 70px;\n    width: 710px;\n    height: 60px;\n    padding: 10px;\n    clip-path: polygon(0 33.3%, 6% 0, 94% 0, 100% 33.3%, 100% 66.6%, 94% 100%, 6% 100%, 0 66.6%);\n}\n\n.heading-text {\n    background-color: var(--yellow);\n    width: 710px;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    clip-path: polygon(0 33.3%, 5% 0, 95% 0, 100% 33.3%, 100% 66.6%, 95% 100%, 5% 100%, 0 66.6%);\n}\n\n.decorations {\n    background-color: transparent !important;\n    width: 50px;\n    position: absolute;\n    z-index: 1;\n}\n\n#bee-left {\n    top: 5px;\n    left: 30px;\n}\n\n#bee-right {\n    bottom: 1px;\n    right: 37px;\n    transform: rotate(-240deg);\n}\n\n#hive {\n    width: 10%;\n    top: 185px;\n    left: 45%;\n}\n\n.crop-out {\n    margin: 0 auto;\n    width: 450px;\n    height: 225px;\n    padding: 20px;\n    clip-path: polygon(0 21%, 11% 0, 89% 0, 100% 21%, 100% 79%, 89% 100%, 11% 100%, 0 79%);\n}\n\n.crop-in {\n    background-color: var(--yellow);\n    box-sizing: border-box;\n    width: 450px;\n    height: 225px;\n    padding: 20px;\n    clip-path: polygon(0 20%, 10% 0, 90% 0, 100% 20%, 100% 80%, 90% 100%, 10% 100%, 0 80%);\n}\n\n#review {\n    padding: 16px 0px;\n}\n\n#customer {\n    margin-left: 40px;\n    font-weight: bold;\n    font-size: 1.2em;\n}\n\n\n.hours {\n    height: 250px;\n}\n\n.location {\n    height: 100px;\n}\n\n.hours>h3,\n.location>h3 {\n    padding-left: 42px;\n    font-size: 25px;\n}\n\n.hours>p,\n.location>p {\n    text-align: center;\n}\n\n.contact-header {\n    height: 120px !important;\n    width: 300px !important;\n}\n\n.contact-outer,\n.contact-inner {\n    height: 175px;\n    position: relative;\n}\n\n.contact-inner>p {\n    padding-left: 50px;\n}\n\n.contact-inner>h3 {\n    margin: 18.720px 0;\n}\n\n.contact-pic {\n    height: 100px;\n    width: 150px;\n    background-size: cover;\n    position: absolute;\n    border-radius: 20px;\n    top: 30px;\n    right: 30px;\n}\n\n.sub-container {\n    width: 350px !important;\n    height: 60px !important;\n    margin-bottom: 0 !important;\n    margin-top: 70px;\n}\n\n.sub-header {\n    width: 350px !important;\n    height: 60px !important;\n}\n\nh2 {\n    font-size: 35px;\n    font-family: 'Potta One', cursive;\n}\n\n.menu-hive {\n    top: 25px;\n    right: 7px;\n}\n\n.menu-pic {\n    height: 250px;\n    width: 250px;\n    background-size: cover;\n    border-radius: 20px;\n    position: absolute;\n    bottom: 10px;\n    right: 45px;\n    border: 2px solid var(--dark-orange);\n}\n\n.menu-outer {\n    position: relative;\n    height: 480px;\n}\n\n.menu-outer>h3 {\n    padding-left: 20px;\n    font-size: 25px;\n    margin: 25px 0;\n}\n\n.menu-outer>p {\n    padding-left: 50px;\n    margin: 16px 0;\n}\n\n.item-price {\n    font-size: 20px;\n    font-weight: bold;\n    margin: 20px 0;\n}\n\n/* footer area */\nfooter {\n    box-sizing: border-box;\n    background-color: var(--khaki);\n    width: 100vw;\n    height: 56px;\n    padding-top: 15px;\n    padding-bottom: 17px;\n    margin-top: 45px;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\nfooter>* {\n    text-decoration: none;\n    color: black;\n    font-size: 12px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactTitle: () => (/* binding */ contactTitle),
/* harmony export */   contacts: () => (/* binding */ contacts),
/* harmony export */   homeTitle: () => (/* binding */ homeTitle),
/* harmony export */   info: () => (/* binding */ info),
/* harmony export */   menu: () => (/* binding */ menu),
/* harmony export */   menuTitle: () => (/* binding */ menuTitle),
/* harmony export */   reviews: () => (/* binding */ reviews)
/* harmony export */ });
let contacts = [
    {
        name: "Mama Bear",
        position: "Chef",
        phone: "555-555-5554",
        email: "totallyRealEmail@notFake.com",
        pic: "./mamabear.png",
        alt: "Mama Bear's Photo",
    },
    {
        name: "Papa Bear",
        position: "Manager",
        phone: "555-555-5555",
        email: "perfectlyRealEmail@notFake.com",
        pic: "./papabear.jpeg",
        alt: "Papa Bear's Photo",
    },
    {
        name: "Baby Bear",
        position: "Waiter",
        phone: "555-555-5556",
        email: "totallyRealEmail@notFake.com",
        pic: "./babybear.jpeg",
        alt: "Baby Bear's Photo",
    },
];

let info = {
    hours: {
        sunday: {
            open: "8",
            close: "8",
        },
        monday: {
            open: "6",
            close: "6",
        },
        tuesday: {
            open: "6",
            close: "6",
        },
        wednesday: {
            open: "6",
            close: "6",
        },
        thursday: {
            open: "6",
            close: "10",
        },
        friday: {
            open: "6",
            close: "10",
        },
        saturday: {
            open: "8",
            close: "10",
        },
    },
    location: {
        street: "123 Forest Drive",
        city: "Forestville",
        state: "Maine",
    },
};

let menu = [
    {
        item: false,
        subtitle: "Beverages",
    },
    {
        item: true,
        name: "Honey Tea",
        description:
            "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!",
        price: "$2",
        pic: "./honeyTea.jpg",
        alt: "Picture of honey tea.",
    },
    {
        item: true,
        name: "Beary Tea",
        description:
            "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.",
        price: "$3",
        pic: "./bearyTea.jpg",
        alt: "Picture of beary tea.",
    },
    {
        item: false,
        subtitle: "Sides",
    },
    {
        item: true,
        name: "Toast and Jam",
        description:
            "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.",
        price: "$1",
        pic: "./toast.jpg",
        alt: "Picture of toast and jam.",
    },
    {
        item: true,
        name: "Fresh Fruit",
        description:
            "A small bowl of fresh fruit, whatever we find at the market for the day.",
        price: "$3",
        pic: "./fruit.jpg",
        alt: "Picture of a bowl of fruit.",
    },
    {
        item: false,
        subtitle: "Main Dishes",
    },
    {
        item: true,
        name: "Pancakes",
        description:
            "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.",
        price: "$4",
        pic: "./pancakes.jpg",
        alt: "Picture of pancakes.",
    },
    {
        item: true,
        name: "French Toast",
        description:
            "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.",
        price: "$5",
        pic: "./frenchToast.jpg",
        alt: "Picture of french toast.",
    },
    {
        item: true,
        name: "Beary Veggie Sandwich",
        description:
            "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.",
        price: "$8",
        pic: "./veggieSandwich.jpg",
        alt: "Picture of veggie sandwich.",
    },
    {
        item: true,
        name: "BLT",
        description:
            "Interested in the Beary Veggie Sandwich but also love bacon? Say no more.",
        price: "$6",
        pic: "./blt.jpg",
        alt: "Picture of a BLT.",
    },
    {
        item: true,
        name: "Bagel and Lox",
        description:
            "Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.",
        price: "$8",
        pic: "./lox.jpg",
        alt: "Picture of bagel and lox.",
    },
    {
        item: true,
        name: "Honeycomb",
        description:
            "Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.",
        price: "$6",
        pic: "./honeyComb.jpg",
        alt: "Picture of honeycomb.",
    },
    {
        item: true,
        name: "Beary Bowl",
        description:
            "Get a big ole bowl of our berries! Side of honey is $1 extra.",
        price: "$7",
        pic: "./berryBowl.jpeg",
        alt: "Picture of a berry bowl.",
    },
    {
        item: true,
        name: "The Beary Best Porridge",
        description:
            "Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.",
        price: "$5",
        pic: "./porridge.jpg",
        alt: "Picture of porridge.",
    },
];

let reviews = [
    {
        text: "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.",
        name: "Goldilocks",
    },
];

let homeTitle = {
    title: "Beary's Breakfast Bar",
    beeClass1: "bee-left",
    beeClass2: "bee-right",
};

let menuTitle = {
    title: "Menu",
    beeClass1: "menu-bee-left",
    beeClass2: "menu-bee-right",
};

let contactTitle = {
    title: "Contact Us",
    beeClass1: "contact-bee-left",
    beeClass2: "contact-bee-right",
};




/***/ }),

/***/ "./src/functions/clearContent.js":
/*!***************************************!*\
  !*** ./src/functions/clearContent.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./src/img sync \\.(png%7Cjpe?g%7Cjpg%7Csvg)$":
/*!*****************************************************************!*\
  !*** ./src/img/ sync nonrecursive \.(png%7Cjpe?g%7Cjpg%7Csvg)$ ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./643.png": "./src/img/643.png",
	"./babybear.jpeg": "./src/img/babybear.jpeg",
	"./bearyTea.jpg": "./src/img/bearyTea.jpg",
	"./bee.svg": "./src/img/bee.svg",
	"./berryBowl.jpeg": "./src/img/berryBowl.jpeg",
	"./blt.jpg": "./src/img/blt.jpg",
	"./dripping.png": "./src/img/dripping.png",
	"./frenchToast.jpg": "./src/img/frenchToast.jpg",
	"./fruit.jpg": "./src/img/fruit.jpg",
	"./honeyComb.jpg": "./src/img/honeyComb.jpg",
	"./honeyTea.jpg": "./src/img/honeyTea.jpg",
	"./honeycomb.svg": "./src/img/honeycomb.svg",
	"./lox.jpg": "./src/img/lox.jpg",
	"./mamabear.png": "./src/img/mamabear.png",
	"./pancakes.jpg": "./src/img/pancakes.jpg",
	"./papabear.jpeg": "./src/img/papabear.jpeg",
	"./porridge.jpg": "./src/img/porridge.jpg",
	"./toast.jpg": "./src/img/toast.jpg",
	"./veggieSandwich.jpg": "./src/img/veggieSandwich.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/img sync \\.(png%7Cjpe?g%7Cjpg%7Csvg)$";

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/createElement */ "./src/functions/createElement.js");
/* harmony import */ var _img_bee_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/bee.svg */ "./src/img/bee.svg");
/* harmony import */ var _img_honeycomb_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/honeycomb.svg */ "./src/img/honeycomb.svg");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/config.js");




const menuPage = function () {
    const content = document.querySelector("#content");

    const main_heading = (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        classes: ["heading"],
        father: content,
        style: "margin-bottom: 0 !important;",
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
        classes: ["heading-text"],
        father: main_heading,
    });

    (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        type: "h1",
        textContent: "Menu",
        father: heading_text,
    });
    const makeCategoryCard = function (name) {
        const container = (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            classes: ["heading", "sub-container"],
            father: content,
        });
        const innerContainer = (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            classes: ["heading-text", "sub-header"],
            father: container,
        });
        (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            type: "h2",
            textContent: name,
            father: innerContainer,
        });
        (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            type: "img",
            src: _img_honeycomb_svg__WEBPACK_IMPORTED_MODULE_2__,
            father: container,
            classes: ["decorations", "menu-hive"],
        });
    };
    function importAll(r) {
        const key = r.keys();
        const values = r.keys().map(r);
        let coords = {};
        key.forEach((element, i) => {
            coords[element] = values[i];
        });
        return coords;
    }

    const images = importAll(
        __webpack_require__("./src/img sync \\.(png%7Cjpe?g%7Cjpg%7Csvg)$")
    );
    const makeCard = function (dish) {
        const hours_card = (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            classes: ["crop-out", "menu-outer"],
            father: content,
        });

        const hours_card_in = (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            classes: ["crop-in", "menu-outer"],
            father: hours_card,
        });

        (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            type: "h3",
            textContent: dish["name"],
            father: hours_card_in,
        });

        (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            type: "p",
            textContent: dish["description"],
            father: hours_card_in,
        });
        (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            classes: ["item-price"],
            type: "p",
            textContent: `${dish["price"]}`,
            father: hours_card_in,
        });

        (0,_functions_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            title: `Picture of ${dish["alt"]}`,
            classes: ["menu-pic"],
            style: `background-image: url(${images[dish["pic"]]});`,
            father: hours_card_in,
        });
    };

    for (let data of _config__WEBPACK_IMPORTED_MODULE_3__.menu) {
        if (data["item"]) makeCard(data);
        else makeCategoryCard(data["subtitle"]);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);


/***/ }),

/***/ "./src/img/643.png":
/*!*************************!*\
  !*** ./src/img/643.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0ee069ca56012f433906.png";

/***/ }),

/***/ "./src/img/babybear.jpeg":
/*!*******************************!*\
  !*** ./src/img/babybear.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "39337ca0124e9a4d663d.jpeg";

/***/ }),

/***/ "./src/img/bearyTea.jpg":
/*!******************************!*\
  !*** ./src/img/bearyTea.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8239c872463812a9ceb3.jpg";

/***/ }),

/***/ "./src/img/bee.svg":
/*!*************************!*\
  !*** ./src/img/bee.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5759589f026baa86e75a.svg";

/***/ }),

/***/ "./src/img/berryBowl.jpeg":
/*!********************************!*\
  !*** ./src/img/berryBowl.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f664d04963ed86147af1.jpeg";

/***/ }),

/***/ "./src/img/blt.jpg":
/*!*************************!*\
  !*** ./src/img/blt.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5fe5d82d52fc6176b49e.jpg";

/***/ }),

/***/ "./src/img/dripping.png":
/*!******************************!*\
  !*** ./src/img/dripping.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b8ff550e9e7c6e821764.png";

/***/ }),

/***/ "./src/img/frenchToast.jpg":
/*!*********************************!*\
  !*** ./src/img/frenchToast.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d6998c28606e8f61d918.jpg";

/***/ }),

/***/ "./src/img/fruit.jpg":
/*!***************************!*\
  !*** ./src/img/fruit.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "55adf94046e281ceb254.jpg";

/***/ }),

/***/ "./src/img/honeyComb.jpg":
/*!*******************************!*\
  !*** ./src/img/honeyComb.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3f65de06ee02acba6620.jpg";

/***/ }),

/***/ "./src/img/honeyTea.jpg":
/*!******************************!*\
  !*** ./src/img/honeyTea.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "25d67ed4fcda8007b0d7.jpg";

/***/ }),

/***/ "./src/img/honeycomb.svg":
/*!*******************************!*\
  !*** ./src/img/honeycomb.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9f6b40b263827ecffca7.svg";

/***/ }),

/***/ "./src/img/lox.jpg":
/*!*************************!*\
  !*** ./src/img/lox.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7c00486269a7d03b2e9b.jpg";

/***/ }),

/***/ "./src/img/mamabear.png":
/*!******************************!*\
  !*** ./src/img/mamabear.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "56c8195f994a40bdf4cb.png";

/***/ }),

/***/ "./src/img/pancakes.jpg":
/*!******************************!*\
  !*** ./src/img/pancakes.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9a9b952ed8ce7e1e9fde.jpg";

/***/ }),

/***/ "./src/img/papabear.jpeg":
/*!*******************************!*\
  !*** ./src/img/papabear.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0fbfbd8a7052bc48e4c7.jpeg";

/***/ }),

/***/ "./src/img/porridge.jpg":
/*!******************************!*\
  !*** ./src/img/porridge.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ff1b81624373d9652bac.jpg";

/***/ }),

/***/ "./src/img/toast.jpg":
/*!***************************!*\
  !*** ./src/img/toast.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "46b097a90b2e46667597.jpg";

/***/ }),

/***/ "./src/img/veggieSandwich.jpg":
/*!************************************!*\
  !*** ./src/img/veggieSandwich.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "363043f450e131d9e3b0.jpg";

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _functions_firstLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/firstLoad */ "./src/functions/firstLoad.js");
/* harmony import */ var _functions_clearContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/clearContent */ "./src/functions/clearContent.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact */ "./src/pages/contact.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _functions_setNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/setNav */ "./src/functions/setNav.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config */ "./src/config.js");









(0,_functions_firstLoad__WEBPACK_IMPORTED_MODULE_1__["default"])();

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");

homeButton.addEventListener("click", function () {
    console.log("home");
    (0,_functions_setNav__WEBPACK_IMPORTED_MODULE_6__["default"])("home");
    (0,_functions_clearContent__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

menuButton.addEventListener("click", function () {
    console.log("menu");
    (0,_functions_setNav__WEBPACK_IMPORTED_MODULE_6__["default"])("menu");
    (0,_functions_clearContent__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_pages_menu__WEBPACK_IMPORTED_MODULE_5__["default"])();
});

contactButton.addEventListener("click", function () {
    console.log("contact");
    (0,_functions_setNav__WEBPACK_IMPORTED_MODULE_6__["default"])("contact");
    (0,_functions_clearContent__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_pages_contact__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLHdHQUFpQztBQUM3RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sb0ZBQW9GLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlB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QVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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QTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZ0M7QUFDYztBQUNNO0FBQzNCO0FBQ2E7QUFDRjtBQUNJO0FBU3RCOztBQUVsQixnRUFBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksNkRBQU07QUFDVixJQUFJLG1FQUFZO0FBQ2hCLElBQUksdURBQUk7QUFDUixDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLDZEQUFNO0FBQ1YsSUFBSSxtRUFBWTtBQUNoQixJQUFJLHVEQUFRO0FBQ1osQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSw2REFBTTtBQUNWLElBQUksbUVBQVk7QUFDaEIsSUFBSSwwREFBTztBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Z1bmN0aW9ucy9jbGVhckNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Z1bmN0aW9ucy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mdW5jdGlvbnMvZmlyc3RMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mdW5jdGlvbnMvc2V0TmF2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWcvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmclN0NqcGUiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvNjQzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0ta2hha2k6ICNmZmRlNzM7XG4gICAgLS1ob25leTogI2VjYTQzYjtcbiAgICAtLWNob2NvbGF0ZTogI2MxNmEwODtcbiAgICAtLXllbGxvdzogI0ZGQzYwQjtcbiAgICAtLWRhcmstb3JhbmdlOiAjZGY4ODBhO1xufVxuXG4qLFxuKjo6YWZ0ZXIsXG4qOjpiZWZvcmUge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5odG1sIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIG1pbi13aWR0aDogMTAwdnc7XG4gICAgZm9udC1mYW1pbHk6ICdZdXNlaSBNYWdpYycsIHNhbnMtc2VyaWY7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4vKiBoZWFkZXIgYXJlYSAqL1xuXG5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWtoYWtpKTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbm5hdiB7XG4gICAgd2lkdGg6IDM4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI3RhYi1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbn1cblxuI3RhYi1saXN0PmxpIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIGZsZXg6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHotaW5kZXg6IDI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGlzYWJsZWQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGN1cnNvcjogdGV4dDtcbn1cblxuI2NvdmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjYTQzYjtcbiAgICB3aWR0aDogOThweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgei1pbmRleDogMTtcbn1cblxuI2RyaXBwaW5nIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDk4cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTQ0cHg7XG4gICAgbGVmdDogMXB4O1xufVxuXG4uaG9tZS10YWIge1xuICAgIGxlZnQ6IDIxcHg7XG4gICAgdG9wOiAxcHg7XG59XG5cbi5tZW51LXRhYiB7XG4gICAgbGVmdDogMTQxcHg7XG4gICAgdG9wOiAxcHg7XG59XG5cbi5jb250YWN0LXRhYiB7XG4gICAgcmlnaHQ6IDIxcHg7XG4gICAgdG9wOiAxcHg7XG59XG5cbi8qIG1haW4gYXJlYSAqL1xuXG4jY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC13aWR0aDogODEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta2hha2kpO1xuICAgIHBhZGRpbmc6IDU1cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAzMHB4XG59XG5cbiNjb250ZW50Pioge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNob2NvbGF0ZSk7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdQb3R0YSBPbmUnLCBjdXJzaXZlO1xuXG59XG5cbi5oZWFkaW5nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgICB3aWR0aDogNzEwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMzMuMyUsIDYlIDAsIDk0JSAwLCAxMDAlIDMzLjMlLCAxMDAlIDY2LjYlLCA5NCUgMTAwJSwgNiUgMTAwJSwgMCA2Ni42JSk7XG59XG5cbi5oZWFkaW5nLXRleHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XG4gICAgd2lkdGg6IDcxMHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMzMuMyUsIDUlIDAsIDk1JSAwLCAxMDAlIDMzLjMlLCAxMDAlIDY2LjYlLCA5NSUgMTAwJSwgNSUgMTAwJSwgMCA2Ni42JSk7XG59XG5cbi5kZWNvcmF0aW9ucyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbn1cblxuI2JlZS1sZWZ0IHtcbiAgICB0b3A6IDVweDtcbiAgICBsZWZ0OiAzMHB4O1xufVxuXG4jYmVlLXJpZ2h0IHtcbiAgICBib3R0b206IDFweDtcbiAgICByaWdodDogMzdweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjQwZGVnKTtcbn1cblxuI2hpdmUge1xuICAgIHdpZHRoOiAxMCU7XG4gICAgdG9wOiAxODVweDtcbiAgICBsZWZ0OiA0NSU7XG59XG5cbi5jcm9wLW91dCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIGhlaWdodDogMjI1cHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAyMSUsIDExJSAwLCA4OSUgMCwgMTAwJSAyMSUsIDEwMCUgNzklLCA4OSUgMTAwJSwgMTElIDEwMCUsIDAgNzklKTtcbn1cblxuLmNyb3AtaW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgaGVpZ2h0OiAyMjVweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDIwJSwgMTAlIDAsIDkwJSAwLCAxMDAlIDIwJSwgMTAwJSA4MCUsIDkwJSAxMDAlLCAxMCUgMTAwJSwgMCA4MCUpO1xufVxuXG4jcmV2aWV3IHtcbiAgICBwYWRkaW5nOiAxNnB4IDBweDtcbn1cblxuI2N1c3RvbWVyIHtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xufVxuXG5cbi5ob3VycyB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbn1cblxuLmxvY2F0aW9uIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uaG91cnM+aDMsXG4ubG9jYXRpb24+aDMge1xuICAgIHBhZGRpbmctbGVmdDogNDJweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5ob3Vycz5wLFxuLmxvY2F0aW9uPnAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhY3QtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDEyMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWN0LW91dGVyLFxuLmNvbnRhY3QtaW5uZXIge1xuICAgIGhlaWdodDogMTc1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29udGFjdC1pbm5lcj5wIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG5cbi5jb250YWN0LWlubmVyPmgzIHtcbiAgICBtYXJnaW46IDE4LjcyMHB4IDA7XG59XG5cbi5jb250YWN0LXBpYyB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0b3A6IDMwcHg7XG4gICAgcmlnaHQ6IDMwcHg7XG59XG5cbi5zdWItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMzUwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbn1cblxuLnN1Yi1oZWFkZXIge1xuICAgIHdpZHRoOiAzNTBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUG90dGEgT25lJywgY3Vyc2l2ZTtcbn1cblxuLm1lbnUtaGl2ZSB7XG4gICAgdG9wOiAyNXB4O1xuICAgIHJpZ2h0OiA3cHg7XG59XG5cbi5tZW51LXBpYyB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgcmlnaHQ6IDQ1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyay1vcmFuZ2UpO1xufVxuXG4ubWVudS1vdXRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNDgwcHg7XG59XG5cbi5tZW51LW91dGVyPmgzIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbjogMjVweCAwO1xufVxuXG4ubWVudS1vdXRlcj5wIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgbWFyZ2luOiAxNnB4IDA7XG59XG5cbi5pdGVtLXByaWNlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi8qIGZvb3RlciBhcmVhICovXG5mb290ZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta2hha2kpO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE3cHg7XG4gICAgbWFyZ2luLXRvcDogNDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmZvb3Rlcj4qIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTs7O0lBR0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHlEQUFxQztJQUNyQyw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBQ3RDLGtCQUFrQjtBQUN0Qjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0lBQ0ksOEJBQThCO0lBQzlCLFlB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QUNaLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQSxnQkFBZ0I7QUFDaEI7SUFDSSxzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWtoYWtpOiAjZmZkZTczO1xcbiAgICAtLWhvbmV5OiAjZWNhNDNiO1xcbiAgICAtLWNob2NvbGF0ZTogI2MxNmEwODtcXG4gICAgLS15ZWxsb3c6ICNGRkM2MEI7XFxuICAgIC0tZGFyay1vcmFuZ2U6ICNkZjg4MGE7XFxufVxcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy82NDMucG5nKTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIGZvbnQtZmFtaWx5OiAnWXVzZWkgTWFnaWMnLCBzYW5zLXNlcmlmO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi8qIGhlYWRlciBhcmVhICovXFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta2hha2kpO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbm5hdiB7XFxuICAgIHdpZHRoOiAzODBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3RhYi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcbn1cXG5cXG4jdGFiLWxpc3Q+bGkge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwcHggMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xcbiAgICBmbGV4OiAxO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRpc2FibGVkIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHRleHQ7XFxufVxcblxcbiNjb3ZlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjYTQzYjtcXG4gICAgd2lkdGg6IDk4cHg7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuI2RyaXBwaW5nIHtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICB3aWR0aDogOThweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC00NHB4O1xcbiAgICBsZWZ0OiAxcHg7XFxufVxcblxcbi5ob21lLXRhYiB7XFxuICAgIGxlZnQ6IDIxcHg7XFxuICAgIHRvcDogMXB4O1xcbn1cXG5cXG4ubWVudS10YWIge1xcbiAgICBsZWZ0OiAxNDFweDtcXG4gICAgdG9wOiAxcHg7XFxufVxcblxcbi5jb250YWN0LXRhYiB7XFxuICAgIHJpZ2h0OiAyMXB4O1xcbiAgICB0b3A6IDFweDtcXG59XFxuXFxuLyogbWFpbiBhcmVhICovXFxuXFxuI2NvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1heC13aWR0aDogODEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWtoYWtpKTtcXG4gICAgcGFkZGluZzogNTVweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweFxcbn1cXG5cXG4jY29udGVudD4qIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hvY29sYXRlKTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDQ1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG90dGEgT25lJywgY3Vyc2l2ZTtcXG5cXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xcbiAgICB3aWR0aDogNzEwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMzMuMyUsIDYlIDAsIDk0JSAwLCAxMDAlIDMzLjMlLCAxMDAlIDY2LjYlLCA5NCUgMTAwJSwgNiUgMTAwJSwgMCA2Ni42JSk7XFxufVxcblxcbi5oZWFkaW5nLXRleHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbiAgICB3aWR0aDogNzEwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDMzLjMlLCA1JSAwLCA5NSUgMCwgMTAwJSAzMy4zJSwgMTAwJSA2Ni42JSwgOTUlIDEwMCUsIDUlIDEwMCUsIDAgNjYuNiUpO1xcbn1cXG5cXG4uZGVjb3JhdGlvbnMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jYmVlLWxlZnQge1xcbiAgICB0b3A6IDVweDtcXG4gICAgbGVmdDogMzBweDtcXG59XFxuXFxuI2JlZS1yaWdodCB7XFxuICAgIGJvdHRvbTogMXB4O1xcbiAgICByaWdodDogMzdweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTI0MGRlZyk7XFxufVxcblxcbiNoaXZlIHtcXG4gICAgd2lkdGg6IDEwJTtcXG4gICAgdG9wOiAxODVweDtcXG4gICAgbGVmdDogNDUlO1xcbn1cXG5cXG4uY3JvcC1vdXQge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBoZWlnaHQ6IDIyNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAyMSUsIDExJSAwLCA4OSUgMCwgMTAwJSAyMSUsIDEwMCUgNzklLCA4OSUgMTAwJSwgMTElIDEwMCUsIDAgNzklKTtcXG59XFxuXFxuLmNyb3AtaW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGhlaWdodDogMjI1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDIwJSwgMTAlIDAsIDkwJSAwLCAxMDAlIDIwJSwgMTAwJSA4MCUsIDkwJSAxMDAlLCAxMCUgMTAwJSwgMCA4MCUpO1xcbn1cXG5cXG4jcmV2aWV3IHtcXG4gICAgcGFkZGluZzogMTZweCAwcHg7XFxufVxcblxcbiNjdXN0b21lciB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuXFxuLmhvdXJzIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLmhvdXJzPmgzLFxcbi5sb2NhdGlvbj5oMyB7XFxuICAgIHBhZGRpbmctbGVmdDogNDJweDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4uaG91cnM+cCxcXG4ubG9jYXRpb24+cCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxMjBweCAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLmNvbnRhY3Qtb3V0ZXIsXFxuLmNvbnRhY3QtaW5uZXIge1xcbiAgICBoZWlnaHQ6IDE3NXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jb250YWN0LWlubmVyPnAge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxufVxcblxcbi5jb250YWN0LWlubmVyPmgzIHtcXG4gICAgbWFyZ2luOiAxOC43MjBweCAwO1xcbn1cXG5cXG4uY29udGFjdC1waWMge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgdG9wOiAzMHB4O1xcbiAgICByaWdodDogMzBweDtcXG59XFxuXFxuLnN1Yi1jb250YWluZXIge1xcbiAgICB3aWR0aDogMzUwcHggIWltcG9ydGFudDtcXG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLXRvcDogNzBweDtcXG59XFxuXFxuLnN1Yi1oZWFkZXIge1xcbiAgICB3aWR0aDogMzUwcHggIWltcG9ydGFudDtcXG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICBmb250LWZhbWlseTogJ1BvdHRhIE9uZScsIGN1cnNpdmU7XFxufVxcblxcbi5tZW51LWhpdmUge1xcbiAgICB0b3A6IDI1cHg7XFxuICAgIHJpZ2h0OiA3cHg7XFxufVxcblxcbi5tZW51LXBpYyB7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDEwcHg7XFxuICAgIHJpZ2h0OiA0NXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrLW9yYW5nZSk7XFxufVxcblxcbi5tZW51LW91dGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDQ4MHB4O1xcbn1cXG5cXG4ubWVudS1vdXRlcj5oMyB7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBtYXJnaW46IDI1cHggMDtcXG59XFxuXFxuLm1lbnUtb3V0ZXI+cCB7XFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG4gICAgbWFyZ2luOiAxNnB4IDA7XFxufVxcblxcbi5pdGVtLXByaWNlIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi8qIGZvb3RlciBhcmVhICovXFxuZm9vdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta2hha2kpO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogNTZweDtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxN3B4O1xcbiAgICBtYXJnaW4tdG9wOiA0NXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyPioge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImxldCBjb250YWN0cyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiTWFtYSBCZWFyXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcIkNoZWZcIixcbiAgICAgICAgcGhvbmU6IFwiNTU1LTU1NS01NTU0XCIsXG4gICAgICAgIGVtYWlsOiBcInRvdGFsbHlSZWFsRW1haWxAbm90RmFrZS5jb21cIixcbiAgICAgICAgcGljOiBcIi4vbWFtYWJlYXIucG5nXCIsXG4gICAgICAgIGFsdDogXCJNYW1hIEJlYXIncyBQaG90b1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIlBhcGEgQmVhclwiLFxuICAgICAgICBwb3NpdGlvbjogXCJNYW5hZ2VyXCIsXG4gICAgICAgIHBob25lOiBcIjU1NS01NTUtNTU1NVwiLFxuICAgICAgICBlbWFpbDogXCJwZXJmZWN0bHlSZWFsRW1haWxAbm90RmFrZS5jb21cIixcbiAgICAgICAgcGljOiBcIi4vcGFwYWJlYXIuanBlZ1wiLFxuICAgICAgICBhbHQ6IFwiUGFwYSBCZWFyJ3MgUGhvdG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJCYWJ5IEJlYXJcIixcbiAgICAgICAgcG9zaXRpb246IFwiV2FpdGVyXCIsXG4gICAgICAgIHBob25lOiBcIjU1NS01NTUtNTU1NlwiLFxuICAgICAgICBlbWFpbDogXCJ0b3RhbGx5UmVhbEVtYWlsQG5vdEZha2UuY29tXCIsXG4gICAgICAgIHBpYzogXCIuL2JhYnliZWFyLmpwZWdcIixcbiAgICAgICAgYWx0OiBcIkJhYnkgQmVhcidzIFBob3RvXCIsXG4gICAgfSxcbl07XG5cbmxldCBpbmZvID0ge1xuICAgIGhvdXJzOiB7XG4gICAgICAgIHN1bmRheToge1xuICAgICAgICAgICAgb3BlbjogXCI4XCIsXG4gICAgICAgICAgICBjbG9zZTogXCI4XCIsXG4gICAgICAgIH0sXG4gICAgICAgIG1vbmRheToge1xuICAgICAgICAgICAgb3BlbjogXCI2XCIsXG4gICAgICAgICAgICBjbG9zZTogXCI2XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHR1ZXNkYXk6IHtcbiAgICAgICAgICAgIG9wZW46IFwiNlwiLFxuICAgICAgICAgICAgY2xvc2U6IFwiNlwiLFxuICAgICAgICB9LFxuICAgICAgICB3ZWRuZXNkYXk6IHtcbiAgICAgICAgICAgIG9wZW46IFwiNlwiLFxuICAgICAgICAgICAgY2xvc2U6IFwiNlwiLFxuICAgICAgICB9LFxuICAgICAgICB0aHVyc2RheToge1xuICAgICAgICAgICAgb3BlbjogXCI2XCIsXG4gICAgICAgICAgICBjbG9zZTogXCIxMFwiLFxuICAgICAgICB9LFxuICAgICAgICBmcmlkYXk6IHtcbiAgICAgICAgICAgIG9wZW46IFwiNlwiLFxuICAgICAgICAgICAgY2xvc2U6IFwiMTBcIixcbiAgICAgICAgfSxcbiAgICAgICAgc2F0dXJkYXk6IHtcbiAgICAgICAgICAgIG9wZW46IFwiOFwiLFxuICAgICAgICAgICAgY2xvc2U6IFwiMTBcIixcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIHN0cmVldDogXCIxMjMgRm9yZXN0IERyaXZlXCIsXG4gICAgICAgIGNpdHk6IFwiRm9yZXN0dmlsbGVcIixcbiAgICAgICAgc3RhdGU6IFwiTWFpbmVcIixcbiAgICB9LFxufTtcblxubGV0IG1lbnUgPSBbXG4gICAge1xuICAgICAgICBpdGVtOiBmYWxzZSxcbiAgICAgICAgc3VidGl0bGU6IFwiQmV2ZXJhZ2VzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGl0ZW06IHRydWUsXG4gICAgICAgIG5hbWU6IFwiSG9uZXkgVGVhXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJBIHdhcm0sIHN3ZWV0IHRlYSBtYWRlIHdpdGggdGhlIGhpZ2hlc3QgcXVhbGl0eSBob25leSBhbmQgYSBiaXQgb2YgbGVtb24gdG8gc3RhcnQgeW91ciBkYXkgb2ZmIHJpZ2h0IVwiLFxuICAgICAgICBwcmljZTogXCIkMlwiLFxuICAgICAgICBwaWM6IFwiLi9ob25leVRlYS5qcGdcIixcbiAgICAgICAgYWx0OiBcIlBpY3R1cmUgb2YgaG9uZXkgdGVhLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpdGVtOiB0cnVlLFxuICAgICAgICBuYW1lOiBcIkJlYXJ5IFRlYVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiQSBjb21mb3J0aW5nLCBhbG1vc3QgZmlsbGluZywgdGVhIHRoYXQgaXMgaW5mdXNlZCB3aXRoIHRoZSBmbGF2b3JzIG9mIHNldmVyYWwga2luZHMgb2YgYmVycmllcy4gQmVzdCBzZXJ2ZWQgY29sZCwgYnV0IGNhbiBiZSBzZXJ2ZWQgaG90IG9uIHJlcXVlc3QuXCIsXG4gICAgICAgIHByaWNlOiBcIiQzXCIsXG4gICAgICAgIHBpYzogXCIuL2JlYXJ5VGVhLmpwZ1wiLFxuICAgICAgICBhbHQ6IFwiUGljdHVyZSBvZiBiZWFyeSB0ZWEuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGl0ZW06IGZhbHNlLFxuICAgICAgICBzdWJ0aXRsZTogXCJTaWRlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpdGVtOiB0cnVlLFxuICAgICAgICBuYW1lOiBcIlRvYXN0IGFuZCBKYW1cIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIkEgc2xpY2Ugb2YgdG9hc3QsIHlvdXIgY2hvaWNlIG9mIGJyZWFkLCBhbmQgb3VyIGhvbWVtYWRlIGJsYWNrYmVycnkgb3IgcmFzcGJlcnJ5IGphbS5cIixcbiAgICAgICAgcHJpY2U6IFwiJDFcIixcbiAgICAgICAgcGljOiBcIi4vdG9hc3QuanBnXCIsXG4gICAgICAgIGFsdDogXCJQaWN0dXJlIG9mIHRvYXN0IGFuZCBqYW0uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGl0ZW06IHRydWUsXG4gICAgICAgIG5hbWU6IFwiRnJlc2ggRnJ1aXRcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIkEgc21hbGwgYm93bCBvZiBmcmVzaCBmcnVpdCwgd2hhdGV2ZXIgd2UgZmluZCBhdCB0aGUgbWFya2V0IGZvciB0aGUgZGF5LlwiLFxuICAgICAgICBwcmljZTogXCIkM1wiLFxuICAgICAgICBwaWM6IFwiLi9mcnVpdC5qcGdcIixcbiAgICAgICAgYWx0OiBcIlBpY3R1cmUgb2YgYSBib3dsIG9mIGZydWl0LlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpdGVtOiBmYWxzZSxcbiAgICAgICAgc3VidGl0bGU6IFwiTWFpbiBEaXNoZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaXRlbTogdHJ1ZSxcbiAgICAgICAgbmFtZTogXCJQYW5jYWtlc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiQSBzdGFjayBvZiBob21lbWFkZSBidXR0ZXJtaWxrIHBhbmNha2VzLCBzZXJ2ZWQgd2l0aCBvdXIgbG9jYWxseSBzb3VyY2VkIG1hcGxlIHN5cnVwLlwiLFxuICAgICAgICBwcmljZTogXCIkNFwiLFxuICAgICAgICBwaWM6IFwiLi9wYW5jYWtlcy5qcGdcIixcbiAgICAgICAgYWx0OiBcIlBpY3R1cmUgb2YgcGFuY2FrZXMuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGl0ZW06IHRydWUsXG4gICAgICAgIG5hbWU6IFwiRnJlbmNoIFRvYXN0XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJUd28gc2xpY2VzIG9mIHRoZSBiZXN0IGZyZW5jaCB0b2FzdCB5b3Ugd2lsbCBldmVyIGVhdCwgc2VydmVkIHdpdGggb3VyIGxvY2FsbHkgc291cmNlZCBtYXBsZSBzeXJ1cC5cIixcbiAgICAgICAgcHJpY2U6IFwiJDVcIixcbiAgICAgICAgcGljOiBcIi4vZnJlbmNoVG9hc3QuanBnXCIsXG4gICAgICAgIGFsdDogXCJQaWN0dXJlIG9mIGZyZW5jaCB0b2FzdC5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaXRlbTogdHJ1ZSxcbiAgICAgICAgbmFtZTogXCJCZWFyeSBWZWdnaWUgU2FuZHdpY2hcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIkRvIHlvdSBsaWtlIHZlZ2V0YWJsZXM/IFRoZW4gdGhpcyBpcyB0aGUgc2FuZHdpY2ggZm9yIHlvdSEgU3R1ZmZlZCBmdWxsIG9mIGEgdmFyaWV0eSBvZiBmcmVzaCBwcm9kdWNlLCBpdCB3aWxsIGZpbGwgeW91IHVwLlwiLFxuICAgICAgICBwcmljZTogXCIkOFwiLFxuICAgICAgICBwaWM6IFwiLi92ZWdnaWVTYW5kd2ljaC5qcGdcIixcbiAgICAgICAgYWx0OiBcIlBpY3R1cmUgb2YgdmVnZ2llIHNhbmR3aWNoLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpdGVtOiB0cnVlLFxuICAgICAgICBuYW1lOiBcIkJMVFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiSW50ZXJlc3RlZCBpbiB0aGUgQmVhcnkgVmVnZ2llIFNhbmR3aWNoIGJ1dCBhbHNvIGxvdmUgYmFjb24/IFNheSBubyBtb3JlLlwiLFxuICAgICAgICBwcmljZTogXCIkNlwiLFxuICAgICAgICBwaWM6IFwiLi9ibHQuanBnXCIsXG4gICAgICAgIGFsdDogXCJQaWN0dXJlIG9mIGEgQkxULlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpdGVtOiB0cnVlLFxuICAgICAgICBuYW1lOiBcIkJhZ2VsIGFuZCBMb3hcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIk91ciBob3VzZSBzcGVjaWFsdHksIHlvdSBjYW4ndCBnbyB3cm9uZyB3aXRoIGEgaGVhcnR5IGJhZ2VsIHRvcHBlZCB3aXRoIHN1c3RhaW5hYmx5IGhhcnZlc3RlZCBzYWxtb24uXCIsXG4gICAgICAgIHByaWNlOiBcIiQ4XCIsXG4gICAgICAgIHBpYzogXCIuL2xveC5qcGdcIixcbiAgICAgICAgYWx0OiBcIlBpY3R1cmUgb2YgYmFnZWwgYW5kIGxveC5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaXRlbTogdHJ1ZSxcbiAgICAgICAgbmFtZTogXCJIb25leWNvbWJcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIkFyZSB5b3UgYSBiZWFyIGxpa2UgdXM/IFRoZW4geW91IHdpbGwgbG92ZSBvdXIgaG9uZXljb21iLiBBbmQsIHllcyBodW1hbnMsIGl0IGlzIGp1c3QgYSBwaWVjZSBvZiBob25leWNvbWIsIG5vdCB0aGUgcG9wdWxhciBicmVha2Zhc3QgY2VyZWFsLlwiLFxuICAgICAgICBwcmljZTogXCIkNlwiLFxuICAgICAgICBwaWM6IFwiLi9ob25leUNvbWIuanBnXCIsXG4gICAgICAgIGFsdDogXCJQaWN0dXJlIG9mIGhvbmV5Y29tYi5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaXRlbTogdHJ1ZSxcbiAgICAgICAgbmFtZTogXCJCZWFyeSBCb3dsXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJHZXQgYSBiaWcgb2xlIGJvd2wgb2Ygb3VyIGJlcnJpZXMhIFNpZGUgb2YgaG9uZXkgaXMgJDEgZXh0cmEuXCIsXG4gICAgICAgIHByaWNlOiBcIiQ3XCIsXG4gICAgICAgIHBpYzogXCIuL2JlcnJ5Qm93bC5qcGVnXCIsXG4gICAgICAgIGFsdDogXCJQaWN0dXJlIG9mIGEgYmVycnkgYm93bC5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaXRlbTogdHJ1ZSxcbiAgICAgICAgbmFtZTogXCJUaGUgQmVhcnkgQmVzdCBQb3JyaWRnZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiTWFkZSBieSBCYWJ5IEJlYXIgaGltc2VsZiwgdGhpcyBwb3JyaWRnZSBpcyBndWFyZW50ZWVkIHRvIGJlIGp1c3QgcmlnaHQsIG9yIHlvdXIgbW9uZXkgYmFjay5cIixcbiAgICAgICAgcHJpY2U6IFwiJDVcIixcbiAgICAgICAgcGljOiBcIi4vcG9ycmlkZ2UuanBnXCIsXG4gICAgICAgIGFsdDogXCJQaWN0dXJlIG9mIHBvcnJpZGdlLlwiLFxuICAgIH0sXG5dO1xuXG5sZXQgcmV2aWV3cyA9IFtcbiAgICB7XG4gICAgICAgIHRleHQ6IFwiQmVhcnkncyBoYXMgdGhlIGJlc3QgcG9ycmlkZ2UhIFRoZSBhdG1vc3BoZXJlIGFuZCBjdXN0b21lciBzZXJ2aWNlIG1ha2UgeW91IGZlZWwgbGlrZSB5b3UgYXJlIHNpdHRpbmcgaW4gdGhlIG1pZGRsZSBvZiB0aGUgd29vZHMsIGVhdGluZyBsaWtlIGEgYmVhciEgVGhpcyBpcyBleGFjdGx5IHRoZSBraW5kIG9mIHBsYWNlIHRoYXQgSSBsaWtlIHRvIHJldHVybiB0byBhZ2FpbiBhbmQgYWdhaW4uXCIsXG4gICAgICAgIG5hbWU6IFwiR29sZGlsb2Nrc1wiLFxuICAgIH0sXG5dO1xuXG5sZXQgaG9tZVRpdGxlID0ge1xuICAgIHRpdGxlOiBcIkJlYXJ5J3MgQnJlYWtmYXN0IEJhclwiLFxuICAgIGJlZUNsYXNzMTogXCJiZWUtbGVmdFwiLFxuICAgIGJlZUNsYXNzMjogXCJiZWUtcmlnaHRcIixcbn07XG5cbmxldCBtZW51VGl0bGUgPSB7XG4gICAgdGl0bGU6IFwiTWVudVwiLFxuICAgIGJlZUNsYXNzMTogXCJtZW51LWJlZS1sZWZ0XCIsXG4gICAgYmVlQ2xhc3MyOiBcIm1lbnUtYmVlLXJpZ2h0XCIsXG59O1xuXG5sZXQgY29udGFjdFRpdGxlID0ge1xuICAgIHRpdGxlOiBcIkNvbnRhY3QgVXNcIixcbiAgICBiZWVDbGFzczE6IFwiY29udGFjdC1iZWUtbGVmdFwiLFxuICAgIGJlZUNsYXNzMjogXCJjb250YWN0LWJlZS1yaWdodFwiLFxufTtcblxuZXhwb3J0IHsgY29udGFjdHMsIGluZm8sIG1lbnUsIHJldmlld3MsIGhvbWVUaXRsZSwgbWVudVRpdGxlLCBjb250YWN0VGl0bGUgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGxldCBjaGlsZCA9IGNvbnRlbnQubGFzdEVsZW1lbnRDaGlsZDtcbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIGNoaWxkID0gY29udGVudC5sYXN0RWxlbWVudENoaWxkO1xuICAgIH1cbn1cbiIsImNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAoe1xuICAgIHR5cGUgPSBcImRpdlwiLFxuICAgIGNsYXNzZXMgPSAwLFxuICAgIGlkID0gMCxcbiAgICBzcmMgPSAwLFxuICAgIGFsdCA9IDAsXG4gICAgdGV4dENvbnRlbnQgPSAwLFxuICAgIGhyZWYgPSAwLFxuICAgIGZhdGhlciA9IDAsXG4gICAgdGl0bGUgPSAwLFxuICAgIHN0eWxlID0gMCxcbn0gPSB7fSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGlmIChjbGFzc2VzICE9PSAwKSBmb3IgKGxldCBpIGluIGNsYXNzZXMpIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc2VzW2ldKTtcbiAgICBpZiAoaWQgIT09IDApIGVsZW1lbnQuaWQgPSBpZDtcbiAgICBpZiAoc3JjICE9PSAwKSBlbGVtZW50LnNyYyA9IHNyYztcbiAgICBpZiAoYWx0ICE9PSAwKSBlbGVtZW50LmFsdCA9IGFsdDtcbiAgICBpZiAodGV4dENvbnRlbnQgIT09IDApIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICBpZiAoaHJlZiAhPT0gMCkgZWxlbWVudC5ocmVmID0gaHJlZjtcbiAgICBpZiAoZmF0aGVyICE9PSAwKSBmYXRoZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgaWYgKHRpdGxlICE9PSAwKSBlbGVtZW50LnRpdGxlID0gdGl0bGU7XG4gICAgaWYgKHN0eWxlICE9PSAwKSBlbGVtZW50LnN0eWxlID0gc3R5bGU7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQ7XG4iLCIvLyBwcmVwcyBzaXRlIHRoZSBmaXJzdCB0aW1lIGl0J3Mgb3BlbmVkIGJ5IG1ha2luZyBhIGhlYWRlciBhbmQgbG9hZGluZyBob21lIHBhZ2VcbmltcG9ydCBoZWFkZXJEaXYgZnJvbSBcIi4uL3BhZ2VzL2hlYWRlclwiO1xuaW1wb3J0IGhvbWUgZnJvbSBcIi4uL3BhZ2VzL2hvbWVcIjtcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4uL3BhZ2VzL2Zvb3RlclwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuY29uc3QgZmlyc3RMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlckRpdigpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIikuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBjcmVhdGVFbGVtZW50KHsgaWQ6IFwiY29udGVudFwiLCBmYXRoZXI6IG1haW4gfSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBob21lKCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaXJzdExvYWQ7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXROYXYoY3VycmVudCkge1xuICAgIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3ZlclwiKTtcbiAgICBjb3Zlci5jbGFzc05hbWUgPSBcIlwiO1xuICAgIGNvdmVyLmNsYXNzTGlzdC5hZGQoYCR7Y3VycmVudH0tdGFiYCk7XG5cbiAgICBjb25zdCBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFiLWxpc3RcIikuY2hpbGROb2RlcztcbiAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSBub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJyZW50KS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG59XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vNjQzLnBuZ1wiOiBcIi4vc3JjL2ltZy82NDMucG5nXCIsXG5cdFwiLi9iYWJ5YmVhci5qcGVnXCI6IFwiLi9zcmMvaW1nL2JhYnliZWFyLmpwZWdcIixcblx0XCIuL2JlYXJ5VGVhLmpwZ1wiOiBcIi4vc3JjL2ltZy9iZWFyeVRlYS5qcGdcIixcblx0XCIuL2JlZS5zdmdcIjogXCIuL3NyYy9pbWcvYmVlLnN2Z1wiLFxuXHRcIi4vYmVycnlCb3dsLmpwZWdcIjogXCIuL3NyYy9pbWcvYmVycnlCb3dsLmpwZWdcIixcblx0XCIuL2JsdC5qcGdcIjogXCIuL3NyYy9pbWcvYmx0LmpwZ1wiLFxuXHRcIi4vZHJpcHBpbmcucG5nXCI6IFwiLi9zcmMvaW1nL2RyaXBwaW5nLnBuZ1wiLFxuXHRcIi4vZnJlbmNoVG9hc3QuanBnXCI6IFwiLi9zcmMvaW1nL2ZyZW5jaFRvYXN0LmpwZ1wiLFxuXHRcIi4vZnJ1aXQuanBnXCI6IFwiLi9zcmMvaW1nL2ZydWl0LmpwZ1wiLFxuXHRcIi4vaG9uZXlDb21iLmpwZ1wiOiBcIi4vc3JjL2ltZy9ob25leUNvbWIuanBnXCIsXG5cdFwiLi9ob25leVRlYS5qcGdcIjogXCIuL3NyYy9pbWcvaG9uZXlUZWEuanBnXCIsXG5cdFwiLi9ob25leWNvbWIuc3ZnXCI6IFwiLi9zcmMvaW1nL2hvbmV5Y29tYi5zdmdcIixcblx0XCIuL2xveC5qcGdcIjogXCIuL3NyYy9pbWcvbG94LmpwZ1wiLFxuXHRcIi4vbWFtYWJlYXIucG5nXCI6IFwiLi9zcmMvaW1nL21hbWFiZWFyLnBuZ1wiLFxuXHRcIi4vcGFuY2FrZXMuanBnXCI6IFwiLi9zcmMvaW1nL3BhbmNha2VzLmpwZ1wiLFxuXHRcIi4vcGFwYWJlYXIuanBlZ1wiOiBcIi4vc3JjL2ltZy9wYXBhYmVhci5qcGVnXCIsXG5cdFwiLi9wb3JyaWRnZS5qcGdcIjogXCIuL3NyYy9pbWcvcG9ycmlkZ2UuanBnXCIsXG5cdFwiLi90b2FzdC5qcGdcIjogXCIuL3NyYy9pbWcvdG9hc3QuanBnXCIsXG5cdFwiLi92ZWdnaWVTYW5kd2ljaC5qcGdcIjogXCIuL3NyYy9pbWcvdmVnZ2llU2FuZHdpY2guanBnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltZyBzeW5jIFxcXFwuKHBuZyU3Q2pwZT9nJTdDanBnJTdDc3ZnKSRcIjsiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vZnVuY3Rpb25zL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCBiZWVJY29uIGZyb20gXCIuLi9pbWcvYmVlLnN2Z1wiO1xuaW1wb3J0IG1hbWFCZWFyIGZyb20gXCIuLi9pbWcvbWFtYWJlYXIucG5nXCI7XG5pbXBvcnQgcGFwYUJlYXIgZnJvbSBcIi4uL2ltZy9wYXBhYmVhci5qcGVnXCI7XG5pbXBvcnQgYmFieUJlYXIgZnJvbSBcIi4uL2ltZy9iYWJ5YmVhci5qcGVnXCI7XG5cbmNvbnN0IGNvbnRhY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAgIGNvbnN0IG1haW5faGVhZGluZyA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICBmYXRoZXI6IGNvbnRlbnQsXG4gICAgICAgIGNsYXNzZXM6IFtcImNvbnRhY3QtaGVhZGVyXCIsIFwiaGVhZGluZ1wiXSxcbiAgICB9KTtcblxuICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBcImltZ1wiLFxuICAgICAgICBpZDogXCJiZWUtbGVmdFwiLFxuICAgICAgICBjbGFzc2VzOiBbXCJkZWNvcmF0aW9uc1wiXSxcbiAgICAgICAgc3JjOiBiZWVJY29uLFxuICAgICAgICBhbHQ6IFwiYmVlIGltZ1wiLFxuICAgICAgICBmYXRoZXI6IG1haW5faGVhZGluZyxcbiAgICB9KTtcblxuICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBcImltZ1wiLFxuICAgICAgICBpZDogXCJiZWUtcmlnaHRcIixcbiAgICAgICAgY2xhc3NlczogW1wiZGVjb3JhdGlvbnNcIl0sXG4gICAgICAgIHNyYzogYmVlSWNvbixcbiAgICAgICAgYWx0OiBcImJlZSBpbWdcIixcbiAgICAgICAgZmF0aGVyOiBtYWluX2hlYWRpbmcsXG4gICAgfSk7XG5cbiAgICBjb25zdCBoZWFkaW5nX3RleHQgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgZmF0aGVyOiBtYWluX2hlYWRpbmcsXG4gICAgICAgIGNsYXNzZXM6IFtcImNvbnRhY3QtaGVhZGVyXCIsIFwiaGVhZGluZy10ZXh0XCJdLFxuICAgIH0pO1xuXG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHR5cGU6IFwiaDFcIixcbiAgICAgICAgdGV4dENvbnRlbnQ6IFwiQ29udGFjdCBVc1wiLFxuICAgICAgICBmYXRoZXI6IGhlYWRpbmdfdGV4dCxcbiAgICB9KTtcblxuICAgIGNvbnN0IG1ha2VDYXJkID0gZnVuY3Rpb24gKHdvcmtlcikge1xuICAgICAgICBjb25zdCBob3Vyc19jYXJkID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICBjbGFzc2VzOiBbXCJjcm9wLW91dFwiLCBcImNvbnRhY3Qtb3V0ZXJcIl0sXG4gICAgICAgICAgICBmYXRoZXI6IGNvbnRlbnQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGhvdXJzX2NhcmRfaW4gPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIGNsYXNzZXM6IFtcImNyb3AtaW5cIiwgXCJjb250YWN0LWlubmVyXCJdLFxuICAgICAgICAgICAgZmF0aGVyOiBob3Vyc19jYXJkLFxuICAgICAgICB9KTtcblxuICAgICAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIHR5cGU6IFwiaDNcIixcbiAgICAgICAgICAgIHRleHRDb250ZW50OiB3b3JrZXJbXCJuYW1lXCJdLFxuICAgICAgICAgICAgZmF0aGVyOiBob3Vyc19jYXJkX2luLFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZGF5cyA9IFt3b3JrZXJbXCJyb2xlXCJdLCB3b3JrZXJbXCJudW1iZXJcIl0sIHdvcmtlcltcImVtYWlsXCJdXTtcbiAgICAgICAgZm9yIChsZXQgZGF5IG9mIGRheXMpIHtcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwicFwiLFxuICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBkYXksXG4gICAgICAgICAgICAgICAgZmF0aGVyOiBob3Vyc19jYXJkX2luLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICB0aXRsZTogYCR7d29ya2VyW1wibmFtZVwiXX0ncyBQaG90b2AsXG4gICAgICAgICAgICBjbGFzc2VzOiBbXCJjb250YWN0LXBpY1wiXSxcbiAgICAgICAgICAgIHN0eWxlOiBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7d29ya2VyW1wicGhvdG9cIl19KTtgLFxuICAgICAgICAgICAgZmF0aGVyOiBob3Vyc19jYXJkX2luLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgd29ya2VyIG9mIFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJNYW1hIEJlYXJcIixcbiAgICAgICAgICAgIHJvbGU6IFwiQ2hlZlwiLFxuICAgICAgICAgICAgbnVtYmVyOiBcIjU1NS01NTUtNTU1NFwiLFxuICAgICAgICAgICAgZW1haWw6IFwidG90YWxseVJlYWxFbWFpbEBub3RGYWtlLmNvbVwiLFxuICAgICAgICAgICAgcGhvdG86IG1hbWFCZWFyLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlBhcGEgQmVhclwiLFxuICAgICAgICAgICAgcm9sZTogXCJNYW5hZ2VyXCIsXG4gICAgICAgICAgICBudW1iZXI6IFwiNTU1LTU1NS01NTU1XCIsXG4gICAgICAgICAgICBlbWFpbDogXCJwZXJmZWN0bHlSZWFsRW1haWxAbm90RmFrZS5jb21cIixcbiAgICAgICAgICAgIHBob3RvOiBwYXBhQmVhcixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJCYWJ5IEJlYXJcIixcbiAgICAgICAgICAgIHJvbGU6IFwiV2FpdGVyXCIsXG4gICAgICAgICAgICBudW1iZXI6IFwiNTU1LTU1NS01NTU2XCIsXG4gICAgICAgICAgICBlbWFpbDogXCJ0b3RhbGx5UmVhbEVtYWlsQG5vdEZha2UuY29tXCIsXG4gICAgICAgICAgICBwaG90bzogYmFieUJlYXIsXG4gICAgICAgIH0sXG4gICAgXSkge1xuICAgICAgICBtYWtlQ2FyZCh3b3JrZXIpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBjb250YWN0O1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uL2Z1bmN0aW9ucy9jcmVhdGVFbGVtZW50XCI7XG5jb25zdCBmb290ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdGhlRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcblxuICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBcImFcIixcbiAgICAgICAgaHJlZjogXCJodHRwOi8vd3d3LmZyZWVwaWsuY29tXCIsXG4gICAgICAgIHRleHRDb250ZW50OiBcIkhpdmUgaWNvbiBtYWRlIGJ5IEZyZWVwaWsgLSB3d3cuZmxhdGljb24uY29tXCIsXG4gICAgICAgIGZhdGhlcjogdGhlRm9vdGVyLFxuICAgIH0pO1xuXG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHR5cGU6IFwiYVwiLFxuICAgICAgICBocmVmOiBcImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9hdXRob3JzL3NtYXNoaWNvbnNcIixcbiAgICAgICAgdGV4dENvbnRlbnQ6IFwiQmVlIGljb25zIG1hZGUgYnkgU21hc2hpY29ucyAtIHd3dy5mbGF0aWNvbi5jb21cIixcbiAgICAgICAgZmF0aGVyOiB0aGVGb290ZXIsXG4gICAgfSk7XG5cbiAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdHlwZTogXCJhXCIsXG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cuZnJlZXBpay5jb20vdmVjdG9ycy9mb29kXCIsXG4gICAgICAgIHRleHRDb250ZW50OlxuICAgICAgICAgICAgXCJCYWNrZ3JvdW5kIGltYWdlIGNyZWF0ZWQgYnkgZGdpbS1zdHVkaW8gLSB3d3cuZnJlZXBpay5jb21cIixcbiAgICAgICAgZmF0aGVyOiB0aGVGb290ZXIsXG4gICAgfSk7XG5cbiAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdHlwZTogXCJwXCIsXG4gICAgICAgIHRleHRDb250ZW50OiBcImRlc2lnbiBieSBCZW4gRWNrXCIsXG4gICAgICAgIGZhdGhlcjogdGhlRm9vdGVyLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGVGb290ZXI7XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9vdGVyO1xuIiwiaW1wb3J0IEljb24gZnJvbSBcIi4uL2ltZy9kcmlwcGluZy5wbmdcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi9mdW5jdGlvbnMvY3JlYXRlRWxlbWVudFwiO1xuXG5jb25zdCBoZWFkZXJEaXYgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblxuICAgIGNvbnN0IG5hdiA9IGNyZWF0ZUVsZW1lbnQoeyB0eXBlOiBcIm5hdlwiLCBmYXRoZXI6IGhlYWRlciB9KTtcblxuICAgIGNvbnN0IGNvdmVyID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIGlkOiBcImNvdmVyXCIsXG4gICAgICAgIGNsYXNzZXM6IFtcImhvbWUtdGFiXCJdLFxuICAgICAgICBmYXRoZXI6IG5hdixcbiAgICB9KTtcblxuICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBcImltZ1wiLFxuICAgICAgICBpZDogXCJkcmlwcGluZ1wiLFxuICAgICAgICBjbGFzc2VzOiBbXCJkaXNhYmxlZFwiXSxcbiAgICAgICAgc3JjOiBJY29uLFxuICAgICAgICBhbHQ6IFwiaG9uZXkgZHJpcHBpbmcgaW1nXCIsXG4gICAgICAgIGZhdGhlcjogY292ZXIsXG4gICAgfSk7XG5cbiAgICBjb25zdCB0YWJfbGlzdCA9IGNyZWF0ZUVsZW1lbnQoeyB0eXBlOiBcInVsXCIsIGlkOiBcInRhYi1saXN0XCIsIGZhdGhlcjogbmF2IH0pO1xuXG4gICAgZm9yIChsZXQgdGV4dCBvZiBbXCJIb21lXCIsIFwiTWVudVwiLCBcIkNvbnRhY3RcIl0pXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdHlwZTogXCJsaVwiLFxuICAgICAgICAgICAgdGV4dENvbnRlbnQ6IHRleHQsXG4gICAgICAgICAgICBmYXRoZXI6IHRhYl9saXN0LFxuICAgICAgICAgICAgaWQ6IHRleHQudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyRGl2O1xuIiwiaW1wb3J0IGJlZUljb24gZnJvbSBcIi4uL2ltZy9iZWUuc3ZnXCI7XG5pbXBvcnQgaGl2ZUljb24gZnJvbSBcIi4uL2ltZy9ob25leWNvbWIuc3ZnXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vZnVuY3Rpb25zL2NyZWF0ZUVsZW1lbnRcIjtcblxuY29uc3QgaG9tZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgY29uc3QgbWFpbl9oZWFkaW5nID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIGNsYXNzZXM6IFtcImhlYWRpbmdcIl0sXG4gICAgICAgIGZhdGhlcjogY29udGVudCxcbiAgICB9KTtcblxuICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBcImltZ1wiLFxuICAgICAgICBpZDogXCJiZWUtbGVmdFwiLFxuICAgICAgICBjbGFzc2VzOiBbXCJkZWNvcmF0aW9uc1wiXSxcbiAgICAgICAgc3JjOiBiZWVJY29uLFxuICAgICAgICBhbHQ6IFwiYmVlIGltZ1wiLFxuICAgICAgICBmYXRoZXI6IG1haW5faGVhZGluZyxcbiAgICB9KTtcblxuICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBcImltZ1wiLFxuICAgICAgICBpZDogXCJiZWUtcmlnaHRcIixcbiAgICAgICAgY2xhc3NlczogW1wiZGVjb3JhdGlvbnNcIl0sXG4gICAgICAgIHNyYzogYmVlSWNvbixcbiAgICAgICAgYWx0OiBcImJlZSBpbWdcIixcbiAgICAgICAgZmF0aGVyOiBtYWluX2hlYWRpbmcsXG4gICAgfSk7XG5cbiAgICBjb25zdCBoZWFkaW5nX3RleHQgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgY2xhc3NlczogW1wiaGVhZGluZy10ZXh0XCJdLFxuICAgICAgICBmYXRoZXI6IG1haW5faGVhZGluZyxcbiAgICB9KTtcblxuICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBcImgxXCIsXG4gICAgICAgIHRleHRDb250ZW50OiBcIkJlYXJ5J3MgQnJlYWtmYXN0IEJhclwiLFxuICAgICAgICBmYXRoZXI6IGhlYWRpbmdfdGV4dCxcbiAgICB9KTtcblxuICAgIGNvbnN0IHJldmlld19jYXJkID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIGlkOiBcInJldmlldy1jYXJkXCIsXG4gICAgICAgIGNsYXNzZXM6IFtcImNyb3Atb3V0XCJdLFxuICAgICAgICBmYXRoZXI6IGNvbnRlbnQsXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXZpZXdfY2FyZF9pbiA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICBjbGFzc2VzOiBbXCJjcm9wLWluXCJdLFxuICAgICAgICBmYXRoZXI6IHJldmlld19jYXJkLFxuICAgIH0pO1xuXG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHR5cGU6IFwicFwiLFxuICAgICAgICBpZDogXCJyZXZpZXdcIixcbiAgICAgICAgdGV4dENvbnRlbnQ6IGBlYXJ5J3MgaGFzIHRoZSBiZXN0IHBvcnJpZGdlISBUaGUgYXRtb3NwaGVyZSBhbmQgY3VzdG9tZXIgc2VydmljZSBtYWtlIHlvdSBmZWVsIGxpa2UgeW91IGFyZVxuICAgICAgICBzaXR0aW5nIGluXG4gICAgICAgIHRoZVxuICAgICAgICBtaWRkbGUgb2ZcbiAgICAgICAgdGhlIHdvb2RzLCBlYXRpbmcgbGlrZSBhIGJlYXIhIFRoaXMgaXMgZXhhY3RseSB0aGUga2luZCBvZiBwbGFjZSB0aGF0IEkgbGlrZSB0byByZXR1cm4gdG8gYWdhaW4gYW5kIGFnYWluLmAsXG4gICAgICAgIGZhdGhlcjogcmV2aWV3X2NhcmRfaW4sXG4gICAgfSk7XG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHR5cGU6IFwicFwiLFxuICAgICAgICBpZDogXCJjdXN0b21lclwiLFxuICAgICAgICB0ZXh0Q29udGVudDogXCJNb2hhbW1hZE1hcm1hc2hcIixcbiAgICAgICAgZmF0aGVyOiByZXZpZXdfY2FyZF9pbixcbiAgICB9KTtcblxuICAgIGNvbnN0IGhvdXJzX2NhcmQgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgY2xhc3NlczogW1wiY3JvcC1vdXRcIiwgXCJob3Vyc1wiXSxcbiAgICAgICAgZmF0aGVyOiBjb250ZW50LFxuICAgIH0pO1xuXG4gICAgY29uc3QgaG91cnNfY2FyZF9pbiA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICBjbGFzc2VzOiBbXCJjcm9wLWluXCIsIFwiaG91cnNcIl0sXG4gICAgICAgIGZhdGhlcjogaG91cnNfY2FyZCxcbiAgICB9KTtcblxuICAgIGNyZWF0ZUVsZW1lbnQoeyB0eXBlOiBcImgzXCIsIHRleHRDb250ZW50OiBcIkhvdXJzXCIsIGZhdGhlcjogaG91cnNfY2FyZF9pbiB9KTtcblxuICAgIGxldCBkYXlzID0gW1xuICAgICAgICBbXCJzdW5kYXlcIiwgXCI4YW0gLSA4cG1cIl0sXG4gICAgICAgIFtcIm1vbmRheVwiLCBcIjZhbSAtIDZwbVwiXSxcbiAgICAgICAgW1widHVlc2RheVwiLCBcIjZhbSAtIDZwbVwiXSxcbiAgICAgICAgW1wid2VkbmVzZGF5XCIsIFwiNmFtIC0gNnBtXCJdLFxuICAgICAgICBbXCJ0aHVyc2RheVwiLCBcIjZhbSAtIDEwcG1cIl0sXG4gICAgICAgIFtcImZyaWRheVwiLCBcIjZhbSAtIDEwcG1cIl0sXG4gICAgICAgIFtcInNhdHVyZGF5XCIsIFwiOGFtIC0gMTBwbVwiXSxcbiAgICBdO1xuICAgIGZvciAobGV0IGRheSBvZiBkYXlzKSB7XG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdHlwZTogXCJwXCIsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogYCR7ZGF5WzBdfTogJHtkYXlbMV19YCxcbiAgICAgICAgICAgIGlkOiBkYXlbMF0sXG4gICAgICAgICAgICBmYXRoZXI6IGhvdXJzX2NhcmRfaW4sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGxvY2F0aW9uX2NhcmQgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgY2xhc3NlczogW1wiY3JvcC1vdXRcIiwgXCJsb2NhdGlvblwiXSxcbiAgICAgICAgZmF0aGVyOiBjb250ZW50LFxuICAgIH0pO1xuXG4gICAgY29uc3QgbG9jYXRpb25fY2FyZF9pbiA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICBjbGFzc2VzOiBbXCJjcm9wLWluXCIsIFwibG9jYXRpb25cIl0sXG4gICAgICAgIGZhdGhlcjogbG9jYXRpb25fY2FyZCxcbiAgICB9KTtcblxuICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBcImgzXCIsXG4gICAgICAgIHRleHRDb250ZW50OiBcIkxvY2F0aW9uXCIsXG4gICAgICAgIGZhdGhlcjogbG9jYXRpb25fY2FyZF9pbixcbiAgICB9KTtcblxuICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBcInBcIixcbiAgICAgICAgdGV4dENvbnRlbnQ6IFwiMTIzIEZvcmVzdCBEcml2ZSwgRm9yZXN0dmlsbGUsIE1haW5lXCIsXG4gICAgICAgIGZhdGhlcjogbG9jYXRpb25fY2FyZF9pbixcbiAgICB9KTtcblxuICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBcImltZ1wiLFxuICAgICAgICBmYXRoZXI6IGNvbnRlbnQsXG4gICAgICAgIGNsYXNzZXM6IFtcImRlY29yYXRpb25zXCJdLFxuICAgICAgICBpZDogXCJoaXZlXCIsXG4gICAgICAgIHNyYzogaGl2ZUljb24sXG4gICAgICAgIGFsOiBcImhpdmUgaW1nXCIsXG4gICAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgaG9tZTtcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi9mdW5jdGlvbnMvY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IGJlZUljb24gZnJvbSBcIi4uL2ltZy9iZWUuc3ZnXCI7XG5pbXBvcnQgaGl2ZUljb24gZnJvbSBcIi4uL2ltZy9ob25leWNvbWIuc3ZnXCI7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuY29uc3QgbWVudVBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAgIGNvbnN0IG1haW5faGVhZGluZyA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICBjbGFzc2VzOiBbXCJoZWFkaW5nXCJdLFxuICAgICAgICBmYXRoZXI6IGNvbnRlbnQsXG4gICAgICAgIHN0eWxlOiBcIm1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcIixcbiAgICB9KTtcblxuICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBcImltZ1wiLFxuICAgICAgICBpZDogXCJiZWUtbGVmdFwiLFxuICAgICAgICBjbGFzc2VzOiBbXCJkZWNvcmF0aW9uc1wiXSxcbiAgICAgICAgc3JjOiBiZWVJY29uLFxuICAgICAgICBhbHQ6IFwiYmVlIGltZ1wiLFxuICAgICAgICBmYXRoZXI6IG1haW5faGVhZGluZyxcbiAgICB9KTtcblxuICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBcImltZ1wiLFxuICAgICAgICBpZDogXCJiZWUtcmlnaHRcIixcbiAgICAgICAgY2xhc3NlczogW1wiZGVjb3JhdGlvbnNcIl0sXG4gICAgICAgIHNyYzogYmVlSWNvbixcbiAgICAgICAgYWx0OiBcImJlZSBpbWdcIixcbiAgICAgICAgZmF0aGVyOiBtYWluX2hlYWRpbmcsXG4gICAgfSk7XG5cbiAgICBjb25zdCBoZWFkaW5nX3RleHQgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgY2xhc3NlczogW1wiaGVhZGluZy10ZXh0XCJdLFxuICAgICAgICBmYXRoZXI6IG1haW5faGVhZGluZyxcbiAgICB9KTtcblxuICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBcImgxXCIsXG4gICAgICAgIHRleHRDb250ZW50OiBcIk1lbnVcIixcbiAgICAgICAgZmF0aGVyOiBoZWFkaW5nX3RleHQsXG4gICAgfSk7XG4gICAgY29uc3QgbWFrZUNhdGVnb3J5Q2FyZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgY2xhc3NlczogW1wiaGVhZGluZ1wiLCBcInN1Yi1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBmYXRoZXI6IGNvbnRlbnQsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBpbm5lckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgY2xhc3NlczogW1wiaGVhZGluZy10ZXh0XCIsIFwic3ViLWhlYWRlclwiXSxcbiAgICAgICAgICAgIGZhdGhlcjogY29udGFpbmVyLFxuICAgICAgICB9KTtcbiAgICAgICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICB0eXBlOiBcImgyXCIsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogbmFtZSxcbiAgICAgICAgICAgIGZhdGhlcjogaW5uZXJDb250YWluZXIsXG4gICAgICAgIH0pO1xuICAgICAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIHR5cGU6IFwiaW1nXCIsXG4gICAgICAgICAgICBzcmM6IGhpdmVJY29uLFxuICAgICAgICAgICAgZmF0aGVyOiBjb250YWluZXIsXG4gICAgICAgICAgICBjbGFzc2VzOiBbXCJkZWNvcmF0aW9uc1wiLCBcIm1lbnUtaGl2ZVwiXSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBpbXBvcnRBbGwocikge1xuICAgICAgICBjb25zdCBrZXkgPSByLmtleXMoKTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gci5rZXlzKCkubWFwKHIpO1xuICAgICAgICBsZXQgY29vcmRzID0ge307XG4gICAgICAgIGtleS5mb3JFYWNoKChlbGVtZW50LCBpKSA9PiB7XG4gICAgICAgICAgICBjb29yZHNbZWxlbWVudF0gPSB2YWx1ZXNbaV07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29vcmRzO1xuICAgIH1cblxuICAgIGNvbnN0IGltYWdlcyA9IGltcG9ydEFsbChcbiAgICAgICAgcmVxdWlyZS5jb250ZXh0KFwiLi4vaW1nL1wiLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8anBnfHN2ZykkLylcbiAgICApO1xuICAgIGNvbnN0IG1ha2VDYXJkID0gZnVuY3Rpb24gKGRpc2gpIHtcbiAgICAgICAgY29uc3QgaG91cnNfY2FyZCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgY2xhc3NlczogW1wiY3JvcC1vdXRcIiwgXCJtZW51LW91dGVyXCJdLFxuICAgICAgICAgICAgZmF0aGVyOiBjb250ZW50LFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBob3Vyc19jYXJkX2luID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICBjbGFzc2VzOiBbXCJjcm9wLWluXCIsIFwibWVudS1vdXRlclwiXSxcbiAgICAgICAgICAgIGZhdGhlcjogaG91cnNfY2FyZCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICB0eXBlOiBcImgzXCIsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogZGlzaFtcIm5hbWVcIl0sXG4gICAgICAgICAgICBmYXRoZXI6IGhvdXJzX2NhcmRfaW4sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdHlwZTogXCJwXCIsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogZGlzaFtcImRlc2NyaXB0aW9uXCJdLFxuICAgICAgICAgICAgZmF0aGVyOiBob3Vyc19jYXJkX2luLFxuICAgICAgICB9KTtcbiAgICAgICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICBjbGFzc2VzOiBbXCJpdGVtLXByaWNlXCJdLFxuICAgICAgICAgICAgdHlwZTogXCJwXCIsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogYCR7ZGlzaFtcInByaWNlXCJdfWAsXG4gICAgICAgICAgICBmYXRoZXI6IGhvdXJzX2NhcmRfaW4sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdGl0bGU6IGBQaWN0dXJlIG9mICR7ZGlzaFtcImFsdFwiXX1gLFxuICAgICAgICAgICAgY2xhc3NlczogW1wibWVudS1waWNcIl0sXG4gICAgICAgICAgICBzdHlsZTogYGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2ltYWdlc1tkaXNoW1wicGljXCJdXX0pO2AsXG4gICAgICAgICAgICBmYXRoZXI6IGhvdXJzX2NhcmRfaW4sXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmb3IgKGxldCBkYXRhIG9mIG1lbnUpIHtcbiAgICAgICAgaWYgKGRhdGFbXCJpdGVtXCJdKSBtYWtlQ2FyZChkYXRhKTtcbiAgICAgICAgZWxzZSBtYWtlQ2F0ZWdvcnlDYXJkKGRhdGFbXCJzdWJ0aXRsZVwiXSk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IG1lbnVQYWdlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgaG9tZSBmcm9tIFwiLi9wYWdlcy9ob21lXCI7XG5pbXBvcnQgZmlyc3RMb2FkIGZyb20gXCIuL2Z1bmN0aW9ucy9maXJzdExvYWRcIjtcbmltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSBcIi4vZnVuY3Rpb25zL2NsZWFyQ29udGVudFwiO1xuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9wYWdlcy9jb250YWN0XCI7XG5pbXBvcnQgbWVudVBhZ2UgZnJvbSBcIi4vcGFnZXMvbWVudVwiO1xuaW1wb3J0IHNldE5hdiBmcm9tIFwiLi9mdW5jdGlvbnMvc2V0TmF2XCI7XG5pbXBvcnQge1xuICAgIGNvbnRhY3RzLFxuICAgIGluZm8sXG4gICAgbWVudSxcbiAgICByZXZpZXdzLFxuICAgIGhvbWVUaXRsZSxcbiAgICBtZW51VGl0bGUsXG4gICAgY29udGFjdFRpdGxlLFxufSBmcm9tIFwiLi9jb25maWdcIjtcblxuZmlyc3RMb2FkKCk7XG5cbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIik7XG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xuY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdFwiKTtcblxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaG9tZVwiKTtcbiAgICBzZXROYXYoXCJob21lXCIpO1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGhvbWUoKTtcbn0pO1xuXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJtZW51XCIpO1xuICAgIHNldE5hdihcIm1lbnVcIik7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgbWVudVBhZ2UoKTtcbn0pO1xuXG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJjb250YWN0XCIpO1xuICAgIHNldE5hdihcImNvbnRhY3RcIik7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgY29udGFjdCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=