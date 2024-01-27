const sketchBox = document.querySelector('.sketch-container');



function makeGrid() {
    
    for(let i = 0; i < 16; i++) {
        let row = document.createElement('div')
        row.classList.add("row" + i);
        
        sketchBox.appendChild(row);
        let rowW = document.querySelector('.row' + i);

            for(let j = 0; j < 16; j++) {
                let column = document.createElement('div');
                column.classList.add('column');
                rowW.appendChild(column);
            }
    }
}


makeGrid();
