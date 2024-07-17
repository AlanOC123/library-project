import './styles/library.css';
import renderCard from './utils/cardStuff/renderBookCard';
import storageModule from './storageModule';

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

  updateLibrary: function() {
    const readSection = document.querySelector('#read-display');
    const unreadSection = document.querySelector('#unread-display');
    const libraryArray = storageModule.getItem('libraryCollection');

    while (readSection.firstChild) {
      readSection.removeChild(readSection.firstChild)
    }

    while (unreadSection.firstChild) {
      unreadSection.removeChild(unreadSection.firstChild)
    }
  
    for (let i = 0; i < libraryArray.length; i++) {
      const { hasRead } = libraryArray[i];
      const bookCard = renderCard(libraryArray[i]);
      if (hasRead) {
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

export default libraryModule;