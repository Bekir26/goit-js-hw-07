const boxesSize = [];
const numberInput = document.querySelector('#controls input[type="number"]');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesDOM = document.querySelector('#boxes');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

function createBoxes(amount){
    if(amount){
        clearInput();
        let fragment = document.createDocumentFragment();
        for(let i = 0; i < amount; i++){
            const box = document.createElement('div');
            const size = boxesSize.length >0 ? boxesSize[boxesSize.length -1] + 10 : 30;           
            box.style.width = `${size}px`;
            box.style.height = `${size}px`;
            box.style.backgroundColor=getRandomHexColor();
            fragment.appendChild(box);
            boxesSize.push(size);
        }
        boxesDOM.appendChild(fragment);
    }
}
function destroyBoxes(){
    boxesDOM.innerHTML = '';
    boxesSize.splice(0, boxesSize.length);
    clearInput();
}

function clearInput(){
    numberInput.value='';
}
createButton.addEventListener('click', _ => {
    if(numberInput.value <100 && numberInput.value > 0){
        createBoxes(numberInput.value);
    }
    else{
        alert('Please enter a number between 1 and 100');
    }
    
})

destroyButton.addEventListener('click', _ => {
    destroyBoxes();
}) 