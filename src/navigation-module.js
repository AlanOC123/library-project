import './styles/navigation.css';
import { renderModal, removeModal } from './utils/modalStuff/renderModal';
import renderAddBookCard from './utils/cardStuff/renderAddBookCard';
import createBook from './utils/createBook';
import storageModule from './storageModule';
import libraryModule from './library-module';
import collectionHeadingModule from './collection-header-module';

const navigationModule = {
  renderModule: function() {
    const background = document.createElement('div');
    background.classList.add('nav-bar');
  
    const heading = navHeading();
    const buttons = buttonsField();
  
    background.append(heading, buttons);
  
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
    const modal = renderModal();
    const card = renderAddBookCard();
    modal.append(card);
    document.body.append(modal);

    const addButton = document.querySelector('#add-button');
    const cancelButton = document.querySelector('#cancel-button');

    addButton.addEventListener('click', () => {
      const book = createBook();

      if (!book) {
        return;
      }

      const library = storageModule.getItem('libraryCollection');

      if (!library) {
        return;
      }

      library.push(book);

      storageModule.setItem('libraryCollection', library);

      collectionHeadingModule.renderModule()
      libraryModule.updateLibrary();

      removeModal(modal);
    })

    cancelButton.addEventListener('click', () => {
      removeModal(modal);
    });

  });

  return button;
}

function navHeading() {
  const element = document.createElement('div');
  element.classList.add('nav-heading');
  element.textContent = 'Library';
  
  return element;
}

function clearLibrary() {
  const button = document.createElement('button');
  button.textContent = 'Clear Collection';
  button.id = 'clear-library';

  button.addEventListener('click', () => {
    storageModule.clear();
    const libraryArray = [];
    storageModule.setItem('libraryCollection', libraryArray);
    libraryModule.updateLibrary();
    collectionHeadingModule.renderModule();
  })

  return button;
}

function buttonsField() {
  const field = document.createElement('div');
  const addBookButton = addNewBookButton();
  const clearButton = clearLibrary();

  field.classList.add('nav-buttons-field');
  field.append(addBookButton, clearButton);
  return field;
}

export default navigationModule;