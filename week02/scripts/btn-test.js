// const btn = document.querySelector("button");

// function random(number) {
//     return Math.floor(Math.random() * (number + 1));
// }

// function changeBackground() {
//     const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//     document.body.style.backgroundColor = rndCol;
// }

// btn.addEventListener("click", changeBackground); //triggers when button is clicked

// btn.addEventListener("focus", changeBackground); //triggers when button is selected (like via TAB on keyboard)

// btn.addEventListener("blur", changeBackground); //triggers when button is deselected (like via TAB on keyboard)

// btn.addEventListener("dblclick", changeBackground); // triggers when button is double-clicked

// btn.addEventListener("mouseover", changeBackground); // triggers when mouse enters button's area

// btn.addEventListener("mouseout", changeBackground); // triggers when mouse exits button's area





// LESSON
// Now try changing click to the following different values in turn, and observing the results in the example:
// focus and blur — The color changes when the button is focused and unfocused; try pressing the tab to focus on the button and press the tab again to focus away from the button. These are often used to display information about filling in form fields when they are focused, or to display an error message if a form field is filled with an incorrect value.
// dblclick — The color changes only when the button is double - clicked.
// mouseover and mouseout — The color changes when the mouse pointer hovers over the button, or when the pointer moves off the button, respectively.



// -----------------------------------------------------
// PART 2 - EVENTS (e)

const btn = document.querySelector("button");

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    e.target.style.backgroundColor = rndCol;
    console.log(e);
}

btn.addEventListener("click", bgChange);





