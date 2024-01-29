const sketchBox = document.querySelector('.sketch');
const sliderEl = document.querySelector('#slide-value');
const sliderValue = document.querySelector('.value');


let gridSize = 16;

document.addEventListener("DOMContentLoaded", () => {
    makeGrid(gridSize);
})


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

let isButtonClicked = false;

const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', () => {
    isButtonClicked = true;
})

const black = document.querySelector('#black');
black.addEventListener('click', () => {
    isButtonClicked = false
})
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
            gridColor.style.background = getColor();
        if(isButtonClicked === false) {
                gridColor.style.background = getColor();
            }  
        if(isButtonClicked === true) { 
            gridColor.style.background = getRainbow();
        }

        
    const clearButton = document.querySelector('#clear-grid');
    clearButton.addEventListener('click', () => {
        gridColor.style.background = "white";
    });
});

});
}

function getRainbow() {
    const red = Math.floor(Math.random() * 256); // Random value between 0 and 255
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})` 
}

function getColor() {
    return "black";
}


