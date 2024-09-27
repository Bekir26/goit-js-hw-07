 function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const body = document.querySelector('body');
  const changeColorButton = document.querySelector('.change-color');
  const colorText = document.querySelector('.widget .color');
  changeColorButton.addEventListener('click', () => {
    let randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    colorText.textContent = randomColor;
  })

  colorText.addEventListener('click', _ => {
    navigator.clipboard.writeText(colorText.textContent)
    .then(() => {
        alert('İçerik panoya kopyalandı!');
    })
    .catch(err => {
        console.error('Kopyalama sırasında bir hata oluştu:', err);
    });
})