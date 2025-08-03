function calculate(a, b, callback) {
    callback(a + b);
}

function displayResult(result) {
    console.log('The result is: ' + result);
    return ('The result is: ' + result);
}


// OBTAIN DESTINATION FROM HTML
// const printmap = document.querySelector("#map");
// const printreduce = document.querySelector("#reduce");
// const printfilter = document.querySelector("#filter");


// OUTPUT TO HTML DESTINATION
// printmap.innerHTML = `<span class="highlight">\ ${map(names)} \</span>`;
// printreduce.innerHTML = `<span class="highlight">\ ${reduce(names)} \</span>`;
// printfilter.innerHTML = `<span class="highlight">\ ${calculate(1, 2, displayResult)} \</span>`;

calculate(1, 2, displayResult);





// EXAMPLE OF ACTUAL USAGE WITH CALLBACK DELAY BUILT IN? ------------------------

function fetchData(callback) {
    // using setTimeout to simulate fetching data from a server
    setTimeout(() => {
        // This calls the 'callback' function and passes data to it.
        callback('Data has been fetched');
    }, 2000); // This simulates a 2-second delay from a service.
}

// function that processes the data
function processData(data) {
    console.log("Data received:", data);
}

// Call the fetchData function and pass the processData function as an argument.
fetchData(processData);