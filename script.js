const sketchBox = document.querySelector('.sketch');
const sliderEl = document.querySelector('#slide-value');
const sliderValue = document.querySelector('.value');


let gridSize = 16;



sliderEl.addEventListener("input", (event) => {
    
    const tempSliderValue = event.target.value;
    sliderValue.textContent = tempSliderValue + "x" + tempSliderValue;

    const progress = ((tempSliderValue - sliderEl.min) / (sliderEl.max - sliderEl.min)) * 100;
    sliderEl.style.background = `linear-gradient(to right, #ff0 ${progress}%, #ccc ${progress}%)`;
        
});


sliderEl.addEventListener("input", function(e) {
    gridSize = e.target.value;
    clearGrid();
    makeGrid(gridSize);   
        
});


function clearGrid() {
    while (sketchBox.firstChild) {
        sketchBox.removeChild(sketchBox.firstChild);
    }
}

function changeColor() {
    let color = "color: black";
    return color;
}

function makeGrid(gridSize) {
    
    
    for(let i = 0; i < gridSize; i++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('row');
        sketchBox.appendChild(gridBox);

            for(let j = 0; j < gridSize; j++) {
                const gridColumn = document.createElement('div');
                gridColumn.classList.add('column');
                gridBox.appendChild(gridColumn);
            }
    }
    
    const gridColor = document.querySelectorAll('.column');
    gridColor.forEach(function(gridColor) {
        gridColor.addEventListener("mouseover", () => {
            gridColor.style.background = "black";
    });
});
}



