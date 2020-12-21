// 0 = empty
// 1 = part of a ship
// 2 = a sunken part of a ship
// 3 = a missed shot

let gameBoard = [
    [1,1,1,1,1,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,0],
    [1,0,0,1,1,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,0,0,0,0,0,0]
];

// this function and the next one listenfor a click in a specific cell and return the index. So we get a list node with the index of every cell.
var checks = document.querySelectorAll('.bg-light');

checks.forEach(function(current, index, array){
  current.addEventListener('click', checkIndex);
});



function checkIndex(event){
    for (var i =  0; i < checks.length; i++){
        if (checks[i] === event.target) {
           return i;
        }      
    }
    return -1;
 // console.log(Array.from(checks).indexOf(event.target) );
}


// This function takes the index of the cell from the last function and will return position in row and col.
function getElementPosition(index){
    let index = checkIndex;
    let cols = 9;

    let rowPosition = Math.floor(index / cols);
    let colPosition = Math.ceil(index % cols);

    //Return an object with properties row and column
    return { row: rowPosition, column: colPosition } ;
    return rowPosition, colPosition;
}
console.log(getGridElementsPosition(4))



/*function fireTorpedo(arr, a, b) {
    if (arr[a][b] === 1) {
        arr[a].splice(b, 1, 2);
        arr[a][b].style.color = "red"
    } else {
        arr[a].splice(b, 1, 3); 
        arr[a][b].style.color = "grey"
    }
    return arr;
}

console.log(fireTorpedo(gameBoard, 1,3));*/





