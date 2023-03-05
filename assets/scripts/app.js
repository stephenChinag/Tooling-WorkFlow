/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
	// webpackBootstrap
	/******/ "use strict";
	/******/ var __webpack_modules__ = {
		/***/ "./src/App/ProjectItem.js":
			/*!********************************!*\
  !*** ./src/App/ProjectItem.js ***!
  \********************************/
			// eslint-disable-next-line no-unused-vars
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__,
			) => {
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "ProjectItem": () => (/* binding */ ProjectItem)\n/* harmony export */ });\n/* harmony import */ var _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/DOMHelper */ "./src/Utility/DOMHelper.js");\n// import { Tooltip } from "./Tooltip.js";\r\n\r\nclass ProjectItem {\r\n\thasActiveTooltip = false;\r\n\r\n\tconstructor(id, updateProjectListsFunction, type) {\r\n\t\tthis.id = id;\r\n\t\tthis.updateProjectListsHandler = updateProjectListsFunction;\r\n\t\tthis.connectMoreInfoButton();\r\n\t\tthis.connectSwitchButton(type);\r\n\t\tthis.connectDrag();\r\n\t}\r\n\r\n\tshowMoreInfoHandler() {\r\n\t\tif (this.hasActiveTooltip) {\r\n\t\t\treturn;\r\n\t\t}\r\n\t\tconst projectElement = document.getElementById(this.id);\r\n\t\tconst tooltipText = projectElement.dataset.extraInfo;\r\n\r\n\t\t__webpack_require__.e(/*! import() */ "src_App_Tooltip_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Tooltip.js */ "./src/App/Tooltip.js")).then((module) => {\r\n\t\t\tconst tooltip = new module.Tooltip(\r\n\t\t\t\t() => {\r\n\t\t\t\t\tthis.hasActiveTooltip = false;\r\n\t\t\t\t},\r\n\t\t\t\ttooltipText,\r\n\t\t\t\tthis.id,\r\n\t\t\t);\r\n\t\t\ttooltip.attach();\r\n\t\t\tthis.hasActiveTooltip = true;\r\n\t\t});\r\n\t}\r\n\tconnectDrag() {\r\n\t\tconst item = document.getElementById(this.id);\r\n\t\titem.addEventListener("dragstart", (event) => {\r\n\t\t\tevent.dataTransfer.setData("text/plain", this.id);\r\n\t\t\tevent.dataTransfer.effectAllowed = "move";\r\n\t\t});\r\n\r\n\t\titem.addEventListener("dragend", (event) => {\r\n\t\t\tconsole.log(event);\r\n\t\t});\r\n\t}\r\n\r\n\tconnectMoreInfoButton() {\r\n\t\tconst projectItemElement = document.getElementById(this.id);\r\n\t\tconst moreInfoBtn = projectItemElement.querySelector(\r\n\t\t\t"button:first-of-type",\r\n\t\t);\r\n\t\tmoreInfoBtn.addEventListener("click", this.showMoreInfoHandler.bind(this));\r\n\t}\r\n\r\n\tconnectSwitchButton(type) {\r\n\t\tconst projectItemElement = document.getElementById(this.id);\r\n\t\tlet switchBtn = projectItemElement.querySelector("button:last-of-type");\r\n\t\tswitchBtn = _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_0__.DOMHelper.clearEventListeners(switchBtn);\r\n\t\tswitchBtn.textContent = type === "active" ? "Finish" : "Activate";\r\n\t\tswitchBtn.addEventListener(\r\n\t\t\t"click",\r\n\t\t\tthis.updateProjectListsHandler.bind(null, this.id),\r\n\t\t);\r\n\t}\r\n\r\n\tupdate(updateProjectListsFn, type) {\r\n\t\tthis.updateProjectListsHandler = updateProjectListsFn;\r\n\t\tthis.connectSwitchButton(type);\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://modules-01-starting-project/./src/App/ProjectItem.js?',
				);

				/***/
			},

		/***/ "./src/App/ProjectList.js":
			/*!********************************!*\
  !*** ./src/App/ProjectList.js ***!
  \********************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__,
			) => {
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "ProjectList": () => (/* binding */ ProjectList)\n/* harmony export */ });\n/* harmony import */ var _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem.js */ "./src/App/ProjectItem.js");\n/* harmony import */ var _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utility/DOMHelper */ "./src/Utility/DOMHelper.js");\n\r\n\r\nclass ProjectList {\r\n\tprojects = [];\r\n\r\n\tconstructor(type) {\r\n\t\tthis.type = type;\r\n\t\tconst prjItems = document.querySelectorAll(`#${type}-projects li`);\r\n\t\tfor (const prjItem of prjItems) {\r\n\t\t\tthis.projects.push(\r\n\t\t\t\tnew _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__.ProjectItem(prjItem.id, this.switchProject.bind(this), this.type),\r\n\t\t\t);\r\n\t\t}\r\n\t\tconsole.log(this.projects);\r\n\t\tthis.connectDroppable();\r\n\t}\r\n\r\n\tconnectDroppable() {\r\n\t\tconst list = document.querySelector(`#${this.type}-projects ul`);\r\n\r\n\t\tlist.addEventListener("dragenter", (event) => {\r\n\t\t\tif (event.dataTransfer.types[0] === "text/plain") {\r\n\t\t\t\tlist.parentElement.classList.add("droppable");\r\n\t\t\t\tevent.preventDefault();\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\tlist.addEventListener("dragover", (event) => {\r\n\t\t\tif (event.dataTransfer.types[0] === "text/plain") {\r\n\t\t\t\tevent.preventDefault();\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\tlist.addEventListener("dragleave", (event) => {\r\n\t\t\tif (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {\r\n\t\t\t\tlist.parentElement.classList.remove("droppable");\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\tlist.addEventListener("drop", (event) => {\r\n\t\t\tconst prjId = event.dataTransfer.getData("text/plain");\r\n\t\t\tif (this.projects.find((p) => p.id === prjId)) {\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\t\t\tdocument\r\n\t\t\t\t.getElementById(prjId)\r\n\t\t\t\t.querySelector("button:last-of-type")\r\n\t\t\t\t.click();\r\n\t\t\tlist.parentElement.classList.remove("droppable");\r\n\t\t\t// event.preventDefault(); // not required\r\n\t\t});\r\n\t}\r\n\r\n\tsetSwitchHandlerFunction(switchHandlerFunction) {\r\n\t\tthis.switchHandler = switchHandlerFunction;\r\n\t}\r\n\r\n\taddProject(project) {\r\n\t\tthis.projects.push(project);\r\n\t\t_Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_1__.DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);\r\n\t\tproject.update(this.switchProject.bind(this), this.type);\r\n\t}\r\n\r\n\tswitchProject(projectId) {\r\n\t\t// const projectIndex = this.projects.findIndex(p => p.id === projectId);\r\n\t\t// this.projects.splice(projectIndex, 1);\r\n\t\tthis.switchHandler(this.projects.find((p) => p.id === projectId));\r\n\t\tthis.projects = this.projects.filter((p) => p.id !== projectId);\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://modules-01-starting-project/./src/App/ProjectList.js?',
				);

				/***/
			},

		/***/ "./src/Utility/DOMHelper.js":
			/*!**********************************!*\
  !*** ./src/Utility/DOMHelper.js ***!
  \**********************************/
			// eslint-disable-next-line no-unused-vars
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__,
			) => {
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "DOMHelper": () => (/* binding */ DOMHelper)\n/* harmony export */ });\nclass DOMHelper {\r\n\tstatic clearEventListeners(element) {\r\n\t\tconst clonedElement = element.cloneNode(true);\r\n\t\telement.replaceWith(clonedElement);\r\n\t\treturn clonedElement;\r\n\t}\r\n\r\n\tstatic moveElement(elementId, newDestinationSelector) {\r\n\t\tconst element = document.getElementById(elementId);\r\n\t\tconst destinationElement = document.querySelector(newDestinationSelector);\r\n\t\tdestinationElement.append(element);\r\n\t\telement.scrollIntoView({ behavior: "smooth" });\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://modules-01-starting-project/./src/Utility/DOMHelper.js?',
				);

				/***/
			},

		/***/ "./src/app.js":
			/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__,
			) => {
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/ProjectList.js */ "./src/App/ProjectList.js");\n\n\nclass App {\n\tstatic init() {\n\t\tconst activeProjectsList = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList("active");\n\t\tconst finishedProjectsList = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList("finished");\n\t\tactiveProjectsList.setSwitchHandlerFunction(\n\t\t\tfinishedProjectsList.addProject.bind(finishedProjectsList),\n\t\t);\n\t\tfinishedProjectsList.setSwitchHandlerFunction(\n\t\t\tactiveProjectsList.addProject.bind(activeProjectsList),\n\t\t);\n\n\t\t// const timerId = setTimeout(this.startAnalytics, 3000);\n\n\t\t// document.getElementById(\'stop-analytics-btn\').addEventListener(\'click\', () => {\n\t\t//   clearTimeout(timerId);\n\t\t// });\n\t}\n\n\tstatic startAnalytics() {\n\t\tconst analyticsScript = document.createElement("script");\n\t\tanalyticsScript.src = "assets/scripts/Utility/analytics.js";\n\t\tanalyticsScript.defer = true;\n\t\tdocument.head.append(analyticsScript);\n\t}\n}\n\nApp.init();\n\n\n//# sourceURL=webpack://modules-01-starting-project/./src/app.js?',
				);

				/***/
			},

		/******/
	};
	/************************************************************************/
	/******/ // The module cache
	/******/ var __webpack_module_cache__ = {};
	/******/
	/******/ // The require function
	/******/ function __webpack_require__(moduleId) {
		/******/ // Check if module is in cache
		/******/ var cachedModule = __webpack_module_cache__[moduleId];
		/******/ if (cachedModule !== undefined) {
			/******/ return cachedModule.exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/ var module = (__webpack_module_cache__[moduleId] = {
			/******/ // no module.id needed
			/******/ // no module.loaded needed
			/******/ exports: {},
			/******/
		});
		/******/
		/******/ // Execute the module function
		/******/ __webpack_modules__[moduleId](
			module,
			module.exports,
			__webpack_require__,
		);
		/******/
		/******/ // Return the exports of the module
		/******/ return module.exports;
		/******/
	}
	/******/
	/******/ // expose the modules object (__webpack_modules__)
	/******/ __webpack_require__.m = __webpack_modules__;
	/******/
	/************************************************************************/
	/******/ /* webpack/runtime/define property getters */
	/******/ (() => {
		/******/ // define getter functions for harmony exports
		/******/ __webpack_require__.d = (exports, definition) => {
			/******/ for (var key in definition) {
				/******/ if (
					__webpack_require__.o(definition, key) &&
					!__webpack_require__.o(exports, key)
				) {
					/******/ Object.defineProperty(exports, key, {
						enumerable: true,
						get: definition[key],
					});
					/******/
				}
				/******/
			}
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/ensure chunk */
	/******/ (() => {
		/******/ __webpack_require__.f = {};
		/******/ // This file contains only the entry chunk.
		/******/ // The chunk loading function for additional chunks
		/******/ __webpack_require__.e = (chunkId) => {
			/******/ return Promise.all(
				Object.keys(__webpack_require__.f).reduce((promises, key) => {
					/******/ __webpack_require__.f[key](chunkId, promises);
					/******/ return promises;
					/******/
				}, []),
			);
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/get javascript chunk filename */
	/******/ (() => {
		/******/ // This function allow to reference async chunks
		/******/ __webpack_require__.u = (chunkId) => {
			/******/ // return url for filenames based on template
			/******/ return "" + chunkId + ".app.js";
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/hasOwnProperty shorthand */
	/******/ (() => {
		/******/ __webpack_require__.o = (obj, prop) =>
			Object.prototype.hasOwnProperty.call(obj, prop);
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/load script */
	/******/ (() => {
		/******/ var inProgress = {};
		/******/ var dataWebpackPrefix = "modules-01-starting-project:";
		/******/ // loadScript function to load a script via script tag
		/******/ __webpack_require__.l = (url, done, key, chunkId) => {
			/******/ if (inProgress[url]) {
				inProgress[url].push(done);
				return;
			}
			/******/ var script, needAttach;
			/******/ if (key !== undefined) {
				/******/ var scripts = document.getElementsByTagName("script");
				/******/ for (var i = 0; i < scripts.length; i++) {
					/******/ var s = scripts[i];
					/******/ if (
						s.getAttribute("src") == url ||
						s.getAttribute("data-webpack") == dataWebpackPrefix + key
					) {
						script = s;
						break;
					}
					/******/
				}
				/******/
			}
			/******/ if (!script) {
				/******/ needAttach = true;
				/******/ script = document.createElement("script");
				/******/
				/******/ script.charset = "utf-8";
				/******/ script.timeout = 120;
				/******/ if (__webpack_require__.nc) {
					/******/ script.setAttribute("nonce", __webpack_require__.nc);
					/******/
				}
				/******/ script.setAttribute("data-webpack", dataWebpackPrefix + key);
				/******/ script.src = url;
				/******/
			}
			/******/ inProgress[url] = [done];
			/******/ var onScriptComplete = (prev, event) => {
				/******/ // avoid mem leaks in IE.
				/******/ script.onerror = script.onload = null;
				/******/ clearTimeout(timeout);
				/******/ var doneFns = inProgress[url];
				/******/ delete inProgress[url];
				/******/ script.parentNode && script.parentNode.removeChild(script);
				/******/ doneFns && doneFns.forEach((fn) => fn(event));
				/******/ if (prev) return prev(event);
				/******/
			};
			/******/ var timeout = setTimeout(
				onScriptComplete.bind(null, undefined, {
					type: "timeout",
					target: script,
				}),
				120000,
			);
			/******/ script.onerror = onScriptComplete.bind(null, script.onerror);
			/******/ script.onload = onScriptComplete.bind(null, script.onload);
			/******/ needAttach && document.head.appendChild(script);
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/make namespace object */
	/******/ (() => {
		/******/ // define __esModule on exports
		/******/ __webpack_require__.r = (exports) => {
			/******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
				/******/ Object.defineProperty(exports, Symbol.toStringTag, {
					value: "Module",
				});
				/******/
			}
			/******/ Object.defineProperty(exports, "__esModule", { value: true });
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/publicPath */
	/******/ (() => {
		/******/ __webpack_require__.p = "assets/scripts/";
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/jsonp chunk loading */
	/******/ (() => {
		/******/ // no baseURI
		/******/
		/******/ // object to store loaded and loading chunks
		/******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
		/******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
		/******/ var installedChunks = {
			/******/ main: 0,
			/******/
		};
		/******/
		/******/ __webpack_require__.f.j = (chunkId, promises) => {
			/******/ // JSONP chunk loading for javascript
			/******/ var installedChunkData = __webpack_require__.o(
				installedChunks,
				chunkId,
			)
				? installedChunks[chunkId]
				: undefined;
			/******/ if (installedChunkData !== 0) {
				// 0 means "already installed".
				/******/
				/******/ // a Promise means "currently loading".
				/******/ if (installedChunkData) {
					/******/ promises.push(installedChunkData[2]);
					/******/
				} else {
					/******/ if (true) {
						// all chunks have JS
						/******/ // setup Promise in chunk cache
						/******/ var promise = new Promise(
							(resolve, reject) =>
								(installedChunkData = installedChunks[chunkId] =
									[resolve, reject]),
						);
						/******/ promises.push((installedChunkData[2] = promise));
						/******/
						/******/ // start chunk loading
						/******/ var url =
							__webpack_require__.p + __webpack_require__.u(chunkId);
						/******/ // create error before stack unwound to get useful stacktrace later
						/******/ var error = new Error();
						/******/ var loadingEnded = (event) => {
							/******/ if (__webpack_require__.o(installedChunks, chunkId)) {
								/******/ installedChunkData = installedChunks[chunkId];
								/******/ if (installedChunkData !== 0)
									installedChunks[chunkId] = undefined;
								/******/ if (installedChunkData) {
									/******/ var errorType =
										event && (event.type === "load" ? "missing" : event.type);
									/******/ var realSrc =
										event && event.target && event.target.src;
									/******/ error.message =
										"Loading chunk " +
										chunkId +
										" failed.\n(" +
										errorType +
										": " +
										realSrc +
										")";
									/******/ error.name = "ChunkLoadError";
									/******/ error.type = errorType;
									/******/ error.request = realSrc;
									/******/ installedChunkData[1](error);
									/******/
								}
								/******/
							}
							/******/
						};
						/******/ __webpack_require__.l(
							url,
							loadingEnded,
							"chunk-" + chunkId,
							chunkId,
						);
						/******/
					} else installedChunks[chunkId] = 0;
					/******/
				}
				/******/
			}
			/******/
		};
		/******/
		/******/ // no prefetching
		/******/
		/******/ // no preloaded
		/******/
		/******/ // no HMR
		/******/
		/******/ // no HMR manifest
		/******/
		/******/ // no on chunks loaded
		/******/
		/******/ // install a JSONP callback for chunk loading
		/******/ var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
			/******/ var [chunkIds, moreModules, runtime] = data;
			/******/ // add "moreModules" to the modules object,
			/******/ // then flag all "chunkIds" as loaded and fire callback
			/******/ var moduleId,
				chunkId,
				i = 0;
			/******/ if (chunkIds.some((id) => installedChunks[id] !== 0)) {
				/******/ for (moduleId in moreModules) {
					/******/ if (__webpack_require__.o(moreModules, moduleId)) {
						/******/ __webpack_require__.m[moduleId] = moreModules[moduleId];
						/******/
					}
					/******/
				}
				/******/ if (runtime) var result = runtime(__webpack_require__);
				/******/
			}
			/******/ if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
			/******/ for (; i < chunkIds.length; i++) {
				/******/ chunkId = chunkIds[i];
				/******/ if (
					__webpack_require__.o(installedChunks, chunkId) &&
					installedChunks[chunkId]
				) {
					/******/ installedChunks[chunkId][0]();
					/******/
				}
				/******/ installedChunks[chunkId] = 0;
				/******/
			}
			/******/
			/******/
		};
		/******/
		/******/ var chunkLoadingGlobal = (self[
			"webpackChunkmodules_01_starting_project"
		] = self["webpackChunkmodules_01_starting_project"] || []);
		/******/ chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
		/******/ chunkLoadingGlobal.push = webpackJsonpCallback.bind(
			null,
			chunkLoadingGlobal.push.bind(chunkLoadingGlobal),
		);
		/******/
	})();
	/******/
	/************************************************************************/
	/******/
	/******/ // startup
	/******/ // Load entry module and return exports
	/******/ // This entry module can't be inlined because the eval devtool is used.
	/******/ var __webpack_exports__ = __webpack_require__("./src/app.js");
	/******/
	/******/
})();
