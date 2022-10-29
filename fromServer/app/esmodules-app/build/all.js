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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ui */ \"./src/js/modules/ui.js\");\n/* harmony import */ var _modules_postMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/postMethod */ \"./src/js/modules/postMethod.js\");\n/* harmony import */ var _modules_getMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getMethod */ \"./src/js/modules/getMethod.js\");\n/* harmony import */ var _modules_patchMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/patchMethod */ \"./src/js/modules/patchMethod.js\");\n/* harmony import */ var _modules_deleteMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/deleteMethod */ \"./src/js/modules/deleteMethod.js\");\n/* harmony import */ var _modules_complete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/complete */ \"./src/js/modules/complete.js\");\n/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/filter */ \"./src/js/modules/filter.js\");\n/* harmony import */ var _modules_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/select */ \"./src/js/modules/select.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nasync function engine () {\r\n\tconst url = \"http://localhost:8888/todos\";\r\n\r\n\t_modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].start();\r\n\r\n\tconst { form, screenInput } = _modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n\r\n\tawait (0,_modules_postMethod__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(form, screenInput, url);\r\n\tawait (0,_modules_getMethod__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"], url);\r\n\tawait (0,_modules_select__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_modules_patchMethod__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _modules_deleteMethod__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _modules_complete__WEBPACK_IMPORTED_MODULE_5__[\"default\"], url);\r\n\tawait (0,_modules_filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\r\n\t\tdocument.querySelectorAll(\"[data-filter]\"),\r\n\t\turl,\r\n\t\t_modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n\t\t_modules_patchMethod__WEBPACK_IMPORTED_MODULE_3__[\"default\"], \r\n\t\t_modules_deleteMethod__WEBPACK_IMPORTED_MODULE_4__[\"default\"], \r\n\t\t_modules_complete__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\r\n\t)\r\n}\r\n\r\nengine();\n\n//# sourceURL=webpack://crud/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/complete.js":
/*!************************************!*\
  !*** ./src/js/modules/complete.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(url, checkArr, id) {\r\n\tcheckArr.forEach((check, index) => {\r\n\t\tcheck.addEventListener(\"change\", async () => {\r\n\t\t\tasync function checkState(state) {\r\n\t\t\t\tawait fetch(`${url}/${parseInt(id[index].textContent)}`, {\r\n\t\t\t\t\tmethod: \"PATCH\",\r\n\t\t\t\t\theaders: {\r\n\t\t\t\t\t\t\"content-type\": \"application/json\"\r\n\t\t\t\t\t},\r\n\t\t\t\t\tbody: JSON.stringify({ isComplete: state ? true : false })\r\n\t\t\t\t})\r\n\t\t\t}\r\n\r\n\t\t\tif (check.checked) {\r\n\t\t\t\tcheckState(true);\r\n\t\t\t} else {\r\n\t\t\t\tcheckState(false);\r\n\t\t\t}\r\n\t\t});\r\n\t});\r\n}\n\n//# sourceURL=webpack://crud/./src/js/modules/complete.js?");

/***/ }),

/***/ "./src/js/modules/deleteMethod.js":
/*!****************************************!*\
  !*** ./src/js/modules/deleteMethod.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(removeBtnArray, url) {\r\n\tremoveBtnArray.forEach(btn => {\r\n\t\tbtn.addEventListener(\"click\", async () => {\r\n\t\t\tconst isDelete = confirm(\"Are you sure ?\");\r\n\r\n\t\t\tif (isDelete) {\r\n\t\t\t\tconst fakeID = parseInt(btn.parentElement.previousElementSibling.firstElementChild.textContent);\r\n\t\t\t\tbtn.parentElement.parentElement.remove();\r\n\t\r\n\t\t\t\tawait fetch(`${url}/${fakeID}`, {\r\n\t\t\t\t\tmethod: \"DELETE\"\r\n\t\t\t\t});\r\n\t\t\t} else {\r\n\t\t\t\talert(\"Good !\");\r\n\t\t\t}\r\n\t\t});\r\n\t});\r\n}\n\n//# sourceURL=webpack://crud/./src/js/modules/deleteMethod.js?");

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select */ \"./src/js/modules/select.js\");\n\r\n\r\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(btnArray, url, UI, PATCH, DELETE, COMPLETE) {\r\n\tbtnArray.forEach(btn => {\r\n\t\tbtn.addEventListener(\"click\", async () => {\r\n\t\t\tlet filterURL;\r\n\t\t\tUI.listsBlock.innerHTML = \"\";\r\n\r\n\t\t\tif (btn.dataset.filter === \"filterComplete\") {\r\n\t\t\t\tfilterURL = `${url}?isComplete=true`;\r\n\t\t\t} else if (btn.dataset.filter === \"filterUnComplete\") {\r\n\t\t\t\tfilterURL = `${url}?isComplete=false`;\r\n\t\t\t} else if (btn.dataset.filter === \"filterAll\") {\r\n\t\t\t\tfilterURL = url;\r\n\t\t\t}\r\n\r\n\t\t\treturn await fetch(filterURL)\r\n\t\t\t.then(data => data.json())\r\n\t\t\t.then(data => data.forEach(obj => UI.toHTML(obj.id, obj.title, obj.isComplete)))\r\n\t\t\t.then(() => (0,_select__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(PATCH, DELETE, COMPLETE, url));\r\n\t\t});\r\n\t});\r\n}\n\n//# sourceURL=webpack://crud/./src/js/modules/filter.js?");

/***/ }),

/***/ "./src/js/modules/getMethod.js":
/*!*************************************!*\
  !*** ./src/js/modules/getMethod.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(ui, url) {\r\n\treturn await fetch(url)\r\n\t\t.then(data => data.json())\r\n\t\t.then(data => data.forEach(obj => ui.toHTML(obj.id, obj.title, obj.isComplete)))\r\n}\n\n//# sourceURL=webpack://crud/./src/js/modules/getMethod.js?");

/***/ }),

/***/ "./src/js/modules/patchMethod.js":
/*!***************************************!*\
  !*** ./src/js/modules/patchMethod.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(editBtnArray, saveBtnArray, content, url) {\r\n\teditBtnArray.forEach((editBtn, index) => {\r\n\t\teditBtn.addEventListener(\"click\", () => {\r\n\t\t\teditBtn.style.display = \"none\";\r\n\t\t\tsaveBtnArray[index].style.display = \"inline-block\";\r\n\t\t\tconst fakeID = parseInt(content[index].children[0].textContent);\r\n\t\t\tconst input = content[index].children[1];\r\n\t\t\tinput.classList.add(\"edit\");\r\n\t\t\tinput.removeAttribute(\"readonly\");\r\n\r\n\t\t\tsaveBtnArray[index].addEventListener(\"click\", async () => {\r\n\t\t\t\tawait fetch(`${url}/${fakeID}`, {\r\n\t\t\t\t\tmethod: \"PATCH\",\r\n\t\t\t\t\theaders: {\r\n\t\t\t\t\t\t\"content-type\": \"application/json\"\r\n\t\t\t\t\t},\r\n\t\t\t\t\tbody: JSON.stringify({ title: input.value.trim() })\r\n\t\t\t\t})\r\n\t\t\t});\r\n\t\t});\r\n\t})\r\n}\n\n//# sourceURL=webpack://crud/./src/js/modules/patchMethod.js?");

/***/ }),

/***/ "./src/js/modules/postMethod.js":
/*!**************************************!*\
  !*** ./src/js/modules/postMethod.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(form, input, url) {\r\n\tform.addEventListener(\"submit\", async (e) => {\r\n\t\te.preventDefault();\r\n\r\n\t\tif (input.value.trim() !== \"\") {\r\n\t\t\tawait fetch(url, {\r\n\t\t\t\tmethod: \"POST\",\r\n\t\t\t\theaders: {\r\n\t\t\t\t\t\"content-type\": \"application/json\"\r\n\t\t\t\t},\r\n\t\t\t\tbody: JSON.stringify({ title: input.value.trim(), isComplete: false })\r\n\t\t\t})\r\n\t\t}\r\n\r\n\t\te.target.reset();\r\n\t});\r\n}\n\n//# sourceURL=webpack://crud/./src/js/modules/postMethod.js?");

/***/ }),

/***/ "./src/js/modules/select.js":
/*!**********************************!*\
  !*** ./src/js/modules/select.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(PATCH, DELETE, COMPLETE, url) {\r\n\tPATCH(\r\n\t\tdocument.querySelectorAll(\".editBtn\"),\r\n\t\tdocument.querySelectorAll(\".saveBtn\"),\r\n\t\tdocument.querySelectorAll(\".listsBlockItemContent\"),\r\n\t\turl\r\n\t);\r\n\tDELETE(\r\n\t\tdocument.querySelectorAll(\".removeBtn\"),\r\n\t\turl\r\n\t);\r\n\tCOMPLETE(\r\n\t\turl,\r\n\t\tdocument.querySelectorAll(\".buttons input\"),\r\n\t\tdocument.querySelectorAll(\".listsBlockItemContent\")\r\n\t);\r\n}\n\n//# sourceURL=webpack://crud/./src/js/modules/select.js?");

/***/ }),

/***/ "./src/js/modules/ui.js":
/*!******************************!*\
  !*** ./src/js/modules/ui.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n\ttitle: document.createElement(\"h1\"),\r\n\tsubTitle: document.createElement(\"p\"),\r\n\tform: document.createElement(\"form\"),\r\n\tscreenBlock: document.createElement(\"div\"),\r\n\tscreenInput: document.createElement(\"input\"),\r\n\tscreenAddBtn: document.createElement(\"button\"),\r\n\tlistsBlock: document.createElement(\"div\"),\r\n\tfilterWrapper: document.createElement(\"div\"),\r\n\tfilterComplete: document.createElement(\"button\"),\r\n\tfilterUnComplete: document.createElement(\"button\"),\r\n\tfilterAll: document.createElement(\"button\"),\r\n\r\n\telementOptions() {\r\n\t\tthis.title.textContent = \"CRUD\";\r\n\t\tthis.subTitle.textContent = \"Asyn Application\";\r\n\r\n\t\tthis.form.id = \"app-form\";\r\n\t\tthis.screenBlock.id = \"screenBlock\";\r\n\t\tthis.screenInput.type = \"text\";\r\n\t\tthis.screenInput.placeholder = \"Type here...\";\r\n\t\tthis.screenAddBtn.classList.add(\"fa\", \"fa-plus-circle\")\r\n\t\tthis.screenAddBtn.id = \"screenAddBtn\";\r\n\t\tthis.listsBlock.id = \"listBlock\";\r\n\r\n\t\tthis.filterWrapper.id = \"filterWrapper\";\r\n\t\tthis.filterComplete.setAttribute(\"data-filter\", \"filterComplete\");\r\n\t\tthis.filterUnComplete.setAttribute(\"data-filter\", \"filterUnComplete\");\r\n\t\tthis.filterAll.setAttribute(\"data-filter\", \"filterAll\");\r\n\r\n\t\tthis.filterComplete.textContent = \"Complete\";\r\n\t\tthis.filterUnComplete.textContent = \"Uncomplete\";\r\n\t\tthis.filterAll.textContent = \"ALL\";\r\n\t},\r\n\r\n\tappendElements() {\r\n\t\troot.append(this.title, this.subTitle, this.form, this.listsBlock, this.filterWrapper);\r\n\t\tthis.form.append(this.screenBlock);\r\n\t\tthis.screenBlock.append(this.screenInput, this.screenAddBtn);\r\n\t\tthis.filterWrapper.append(this.filterComplete, this.filterUnComplete, this.filterAll);\r\n\t},\r\n\r\n\ttoHTML(id, value, state = false) {\r\n\t\tthis.listsBlock.innerHTML += `\r\n\t\t\t<div class=\"listsBlockItem\">\r\n\t\t\t\t<div class=\"listsBlockItemContent\">\r\n\t\t\t\t\t<span>${id}</span>\r\n\t\t\t\t\t<input type=\"text\" value=\"${value}\" readonly>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"buttons\">\r\n\t\t\t\t\t<input type=\"checkbox\" name=\"item${id}\" ${state ? \"checked\" : \"\"}>\r\n\t\t\t\t\t<button class=\"removeBtn fa fa-trash\"></button>\r\n\t\t\t\t\t<button class=\"editBtn fa fa-pencil\"></button>\r\n\t\t\t\t\t<button class=\"saveBtn fa fa-save\"></button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t`;\r\n\t},\r\n\r\n\tstart() {\r\n\t\tthis.elementOptions();\r\n\t\tthis.appendElements();\r\n\t}\r\n});\n\n//# sourceURL=webpack://crud/./src/js/modules/ui.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;