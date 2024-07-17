"use strict";
(self["webpackChunkproject_library"] = self["webpackChunkproject_library"] || []).push([["main"],{

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/global.css */ "./src/styles/global.css");


async function render() {
  const { default: navigationModule } = await __webpack_require__.e(/*! import() */ "src_navigation-module_js").then(__webpack_require__.bind(__webpack_require__, /*! ./navigation-module */ "./src/navigation-module.js"));
  const { default: collectionHeadingModule } = await __webpack_require__.e(/*! import() */ "src_collection-header-module_js").then(__webpack_require__.bind(__webpack_require__, /*! ./collection-header-module */ "./src/collection-header-module.js"));
  const { default: libraryModule } = await __webpack_require__.e(/*! import() */ "src_library-module_js").then(__webpack_require__.bind(__webpack_require__, /*! ./library-module */ "./src/library-module.js"));
  const { default: storageModule } = await __webpack_require__.e(/*! import() */ "src_storageModule_js").then(__webpack_require__.bind(__webpack_require__, /*! ./storageModule */ "./src/storageModule.js"));

  let myLibrary = storageModule.getItem('libraryCollection');

  if (!myLibrary) {
    myLibrary = [];
    storageModule.setItem('libraryCollection', myLibrary);
  }

  navigationModule.renderModule();
  collectionHeadingModule.renderModule();
  libraryModule.renderModule();
};

render();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45NDhmODg2M2YyMDc3NzY2MmNkMC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBNkI7O0FBRTdCO0FBQ0EsVUFBVSw0QkFBNEIsUUFBUSw4S0FBNkI7QUFDM0UsVUFBVSxtQ0FBbUMsUUFBUSxtTUFBb0M7QUFDekYsVUFBVSx5QkFBeUIsUUFBUSxxS0FBMEI7QUFDckUsVUFBVSx5QkFBeUIsUUFBUSxrS0FBeUI7O0FBRXBFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1saWJyYXJ5Ly4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzP2NmMDYiLCJ3ZWJwYWNrOi8vcHJvamVjdC1saWJyYXJ5Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAnLi9zdHlsZXMvZ2xvYmFsLmNzcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgY29uc3QgeyBkZWZhdWx0OiBuYXZpZ2F0aW9uTW9kdWxlIH0gPSBhd2FpdCBpbXBvcnQoJy4vbmF2aWdhdGlvbi1tb2R1bGUnKTtcbiAgY29uc3QgeyBkZWZhdWx0OiBjb2xsZWN0aW9uSGVhZGluZ01vZHVsZSB9ID0gYXdhaXQgaW1wb3J0KCcuL2NvbGxlY3Rpb24taGVhZGVyLW1vZHVsZScpO1xuICBjb25zdCB7IGRlZmF1bHQ6IGxpYnJhcnlNb2R1bGUgfSA9IGF3YWl0IGltcG9ydCgnLi9saWJyYXJ5LW1vZHVsZScpO1xuICBjb25zdCB7IGRlZmF1bHQ6IHN0b3JhZ2VNb2R1bGUgfSA9IGF3YWl0IGltcG9ydCgnLi9zdG9yYWdlTW9kdWxlJyk7XG5cbiAgbGV0IG15TGlicmFyeSA9IHN0b3JhZ2VNb2R1bGUuZ2V0SXRlbSgnbGlicmFyeUNvbGxlY3Rpb24nKTtcblxuICBpZiAoIW15TGlicmFyeSkge1xuICAgIG15TGlicmFyeSA9IFtdO1xuICAgIHN0b3JhZ2VNb2R1bGUuc2V0SXRlbSgnbGlicmFyeUNvbGxlY3Rpb24nLCBteUxpYnJhcnkpO1xuICB9XG5cbiAgbmF2aWdhdGlvbk1vZHVsZS5yZW5kZXJNb2R1bGUoKTtcbiAgY29sbGVjdGlvbkhlYWRpbmdNb2R1bGUucmVuZGVyTW9kdWxlKCk7XG4gIGxpYnJhcnlNb2R1bGUucmVuZGVyTW9kdWxlKCk7XG59O1xuXG5yZW5kZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=