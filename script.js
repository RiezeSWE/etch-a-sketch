function makeGrid() {
    for (let i = 0; i < 8; i++) {
        let row = document.createElement('div');
        row.className = "row";
        for (let j = 0; j < 8; j++) {
            let box = document.createElement('div');
            box.className = "box";
            row.appendChild(box);
        };
        document.querySelector('.gridContainer').appendChild(row);
    };
};