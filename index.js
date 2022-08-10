import UI from './modules/display.js'
import './modules/navigation.js';
import Storage from './modules/storage.js';

const ui = new UI();
const storage = new Storage();

document.addEventListener('DOMContentLoaded', () => {
  const allBooks = storage.getBooksFromStorage();
  allBooks.forEach((book) => ui.addBookToUI(book));
});
