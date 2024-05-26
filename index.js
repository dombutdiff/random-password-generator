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
  // Disable the button to prevent multiple clicks
  button.disabled = true;

  // Clear existing passwords
  passwordOne.textContent = "";
  passwordTwo.textContent = "";

  // Add loading effect beside the button
  const loadingElement = document.createElement("div");
  loadingElement.textContent = "Loading...";
  loadingElement.classList.add("loading-element");
  button.parentNode.insertBefore(loadingElement, button.nextSibling);

  // Add delay before generating new passwords
  setTimeout(() => {
    // Remove the loading element
    loadingElement.parentNode.removeChild(loadingElement);

    // Generate passwords
    passwordOne.textContent = generateRandomPassword(16);
    passwordTwo.textContent = generateRandomPassword(16);

    // Re-enable the button after generating passwords
    button.disabled = false;
  }, 500); // Delay in milliseconds (adjust as needed)
});

function copyTextAndClear(targetId, passwordElements) {
  const text = document.getElementById(targetId).textContent;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      // Create a new element for displaying the "Copied" text
      const copiedPopup = document.createElement("div");
      copiedPopup.textContent = "Copied";
      copiedPopup.classList.add("copied-popup");

      // Position the element in the top of the screen
      copiedPopup.style.position = "fixed";
      copiedPopup.style.top = "10%";
      copiedPopup.style.left = "50%";
      copiedPopup.style.transform = "translate(-50%, -50%)";
      copiedPopup.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      copiedPopup.style.color = "#fff";
      copiedPopup.style.padding = "10px 20px";
      copiedPopup.style.borderRadius = "5px";
      copiedPopup.style.zIndex = "9999";

      // Append the element to the body
      setTimeout(() => {
        document.body.appendChild(copiedPopup);
      }, 100);

      // Remove the element after 2 seconds
      setTimeout(() => {
        document.body.removeChild(copiedPopup);
      }, 2000);

      // Clear password elements
      passwordElements.forEach((element) => {
        element.innerText = "";
      });
    })
    .catch((error) => {
      console.error("Failed to copy text: ", error);
    });
}

document.getElementById("copyTextOne").addEventListener("click", () => {
  copyTextAndClear("copyTextOne", [passwordOne, passwordTwo]);
});

document.getElementById("copyTextTwo").addEventListener("click", () => {
  copyTextAndClear("copyTextTwo", [passwordOne, passwordTwo]);
});
