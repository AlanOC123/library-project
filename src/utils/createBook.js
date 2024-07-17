import book from './classes/book';

export default function createBook() {

  const title = document.querySelector('#book-title').value;
  const author = document.querySelector('#book-author').value;
  const pageCount = document.querySelector('#page-count').value;
  const year = document.querySelector('#book-year').value;
  const isRead = document.querySelector('#has-read').checked;

  if (
    (title === '' || title === undefined)
    || (author === '' || author === undefined)
    || (pageCount < 1 || pageCount === '' || pageCount === NaN)
    || (year > Number(new Date().getFullYear()) || year === '' || year === NaN || year < 1)
  ) {
    return
  }

  const newBook = new book(title, author, year, pageCount, isRead);

  return newBook;
}