// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

const myName = "Kelly";
const myAge = "23";
console.log(myAge);

const toggledParagraph = document.querySelector(".show");
console.log(toggledParagraph);

function toggleParagraph() {
    toggledParagraph.classList.toggle("hide");
    toggledParagraph.classList.toggle("show");
    console.log("My toggle function");
    console.log(toggledParagraph);
}


const toggleButton = document.querySelector("#toggle-control");
console.log(toggleButton);

toggleButton.addEventListener("click",toggleParagraph);