"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmodules_01_starting_project"] = self["webpackChunkmodules_01_starting_project"] || []).push([["src_App_Tooltip_js"],{

/***/ "./src/App/Component.js":
/*!******************************!*\
  !*** ./src/App/Component.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => (/* binding */ Component)\n/* harmony export */ });\nclass Component {\r\n\tconstructor(hostElementId, insertBefore = false) {\r\n\t\tif (hostElementId) {\r\n\t\t\tthis.hostElement = document.getElementById(hostElementId);\r\n\t\t} else {\r\n\t\t\tthis.hostElement = document.body;\r\n\t\t}\r\n\t\tthis.insertBefore = insertBefore;\r\n\t}\r\n\r\n\tdetach() {\r\n\t\tif (this.element) {\r\n\t\t\tthis.element.remove();\r\n\t\t\t// this.element.parentElement.removeChild(this.element);\r\n\t\t}\r\n\t}\r\n\r\n\tattach() {\r\n\t\tthis.hostElement.insertAdjacentElement(\r\n\t\t\tthis.insertBefore ? \"afterbegin\" : \"beforeend\",\r\n\t\t\tthis.element,\r\n\t\t);\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://modules-01-starting-project/./src/App/Component.js?");

/***/ }),

/***/ "./src/App/Tooltip.js":
/*!****************************!*\
  !*** ./src/App/Tooltip.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tooltip\": () => (/* binding */ Tooltip)\n/* harmony export */ });\n/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ \"./src/App/Component.js\");\n\r\n\r\nclass Tooltip extends _Component_js__WEBPACK_IMPORTED_MODULE_0__.Component {\r\n\tconstructor(closeNotifierFunction, text, hostElementId) {\r\n\t\tsuper(hostElementId);\r\n\t\tthis.closeNotifier = closeNotifierFunction;\r\n\t\tthis.text = text;\r\n\t\tthis.create();\r\n\t}\r\n\r\n\tcloseTooltip = () => {\r\n\t\tthis.detach();\r\n\t\tthis.closeNotifier();\r\n\t};\r\n\r\n\tcreate() {\r\n\t\tconst tooltipElement = document.createElement(\"div\");\r\n\t\ttooltipElement.className = \"card\";\r\n\t\tconst tooltipTemplate = document.getElementById(\"tooltip\");\r\n\t\tconst tooltipBody = document.importNode(tooltipTemplate.content, true);\r\n\t\ttooltipBody.querySelector(\"p\").textContent = this.text;\r\n\t\ttooltipElement.append(tooltipBody);\r\n\r\n\t\tconst hostElPosLeft = this.hostElement.offsetLeft;\r\n\t\tconst hostElPosTop = this.hostElement.offsetTop;\r\n\t\tconst hostElHeight = this.hostElement.clientHeight;\r\n\t\tconst parentElementScrolling = this.hostElement.parentElement.scrollTop;\r\n\r\n\t\tconst x = hostElPosLeft + 20;\r\n\t\tconst y = hostElPosTop + hostElHeight - parentElementScrolling - 10;\r\n\r\n\t\ttooltipElement.style.position = \"absolute\";\r\n\t\ttooltipElement.style.left = x + \"px\"; // 500px\r\n\t\ttooltipElement.style.top = y + \"px\";\r\n\r\n\t\ttooltipElement.addEventListener(\"click\", this.closeTooltip);\r\n\t\tthis.element = tooltipElement;\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://modules-01-starting-project/./src/App/Tooltip.js?");

/***/ })

}]);