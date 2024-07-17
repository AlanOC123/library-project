export default function Book(title, author, year, pageCount, hasRead) {
  /* Book Data */
  this.title = title;
  this.author = author;
  this.year = Number(year);
  this.pageCount = Number(pageCount);
  this.hasRead = hasRead
}