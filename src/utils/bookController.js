export default function bookController(book, value) {

  book = book['book'];

  if (!book) {
    return;
  }

  console.log(book.title);
  const bookInfo = {

    getTitle: function() {
      return book.title;
    },

    getAuthor: function() {
      return book.author;
    },

    getYear: function() {
      return book.year;
    },

    getNumberOfPages: function() {
      return book.pageCount;
    },

    getReadState: function() {

    }

  }

  const bookFunctions = {

    changeTitle: function() {
      if (!value) {
        return;
      }

      book.title = value;
    },

    changeAuthor: function() {
      if (!value) {
        return;
      }

      book.author = value;
    },

    changeYear: function() {
      if (value < 0 || value > Number(new Date().getFullYear()) || !value) {
        return;
      };

      book.year = Number(value);
    },

    changePageCount: function() {
      if (value > 10000 || value < 0 || !value) {
        return;
      }

      book.pageCount = Number(value);
    },

    changeReadState: function() {
      book.hasRead = !book.hasRead;
    },
  }

  return {
    bookInfo,
    bookFunctions
  }
}