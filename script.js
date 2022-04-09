//function to create the grid, embedded to body to invoke it on load of webpage
function makeGrid() {
    //creates the amount of rows
    for (let i = 0; i < 16; i++) {
        let row = document.createElement('div');
        row.className = "row";
        //creates the amount of boxes per row
        for (let j = 0; j < 16; j++) {
            let box = document.createElement('div');
            box.className = "box";
            row.appendChild(box);
        };
        document.querySelector('.grid').appendChild(row);
    };
};

makeGrid();

const boxes = document.querySelectorAll('.box');
// console.log(boxes)

//clears the grid, and then resets it with a new grid
function resetGrid() {
    document.querySelector('.grid').innerHTML = " ";
    makeGrid();
}