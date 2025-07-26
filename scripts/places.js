// THESE SET THE SEARCH FOR THEIR DATA IN THE DOCUMENT
const docTemp = document.querySelector("#temperature");
const docWeather = document.querySelector("#weather");
const docWindSpeed = document.querySelector("#windspeed");
const docWindchill = document.querySelector("#windchill");



// SET VARIABLES - WILL BE CHANGED TO LOAD FROM OUTSIDE SOURCE
let temperature = 85; // DEFAULT VALUE, IN FARENHEIT
let weather = 'Clear Skies'; // THIS IS A DESCRIPTION
let windspeed = 4; // DEFAULT VALUE, IN MPH
// let windchill = 0.5; // THIS IS JUST A DEFAULT VALUE
// let windchill = determinator();

// FUNCTIONS--------------------------------------------

function calculateWindChill(temp, speed) {
    // This function uses temp and speed to calculate the Wind Chill, obtained from Weather.gov instead of AI.
    windchillvalue = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    return windchillvalue.toFixed(2);
};

function windchill() {
    // This function checks if the Temperature and Windspeeds are such that there is a different windchill temperature.
    if (temperature <= 50 && windspeed > 3) {
        windchillresult = calculateWindChill(temperature, windspeed);
        return `${windchillresult}`;
    }
    else return 'N/A';
};

// END FUNCTIONS--------------------------------------------

// SEND INFORMATION TO DOCUMENT

docTemp.innerHTML = `<span class="highlight">${temperature}°F<span>`;
docWeather.innerHTML = `<span class="highlight">${weather}<span>`;
docWindSpeed.innerHTML = `<span class="highlight">${windspeed}mph<span>`;
docWindchill.innerHTML = `<span class="highlight">${windchill()}°F<span>`;