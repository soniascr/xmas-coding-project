// 0 = empty
// 1 = part of a ship
// 2 = a sunken part of a ship
// 3 = a missed shot

let gameBoard = [
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
];


// función que se ejecuta al cargar la página, inicializa el código y busca los listeners.
window.onload = function() {
    checks = document.querySelectorAll('.bg-light-celda');
    checks.forEach(function (check) {
        check.addEventListener('click', checkIndex);
    });
    document.querySelector("#fire").addEventListener('click', fireButton);
}

// Function to fire torpedo on click.
function checkIndex(event) {
    for (var i = 0; i < checks.length; i++) {
        if (checks[i] === event.target) {
            fireTorpedo(gameBoard, getElementRow(i), getElementCol(i));
            return i;
        }
    }
    return -1;
}

// These functions takes the index of the cell from the last function and will return position in row and col.
function getElementCol(index) {
    let cols = 9;
    return Math.floor(index / cols);
}

function getElementRow(index) {
    let cols = 9;
    return Math.ceil(index % cols);
}


//This function changes Gameboard and colour of clicked cell to red or grey.
function fireTorpedo(arr, a, b) {
    let el = b*9 + a;
    var checks = document.querySelectorAll('.bg-light-celda');
    var target = checks[el];
    
    if (arr[a][b] === 1) {
        arr[a].splice(b, 1, 2);
        target.style.background = "red";
    } else {
        arr[a].splice(b, 1, 3);
        target.style.background = "grey";
    }
    
    return arr;
}

// Function to fire torpedo using button
function fireButton() {
    var coordinates = prompt("Fire positions: row, col");
    var array = coordinates.split(",");
    var rowCoordinate = parseInt(array[0]);
    var colCoordinate = parseInt(array[1]);
    alert("row:" + rowCoordinate + ", col:" + colCoordinate);
    fireTorpedo(gameBoard, rowCoordinate, colCoordinate);
}



