import bookCardFields from '../classes/bookCardFields';
import libraryModule from '../../library-module';
import bookController from '../bookController';
import findBook from '../cardStuff/findBook';
import storageModule from '../../storageModule';
import '../../styles/book-card.css';

export default function renderCard(book) {
  const { title, author, year, pageCount, hasRead } = book;
  const cardFields = new bookCardFields();

  const cardBody = document.createElement('div');
  cardBody.classList.add('book-card');

  const cardTitle = cardFields.title(title);
  const cardAuthor = cardFields.author(author);
  const cardYear = cardFields.year(year);
  const cardPageCount = cardFields.pageCount(pageCount);
  
  hasRead ? cardBody.classList.add('read') : cardBody.classList.add('unread');

  cardBody.addEventListener('click', () => {
    const { book, index } = findBook(title);
    const bookControl = bookController({ book: book });
    bookControl.bookFunctions.changeReadState();
    if (cardBody.classList.contains('read')) {
      cardBody.classList.remove('read');
      cardBody.classList.add('unread');
    } else {
      cardBody.classList.remove('unread');
      cardBody.classList.add('read');
    }

    const library = storageModule.getItem('libraryCollection');
    library.splice(index, 1, book);
    storageModule.setItem('libraryCollection', library);
    libraryModule.updateLibrary();
  })

  cardBody.append(cardTitle, cardAuthor, cardYear, cardPageCount);

  return cardBody;
}