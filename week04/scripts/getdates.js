


// COPYRIGHT YEAR (ie: Current Year)
// ========================================================================================
const year = document.querySelector("#currentyear"); // THIS SEARCHES THE DOCUMENT FOR THE ID "currentyear" TO PLACE THE OUTPUT
const today = new Date(); //THIS CALLS THE CURRENT DATETIME STRING AND SETS IT

// // COMMENT-SWAP THESE TO RETURN EITHER THE YEAR OR FULL DATETIME STRING
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`; //RETURNS JUST THE YEAR FROM THE DATETIME STRING
// year.innerHTML = today; // RETURNS THE FULL DATETIME STRING INSTEAD OF JUST THE YEAR
// ========================================================================================


// LAST MODIFIED DATE OF HTML
// ========================================================================================
const lastModify = document.querySelector("#lastModify"); // THIS SEARCHES THE DOCUMENT FOR ID="lastModify" TO PLACE THE OUTPUT
let oLastModif = new Date(document.lastModified); //CALLS THE LATEST UPDATE DATETIME STRINGOF THE HTML FILE AND SETS IT

// // COMMENT-SWAP THESE TO RETURN EITHER THE YEAR OR FULL DATETIME STRING
lastModify.innerHTML = `<span class="highlight">${oLastModif.getFullYear()}</span>`; // RETURNS ONLY YEAR OF DATETIME STRING
// lastModify.innerHTML = oLastModif; // RETURNS THE FULL DATETIME STRING
// ========================================================================================
