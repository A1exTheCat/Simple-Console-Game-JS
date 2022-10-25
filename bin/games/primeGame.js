import gameEngine from '../src/index.js';

const getRandomIntInclusive = (minNum, maxNum) => {
  const min = Math.ceil(minNum);
  const max = Math.floor(maxNum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

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

const primeCheckGame = gameEngine(
  primeGameRules,
  primeGameQuestion,
  isPrimeGameChecking,
);

export default primeCheckGame;
