import UI from './display.js';
export default class Storage {
  constructor() {
    this.collection = [];
  }

  addCollection(newBook) {
    this.collection.push(newBook);
    localStorage.setItem('collection', JSON.stringify(this.collection));
  }

  removeFromCollection(target) {
    const removeBook =
      target.previousElementSibling.firstElementChild.textContent;

    this.collection.filter((book, index) => {
      if (book.title === removeBook) {
        this.collection.splice(index, 1);
      }
      return this.collection;
    });
    localStorage.setItem('collection', JSON.stringify(this.collection));
  }

  getBooksFromStorage() {
    if (localStorage.getItem('collection') === null) {
      this.collection = [];
    } else {
      this.collection = JSON.parse(localStorage.getItem('collection'));
    }
    return this.collection;
  }
}
