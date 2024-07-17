import './styles/global.css';

async function render() {
  const { default: navigationModule } = await import('./navigation-module');
  const { default: collectionHeadingModule } = await import('./collection-header-module');
  const { default: libraryModule } = await import('./library-module');
  const { default: storageModule } = await import('./storageModule');

  storageModule.clear();

  let myLibrary = storageModule.getItem('libraryCollection');

  if (!myLibrary) {
    myLibrary = [];
    storageModule.setItem('libraryCollection', myLibrary);
  }

  navigationModule.renderModule();
  collectionHeadingModule.renderModule();
  libraryModule.renderModule();
  libraryModule.updateLibrary();
};

render();