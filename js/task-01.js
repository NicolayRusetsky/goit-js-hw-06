const numberOfEl = document.querySelectorAll('.item');

console.log('Number of categories:', numberOfEl.length);

// Використовую перебираючий метод масиву!

numberOfEl.forEach(element => {
  const liTitle = element.querySelector('h2');
  console.log('Category:', liTitle.textContent);
  const numberOfLiEl = element.querySelectorAll('li');
  console.log('Elements:', numberOfLiEl.length);
});
