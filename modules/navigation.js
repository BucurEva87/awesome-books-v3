const links = document.querySelectorAll('.nav-link');
const nav = document.querySelector('.nav');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = link.getAttribute('href').slice('1');

    const currentSection = document.getElementById(id);
    const blockElement = document.querySelector('.block');
    blockElement.classList.remove('block');
    blockElement.classList.add('none');
    currentSection.classList.remove('none');
    currentSection.classList.add('block');
  });
});
