const obj = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

obj.input.addEventListener('input', event => {
  obj.output.textContent =
    event.currentTarget.value === '' ? 'Anonymous' : event.currentTarget.value;
});
