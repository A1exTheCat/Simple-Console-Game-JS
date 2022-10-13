import gameEngine from '../src/index.js';

const getRandomIntInclusive = (minNum, maxNum) => {
  const min = Math.ceil(minNum);
  const max = Math.floor(maxNum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const evenCheckGameRules = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  return console.log(rules);
};

const evenCheckGameQuestion = () => {
  const questNumber = getRandomIntInclusive(1, 999);
  return questNumber;
};

const evenCheckGameChecking = (number) => {
  const checkingCondition = number % 2 === 0;
  return checkingCondition ? 'yes' : 'no';
};

const evenCheckGame = gameEngine(
  evenCheckGameRules,
  evenCheckGameQuestion,
  evenCheckGameChecking
);

export default evenCheckGame;
