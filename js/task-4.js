const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formElements = e.target.elements;
  const loginInfo = {
    email: formElements.email.value.trim(),
    password: formElements.password.value.trim(),
  };

  if (!loginInfo.email || !loginInfo.password) {
    alert('All form fields must be filled in');
    return;
  }

  console.log(loginInfo);
  loginForm.reset();
});
