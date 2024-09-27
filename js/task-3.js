const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const updateNameOutput = () => {
  const name = nameInput.value.trim();
  nameOutput.textContent = name.length > 0 ? name : "Anonymous";
};


nameInput.addEventListener('input', updateNameOutput);
