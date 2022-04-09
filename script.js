//function to create the grid, embedded to body to invoke it on load of webpage
function makeGrid(val) {
    //creates the amount of rows
    for (let i = 0; i < val; i++) {
        let row = document.createElement('div');
        row.className = "row";
        //creates the amount of boxes per row
        for (let i = 0; i < val; i++) {
            let box = document.createElement('div');
            box.className = "box";
            row.appendChild(box);
        };
        document.querySelector('.grid').appendChild(row);
    }
};

//selects every box, and for each box add an event listener on mouse over to replace the box's background color with black
function etch() {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
      box.addEventListener("mouseover", e => {
        box.style.backgroundColor = "black";
      });
    });
  }

//changes grid size based on user input
function gridSize() {
    let input = prompt("Please enter a value between 1 and 64.");
    if ((input <= 64) && (1 <= input)) {
      document.querySelector('.grid').innerHTML = " ";
      makeGrid(input);
      etch();
    } else {
      return alert("Error. Please enter a value between 1 and 64.")
    }
};

//clears the grid, and then resets it with the default 16x16 grid
function resetGrid() {
    document.querySelector('.grid').innerHTML = " ";
    makeGrid(16);
    etch();
}

makeGrid(16); //preloads a 16x16 grid onto the website
etch(); //preloads the "etch" function