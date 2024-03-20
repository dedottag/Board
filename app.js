const board = document.querySelector("#board");
const SQUARES_NUMBER = 810;

const colors = [
  "#d39a65",
  "#fb72d9",
  "#0c717c",
  "#66728d",
  "#38b3ac",
  "#ffe464",
  "#ce7d1a",
  "#b62f34",
];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(el) {
  const color = getRandomColor();
  el.style.background = getRandomColor();
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(el) {
  el.style.boxShadow = `0 0 2px #000`;
  el.style.background = "#1d1d1d";
}

// function getRandomColor() {
//   const index = Math.floor(Math.random() * colors.length);
//   return colors[index];
// }

function generateValues() {
  let index = 0;
  let count = 0;
  return function () {
    if (count === 10) {
      count = 0;
      index++;
    }
    if (index === colors.length) {
      index = 0;
    }
    count++;
    return colors[index];
  };
}
const getRandomColor = generateValues();
