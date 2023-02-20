const textInput = document.querySelector('input');
console.log(textInput);

textInput.addEventListener('blur', onInputBlur);

function onInputBlur(e) {
  const countOfSymbols = Number(textInput.dataset['length']);

  if (textInput.value.length === countOfSymbols) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  } else {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  }
  // }
}
