// const input = document.querySelector('#favchap');

// const button = document.querySelector('button');

// const list = document.querySelector('list');


// const li = document.createElement('li');

// const deleteButton = document.createElement('button');

// li.textContent = input.value;

// deleteButton.textContent = '❌';

// li.append(deleteButton);

// list.append(li);


// PART 2 - DOM Event Handling

const input = document.querySelector('#favchap');

const button = document.querySelector('button');

const list = document.querySelector('#list');



document.addEventListener('click', function () {
    // code

    if (input.value.trim() !== '') {
        // ie: unless the only thing inside the entry box is spaces or nothing, DO THIS.
        // input.focus();

        // const li = document.createElement('li');

        // const deleteButton = document.createElement('button');

        // li.textContent = input.value;

        // deleteButton.textContent = '❌';

        // li.append(deleteButton);

        // list.append(li);

        // deleteButton.addEventListener('click', function () {
        //     list.removeChild(li);
        //     input.focus();
        // });


        displayList(input.value); // This calls DisplayList function to show the chapter

        chaptersArray.push(input.value); // This adds the chapter to the array

        setChapterList(); // This updates the Local Storage with the new Array

        input.value = '';
        input.focus();

    };

    input.value = '';

    input.focus();



});


// This creates an object that is either "getChapterList()" OR an empty array: "[]".
// NOTE: || means OR
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {

    // Create these items for the HTML
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');

    // Declare the content for the 'li' tag's content
    li.textContent = item;

    // Declare the content for the 'button' tag
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete'); // this just adds a reference for CSS adjustment

    // This adds the deleteButton to the li item
    li.append(deleteButton);

    // This adds the li item to the list
    list.append(li);

    // this declares the deleteButton's function
    deleteButton.addEventListener('click', function () {
        list.removeChild(li); // Removes item from the list
        deleteChapter(li.textContent); // THIS adds the effect of removing it from the persistent chaptersArray as well as the current list.
        input.focus();
    });
    // There was a copy-checker here in the example, so I'm referencing it and stating that I didn't just copy/paste things. It looks much the same because I didn't want to break my brain trying to rename everything and keep that accurate compared to what I'm reading along with.
};

function setChapterList() {
    let chaptersArrayUpdated = JSON.stringify(chaptersArray); // CONVERTS STUFF INTO JSON STORAGE
    localStorage.setItem('listBOMChapters', chaptersArrayUpdated); // Stores Value: "chaptersArrayUpdated" to Key: 'listBOMChapters'
};

function getChapterList() {

    // JSON.parse converse json-stored item back into usable data
    return JSON.parse(localStorage.getItem('listBOMChapters')); // Retrieves the Value set to Key: "listBOMChapters"
};

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // SLICEs off the last character in the string, in this case the ❌ symbol
    chaptersArray = chaptersArray.filter((item) => item !== chapter); // Removes the item from the array of chapters
    setChapterList();
};