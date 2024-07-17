"use strict";
(self["webpackChunkproject_library"] = self["webpackChunkproject_library"] || []).push([["src_storageModule_js"],{

/***/ "./src/storageModule.js":
/*!******************************!*\
  !*** ./src/storageModule.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const storageModule = {
  setItem(key, value) {
    try {
      const serializedValue = JSON.stringify(value);
      if (useLocalStorage) {
        localStorage.setItem(key, serializedValue);
      } else {
        sessionStorage.setItem(key, serializedValue);
      }
    } catch (error) {
      console.error('Error putting item in storage: ${error}', error);
    }
  },

  getItem(key) {
    try {
      const serializedValue = useLocalStorage
      ? localStorage.getItem(key)
      : sessionStorage.getItem(key);

      return serializedValue ? JSON.parse(serializedValue) : null;
    } catch (error) {
      console.error('Error finding item in storage with key: ${key}. Error: ${error}', key, error);
      return null;
    }
  },

  removeItem(key) {
    try {
      useLocalStorage
      ? localStorage.removeItem(key)
      : sessionStorage.removeItem(key)
    } catch (error) {
      console.error('Error removing item from storage with key ${key}. Error: ${error}', key, error);
    }
  },

  clear() {
    try {
      useLocalStorage
      ? localStorage.clear()
      : sessionStorage.clear();
    } catch (error) {
      console.error('Error clearing storage: ${error}', error);
    }
  },

  checkStorageType() {
    return useLocalStorage
    ? 'localStorage'
    : 'sessionStorage';
  }
}

function isLocalStorageAvailable() {
  try {
    const testKey = 'test';
    localStorage.setItem(testKey, 'testValue');
    localStorage.getItem(testKey);
    return true;
  } catch (error) {

    return false;
  }
}

const useLocalStorage = isLocalStorageAvailable();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storageModule);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3N0b3JhZ2VNb2R1bGVfanMuZGUxODgzZDdkNjZmNDkxY2QwYjIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOLHNEQUFzRCxNQUFNO0FBQzVEO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOLCtEQUErRCxJQUFJLFdBQVcsTUFBTTtBQUNwRjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLGlFQUFpRSxJQUFJLFdBQVcsTUFBTTtBQUN0RjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTiwrQ0FBK0MsTUFBTTtBQUNyRDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWxpYnJhcnkvLi9zcmMvc3RvcmFnZU1vZHVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdG9yYWdlTW9kdWxlID0ge1xuICBzZXRJdGVtKGtleSwgdmFsdWUpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2VyaWFsaXplZFZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgaWYgKHVzZUxvY2FsU3RvcmFnZSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHNlcmlhbGl6ZWRWYWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleSwgc2VyaWFsaXplZFZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcHV0dGluZyBpdGVtIGluIHN0b3JhZ2U6ICR7ZXJyb3J9JywgZXJyb3IpO1xuICAgIH1cbiAgfSxcblxuICBnZXRJdGVtKGtleSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzZXJpYWxpemVkVmFsdWUgPSB1c2VMb2NhbFN0b3JhZ2VcbiAgICAgID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KVxuICAgICAgOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleSk7XG5cbiAgICAgIHJldHVybiBzZXJpYWxpemVkVmFsdWUgPyBKU09OLnBhcnNlKHNlcmlhbGl6ZWRWYWx1ZSkgOiBudWxsO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmaW5kaW5nIGl0ZW0gaW4gc3RvcmFnZSB3aXRoIGtleTogJHtrZXl9LiBFcnJvcjogJHtlcnJvcn0nLCBrZXksIGVycm9yKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSxcblxuICByZW1vdmVJdGVtKGtleSkge1xuICAgIHRyeSB7XG4gICAgICB1c2VMb2NhbFN0b3JhZ2VcbiAgICAgID8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KVxuICAgICAgOiBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVtb3ZpbmcgaXRlbSBmcm9tIHN0b3JhZ2Ugd2l0aCBrZXkgJHtrZXl9LiBFcnJvcjogJHtlcnJvcn0nLCBrZXksIGVycm9yKTtcbiAgICB9XG4gIH0sXG5cbiAgY2xlYXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHVzZUxvY2FsU3RvcmFnZVxuICAgICAgPyBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICAgICAgOiBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjbGVhcmluZyBzdG9yYWdlOiAke2Vycm9yfScsIGVycm9yKTtcbiAgICB9XG4gIH0sXG5cbiAgY2hlY2tTdG9yYWdlVHlwZSgpIHtcbiAgICByZXR1cm4gdXNlTG9jYWxTdG9yYWdlXG4gICAgPyAnbG9jYWxTdG9yYWdlJ1xuICAgIDogJ3Nlc3Npb25TdG9yYWdlJztcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0ZXN0S2V5ID0gJ3Rlc3QnO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRlc3RLZXksICd0ZXN0VmFsdWUnKTtcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0ZXN0S2V5KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5jb25zdCB1c2VMb2NhbFN0b3JhZ2UgPSBpc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlTW9kdWxlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==