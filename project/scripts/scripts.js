// COPYRIGHT YEAR (ie: Current Year)
// ========================================================================================
const year = document.querySelector("#currentyear"); // THIS SEARCHES THE DOCUMENT FOR THE ID "currentyear" TO PLACE THE OUTPUT
const today = new Date(); //THIS CALLS THE CURRENT DATETIME STRING AND SETS IT
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`; //RETURNS JUST THE YEAR FROM THE DATETIME STRING
// LAST MODIFIED DATE OF HTML
// ========================================================================================
const lastModify = document.querySelector("#lastModify"); // THIS SEARCHES THE DOCUMENT FOR ID="lastModify" TO PLACE THE OUTPUT
let oLastModif = new Date(document.lastModified); //CALLS THE LATEST UPDATE DATETIME STRINGOF THE HTML FILE AND SETS IT
lastModify.innerHTML = `<span class="highlight">${oLastModif.getFullYear()}</span>`; // RETURNS ONLY YEAR OF DATETIME STRING


// Hamburger Menu Navigation

const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector(".navi");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

// WHAT ELSE TO DO?? FUNCTIONS WHAT?? LOCAL STORAGE????????????????????

let commentCount = Number(window.localStorage.getItem("commentCount")) || 0;

let commentList = JSON.parse(window.localStorage.getItem("commentSubmissions")) || [];

let commentButton = document.querySelector('input[type="submit"]');

function countComments() {
    commentCount++;
    localStorage.setItem("commentCount", commentCount);
};

function storeComments() {

    let newComment = document.querySelector('textarea');

    commentList.push(newComment.value);

    localStorage.setItem("commentSubmissions", JSON.stringify(commentList));

}

commentButton.addEventListener('click', function (event) {
    // event.preventDefault();
    countComments();
    storeComments();
});