import gameEngine from '../src/index.js';
import getRandomIntInclusive from '../src/randomiser.js';

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

const evenCheckGame = () => gameEngine(
  evenCheckGameRules,
  evenCheckGameQuestion,
  evenCheckGameChecking,
);

export default evenCheckGame;
