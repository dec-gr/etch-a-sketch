const container = document.querySelector(".container");

function createScreen(numberOfPixels = 16) {
  for (j = 0; j < numberOfPixels; j++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (i = 0; i < numberOfPixels; i++) {
      const div = document.createElement("div");
      div.classList.add("pixel");
      row.appendChild(div);
    }

    container.appendChild(row);
  }

  const pixels = document.querySelectorAll(`.pixel`);

  pixels.forEach((pixel) => {
    //pixel.addEventListener("mouseover", () => pixel.classList.add('filled'))
    pixel.addEventListener("mouseover", setPixelRandomColor);
  });
}

function setPixelRandomColor(e) {
  let backgroundColor = e.target.style.background;
  let isFirstInteraction = backgroundColor === "" ? true : false;
  let randRGBValues = randRGB();
  let transparency;

  let rgbValues = isRainbow ? randRGBValues : "0,0,0";

  if (isFirstInteraction) {
    transparency = "0.1";
  } else {
    transparency = incrementTransparency(getTransparency(backgroundColor));
  }

  let drawColor = `rgba(${rgbValues},${transparency})`;

  e.target.style.background = drawColor;
}

function clearScreen() {
  container.replaceChildren();
  let numberOfPixels = Number(window.prompt("How many pixels?", ""));
  numberOfPixels =
    numberOfPixels <= 100 && numberOfPixels >= 16 ? numberOfPixels : 16;
  createScreen(numberOfPixels);
}

function toggleRainbow() {
  isRainbow = !isRainbow;
  console.log(isRainbow);
}

function rand255Val() {
  return Math.floor(Math.random() * 255);
}

function randRGB() {
  return `${rand255Val()},${rand255Val()},${rand255Val()}`;
}

function getTransparency(backgroundColor) {
  return Number(backgroundColor.slice(-4, -1));
}

function incrementTransparency(transparency) {
  return transparency == 1.0 ? "1.0" : transparency + 0.1;
}

let isRainbow = false;

const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", clearScreen);

const rainbowBtn = document.querySelector("#rainbowBtn");
rainbowBtn.addEventListener("click", toggleRainbow);

createScreen();
