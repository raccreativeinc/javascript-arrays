// 1. Create a multidimensional array to hold quiz questions and answers
const quiz = [
  [`What's 1 + 1?`,`2`],
  [`What's 2 + 2?`,`4`],
  [`What's 3 + 3?`, `6`]
]
 const rightAnswers = [];
 const wrongAnswers = [];
// 2. Store the number of questions answered correctly
let correctAnswers = 0;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for ( let i = 0; i < quiz.length; i++ ) {
  let question = quiz[i][0];
  let answer = quiz[i][1];
  let response = prompt(question);

  if (response === answer) {
    correctAnswers++;
    rightAnswers.push(question);
  } else {
    wrongAnswers.push(question);
  }
}

function createListItems(arr) {
  let items = '';
  for ( let i = 0; i < arr.length; i++ ) {
    items += `<li>${ arr[i] }</li>`;
  }
  return items;
}

// 4. Display the number of correct answers to the user
let html = `
<h1>Congratulations! You answered <strong>${correctAnswers}</strong> question(s) correctly!</h1>
<h2>You answered these questions correctly:</h2>
  <ol>
    ${createListItems(rightAnswers)}
  </ol>
<h2>You answered the following questions incorrectly:</h2>
  <ol>
    ${createListItems(wrongAnswers)}
  </ol>
  `;

document.querySelector('main').innerHTML = html;