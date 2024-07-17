"use strict";
(self["webpackChunkproject_library"] = self["webpackChunkproject_library"] || []).push([["src_collection-header-module_js"],{

/***/ "./src/styles/collection-header.css":
/*!******************************************!*\
  !*** ./src/styles/collection-header.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/collection-header-module.js":
/*!*****************************************!*\
  !*** ./src/collection-header-module.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_collection_header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/collection-header.css */ "./src/styles/collection-header.css");


const collectionHeadingModule = {

  renderModule: function(count) {
    let module = document.querySelector('.collection');

    if (module === null) {
      module = document.createElement('div');
      module.classList.add('collection');
      document.body.append(module);
    }
  
    module.textContent = `Number of Books in Collection: ${count}`;
  },

  collectionObject: function(libraryArray) {
    const count = array.length;

    const getCount = function() {
      return count;
    }
  
    const updateCount = function(newArray) {
      if (!newArray) {
        return;
      }
  
      count = newArray.length;
    }
  
    return {
      getCount,
      updateCount
    }
  },

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (collectionHeadingModule);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbGxlY3Rpb24taGVhZGVyLW1vZHVsZV9qcy4zMTU4NjMxYzIzMzg5OWQzZmNkMS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBd0M7O0FBRXhDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELE1BQU07QUFDakUsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQSxpRUFBZSx1QkFBdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWxpYnJhcnkvLi9zcmMvc3R5bGVzL2NvbGxlY3Rpb24taGVhZGVyLmNzcz9mYTE1Iiwid2VicGFjazovL3Byb2plY3QtbGlicmFyeS8uL3NyYy9jb2xsZWN0aW9uLWhlYWRlci1tb2R1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0ICcuL3N0eWxlcy9jb2xsZWN0aW9uLWhlYWRlci5jc3MnO1xuXG5jb25zdCBjb2xsZWN0aW9uSGVhZGluZ01vZHVsZSA9IHtcblxuICByZW5kZXJNb2R1bGU6IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgbGV0IG1vZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uJyk7XG5cbiAgICBpZiAobW9kdWxlID09PSBudWxsKSB7XG4gICAgICBtb2R1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG1vZHVsZS5jbGFzc0xpc3QuYWRkKCdjb2xsZWN0aW9uJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChtb2R1bGUpO1xuICAgIH1cbiAgXG4gICAgbW9kdWxlLnRleHRDb250ZW50ID0gYE51bWJlciBvZiBCb29rcyBpbiBDb2xsZWN0aW9uOiAke2NvdW50fWA7XG4gIH0sXG5cbiAgY29sbGVjdGlvbk9iamVjdDogZnVuY3Rpb24obGlicmFyeUFycmF5KSB7XG4gICAgY29uc3QgY291bnQgPSBhcnJheS5sZW5ndGg7XG5cbiAgICBjb25zdCBnZXRDb3VudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cbiAgXG4gICAgY29uc3QgdXBkYXRlQ291bnQgPSBmdW5jdGlvbihuZXdBcnJheSkge1xuICAgICAgaWYgKCFuZXdBcnJheSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gIFxuICAgICAgY291bnQgPSBuZXdBcnJheS5sZW5ndGg7XG4gICAgfVxuICBcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0Q291bnQsXG4gICAgICB1cGRhdGVDb3VudFxuICAgIH1cbiAgfSxcblxufVxuXG5leHBvcnQgZGVmYXVsdCBjb2xsZWN0aW9uSGVhZGluZ01vZHVsZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=