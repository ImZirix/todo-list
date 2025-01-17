/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@charset \"UTF-8\";\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: Poppins;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: #222831;\n}\n\n.taskContainer {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 20px;\n  gap: 10px;\n  position: relative;\n}\n.taskContainer div {\n  width: 350px;\n  height: 250px;\n  background-color: #393E46;\n  border-radius: 10px;\n  padding: 10px;\n  color: #fff;\n  font-size: 18px;\n  box-shadow: 0 0 10px 5px rgba(78, 77, 77, 0.294);\n}\n\n.newTaskBtn {\n  width: 500px;\n  height: 100px;\n  border: dashed 2px;\n  background-color: #00ADB5;\n  transition: 0.3s ease;\n  border-radius: 10px;\n  outline: none;\n  font-size: 18px;\n  margin-top: 10px;\n  order: -1;\n}\n.newTaskBtn:hover {\n  transform: scale(1.1);\n}\n\n.formWindow {\n  position: fixed;\n  width: 500px;\n  height: 500px;\n  background-color: #00ADB5;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: 1s ease;\n  animation: SlideIn 1s ease forwards;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n  border-radius: 10px;\n  align-items: center;\n  z-index: 100;\n}\n.formWindow input, .formWindow select, .formWindow textarea {\n  width: 90%;\n  height: 40px;\n  outline: none;\n  border: none;\n  background-color: #393E46;\n  color: #fff;\n  border-radius: 10px 5px 0 0;\n  font-size: 18px;\n  padding: 10px;\n  animation: SlideFromLeft 1s ease forwards;\n}\n.formWindow textarea {\n  resize: none;\n}\n.formWindow input::placeholder, .formWindow textarea::placeholder {\n  color: #fff;\n}\n.formWindow :nth-child(2) {\n  height: 150px;\n}\n.formWindow :first-child {\n  margin-top: 20px;\n}\n.formWindow :nth-child(4) {\n  padding: 5px;\n}\n.formWindow > :first-child ~ * {\n  border-radius: 0;\n}\n.formWindow button {\n  width: 100px;\n  height: 35px;\n  border: none;\n  color: #fff;\n  background-color: #222831;\n  animation: SlideFromBotton 1s ease forwards;\n  transition: 0.3s ease;\n  border-radius: 10px;\n}\n.formWindow button:hover {\n  scale: 1.1;\n}\n.formWindow:focus {\n  outline: none;\n}\n\n@keyframes SlideIn {\n  from {\n    opacity: 0;\n    top: 40%;\n  }\n  to {\n    top: 50%;\n    opacity: 1;\n  }\n}\n@keyframes SlideFromLeft {\n  from {\n    transform: translate(-50%);\n    opacity: 0;\n  }\n  to {\n    transform: translate(0);\n    opacity: 1;\n  }\n}\n@keyframes SlideFromBotton {\n  from {\n    transform: translateY(100%);\n    border-radius: 0;\n  }\n  to {\n    transform: translateY(0);\n    border-radius: 5px;\n  }\n}\n.removeTask {\n  height: 40px;\n  width: 40px;\n  font-size: 25px;\n  background-color: #00ADB5;\n  border: none;\n  border-radius: 100%;\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  transition: 0.2s ease;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n}\n.removeTask:hover {\n  scale: 1.1;\n  background-color: rgb(255, 0, 0);\n}\n.removeTask::after {\n  position: absolute;\n  content: \"×\";\n  font-size: 40px;\n  color: #fff;\n  line-height: 100px;\n  text-align: center;\n}\n\n.taskContainer > * {\n  position: relative;\n}\n\n.taskElement {\n  display: flex;\n  flex-direction: column;\n}\n.taskElement .tik {\n  order: -1;\n  width: 20px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/style.scss */ \"./src/style.scss\");\n/* harmony import */ var _modules_AddTaskBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/AddTaskBtn */ \"./src/modules/AddTaskBtn.js\");\n/* harmony import */ var _modules_formModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/formModule */ \"./src/modules/formModule.js\");\n// Import global styles\r\n\r\n// import appllication modules\r\n\r\n\r\n\r\n\r\nfunction init() {\r\n    _modules_AddTaskBtn__WEBPACK_IMPORTED_MODULE_1__.addTaskBtn.createButton();\r\n    _modules_formModule__WEBPACK_IMPORTED_MODULE_2__.form.displayTasks();\r\n};\r\n\r\ninit()\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/AddTaskBtn.js":
/*!***********************************!*\
  !*** ./src/modules/AddTaskBtn.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTaskBtn: () => (/* binding */ addTaskBtn)\n/* harmony export */ });\n/* harmony import */ var _formModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formModule */ \"./src/modules/formModule.js\");\n\r\nconst addTaskBtn = {\r\n    buttonClass: 'newTaskBtn',\r\n    formWindowClass: 'formWidow',\r\n    formWindow: null,\r\n    createButton() {\r\n        const newTaskBtn = document.createElement('button');\r\n        newTaskBtn.classList.add(`${this.buttonClass}`);\r\n        newTaskBtn.textContent = 'Click To Add Task';\r\n        document.body.appendChild(newTaskBtn);\r\n        newTaskBtn.addEventListener('click', this.handleClick);\r\n    },\r\n    handleClick() {\r\n        if (this.formWindow) {\r\n            this.formWindow.remove();\r\n            this.formWindow = null;\r\n        } else {\r\n            this.formWindow = document.createElement('form');\r\n            this.formWindow.classList.add('formWindow');\r\n            document.body.appendChild(this.formWindow);\r\n        }\r\n        _formModule__WEBPACK_IMPORTED_MODULE_0__.form.createForm()\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/AddTaskBtn.js?");

/***/ }),

/***/ "./src/modules/formModule.js":
/*!***********************************!*\
  !*** ./src/modules/formModule.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   form: () => (/* binding */ form)\n/* harmony export */ });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ \"./src/modules/utilities.js\");\n\r\n\r\nconst form = {\r\n    storedTasks: JSON.parse(localStorage.getItem('tasks')) || [],\r\n    saveTasksToLocalStorage() {\r\n        localStorage.setItem('tasks', JSON.stringify(this.storedTasks));\r\n        console.log(localStorage)\r\n    },\r\n    getInputValues(event) {\r\n        event.preventDefault();\r\n        \r\n        const form = event.target;\r\n        const formData = new FormData(form);\r\n    \r\n        const data = Object.fromEntries(formData.entries());\r\n        data.completed = false;\r\n        \r\n        if (!Array.isArray(this.storedTasks)) {\r\n            this.storedTasks = [];\r\n        }\r\n        \r\n        this.storedTasks.push(data);\r\n        this.saveTasksToLocalStorage();\r\n        this.displayTasks()\r\n        this.removeForm()\r\n    },\r\n    createForm() {\r\n        const formWindow = document.querySelector('.formWindow');\r\n        if (!formWindow) return;\r\n\r\n        formWindow.append(\r\n            _utilities__WEBPACK_IMPORTED_MODULE_0__.utilities.createInput('title' ,'title', 'text', 'Enter The Title', true),\r\n            _utilities__WEBPACK_IMPORTED_MODULE_0__.utilities.createTextArea('description','4', '50', 'Enter The Description'),\r\n            _utilities__WEBPACK_IMPORTED_MODULE_0__.utilities.createInput('dueDate' ,'dueDate', 'date', undefined, true),\r\n            _utilities__WEBPACK_IMPORTED_MODULE_0__.utilities.createSelect(['Low', 'Medium', 'High'], 'Low', 'priority'),\r\n            _utilities__WEBPACK_IMPORTED_MODULE_0__.utilities.createButton('submitBtn', 'Add Task'), \r\n            _utilities__WEBPACK_IMPORTED_MODULE_0__.utilities.createButton('cancelBtn', 'Cancel')\r\n        );\r\n        const cancelBtn = document.querySelector('.cancelBtn');\r\n        cancelBtn.type = 'button';\r\n        cancelBtn.addEventListener('click', () => this.removeContainer('.formWindow'))\r\n        formWindow.addEventListener('submit', this.getInputValues.bind(this));\r\n\r\n    },\r\n    removeForm() {\r\n        let formWindow = document.querySelector('.formWindow');\r\n        if (formWindow) {\r\n            formWindow.remove()\r\n            this.formWindow = null;\r\n        } else {\r\n            return console.log('not found')\r\n        }\r\n    },\r\n    removeContainer(container) {\r\n        let selectedContainer = document.querySelector(container);\r\n        selectedContainer ? selectedContainer.remove() : null;\r\n    },\r\n    displayTasks() {\r\n        let taskContainer = document.querySelector('.taskContainer');\r\n\r\n        if (!taskContainer) {\r\n        taskContainer = document.createElement('div');\r\n        taskContainer.classList.add('taskContainer');\r\n        document.body.appendChild(taskContainer);\r\n        }\r\n        taskContainer.innerHTML = '';\r\n        \r\n        this.storedTasks.forEach((task, index) => {\r\n            const taskElement = document.createElement('div');\r\n            taskElement.classList.add(`taskElement${index}`);\r\n            taskElement.classList.add('taskElement')\r\n\r\n            const titleElement = document.createElement('h3');\r\n            titleElement.textContent = `Title: ${task.title}`\r\n\r\n            const descriptionElement = document.createElement('p');\r\n            descriptionElement.textContent = `Description: ${task.description}`;\r\n\r\n            const dueDateElement = document.createElement('p');\r\n            dueDateElement.textContent = `Due Date: ${task.dueDate}`;\r\n\r\n            const priorityElement = document.createElement('p');\r\n            priorityElement.textContent = `Priority: ${task.priority}`;\r\n\r\n            taskElement.append(titleElement, descriptionElement, dueDateElement, priorityElement);\r\n            taskContainer.appendChild(taskElement)\r\n\r\n            const removeTask = _utilities__WEBPACK_IMPORTED_MODULE_0__.utilities.createButton('removeTask');\r\n            const tik = _utilities__WEBPACK_IMPORTED_MODULE_0__.utilities.createInput(undefined, 'tik','checkbox' ,undefined, false, )\r\n            tik.checked = task.completed;\r\n            taskElement.append(removeTask, tik)\r\n\r\n            tik.addEventListener('change', () => {\r\n                this.storedTasks[index].completed = tik.checked;\r\n                this.saveTasksToLocalStorage();\r\n            });\r\n\r\n            removeTask.addEventListener('click', () => {\r\n                this.storedTasks.splice(index, 1);\r\n                this.saveTasksToLocalStorage();\r\n                this.displayTasks();\r\n            });\r\n\r\n        });\r\n        \r\n    },\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/formModule.js?");

/***/ }),

/***/ "./src/modules/utilities.js":
/*!**********************************!*\
  !*** ./src/modules/utilities.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   utilities: () => (/* binding */ utilities)\n/* harmony export */ });\nconst utilities = {\r\n    createInput(name ,className = null, type = 'text', placeholder = '',required = false) {\r\n        const input = document.createElement('input');\r\n        input.type = type;\r\n\r\n        if (className) {\r\n            input.classList.add(className);\r\n        }\r\n\r\n        if (placeholder) {\r\n            input.placeholder = placeholder;\r\n        }\r\n\r\n        if (required) {\r\n            input.required = true;\r\n        }\r\n        if (name) {\r\n            input.name = name;\r\n        }\r\n\r\n        return input;\r\n    },\r\n    createSelect(options = [], defaultValue = '', name) {\r\n        const select = document.createElement('select');\r\n        select.name = name;\r\n\r\n        options.forEach(optionValue => {\r\n            const option = document.createElement('option');\r\n            option.value = optionValue;\r\n            option.textContent = optionValue;\r\n            if(optionValue === defaultValue) {\r\n                option.selected = true;\r\n            }\r\n            select.appendChild(option)\r\n        });\r\n        return select\r\n    },\r\n    createTextArea(name ,rows = '', cols = '', placeholder = '') {\r\n        const textarea = document.createElement('textarea');\r\n        textarea.rows = rows;\r\n        textarea.cols = cols;\r\n        textarea.placeholder = placeholder;\r\n        textarea.name = name\r\n\r\n        return textarea;\r\n    },\r\n    createButton(buttonClass = null, buttonName) {\r\n        const formWindow = document.querySelector('.formWindow');\r\n\r\n        const button = document.createElement('button');\r\n        button.classList.add(buttonClass);\r\n        button.textContent = buttonName;\r\n        \r\n        return button;\r\n    },\r\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/utilities.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;