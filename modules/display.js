import Book from './add.js';
import Storage from './storage.js';

const storage = new Storage();
const form = document.querySelector('.add-book');
const bookList = document.querySelector('.book-list');

export default function UI() {}

UI.prototype.addBookToUI = (newBook) => {
  storage.getBooksFromStorage().forEach((book, index) => {
    if (book.title === newBook.title) {
      if (index % 2 === 0) {
        bookList.innerHTML += `
        <li class='book list-group-item-secondary d-flex flex-row justify-content-between py-3'>
          <div class='d-flex flex-row ms-5'>
            <p class='book-title margin-sm fs-5'>${newBook.title}</p>
            <p class='book-author margin-sm fs-5'>&nbsp by ${newBook.author}</p>
          </div>
          <button class='remove btn btn-danger me-5' type='button'>Remove</button>
        </li>
        `;
      } else {
        bookList.innerHTML += `
        <li class='book list-group-item-light d-flex flex-row justify-content-between py-3'>
          <div class='d-flex flex-row ms-5'>
            <p class='book-title margin-sm fs-5'>${newBook.title}</p>
            <p class='book-author margin-sm fs-5'>&nbsp by ${newBook.author}</p>
            </div>
          <button class='remove btn btn-danger me-5' type='button'>Remove</button>
        </li>
        `;
      }
    }
  });
};

UI.prototype.clearInputs = function (element1, element2) {
  element1.value = '';
  element2.value = '';
};

UI.prototype.removeBookFromUI = function (target) {
  target.parentElement.remove();
};

const ui = new UI();
