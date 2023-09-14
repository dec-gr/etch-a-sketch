const container = document.querySelector('.container');

for (j = 0; j < 16; j++){

const row = document.createElement('div');
row.classList.add('row');                                      
for (i = 0; i < 16; i++){
    const div = document.createElement('div');
    div.classList.add('pixel');                                      
    row.appendChild(div);
}

container.appendChild(row);

}

const pixels = document.querySelectorAll(`.pixel`);

pixels.forEach((pixel) => {
  
    pixel.addEventListener("mouseover", () => pixel.classList.toggle('filled'))
  
} )