"use strict";
(self["webpackChunkproject_library"] = self["webpackChunkproject_library"] || []).push([["src_navigation-module_js"],{

/***/ "./src/styles/navigation.css":
/*!***********************************!*\
  !*** ./src/styles/navigation.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/utils.css":
/*!******************************!*\
  !*** ./src/styles/utils.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/navigation-module.js":
/*!**********************************!*\
  !*** ./src/navigation-module.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_navigation_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/navigation.css */ "./src/styles/navigation.css");
/* harmony import */ var _utils_modalStuff_renderModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/modalStuff/renderModal */ "./src/utils/modalStuff/renderModal.js");
/* harmony import */ var _utils_cardStuff_renderAddBookCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/cardStuff/renderAddBookCard */ "./src/utils/cardStuff/renderAddBookCard.js");




const navigationModule = {
  renderModule: function() {
    const background = document.createElement('div');
    background.classList.add('nav-bar');
  
    const heading = navHeading();
    const button = addNewBookButton();
  
    background.append(heading, button);
  
    document.body.append(background);
  },
}

function addNewBookButton() {
  const button = document.createElement('button');
  button.id = 'add-new-book';
  button.textContent = '+ Book';

  button.addEventListener('mouseover', e => {
    e.target.textContent = 'Add Book';
  });

  button.addEventListener('mouseleave', e => {
    e.target.textContent = '+ Book';
  });

  button.addEventListener('click', () => {
    const modal = (0,_utils_modalStuff_renderModal__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const card = (0,_utils_cardStuff_renderAddBookCard__WEBPACK_IMPORTED_MODULE_2__["default"])();
    modal.append(card);
  });

  return button;
}

function navHeading() {
  const element = document.createElement('div');
  element.classList.add('nav-heading');
  element.textContent = 'Library';
  
  return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigationModule);

/***/ }),

/***/ "./src/utils/cardStuff/addBookCardFields.js":
/*!**************************************************!*\
  !*** ./src/utils/cardStuff/addBookCardFields.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addBookCardFields = {
  fieldNames: {
    bookTitle: {
      input: {
        type: 'text',
        id: 'book-title',
        name: 'book-title',
        placeholder: 'Click to type title',
        required: true,
      },
      label: {
        labelText: 'Book Title:',
        htmlFor: 'book-title'
      },
    },
    bookAuthor: {
      input: {
        type: 'text',
        id: 'book-author',
        name: 'book-author',
        placeholder: 'Click to type author',
        required: true,
      },
      label: {
        labelText: 'Book Author:',
        htmlFor: 'book-author'
      },
    },
    bookYear: {
      input: {
        type: 'number',
        value: 'book-year',
        name: 'book-year',
        value: 2000,
        max: Number(new Date().getFullYear()),
        min: 0,
        required: true,
      },
      label: {
        labelText: 'Book Year:',
        htmlFor: 'book-year',
      }
    },
    pageCount: {
      input: {
        type: 'number',
        value: 'page-count',
        name: 'page-count',
        value: 300,
        max: 1000,
        min: 1,
        required: true,
      },
      label: {
        labelText: 'Page Count:',
        htmlFor: 'page-count',
      }
    },
    hasRead: {
      input: {
        type: 'checkbox',
        value: 'has-read',
        name: 'has-read',
        checked: false,
      },
      label: {
        labelText: 'Have you read it?',
        htmlFor: 'has-read',
      }
    }
  },

  cardBody() {
    const card = document.createElement('div');
    card.classList.add('card-body');
    return card;
  },

  cardHeader(text) {
    const header = document.createElement('div');
    header.classList.add('card-header');
    header.textContent = `${text}`;
    return header;
  },

  cardDisplay() {
    const detailsDisplay = document.createElement('div');
    detailsDisplay.classList.add('card-details');
    return detailsDisplay;
  },

  displayField(inputFor) {
    const field = document.createElement('div');
    const label = this.displayLabel(labelFor);
    const input = this.displayInput(inputFor);
    field.classList.add('add-book-card-field');

    field.append(label, input);
    return field
  },

  displayLabel(labelFor) {
    const label = document.createElement('label');
    const data = this.fieldNames[labelFor].label;

    if (data) {
      label.textContent = data.labelText;
      label.htmlFor = data.htmlFor;
      label.classList.add('add-book-card-field-label');
    } else {
      console.warn(`No data found for ${labelFor}`);
    }
    return label;
  },

  displayInput(inputFor) {
    const input = document.createElement('input');
    const data = this.fieldNames[inputFor].input;
    if (data) {
      input.classList.add(`add-book-card-field${data.type}`);
      Object.keys(data).forEach(key => {
        input.setAttribute(key, data[key]);
      })
    } else {
      console.warn(`No data found for ${inputFor}`);
    }

    return input;
  },

  cardButtons() {
    const buttons = document.createElement('div');
    const add = document.createElement('button');
    const cancel = document.createElement('button');

    add.id = 'add-button';
    cancel.id = 'add-button';
    buttons.classList.add('add-book-card-field');

    buttons.append(add, cancel);
    return buttons;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addBookCardFields);

/***/ }),

/***/ "./src/utils/cardStuff/renderAddBookCard.js":
/*!**************************************************!*\
  !*** ./src/utils/cardStuff/renderAddBookCard.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderAddBookCard)
/* harmony export */ });
/* harmony import */ var _addBookCardFields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addBookCardFields */ "./src/utils/cardStuff/addBookCardFields.js");


function renderAddBookCard() {
  const { cardBody, cardHeader, displayField, cardDisplay, cardButtons } = _addBookCardFields__WEBPACK_IMPORTED_MODULE_0__["default"];

  const card = cardBody();
  const header = cardHeader('Add New Book');
  const display = cardDisplay();
  const bookTitle = displayField(bookTitle);
  const bookAuthor = displayField(bookAuthor);
  const bookYear = displayField(bookYear);
  const pageCount = displayField(pageCount);
  const hasRead = displayField(hasRead);
  const buttons = cardButtons();

  display.append(bookTitle, bookAuthor, bookYear, pageCount, hasRead, buttons);
  card.append(header, display);

  return card;
}

/***/ }),

/***/ "./src/utils/modalStuff/renderModal.js":
/*!*********************************************!*\
  !*** ./src/utils/modalStuff/renderModal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderModal)
/* harmony export */ });
/* harmony import */ var _styles_utils_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/utils.css */ "./src/styles/utils.css");


function renderModal() {
  const modalBlur = document.createElement('div');
  modalBlur.id = 'modal-blur';
  modalBlur.addEventListener('click', e => {
    if (e.target.id === 'modal-blur') {
      removeModal(modalBlur);
    }
  })

  document.body.append(modalBlur);
}

function removeModal(modal) {
  document.body.removeChild(modal);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX25hdmlnYXRpb24tbW9kdWxlX2pzLmU1M2VjZDc2MjVhZDM5YjcwMjEzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FpQztBQUN3QjtBQUNXOztBQUVwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esa0JBQWtCLHlFQUFXO0FBQzdCLGlCQUFpQiw4RUFBaUI7QUFDbEM7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZ0JBQWdCOzs7Ozs7Ozs7Ozs7OztBQ2hEL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLEtBQUs7QUFDakM7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTix3Q0FBd0MsU0FBUztBQUNqRDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxVQUFVO0FBQzFEO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOLHdDQUF3QyxTQUFTO0FBQ2pEOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7QUNoSm9COztBQUVyQztBQUNmLFVBQVUsK0RBQStELEVBQUUsMERBQWlCOztBQUU1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQmdDOztBQUVqQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWxpYnJhcnkvLi9zcmMvc3R5bGVzL25hdmlnYXRpb24uY3NzPzY1MGYiLCJ3ZWJwYWNrOi8vcHJvamVjdC1saWJyYXJ5Ly4vc3JjL3N0eWxlcy91dGlscy5jc3M/YTZiMSIsIndlYnBhY2s6Ly9wcm9qZWN0LWxpYnJhcnkvLi9zcmMvbmF2aWdhdGlvbi1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1saWJyYXJ5Ly4vc3JjL3V0aWxzL2NhcmRTdHVmZi9hZGRCb29rQ2FyZEZpZWxkcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWxpYnJhcnkvLi9zcmMvdXRpbHMvY2FyZFN0dWZmL3JlbmRlckFkZEJvb2tDYXJkLmpzIiwid2VicGFjazovL3Byb2plY3QtbGlicmFyeS8uL3NyYy91dGlscy9tb2RhbFN0dWZmL3JlbmRlck1vZGFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAnLi9zdHlsZXMvbmF2aWdhdGlvbi5jc3MnO1xuaW1wb3J0IHJlbmRlck1vZGFsIGZyb20gJy4vdXRpbHMvbW9kYWxTdHVmZi9yZW5kZXJNb2RhbCc7XG5pbXBvcnQgcmVuZGVyQWRkQm9va0NhcmQgZnJvbSAnLi91dGlscy9jYXJkU3R1ZmYvcmVuZGVyQWRkQm9va0NhcmQnO1xuXG5jb25zdCBuYXZpZ2F0aW9uTW9kdWxlID0ge1xuICByZW5kZXJNb2R1bGU6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ25hdi1iYXInKTtcbiAgXG4gICAgY29uc3QgaGVhZGluZyA9IG5hdkhlYWRpbmcoKTtcbiAgICBjb25zdCBidXR0b24gPSBhZGROZXdCb29rQnV0dG9uKCk7XG4gIFxuICAgIGJhY2tncm91bmQuYXBwZW5kKGhlYWRpbmcsIGJ1dHRvbik7XG4gIFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGJhY2tncm91bmQpO1xuICB9LFxufVxuXG5mdW5jdGlvbiBhZGROZXdCb29rQnV0dG9uKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLmlkID0gJ2FkZC1uZXctYm9vayc7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9ICcrIEJvb2snO1xuXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBlID0+IHtcbiAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9ICdBZGQgQm9vayc7XG4gIH0pO1xuXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZSA9PiB7XG4gICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSAnKyBCb29rJztcbiAgfSk7XG5cbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gcmVuZGVyTW9kYWwoKTtcbiAgICBjb25zdCBjYXJkID0gcmVuZGVyQWRkQm9va0NhcmQoKTtcbiAgICBtb2RhbC5hcHBlbmQoY2FyZCk7XG4gIH0pO1xuXG4gIHJldHVybiBidXR0b247XG59XG5cbmZ1bmN0aW9uIG5hdkhlYWRpbmcoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCduYXYtaGVhZGluZycpO1xuICBlbGVtZW50LnRleHRDb250ZW50ID0gJ0xpYnJhcnknO1xuICBcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdmlnYXRpb25Nb2R1bGU7IiwiY29uc3QgYWRkQm9va0NhcmRGaWVsZHMgPSB7XG4gIGZpZWxkTmFtZXM6IHtcbiAgICBib29rVGl0bGU6IHtcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgaWQ6ICdib29rLXRpdGxlJyxcbiAgICAgICAgbmFtZTogJ2Jvb2stdGl0bGUnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ0NsaWNrIHRvIHR5cGUgdGl0bGUnLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBsYWJlbDoge1xuICAgICAgICBsYWJlbFRleHQ6ICdCb29rIFRpdGxlOicsXG4gICAgICAgIGh0bWxGb3I6ICdib29rLXRpdGxlJ1xuICAgICAgfSxcbiAgICB9LFxuICAgIGJvb2tBdXRob3I6IHtcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgaWQ6ICdib29rLWF1dGhvcicsXG4gICAgICAgIG5hbWU6ICdib29rLWF1dGhvcicsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnQ2xpY2sgdG8gdHlwZSBhdXRob3InLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBsYWJlbDoge1xuICAgICAgICBsYWJlbFRleHQ6ICdCb29rIEF1dGhvcjonLFxuICAgICAgICBodG1sRm9yOiAnYm9vay1hdXRob3InXG4gICAgICB9LFxuICAgIH0sXG4gICAgYm9va1llYXI6IHtcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICB2YWx1ZTogJ2Jvb2steWVhcicsXG4gICAgICAgIG5hbWU6ICdib29rLXllYXInLFxuICAgICAgICB2YWx1ZTogMjAwMCxcbiAgICAgICAgbWF4OiBOdW1iZXIobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpKSxcbiAgICAgICAgbWluOiAwLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBsYWJlbDoge1xuICAgICAgICBsYWJlbFRleHQ6ICdCb29rIFllYXI6JyxcbiAgICAgICAgaHRtbEZvcjogJ2Jvb2steWVhcicsXG4gICAgICB9XG4gICAgfSxcbiAgICBwYWdlQ291bnQ6IHtcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICB2YWx1ZTogJ3BhZ2UtY291bnQnLFxuICAgICAgICBuYW1lOiAncGFnZS1jb3VudCcsXG4gICAgICAgIHZhbHVlOiAzMDAsXG4gICAgICAgIG1heDogMTAwMCxcbiAgICAgICAgbWluOiAxLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBsYWJlbDoge1xuICAgICAgICBsYWJlbFRleHQ6ICdQYWdlIENvdW50OicsXG4gICAgICAgIGh0bWxGb3I6ICdwYWdlLWNvdW50JyxcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhc1JlYWQ6IHtcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgIHZhbHVlOiAnaGFzLXJlYWQnLFxuICAgICAgICBuYW1lOiAnaGFzLXJlYWQnLFxuICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBsYWJlbDoge1xuICAgICAgICBsYWJlbFRleHQ6ICdIYXZlIHlvdSByZWFkIGl0PycsXG4gICAgICAgIGh0bWxGb3I6ICdoYXMtcmVhZCcsXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGNhcmRCb2R5KCkge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpO1xuICAgIHJldHVybiBjYXJkO1xuICB9LFxuXG4gIGNhcmRIZWFkZXIodGV4dCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGAke3RleHR9YDtcbiAgICByZXR1cm4gaGVhZGVyO1xuICB9LFxuXG4gIGNhcmREaXNwbGF5KCkge1xuICAgIGNvbnN0IGRldGFpbHNEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGV0YWlsc0Rpc3BsYXkuY2xhc3NMaXN0LmFkZCgnY2FyZC1kZXRhaWxzJyk7XG4gICAgcmV0dXJuIGRldGFpbHNEaXNwbGF5O1xuICB9LFxuXG4gIGRpc3BsYXlGaWVsZChpbnB1dEZvcikge1xuICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmRpc3BsYXlMYWJlbChsYWJlbEZvcik7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLmRpc3BsYXlJbnB1dChpbnB1dEZvcik7XG4gICAgZmllbGQuY2xhc3NMaXN0LmFkZCgnYWRkLWJvb2stY2FyZC1maWVsZCcpO1xuXG4gICAgZmllbGQuYXBwZW5kKGxhYmVsLCBpbnB1dCk7XG4gICAgcmV0dXJuIGZpZWxkXG4gIH0sXG5cbiAgZGlzcGxheUxhYmVsKGxhYmVsRm9yKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmZpZWxkTmFtZXNbbGFiZWxGb3JdLmxhYmVsO1xuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gZGF0YS5sYWJlbFRleHQ7XG4gICAgICBsYWJlbC5odG1sRm9yID0gZGF0YS5odG1sRm9yO1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnYWRkLWJvb2stY2FyZC1maWVsZC1sYWJlbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oYE5vIGRhdGEgZm91bmQgZm9yICR7bGFiZWxGb3J9YCk7XG4gICAgfVxuICAgIHJldHVybiBsYWJlbDtcbiAgfSxcblxuICBkaXNwbGF5SW5wdXQoaW5wdXRGb3IpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZmllbGROYW1lc1tpbnB1dEZvcl0uaW5wdXQ7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoYGFkZC1ib29rLWNhcmQtZmllbGQke2RhdGEudHlwZX1gKTtcbiAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKGtleSwgZGF0YVtrZXldKTtcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihgTm8gZGF0YSBmb3VuZCBmb3IgJHtpbnB1dEZvcn1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5wdXQ7XG4gIH0sXG5cbiAgY2FyZEJ1dHRvbnMoKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgYWRkLmlkID0gJ2FkZC1idXR0b24nO1xuICAgIGNhbmNlbC5pZCA9ICdhZGQtYnV0dG9uJztcbiAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoJ2FkZC1ib29rLWNhcmQtZmllbGQnKTtcblxuICAgIGJ1dHRvbnMuYXBwZW5kKGFkZCwgY2FuY2VsKTtcbiAgICByZXR1cm4gYnV0dG9ucztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRCb29rQ2FyZEZpZWxkczsiLCJpbXBvcnQgYWRkQm9va0NhcmRGaWVsZHMgZnJvbSAnLi9hZGRCb29rQ2FyZEZpZWxkcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckFkZEJvb2tDYXJkKCkge1xuICBjb25zdCB7IGNhcmRCb2R5LCBjYXJkSGVhZGVyLCBkaXNwbGF5RmllbGQsIGNhcmREaXNwbGF5LCBjYXJkQnV0dG9ucyB9ID0gYWRkQm9va0NhcmRGaWVsZHM7XG5cbiAgY29uc3QgY2FyZCA9IGNhcmRCb2R5KCk7XG4gIGNvbnN0IGhlYWRlciA9IGNhcmRIZWFkZXIoJ0FkZCBOZXcgQm9vaycpO1xuICBjb25zdCBkaXNwbGF5ID0gY2FyZERpc3BsYXkoKTtcbiAgY29uc3QgYm9va1RpdGxlID0gZGlzcGxheUZpZWxkKGJvb2tUaXRsZSk7XG4gIGNvbnN0IGJvb2tBdXRob3IgPSBkaXNwbGF5RmllbGQoYm9va0F1dGhvcik7XG4gIGNvbnN0IGJvb2tZZWFyID0gZGlzcGxheUZpZWxkKGJvb2tZZWFyKTtcbiAgY29uc3QgcGFnZUNvdW50ID0gZGlzcGxheUZpZWxkKHBhZ2VDb3VudCk7XG4gIGNvbnN0IGhhc1JlYWQgPSBkaXNwbGF5RmllbGQoaGFzUmVhZCk7XG4gIGNvbnN0IGJ1dHRvbnMgPSBjYXJkQnV0dG9ucygpO1xuXG4gIGRpc3BsYXkuYXBwZW5kKGJvb2tUaXRsZSwgYm9va0F1dGhvciwgYm9va1llYXIsIHBhZ2VDb3VudCwgaGFzUmVhZCwgYnV0dG9ucyk7XG4gIGNhcmQuYXBwZW5kKGhlYWRlciwgZGlzcGxheSk7XG5cbiAgcmV0dXJuIGNhcmQ7XG59IiwiaW1wb3J0ICcuLi8uLi9zdHlsZXMvdXRpbHMuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTW9kYWwoKSB7XG4gIGNvbnN0IG1vZGFsQmx1ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2RhbEJsdXIuaWQgPSAnbW9kYWwtYmx1cic7XG4gIG1vZGFsQmx1ci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ21vZGFsLWJsdXInKSB7XG4gICAgICByZW1vdmVNb2RhbChtb2RhbEJsdXIpO1xuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChtb2RhbEJsdXIpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVNb2RhbChtb2RhbCkge1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1vZGFsKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=