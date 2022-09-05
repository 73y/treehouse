// 1. Create a multidimensional array to hold quiz questions and answers
const quiz = [
  ['What is 1+1?', '2'],
  ['What is 2+2?', '4'],
  ['What is 3+3?', '6']
];
const rightQuestions = [];
const wrongQuestions = [];
// 2. Store the number of questions answered correctly
let correctAnswers = 0;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for (let i = 0; i < quiz.length; i++) {
  const userinput = prompt(quiz[i][0]);
  if (userinput === quiz[i][1]) {
    correctAnswers++;
    rightQuestions.push(`<li>${quiz[i][0]}</li>`);
  } else {
    wrongQuestions.push(`<li>${quiz[i][0]}</li>`)
  }

}


// 4. Display the number of correct answers to the user

let message = `
  <h1>You got ${correctAnswers} Question(s) right!</h1>
  <h2>You got these Question(s) right</h1>
  <ol>
    ${rightQuestions.join('')}
  </ol>
  <h2>You got these Question(s) wrong</h1>
  <ol>
    ${wrongQuestions.join('')}
  </ol>
`
document.querySelector('main').innerHTML = message;