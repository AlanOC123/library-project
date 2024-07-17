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
    localStorage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}

const useLocalStorage = isLocalStorageAvailable();

export default storageModule;