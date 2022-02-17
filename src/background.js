const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

function changeBackground() {
  const randIdxA = Math.floor(Math.random() * colors.length);
  const randIdxB = Math.floor(Math.random() * colors.length);
  const randColorA = colors[randIdxA];
  const randColorB = colors[randIdxB];
  // console.log(randColorA);
  // console.log(randColorB);

  document.body.style.background = `linear-gradient(to right, ${randColorA}, ${randColorB})`;
}

const myBtn = document.querySelector("#give-color");

myBtn.addEventListener("click", changeBackground);
