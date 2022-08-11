import UI from './modules/display.js';
import './modules/navigation.js';
import Storage from './modules/storage.js';
import { DateTime } from './modules/luxon.js';

const ui = new UI();
const storage = new Storage();

document.addEventListener('DOMContentLoaded', () => {
  const allBooks = storage.getBooksFromStorage();
  allBooks.forEach((book) => ui.addBookToUI(book));
});

class DateTimeLuxon {
  constructor() {
    this.dt = '';
    this.options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
  }

  getTime() {
    this.dt += DateTime.now()
      .setLocale('en-US')
      .toLocaleString(this.options)
      .split(',')
      .splice(1);
    this.dt += ', ';
    this.dt += DateTime.now()
      .setLocale('en-US')
      .toLocaleString(DateTime.TIME_WITH_SECONDS);
    return this.dt;
  }
}

setInterval(() => {
  const getClock = document.querySelector('.date');
  const timeStr = new DateTimeLuxon().getTime();
  getClock.textContent = timeStr;
}, 1000);
