// GIVEN THE FOLLOWING
let firstName = 'Antonia';
let lastName = 'Francesca';



// DO STUFF - ATTEMPT 1
function fullname1(first, last) {
    return first + last; // in this method, should be: return first + ' ' + last;
}

// Corrected version (sigh):
function fullname1(first, last) {
    return `${first} ${last}`;
}


// Anonymous function, because it is built directly into what it outputs into
const fullName2 = function (first, last) {
    return `${first} ${last}`;
}


// "(Fat) Arrow Function" (also anonymous)
const fullName3 = (firstName, lastName) => `${firstName} ${lastName}`



// Corrected version. Ugh. Feels obvious now I see it.
document.querySelector('#fullName').innerHTML = fullname1(firstName, lastName);

// This class does not move at a good pace for learning these things. It's just bam bam bam, no actual repition in a meanigful way!
