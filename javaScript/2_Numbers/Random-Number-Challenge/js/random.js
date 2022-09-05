// Collect input from a user
let userInputMin = prompt('Write the min of a random number.');
let userInputMax = prompt('Write the max of a random number.');

// Convert the input to a number
userInputMin = +userInputMin;
userInputMax = +userInputMax;

if (userInputMin && userInputMax) {
    // Use Math.random() and the user's number to generate a random number
    const randomNumber = Math.floor( Math.random() * (userInputMax + 1 - userInputMin) + userInputMin );

    // Create a message displaying the random number
    document.querySelector('main').innerHTML = `<P>Your random number: ${randomNumber}</p>`
} else {
    document.querySelector('main').innerHTML = `<p>Please make sure you only typ in a number.</p>`
}
