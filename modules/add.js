const bookTitle = document.querySelector('.title');
const bookAuthor = document.querySelector('.author');
const form = document.querySelector('.add-book');
const bookList = document.querySelector('.book-list');

export default function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBook(e) {
  const title = bookTitle.value;
  const author = bookAuthor.value;

  const newBook = new Book(title, author);

  Storage.addCollection(newBook);

  ui.addBookToUI(newBook);
  ui.clearInputs(bookTitle, bookAuthor);

  e.preventDefault();
}

function removeBook(e) {
  if (e.target.className === 'remove btn btn-danger me-5') {
    ui.removeBookFromUI(e.target);
    Storage.removeFromCollection(e.target);
    /* eslint-disable */

    location.reload();
  }
}

form.addEventListener('submit', addBook);
bookList.addEventListener('click', removeBook);
