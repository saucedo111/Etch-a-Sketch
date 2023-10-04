const container = document.querySelector('.container');

function drawGrid(num) {
    num = 256
    for (let x = 0; x < num; x++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('cell');
        container.appendChild(newDiv);
    }
}

drawGrid(1)

const cellList = document.querySelectorAll('.cell');

cellList.forEach(function (cell) {
    cell.addEventListener('mouseover', function (e) {
        e.target.style.backgroundColor = 'black';
    });

});
