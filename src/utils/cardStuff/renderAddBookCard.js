import addBookCardFields from '../classes/addBookCardFields';

export default function renderAddBookCard() {
  const cardFields = new addBookCardFields();

  const card = cardFields.cardBody();
  const header = cardFields.cardHeader('Add New Book');
  const display = cardFields.cardDisplay();
  const bookTitle = cardFields.displayField('bookTitle');
  const bookAuthor = cardFields.displayField('bookAuthor');
  const bookYear = cardFields.displayField('bookYear');
  const pageCount = cardFields.displayField('pageCount');
  const hasRead = cardFields.displayField('hasRead');
  const buttons = cardFields.cardButtons();

  display.append(bookTitle, bookAuthor, bookYear, pageCount, hasRead, buttons);
  card.append(header, display);

  return card;
}