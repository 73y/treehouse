/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */


function getRandomNumber (lower, upper) {
    const number = Math.floor(Math.random() * (upper - lower + 1)) + lower;
    return number
}
console.log( getRandomNumber(2, 4) );

// Call the function and pass it different values


