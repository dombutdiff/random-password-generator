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

// button.addEventListener("click", () => {
//   let randomPassword = "";
//   for (let i = 0; i < 16; i++) {
//     randomPassword += characters[Math.floor(Math.random() * characters.length)];
//   }
//   passwordOne.textContent = randomPassword;
// });

// button.addEventListener("click", () => {
//   let randomPassword = "";
//   for (let i = 0; i < 15; i++) {
//     randomPassword += characters[Math.floor(Math.random() * characters.length)];
//   }
//   passwordTwo.textContent = randomPassword;
// });

// function copyTextOne() {
//   const textOne = document.getElementById("copyTextOne").innerHTML;
//   navigator.clipboard.writeText(textOne);

//   if (textOne) {
//     alert("Text copied!");
//     passwordOne.innerText = "";
//   }

// }

// function copyTextTwo() {
//   const textTwo = document.getElementById("copyTextTwo").innerHTML;
//   navigator.clipboard.writeText(textTwo);

//   if (textTwo) {
//     alert("Text copied!");
//     passwordTwo.innerText = "";
//   }

// }

// function text() {
//   if (textOne) {
//     alert("Text copied!");
//     passwordOne.innerText = ""; // Clear the text
//   }

//   if (textTwo) {
//     alert("Text copied!");
//     passwordTwo.innerText = "";
//   }
// }

//   copyTextOne();
//   copyTextTwo();
// }

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

  // Show loading animation
  const loadingElement = document.querySelector(".loading-element");
  loadingElement.style.display = "block";

  // Add delay before generating new passwords
  setTimeout(() => {
    // Hide loading animation
    loadingElement.style.display = "none";

    // Generate passwords
    passwordOne.textContent = generateRandomPassword(16);
    passwordTwo.textContent = generateRandomPassword(16);

    // Re-enable the button after generating passwords
    button.disabled = false;
  }, 700); // Delay in milliseconds (adjust as needed)
});

// function copyTextAndClear(targetId, passwordElements) {
//   const text = document.getElementById(targetId).textContent;
//   navigator.clipboard.writeText(text);
//   if (text) {
//     // alert("Copy to clipboard");
//     passwordElements.forEach((element) => {
//       element.innerText = "";
//     });
//   }
// }

function copyTextAndClear(targetId, passwordElements) {
  const text = document.getElementById(targetId).textContent.trim();
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

      // Hide tooltip if text is empty
      const tooltip = document.querySelector(
        `#${targetId} .tooltiptext .input`
      );
      if (!text) {
        tooltip.style.visibility = "hidden";
      } else {
        tooltip.style.visibility = "visible";
      }
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
