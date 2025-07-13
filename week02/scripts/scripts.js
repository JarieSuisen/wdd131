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
        input.focus();



        const li = document.createElement('li');

        const deleteButton = document.createElement('button');

        li.textContent = input.value;

        deleteButton.textContent = '❌';

        li.append(deleteButton);

        list.append(li);

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

    };

    input.value = '';

    input.focus();



});





