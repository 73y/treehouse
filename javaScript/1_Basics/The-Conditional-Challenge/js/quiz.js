/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correctAnswers = 0;

// 2. Store the rank of a player
let playerRank;

// 3. Select the <main> HTML element
const main = document.querySelector('main')

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const question1Answer = 2;
const question2Answer = 4;
const question3Answer = 6;
const question4Answer = 8;
const question5Answer = 10;
const question1 = prompt("What is 1+1?");
const question2 = prompt("What is 2+2?");
const question3 = prompt("What is 3+3?");
const question4 = prompt("What is 4+4?");
const question5 = prompt("What is 5+5?");
if ( +question1 === question1Answer ) {
  correctAnswers += 1;
}
if ( +question2 === question2Answer ) {
  correctAnswers += 1;
}
if ( +question3 === question3Answer ) {
  correctAnswers += 1;
}
if ( +question4 === question4Answer ) {
  correctAnswers += 1;
}
if ( +question5 === question5Answer ) {
  correctAnswers += 1;
}



/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if ( correctAnswers === 5 ) {
  playerRank = "Gold";
} else if ( correctAnswers >= 3 ) {
  playerRank = "Silver";
} else if ( correctAnswers >= 1 ) {
  playerRank = "Bronze";
} else {
  playerRank = "No crown";
}

// 6. Output results to the <main> element
main.innerHTML =  `
  <h2>You got ${correctAnswers} out of 5 questions correct.</h2>
  <p>Crown earned: <strong>${playerRank}</strong></p>
`;
