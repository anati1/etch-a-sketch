let container = document.querySelector('#container');
let myDiv;
let divs;
let btnChange;
let btnReset;
let colorPicker;
let rowSize = 16;
let gridSize = rowSize * rowSize;
let columns = "";
let color = 'blue';

btnChange = document.querySelector('#changebtn');
btnReset = document.querySelector('#resetbtn');
btnChange.addEventListener('click', createNewGrid);
btnReset.addEventListener('click', () => clearGrid(container));
colorPicker = document.querySelector('#color-picker');
colorPicker.addEventListener("change", watchColorPicker, false);


function clearGrid(parent){
    while (parent.firstChild) {
           parent.removeChild(parent.firstChild);
    }
}

function getGridSize(){
    rowSize = prompt("Please enter grid row size between 1-100", 16);
    rowSize = parseInt(rowSize);
     while ((rowSize === null) || (Number.isNaN(rowSize)) || (rowSize > 100 || rowSize < 1)){
        rowSize = prompt("Ilegal value. Please enter grid row size between 1-100", 16);
        rowSize = parseInt(rowSize);
    }
    return rowSize;
}

function createGrid(rowSize, gridSize){
    columns = ""
    container = document.querySelector('#container');
    flexRow = document.createElement('div');
    flexRow.classList.add('flex-container');
    
    for (let i = 1, j = 1; i <= rowSize, j <= gridSize ; i++, j++){
        myDiv = document.createElement('div');
        myDiv.classList.add('square');
        if (j%rowSize === 0){
            columns += "auto "
        }
        myDiv.addEventListener('mouseover', (e) =>{
            e.target.style.background = color;
        });
        container.appendChild(myDiv);
    }
    container.style.gridTemplateColumns = columns;        
}

function createNewGrid(){
    clearGrid(container);
    rowSize = getGridSize();
    createGrid(rowSize, rowSize*rowSize);
}

function watchColorPicker(event) {
    // document.querySelectorAll("p").forEach(function(p) {
    //   p.style.color = event.target.value;
    // });
    color = event.target.value;
    console.log(event.target.value);
  }
createGrid(rowSize, gridSize);