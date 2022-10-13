import readlineSync from 'readline-sync';
import userName from './cli.js';

const GameEngine = (rules, question, check) => {
  const nameOfPlayer = userName();
  rules();
  let winStrike = 0;
  let currentQuestion;
  let userCurrentAnswer;
  let correctAnswer = '';
  while (winStrike < 3) {
    currentQuestion = question();
    console.log(`Question: ${currentQuestion}`);
    userCurrentAnswer = readlineSync.question('Your answer: ');
    correctAnswer = check(currentQuestion);
    if (userCurrentAnswer === correctAnswer) {
      console.log('Correct!');
      winStrike += 1;
    } else {
      break;
    }
  }
  if (winStrike === 3) {
    return console.log(`Congratulations, ${nameOfPlayer}!`);
  }
  return console.log(
    `${userCurrentAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${nameOfPlayer}!`
  );
};

export default GameEngine;
