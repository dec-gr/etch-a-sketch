const container = document.querySelector('.container');


function createScreen (numberOfPixels = 16) {

    for (j = 0; j < numberOfPixels; j++){

    const row = document.createElement('div');
    row.classList.add('row');                                      
    for (i = 0; i < numberOfPixels; i++){
        const div = document.createElement('div');
        div.classList.add('pixel');                           
        row.appendChild(div);
    }

    container.appendChild(row);

    }

    const pixels = document.querySelectorAll(`.pixel`);

    pixels.forEach((pixel) => {
    
        //pixel.addEventListener("mouseover", () => pixel.classList.add('filled'))
        pixel.addEventListener("mouseover", setPixelRandomColor)

    } )
}

function setPixelRandomColor(e){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.background = `#${randomColor}`;
}



function clearScreen() {
    container.replaceChildren()
    let numberOfPixels = Number(window.prompt("How many pixels?", ""));
    numberOfPixels = (numberOfPixels<=100 && numberOfPixels>=16) ? numberOfPixels : 16
    createScreen(numberOfPixels)

}

const clearBtn = document.querySelector("#clearBtn")
clearBtn.addEventListener("click", clearScreen)

createScreen()