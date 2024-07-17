import './styles/collection-header.css';
import storageModule from './storageModule';

const collectionHeadingModule = {
  renderModule: function() {
    let module = document.querySelector('.collection');
    const array = storageModule.getItem('libraryCollection');

    if (module === null) {
      module = document.createElement('div');
      module.classList.add('collection');
      document.body.append(module);
    }
  
    module.textContent = `Number of Books in Collection: ${array.length}`;
  }
}

export default collectionHeadingModule;