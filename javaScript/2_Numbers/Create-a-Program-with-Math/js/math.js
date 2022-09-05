const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;

const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay;
console.log(`There are ${secondsPerDay} seconds in a day`);

const age = 22;
const secondsAlive = secondsPerDay * daysPerWeek * weeksPerYear * age;
console.log(`I'm more than ${secondsAlive} seconds alive!`);