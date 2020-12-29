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

// this function and the next one listenfor a click in a specific cell and return the index. So we get a list node with the index of every cell.
var checks = document.querySelectorAll('.bg-light');

checks.forEach(function (check) {
    check.addEventListener('click', checkIndex);
});

function checkIndex(event) {
    for (var i = 0; i < checks.length; i++) {
        if (checks[i] === event.target) {
            fireTorpedo(gameBoard, getElementRow(i), getElementCol(i), event.target);
            //alert(i + ", Row: " +getElementRow(i) + ", Col: " + getElementCol(i));
            return i;
        }
    }
    return -1;
    //console.log(Array.from(checks).indexOf(event.target) );
}

// This function takes the index of the cell from the last function and will return position in row and col.
/*function getElementPosition(index){
    let cols = 9;
    index = checkIndex();

    let rowPosition = Math.floor(index / cols);
    let colPosition = Math.ceil(index % cols);

    //Return an object with properties row and column
    return { row: rowPosition, column: colPosition } ;
    return rowPosition, colPosition;
}
console.log(getElementsPosition(checkIndex))*/


function getElementRow(index) {
    let cols = 9;
    return Math.floor(index / cols);
}

function getElementCol(index) {
    let cols = 9;
    return Math.ceil(index % cols);
}

function fireTorpedo(arr, a, b, target) {
    alert(target);
    if (target==null) {
        let el=b*9+a;
        alert(el);
        var checks = document.querySelectorAll('.bg-light');
        target=checks[el];
        alert(checks[el]);
    }


    if (arr[a][b] === 1) {
        arr[a].splice(b, 1, 2);
        // alert ("sunken ship")
        target.style.backgroundColor = "red";
        target.innerHTML = "r";
    } else {
        arr[a].splice(b, 1, 3);
        // alert ("missed ship")
        target.style.backgroundColor = "grey";
        target.innerHTML = "g";

    }
    return arr;
}

//console.log(fireTorpedo(gameBoard, getElementRow(), getElementCol()));

document.querySelector("#fire").addEventListener('click', fireButton);

function fireButton() {
    var coordinates = prompt("Fire positions: row, col");
    var array = coordinates.split(",");
    var rowCoordinate = parseInt(array[0]);
    var colCoordinate = parseInt(array[1]);
    alert("row:" + rowCoordinate + ", col:" + colCoordinate);
    fireTorpedo(gameBoard, rowCoordinate, colCoordinate, null);
}



