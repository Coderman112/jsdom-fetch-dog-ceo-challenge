console.log('%c HI', 'color: firebrick')
function fetchImages() {
    // To pass the tests, don't forget to return your fetch!
    // fetch('https://anapioficeandfire.com/api/books')
    // .then(object => renderBooks(books));
    return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(object => renderBooks(object))
}
  
function renderImage(books) {
    const main = document.querySelector('main');
    books.forEach(book => {
      const h2 = document.createElement('h2');
      h2.innerHTML = book.name;
      main.appendChild(h2);
    });
}



document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
  });