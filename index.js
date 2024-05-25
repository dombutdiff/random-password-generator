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

function generateRandomPassword(length) {
  let randomPassword = "";
  for (let i = 0; i < length; i++) {
    randomPassword += characters[Math.floor(Math.random() * characters.length)];
  }
  return randomPassword;
}

button.addEventListener("click", () => {
  passwordOne.textContent = generateRandomPassword(16);
  passwordTwo.textContent = generateRandomPassword(16);
});

function copyTextAndClear(targetId, passwordElements) {
  const text = document.getElementById(targetId).textContent;
  navigator.clipboard.writeText(text);
  if (text) {
    alert("Copy to clipboard");
    passwordElements.forEach((element) => {
      element.innerText = "";
    });
  }
}

document.getElementById("copyTextOne").addEventListener("click", () => {
  copyTextAndClear("copyTextOne", [passwordOne, passwordTwo]);
});

document.getElementById("copyTextTwo").addEventListener("click", () => {
  copyTextAndClear("copyTextTwo", [passwordOne, passwordTwo]);
});
