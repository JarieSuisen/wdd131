let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

// Using the array.filter() method, create an array named namesB with only those names from the name array that start with the character 'B'.

function filter(list) {
    const namesB = list.filter((i) => i[0] === "B");

    return namesB
    // const result = words.filter((word) => word.length > 6);

}


// Using the array.map() method, create a new array named namesLength that contains the length of each name in the names array.Expected output is[5, 8, 5, 8, 3].

function map(list) {

    const namesLength = list.map((i) => i.length);

    return namesLength

}

// Using the names.reduce() method, create an expression that returns the average string length of the names in the names array.Expected output is 5.8.

function reduce(list) {

    const initialvalue = 0;
    let x = 0;
    const reducedtotal = list.reduce(
        // WHAT???

        (i, b) => i + b.length, initialvalue,
    )

    const average = reducedtotal / list.length

    return average
}


const printfilter = document.querySelector("#filter");
const printmap = document.querySelector("#map");
const printreduce = document.querySelector("#reduce");


printfilter.innerHTML = `<span class="highlight">${filter(names)}</span>`;
printmap.innerHTML = `<span class="highlight">${map(names)}</span>`;
printreduce.innerHTML = `<span class="highlight">${reduce(names)}</span>`;

