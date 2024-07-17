import storageModule from "../../storageModule";

export default function findBook(title) {
  const library = storageModule.getItem('libraryCollection');
  let book = library.filter(book => book.title === title);
  const index = library.findIndex(book => book.title === title);
  book = book[0];

  return {
    book,
    index
  }
}