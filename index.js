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

// this function and the next one listen for a click in a specific cell and return the index. So we get a list node with the index of every cell.
var checks = document.querySelectorAll('.bg-light');

checks.forEach(function (check) {
    check.addEventListener('click', checkIndex);
});

function checkIndex(event) {
    for (var i = 0; i < checks.length; i++) {
        if (checks[i] === event.target) {
            fireTorpedo(gameBoard, getElementRow(i), getElementCol(i), event.target);
            return i;
        }
    }
    return -1;
  
}

// This function takes the index of the cell from the last function and will return position in row and col.
function getElementRow(index) {
    let cols = 9;
    return Math.floor(index / cols);
}

function getElementCol(index) {
    let cols = 9;
    return Math.ceil(index % cols);
}


//This function should change the colour of clicked cell to red or gray.
function fireTorpedo(arr, a, b, target) {
    if (target == null) {
        let el = b*9 + a;
        var checks = document.querySelectorAll('.bg-light');
        target = checks[el];
    }

    else if (arr[a][b] === 1) {
        arr[a].splice(b, 1, 2);
        target.style.background = "red";
        //target.innerHTML = "red";
    } else {
        arr[a].splice(b, 1, 3);
        target.style.backgroundColor = "grey";
        //target.innerHTML = "grey";

    }
    return arr;
}

// Work in progress para añadir la funcionalidad del botón.
document.querySelector("#fire").addEventListener('click', fireButton);

function fireButton() {
    var coordinates = prompt("Fire positions: row, col");
    var array = coordinates.split(",");
    var rowCoordinate = parseInt(array[0]);
    var colCoordinate = parseInt(array[1]);
    alert("row:" + rowCoordinate + ", col:" + colCoordinate);
    fireTorpedo(gameBoard, rowCoordinate, colCoordinate, null);
}



