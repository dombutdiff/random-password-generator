const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const passwordOne = document.querySelector(".first-password");
const passwordTwo = document.querySelector(".second-password");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  let randomPassword = "";
  for (let i = 0; i < 16; i++) {
    randomPassword += characters[Math.floor(Math.random() * characters.length)];
  }
  passwordOne.textContent = randomPassword;
});

button.addEventListener("click", () => {
  let randomPassword = "";
  for (let i = 0; i < 15; i++) {
    randomPassword += characters[Math.floor(Math.random() * characters.length)];
  }
  passwordTwo.textContent = randomPassword;
});

function copyTextOne() {
  const textOne = document.getElementById("copyTextOne").innerHTML;
  navigator.clipboard.writeText(textOne);

  alert("Text copied!");
}

function copyTextTwo() {
  const textTwo = document.getElementById("copyTextTwo").innerHTML;
  navigator.clipboard.writeText(textTwo);

  alert("Text copied!");
}
