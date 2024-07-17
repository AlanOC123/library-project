import '../../styles/add-book-card.css';

function addBookCardFields() {
  this.fieldNames = {
    bookTitle: {
      input: {
        type: 'text',
        id: 'book-title',
        name: 'book-title',
        placeholder: 'Click to type title',
        required: true,
      },
      label: {
        labelText: 'Book Title:',
        htmlFor: 'book-title'
      },
    },
    bookAuthor: {
      input: {
        type: 'text',
        id: 'book-author',
        name: 'book-author',
        placeholder: 'Click to type author',
        required: true,
      },
      label: {
        labelText: 'Book Author:',
        htmlFor: 'book-author'
      },
    },
    bookYear: {
      input: {
        type: 'number',
        name: 'book-year',
        id: 'book-year',
        value: 2000,
        max: Number(new Date().getFullYear()),
        min: 0,
        required: true,
      },
      label: {
        labelText: 'Book Year:',
        htmlFor: 'book-year',
      }
    },
    pageCount: {
      input: {
        type: 'number',
        name: 'page-count',
        id: 'page-count',
        value: 300,
        max: 1000,
        min: 1,
        required: true,
      },
      label: {
        labelText: 'Page Count:',
        htmlFor: 'page-count',
      }
    },
    hasRead: {
      input: {
        type: 'checkbox',
        value: 'has-read',
        name: 'has-read',
        id: 'has-read',
      },
      label: {
        labelText: 'Have you read it?',
        htmlFor: 'has-read',
      }
    }
  },

  this.cardBody = function() {
    const card = document.createElement('div');
    card.classList.add('card-body');
    return card;
  },

  this.cardHeader = function(text) {
    const header = document.createElement('div');
    header.classList.add('card-header');
    header.textContent = `${text}`;
    return header;
  },

  this.cardDisplay = function() {
    const detailsDisplay = document.createElement('div');
    detailsDisplay.classList.add('card-details');
    return detailsDisplay;
  },

  this.displayField = function(inputFor) {
    const field = document.createElement('div');
    const label = this.displayLabel(inputFor);
    const input = this.displayInput(inputFor);
    field.classList.add('add-book-card-field');

    field.append(label, input);
    return field
  },

  this.displayLabel = function(labelFor) {
    const label = document.createElement('label');
    const data = this.fieldNames[labelFor].label;

    if (data) {
      label.textContent = data.labelText;
      label.htmlFor = data.htmlFor;
      label.classList.add('add-book-card-field-label');
    } else {
      console.warn(`No data found for ${labelFor}`);
    }
    return label;
  },

  this.displayInput = function(inputFor) {
    const input = document.createElement('input');
    const data = this.fieldNames[inputFor].input;
    if (data) {
      input.classList.add(`add-book-card-field-${data.type}`);
      Object.keys(data).forEach(key => {
        input.setAttribute(key, data[key]);
      })
    } else {
      console.warn(`No data found for ${inputFor}`);
    }

    input.addEventListener('focus', () => {
      if (data.type === 'checkbox') {
        return;
      };

      if (data.type === 'number') {
        input.value = '';
        return;
      };
      input.placeholder = '';
      input.style.textAlign = 'left';
    });

    input.addEventListener('blur', () => {
      if (data.type === 'checkbox') {
        return;
      };

      if (data.type === 'number') {
        if (input.value === '') {
          input.value = data.value;
          return;
        }
      }
      input.placeholder = data.placeholder ? data.placeholder : '';
      input.style.textAlign = 'center';
    });

    return input;
  },

  this.cardButtons = function() {
    const buttons = document.createElement('div');
    const add = document.createElement('button');
    const cancel = document.createElement('button');

    add.id = 'add-button';
    add.textContent = 'Add Book';
    cancel.id = 'cancel-button';
    cancel.textContent = 'Cancel';
    buttons.classList.add('add-book-card-field');

    buttons.append(cancel, add);
    return buttons;
  }
}

export default addBookCardFields;