"use strict";
(self["webpackChunkproject_library"] = self["webpackChunkproject_library"] || []).push([["src_library-module_js"],{

/***/ "./src/styles/library.css":
/*!********************************!*\
  !*** ./src/styles/library.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/library-module.js":
/*!*******************************!*\
  !*** ./src/library-module.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_library_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/library.css */ "./src/styles/library.css");
/* harmony import */ var _utils_cardStuff_renderBookCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/cardStuff/renderBookCard */ "./src/utils/cardStuff/renderBookCard.js");



const libraryModule = {

  renderModule: function() {
    const library = document.createElement('div');
    library.classList.add('library');
  
    const readSection = renderSection('Read', 'read-display');
    readSection.id = 'read-section';
  
    const unreadSection = renderSection('Unread', 'unread-display');
    unreadSection.id = 'unread-section';
  
    library.append(readSection, unreadSection);
  
    document.body.append(library);
  },

  updateLibrary: function(libraryArray) {
    const readSection = document.querySelector('#read-display');
    const unreadSection = document.querySelector('#unread-display');
  
    for (let i = 0; i < libraryArray.length; i++) {
      const { isRead } = libraryArray[i];
      const bookCard = (0,_utils_cardStuff_renderBookCard__WEBPACK_IMPORTED_MODULE_1__["default"])(libraryArray[i]);
      if (isRead) {
        readSection.append(bookCard);
      } else {
        unreadSection.append(bookCard);
      };
    };
  }
}

function renderSection(sectionName, id) {
  const section = document.createElement('div');
  const header = document.createElement('p');
  const display = document.createElement('div');

  header.classList.add('section-header');
  header.textContent = `${sectionName}`;

  display.classList.add('section-display');
  display.id = id;

  section.classList.add('section');

  section.append(header, display);
  return section;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (libraryModule);

/***/ }),

/***/ "./src/utils/cardStuff/bookCardFields.js":
/*!***********************************************!*\
  !*** ./src/utils/cardStuff/bookCardFields.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const bookCardFields = {
  title(bookTitle) {
    const title = document.createElement('p');
    title.classList.add('book-card-heading');
    title.textContent = `${bookTitle}`;
    return field;
  },

  detailDisplay() {
    const detailsDisplay = document.createElement('div');
    detailsDisplay.classList.add('card-details');
    return detailsDisplay;
  },

  displayField(heading, info) {
    const field = document.createElement('div');
    const headingElement = this.displayHeading(heading);
    const infoElement = this.displayInfo(info);
    field.classList.add('book-card-field');
    field.append(headingElement, infoElement);
    return field;
  },

  displayHeading(heading) {
    const headingElement = document.createElement('p');
    headingElement.textContent = `${heading}`;
    headingElement.classList.add('book-card-field-heading');
    return headingElement;
  },

  displayInfo(info) {
    const infoElement = document.createElement('p');
    infoElement.classList.add('book-card-field-info');
    infoElement.textContent = `${info}`;
    return infoElement;
  },

  author(bookAuthor) {
    const field = this.displayField('Author: ', bookAuthor);
    return field;
  },

  year(bookYear) {
    const field = this.displayField('Book Year: ', bookYear);
    return field;
  },

  pageCount(pageValue) {
    const field = this.displayField('Page Count: ', pageValue);
    return field;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bookCardFields);

/***/ }),

/***/ "./src/utils/cardStuff/renderBookCard.js":
/*!***********************************************!*\
  !*** ./src/utils/cardStuff/renderBookCard.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderCard)
/* harmony export */ });
/* harmony import */ var _bookCardFields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookCardFields */ "./src/utils/cardStuff/bookCardFields.js");


function renderCard(book) {
  const { title, author, year, numberOfPage, hasRead } = book;

  const cardBody = document.createElement('div');
  cardBody.classList.add('book-card');

  const cardTitle = _bookCardFields__WEBPACK_IMPORTED_MODULE_0__["default"].title(title);
  const cardAuthor = _bookCardFields__WEBPACK_IMPORTED_MODULE_0__["default"].author(author);
  const cardYear = _bookCardFields__WEBPACK_IMPORTED_MODULE_0__["default"].year(year);
  const cardPageCount = _bookCardFields__WEBPACK_IMPORTED_MODULE_0__["default"].cardPageCount(numberOfPage);
  
  hasRead ? cardBody.classList.add('read') : cardBody.classList.add('unread');

  cardBody.append(cardTitle, cardAuthor, cardYear, cardPageCount);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2xpYnJhcnktbW9kdWxlX2pzLjhjYTIxODk3Yzk2Mzk4MmY0M2U2LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBOEI7QUFDNEI7O0FBRTFEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0MsY0FBYyxTQUFTO0FBQ3ZCLHVCQUF1QiwyRUFBVTtBQUNqQztBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsWUFBWTs7QUFFdEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7QUNyRDVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFVBQVU7QUFDckM7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLG9DQUFvQyxRQUFRO0FBQzVDO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxLQUFLO0FBQ3RDO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7QUNyRGlCOztBQUUvQjtBQUNmLFVBQVUsNkNBQTZDOztBQUV2RDtBQUNBOztBQUVBLG9CQUFvQix1REFBYztBQUNsQyxxQkFBcUIsdURBQWM7QUFDbkMsbUJBQW1CLHVEQUFjO0FBQ2pDLHdCQUF3Qix1REFBYztBQUN0QztBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWxpYnJhcnkvLi9zcmMvc3R5bGVzL2xpYnJhcnkuY3NzPzM3MjQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1saWJyYXJ5Ly4vc3JjL2xpYnJhcnktbW9kdWxlLmpzIiwid2VicGFjazovL3Byb2plY3QtbGlicmFyeS8uL3NyYy91dGlscy9jYXJkU3R1ZmYvYm9va0NhcmRGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1saWJyYXJ5Ly4vc3JjL3V0aWxzL2NhcmRTdHVmZi9yZW5kZXJCb29rQ2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgJy4vc3R5bGVzL2xpYnJhcnkuY3NzJztcbmltcG9ydCByZW5kZXJDYXJkIGZyb20gJy4vdXRpbHMvY2FyZFN0dWZmL3JlbmRlckJvb2tDYXJkJztcblxuY29uc3QgbGlicmFyeU1vZHVsZSA9IHtcblxuICByZW5kZXJNb2R1bGU6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGxpYnJhcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaWJyYXJ5LmNsYXNzTGlzdC5hZGQoJ2xpYnJhcnknKTtcbiAgXG4gICAgY29uc3QgcmVhZFNlY3Rpb24gPSByZW5kZXJTZWN0aW9uKCdSZWFkJywgJ3JlYWQtZGlzcGxheScpO1xuICAgIHJlYWRTZWN0aW9uLmlkID0gJ3JlYWQtc2VjdGlvbic7XG4gIFxuICAgIGNvbnN0IHVucmVhZFNlY3Rpb24gPSByZW5kZXJTZWN0aW9uKCdVbnJlYWQnLCAndW5yZWFkLWRpc3BsYXknKTtcbiAgICB1bnJlYWRTZWN0aW9uLmlkID0gJ3VucmVhZC1zZWN0aW9uJztcbiAgXG4gICAgbGlicmFyeS5hcHBlbmQocmVhZFNlY3Rpb24sIHVucmVhZFNlY3Rpb24pO1xuICBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChsaWJyYXJ5KTtcbiAgfSxcblxuICB1cGRhdGVMaWJyYXJ5OiBmdW5jdGlvbihsaWJyYXJ5QXJyYXkpIHtcbiAgICBjb25zdCByZWFkU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWFkLWRpc3BsYXknKTtcbiAgICBjb25zdCB1bnJlYWRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VucmVhZC1kaXNwbGF5Jyk7XG4gIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlicmFyeUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB7IGlzUmVhZCB9ID0gbGlicmFyeUFycmF5W2ldO1xuICAgICAgY29uc3QgYm9va0NhcmQgPSByZW5kZXJDYXJkKGxpYnJhcnlBcnJheVtpXSk7XG4gICAgICBpZiAoaXNSZWFkKSB7XG4gICAgICAgIHJlYWRTZWN0aW9uLmFwcGVuZChib29rQ2FyZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1bnJlYWRTZWN0aW9uLmFwcGVuZChib29rQ2FyZCk7XG4gICAgICB9O1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyU2VjdGlvbihzZWN0aW9uTmFtZSwgaWQpIHtcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1oZWFkZXInKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gYCR7c2VjdGlvbk5hbWV9YDtcblxuICBkaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tZGlzcGxheScpO1xuICBkaXNwbGF5LmlkID0gaWQ7XG5cbiAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uJyk7XG5cbiAgc2VjdGlvbi5hcHBlbmQoaGVhZGVyLCBkaXNwbGF5KTtcbiAgcmV0dXJuIHNlY3Rpb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpYnJhcnlNb2R1bGU7IiwiY29uc3QgYm9va0NhcmRGaWVsZHMgPSB7XG4gIHRpdGxlKGJvb2tUaXRsZSkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Jvb2stY2FyZC1oZWFkaW5nJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHtib29rVGl0bGV9YDtcbiAgICByZXR1cm4gZmllbGQ7XG4gIH0sXG5cbiAgZGV0YWlsRGlzcGxheSgpIHtcbiAgICBjb25zdCBkZXRhaWxzRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbHNEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2NhcmQtZGV0YWlscycpO1xuICAgIHJldHVybiBkZXRhaWxzRGlzcGxheTtcbiAgfSxcblxuICBkaXNwbGF5RmllbGQoaGVhZGluZywgaW5mbykge1xuICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGluZ0VsZW1lbnQgPSB0aGlzLmRpc3BsYXlIZWFkaW5nKGhlYWRpbmcpO1xuICAgIGNvbnN0IGluZm9FbGVtZW50ID0gdGhpcy5kaXNwbGF5SW5mbyhpbmZvKTtcbiAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKCdib29rLWNhcmQtZmllbGQnKTtcbiAgICBmaWVsZC5hcHBlbmQoaGVhZGluZ0VsZW1lbnQsIGluZm9FbGVtZW50KTtcbiAgICByZXR1cm4gZmllbGQ7XG4gIH0sXG5cbiAgZGlzcGxheUhlYWRpbmcoaGVhZGluZykge1xuICAgIGNvbnN0IGhlYWRpbmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhlYWRpbmdFbGVtZW50LnRleHRDb250ZW50ID0gYCR7aGVhZGluZ31gO1xuICAgIGhlYWRpbmdFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Jvb2stY2FyZC1maWVsZC1oZWFkaW5nJyk7XG4gICAgcmV0dXJuIGhlYWRpbmdFbGVtZW50O1xuICB9LFxuXG4gIGRpc3BsYXlJbmZvKGluZm8pIHtcbiAgICBjb25zdCBpbmZvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmZvRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdib29rLWNhcmQtZmllbGQtaW5mbycpO1xuICAgIGluZm9FbGVtZW50LnRleHRDb250ZW50ID0gYCR7aW5mb31gO1xuICAgIHJldHVybiBpbmZvRWxlbWVudDtcbiAgfSxcblxuICBhdXRob3IoYm9va0F1dGhvcikge1xuICAgIGNvbnN0IGZpZWxkID0gdGhpcy5kaXNwbGF5RmllbGQoJ0F1dGhvcjogJywgYm9va0F1dGhvcik7XG4gICAgcmV0dXJuIGZpZWxkO1xuICB9LFxuXG4gIHllYXIoYm9va1llYXIpIHtcbiAgICBjb25zdCBmaWVsZCA9IHRoaXMuZGlzcGxheUZpZWxkKCdCb29rIFllYXI6ICcsIGJvb2tZZWFyKTtcbiAgICByZXR1cm4gZmllbGQ7XG4gIH0sXG5cbiAgcGFnZUNvdW50KHBhZ2VWYWx1ZSkge1xuICAgIGNvbnN0IGZpZWxkID0gdGhpcy5kaXNwbGF5RmllbGQoJ1BhZ2UgQ291bnQ6ICcsIHBhZ2VWYWx1ZSk7XG4gICAgcmV0dXJuIGZpZWxkO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJvb2tDYXJkRmllbGRzOyIsImltcG9ydCBib29rQ2FyZEZpZWxkcyBmcm9tICcuL2Jvb2tDYXJkRmllbGRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyQ2FyZChib29rKSB7XG4gIGNvbnN0IHsgdGl0bGUsIGF1dGhvciwgeWVhciwgbnVtYmVyT2ZQYWdlLCBoYXNSZWFkIH0gPSBib29rO1xuXG4gIGNvbnN0IGNhcmRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRCb2R5LmNsYXNzTGlzdC5hZGQoJ2Jvb2stY2FyZCcpO1xuXG4gIGNvbnN0IGNhcmRUaXRsZSA9IGJvb2tDYXJkRmllbGRzLnRpdGxlKHRpdGxlKTtcbiAgY29uc3QgY2FyZEF1dGhvciA9IGJvb2tDYXJkRmllbGRzLmF1dGhvcihhdXRob3IpO1xuICBjb25zdCBjYXJkWWVhciA9IGJvb2tDYXJkRmllbGRzLnllYXIoeWVhcik7XG4gIGNvbnN0IGNhcmRQYWdlQ291bnQgPSBib29rQ2FyZEZpZWxkcy5jYXJkUGFnZUNvdW50KG51bWJlck9mUGFnZSk7XG4gIFxuICBoYXNSZWFkID8gY2FyZEJvZHkuY2xhc3NMaXN0LmFkZCgncmVhZCcpIDogY2FyZEJvZHkuY2xhc3NMaXN0LmFkZCgndW5yZWFkJyk7XG5cbiAgY2FyZEJvZHkuYXBwZW5kKGNhcmRUaXRsZSwgY2FyZEF1dGhvciwgY2FyZFllYXIsIGNhcmRQYWdlQ291bnQpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==