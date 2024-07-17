function bookCardFields() {
  this.title = function(bookTitle) {
    const field = document.createElement('p');
    field.classList.add('book-card-heading');
    field.textContent = `${bookTitle}`;
    return field;
  },

  this.detailDisplay = function() {
    const field = document.createElement('div');
    field.classList.add('card-details');
    return field;
  },

  this.displayField = function(heading, info) {
    const field = document.createElement('div');
    const headingElement = this.displayHeading(heading);
    const infoElement = this.displayInfo(info);
    field.classList.add('book-card-field');
    field.append(headingElement, infoElement);
    return field;
  },

  this.displayHeading = function(heading) {
    const headingElement = document.createElement('p');
    headingElement.textContent = `${heading}`;
    headingElement.classList.add('book-card-field-heading');
    return headingElement;
  },

  this.displayInfo = function(info) {
    const infoElement = document.createElement('p');
    infoElement.classList.add('book-card-field-info');
    infoElement.textContent = `${info}`;
    return infoElement;
  },

  this.author = function(bookAuthor) {
    const field = this.displayField('Author: ', bookAuthor);
    return field;
  },

  this.year = function(bookYear) {
    const field = this.displayField('Book Year: ', bookYear);
    return field;
  },

  this.pageCount = function(pageValue) {
    const field = this.displayField('Page Count: ', pageValue);
    return field;
  }
}

export default bookCardFields;