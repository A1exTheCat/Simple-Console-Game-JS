import readlineSync from 'readline-sync';
import userName from './cli.js';

console.log('Welcome to the Brain Games!');
const nameOfPlayer = userName();
console.log(`Hi ${nameOfPlayer}!`);

const userAnswerRequest = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const getRandomIntInclusive = (minNum, maxNum) => {
  const min = Math.ceil(minNum);
  const max = Math.floor(maxNum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let winStrike = 0;
  let currentRandomNumber;
  let userEvenAnswer;
  let correctAnswer = '';
  while (winStrike < 3) {
    currentRandomNumber = getRandomIntInclusive(1, 999);
    console.log(`Question: ${currentRandomNumber}`);
    userEvenAnswer = userAnswerRequest();
    if (currentRandomNumber % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    if (userEvenAnswer === correctAnswer) {
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
    `${userEvenAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${nameOfPlayer}!`,
  );
};

export default evenGame;
