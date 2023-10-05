const container = document.querySelector('.container');
const resetButton = document.querySelector('#reset');

let num = 0;
function drawGrid() {
    for (let x = 0; x < num; x++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('cell');
        newDiv.style.width = 100/ Math.sqrt(num) + '%';
        newDiv.style.height = 100/ Math.sqrt(num) + '%';
        container.appendChild(newDiv);
    }
}
let cellList = document.querySelectorAll('.cell');
function addColor() {
    cellList = document.querySelectorAll('.cell');
    cellList.forEach(function (cell) {
        cell.addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = generateRandomColor();
        });

    });
}

function generateRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

resetButton.addEventListener('click', function (e) {
    let i = 0;
    while(i < num) {
        container.removeChild(container.lastChild);
        i++;
    }
    let x = prompt('How many squares per side?');
    num = x * x;
    drawGrid();
    addColor();

});


