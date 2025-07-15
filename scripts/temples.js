// RESPONSIVE HAMBURGER MENU FOR AFFECTION THE NAVIGATION
// MUST ONLY TRIGGER IN MOBILE VIEW
// HAMBURGER BUTTON MUST DISPLAY/HIDE THE NAVIGATION MENU
// HAMBURGER BUTTON MUST SWAP FROM ☰ TO ❌

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});




