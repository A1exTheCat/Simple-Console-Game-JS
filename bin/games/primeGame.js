import gameEngine from '../src/index.js';
import getRandomIntInclusive from '../src/randomiser.js';

const primeGameRules = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return console.log(rules);
};

const primeGameQuestion = () => {
  const randomNumber = getRandomIntInclusive(2, 100);
  return randomNumber;
};

const isPrimeGameChecking = (num) => {
  let i = 2;
  let result = 'yes';
  while (i < num) {
    if (num % i === 0) {
      result = 'no';
    }
    i += 1;
  }
  return result;
};

const primeCheckGame = () => gameEngine(
  primeGameRules,
  primeGameQuestion,
  isPrimeGameChecking,
);

export default primeCheckGame;
