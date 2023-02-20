const inputForm = document.querySelector('.login-form');

inputForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Ви маєте заповнити всі поля!');
  }

  const inputObj = {
    email: email.value,
    password: password.value,
  };

  console.log(inputObj);
  event.currentTarget.reset();
}
