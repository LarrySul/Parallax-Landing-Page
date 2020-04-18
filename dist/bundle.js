/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Montserrat&display=swap);\"]);\n// Module\nexports.push([module.i, \"* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0; }\\n\\nbody {\\n  font-family: 'Montserrat', sans-serif;\\n  color: #fff;\\n  font-size: 18px;\\n  line-height: 1.6; }\\n  body .bg {\\n    clip-path: polygon(10% 0, 100% 0, 100% 93%, 90% 100%, 0 100%, 0 7%);\\n    background: #2d2254;\\n    position: absolute;\\n    z-index: -1; }\\n\\nh1,\\nh2,\\nh3,\\np {\\n  margin-bottom: 10px; }\\n\\na {\\n  text-decoration: none;\\n  color: #fff; }\\n\\nul {\\n  list-style: none; }\\n\\n.btn {\\n  display: inline-block;\\n  border: 0;\\n  background: #f5c42f;\\n  color: #fff;\\n  border-radius: 20px;\\n  padding: 8px 30px;\\n  text-transform: uppercase;\\n  font-weight: bold;\\n  font-size: 16px;\\n  margin-top: 10px; }\\n\\n.btn:hover {\\n  transform: scale(0.98); }\\n\\n.primary-text {\\n  color: #2d2254; }\\n\\n.secondary-text {\\n  color: #f5c42f; }\\n\\n/* Section */\\n.section {\\n  position: relative;\\n  padding: 0 20px; }\\n\\n.section-top {\\n  min-height: 500px;\\n  background: url(\\\"https://i.ibb.co/PhVR2Vh/bg1.png\\\") no-repeat center center/cover; }\\n  @media (max-width: 700px) {\\n    .section-top {\\n      min-height: 200px;\\n      padding-top: 20px; } }\\n  .section-top h1 {\\n    font-size: 70px;\\n    line-height: 1.3; }\\n    @media (max-width: 700px) {\\n      .section-top h1 {\\n        font-size: 43px; } }\\n  .section-top .content {\\n    position: absolute;\\n    top: 100px;\\n    right: 20px;\\n    width: 55%; }\\n    @media (max-width: 700px) {\\n      .section-top .content {\\n        text-align: center; } }\\n\\n.section-stream {\\n  min-height: 700px;\\n  background: url(\\\"https://i.ibb.co/bsX6RV0/bg2.png\\\") no-repeat center center/cover; }\\n  @media (max-width: 700px) {\\n    .section-stream {\\n      min-height: 400px; } }\\n  .section-stream h2 {\\n    font-size: 35px; }\\n  .section-stream .play {\\n    width: 25%;\\n    position: absolute;\\n    top: 100px;\\n    left: 80px; }\\n    @media (max-width: 700px) {\\n      .section-stream .play {\\n        width: 50% !important;\\n        display: block;\\n        margin: 30px auto; } }\\n  .section-stream .content {\\n    position: absolute;\\n    width: 50%;\\n    top: 130px;\\n    right: 80px; }\\n    .section-stream .content div {\\n      background: rgba(255, 255, 255, 0.2);\\n      padding: 20px;\\n      margin-bottom: 20px;\\n      border-radius: 10px; }\\n\\n/*Section grid*/\\n.section-grid {\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  grid-gap: 30px;\\n  text-align: center; }\\n  @media (max-width: 700px) {\\n    .section-grid {\\n      display: block;\\n      margin-top: 0; } }\\n  .section-grid div {\\n    background: rgba(255, 255, 255, 0.2);\\n    padding: 20px;\\n    margin-bottom: 20px;\\n    border-radius: 10px; }\\n  .section-grid p {\\n    color: #c5bbec; }\\n  .section-grid .dot {\\n    font-size: 40px;\\n    padding-left: 2px; }\\n\\n/* Footer */\\n.footer {\\n  border-top: #c5bbec 1px solid;\\n  padding: 20px;\\n  margin-top: 20px; }\\n  .footer ul {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-around;\\n    text-align: center; }\\n\\n/* Mobile */\\n@media (max-width: 700px) {\\n  .section-top .content,\\n  .section-stream .play,\\n  .section-stream .content {\\n    position: static;\\n    width: 100%; } }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/css/style.scss?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../css/style.scss */ \"./src/css/style.scss\");\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nvar root = document.createElement('div');\nroot.innerHTML = \"<div class=\\\"bg\\\"><section class=\\\"section section-top\\\">\\n<div class=\\\"content rellax\\\" data-rellax-speed=\\\"5\\\">\\n    <h1>Community Based Driven Video</h1>\\n    <a href=\\\"#\\\" class=\\\"btn btn-primary\\\">Learn More</a>\\n</div>\\n</section>\\n\\n<section class=\\\"section section-stream\\\">\\n<img\\n    class=\\\"play rellax\\\"\\n    src=\\\"https://i.ibb.co/TvdbMhQ/play-button.png\\\"\\n    alt=\\\"\\\"\\n    data-rellax-speed=\\\"-1\\\" data-rellax-xs-speed=\\\"-4\\\"\\n/>\\n<div class=\\\"content rellax\\\" data-rellax-speed=\\\"10\\\">\\n    <div>\\n        <h2 class=\\\"secondary-text\\\">Stream Everything</h2>\\n        <p>\\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et\\n            dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.\\n        </p>\\n    </div>\\n    <div>\\n        <h2 class=\\\"secondary-text\\\">Short is the New Long</h2 class=\\\"secondary-text\\\">\\n        <p>\\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et\\n            dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.\\n        </p>\\n    </div>\\n</div>\\n</section>\\n\\n<section class=\\\"section section-grid\\\">\\n<div class=\\\"rellax\\\" data-rellax-speed=\\\"1\\\" data-rellax-xs-speed=\\\"3\\\">\\n    <i class=\\\"fas fa-video fa-3x secondary-text\\\"></i>\\n    <h2>Watch<span class=\\\"secondary-text dot\\\">.</span></h2>\\n    <p>\\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et\\n            dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.\\n    </p>\\n</div>\\n<div class=\\\"rellax\\\" data-rellax-speed=\\\"4\\\" data-rellax-xs-speed=\\\"3\\\">\\n    <i class=\\\"fas fa-users fa-3x secondary-text\\\"></i>\\n    <h2>Sir Coolchi<span class=\\\"secondary-text dot\\\">.</span></h2>\\n    <p>\\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et\\n            dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.\\n    </p>\\n</div>\\n<div class=\\\"rellax\\\" data-rellax-speed=\\\"7\\\" data-rellax-xs-speed=\\\"3\\\">\\n    <i class=\\\"fas fa-book fa-3x secondary-text\\\"></i>\\n    <h2>Learn<span class=\\\"secondary-text dot\\\">.</span></h2>\\n    <p>\\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et\\n            dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.\\n    </p>\\n</div>\\n</section>\\n\\n<footer class=\\\"footer\\\">\\n<ul>\\n    <li><a href=\\\"#\\\">Faq</a></li>\\n    <li><a href=\\\"#\\\">Terms of Use</a></li>\\n    <li><a href=\\\"#\\\">About Us</a></li>\\n</ul>\\n</footer></div>\";\ndocument.body.appendChild(root);\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ })

/******/ });