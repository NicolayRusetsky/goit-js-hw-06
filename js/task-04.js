const incrementBtn = document.querySelector("[data-action='increment']");
const decrementBtn = document.querySelector("[data-action='decrement']");
const valueNum = document.querySelector('#value');

let counterValue = 0;

const incrementValue = incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  valueNum.textContent = counterValue;
});

const decrementValue = decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  valueNum.textContent = counterValue;
});
