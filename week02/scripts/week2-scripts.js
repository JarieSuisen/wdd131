



const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44]


// for (...; ...; ...)

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i])
    }
}


// While (...)

let i = 0
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {


        console.log(i);
    }
    i++;

}


// ...forEach(...)

studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
})




// FOR (... IN ...)

for (const i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}


// MAKE A DAY COUNTER

// // const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// n = DAYS;

// const options = { weekday: 'long' };

// // begin, i guess

// const today = new Date();

// // today test output
// // let todaystring = new Intl.DateTimeFormat('en-US', options).format(today);

// for (let i = 1; i <= n; i++) {
//     let nextday = new Date();
//     nextday.setDate(today.getDate() + i);
//     let nextdaystring = new Intl.DateTimeFormat('en-US', options).format(nextday);
//     // item = document.createElement("li");

//     item.textContent = nextdaystring;
//     output[0].appendChild(item);
// }



// EXAMPLE VERSION THAT JUST WORKS I GUESS

// --------------------------------------------------------------------------------
// const n = 6; // number of days forward
n = DAYS;
// get output location on document to append within list
const output = document.getElementsByTagName("ul");
// Intl.DateTimeFormat Options
const options = { weekday: 'long' }; // vs. short, etc.

// BEGIN
const today = new Date();
// TODAY test output
let todaystring = new Intl.DateTimeFormat('en-US', options).format(today);
document.getElementById('today').innerHTML = `Today is ${todaystring}. `;

// next n days
for (let i = 1; i <= n; i++) {
    let nextday = new Date();
    nextday.setDate(today.getDate() + i);
    let nextdaystring = new Intl.DateTimeFormat('en-US', options).format(nextday);
    item = document.createElement("li"); // list item
    item.textContent = nextdaystring;
    output[0].appendChild(item);
}


