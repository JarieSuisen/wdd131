// ADDED GETDATES TO THIS FILE


// COPYRIGHT YEAR (ie: Current Year)
// ========================================================================================
const year = document.querySelector("#currentyear"); // THIS SEARCHES THE DOCUMENT FOR THE ID "currentyear" TO PLACE THE OUTPUT
const today = new Date(); //THIS CALLS THE CURRENT DATETIME STRING AND SETS IT

// // COMMENT-SWAP THESE TO RETURN EITHER THE YEAR OR FULL DATETIME STRING
year.innerHTML = `<span class="highlight">${today.getFullYear()}<span>`; //RETURNS JUST THE YEAR FROM THE DATETIME STRING
// year.innerHTML = today; // RETURNS THE FULL DATETIME STRING INSTEAD OF JUST THE YEAR
// ========================================================================================


// LAST MODIFIED DATE OF HTML
// ========================================================================================
const lastModify = document.querySelector("#lastModify"); // THIS SEARCHES THE DOCUMENT FOR ID="lastModify" TO PLACE THE OUTPUT
let oLastModif = new Date(document.lastModified); //CALLS THE LATEST UPDATE DATETIME STRINGOF THE HTML FILE AND SETS IT

// // COMMENT-SWAP THESE TO RETURN EITHER THE YEAR OR FULL DATETIME STRING
lastModify.innerHTML = `<span class="highlight">${oLastModif.getFullYear()}<span>`; // RETURNS ONLY YEAR OF DATETIME STRING
// lastModify.innerHTML = oLastModif; // RETURNS THE FULL DATETIME STRING
// ========================================================================================


// NEW JAVASCRIPT FOLLOWS-----------------------------------------------------------------


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

// CREATES THE TEMPLE ARRAY
const templeList = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27-29",
        area: 53143.2,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x640/tokyo_japan_temple-evening.jpeg"
    },
    {
        templeName: "Boise Idaho",
        location: "Boise, Idaho, United States",
        dedicated: "1984, May, 25-30",
        area: 210394.8,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boise-idaho/2018/400x250/1-Boise-Idaho-Temple-1968984.jpg"
    },
    {
        templeName: "Anchorage Alaska",
        location: "Anchorage, Alaska, United States",
        dedicated: "1999, December, 29-31",
        area: 235224,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/anchorage-alaska/320x180/anchorage-temple-lds-253274-wallpaper.jpg"
    }
];
// THIS CAN BE COLLAPSED FOR NAVIGATION EASE! YAY!


// Loop through the array and create "temple cards" for each temple by displaying:
//     The name of the temple.
//     The location of the temple.
//     The date the temple was dedicated.
//     The total area of the temple in square feet.
//     The provided image of the temple(an absolute address), making sure to include an appropriate alt value such as the name of the temple.
//     Use native lazy loading for each temple image.

// Respond to the main navigation menu items by filtering and displaying the temples as follows:
//     Old – temples built before 1900
//     New – temples built after 2000
//     Large – temples larger than 90,000 square feet
//     Small – temples smaller than 10,000 square feet
//     Home – displays all the temples stored in the array.


createtemplecard(templeList);

function createtemplecard(temples) {

    temples.forEach(temple => {

        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple["templeName"];
        location.innerHTML = `<span class="label">Location:</span> ${temple["location"]}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple["dedicated"]}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple["area"]} sq ft`;
        img.setAttribute("src", temple["imageUrl"]);
        img.setAttribute("alt", `${temple["templeName"]} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".templecards").appendChild(card);
    });
};

// MAKE THE BUTTON TRIGGERS
const oldList = document.querySelector("#oldTemples");
const newList = document.querySelector("#newTemples");
const largeList = document.querySelector("#largeTemples");
const smallList = document.querySelector("#smallTemples");
const homeList = document.querySelector("#home");

// Home – displays all the temples stored in the array.
homeList.addEventListener("click", () => { createtemplecard(templeList) });


// MAKE NEW LIST AND RETURN DATA------------------

// Old – temples built before 1900
// New – temples built after 2000
// Large – temples larger than 90,000 square feet
// Small – temples smaller than 10,000 square feet


oldList.addEventListener("click", () => {
    document.querySelector(".templecards").innerHTML = "";
    // DO STUFF
    let filterList = templeList.filter(i => {
        let year = parseInt(i.dedicated.substring(0, 4));
        return year < 1900;
    }
    );

    createtemplecard(filterList);
});

newList.addEventListener("click", () => {
    document.querySelector(".templecards").innerHTML = "";
    // DO STUFF
    let filterList = templeList.filter(i => {
        let year = parseInt(i.dedicated.substring(0, 4));
        return year > 2000;
    });
    createtemplecard(filterList);
});

largeList.addEventListener("click", () => {
    document.querySelector(".templecards").innerHTML = "";
    // DO STUFF
    let filterList = templeList.filter(i => i.area > 90000
        // DO MORE STUFF
    );

    createtemplecard(filterList);
});

smallList.addEventListener("click", () => {
    document.querySelector(".templecards").innerHTML = "";
    // DO STUFF
    let filterList = templeList.filter(i => i.area < 10000
    );

    createtemplecard(filterList);
});




