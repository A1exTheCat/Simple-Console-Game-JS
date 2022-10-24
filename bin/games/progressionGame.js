import gameEngine from '../src/index.js';

const getRandomIntInclusive = (minNum, maxNum) => {
  const min = Math.ceil(minNum);
  const max = Math.floor(maxNum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const progressionGameRules = () => {
  const rules = 'What number is missing in the progression?';
  return console.log(rules);
};

const progressionGameQuestion = () => {
  const firstNumberInProggresssionQuest = getRandomIntInclusive(1, 50);
  const progressionKey = getRandomIntInclusive(2, 9);
  const progressionQuest = [firstNumberInProggresssionQuest];
  for (let i = 1; i < 10; i += 1) {
    progressionQuest.push(progressionQuest[i - 1] + progressionKey);
  }
  const hideNumberInProgression = getRandomIntInclusive(0, 9);
  progressionQuest[hideNumberInProgression] = '..';
  const questExpression = progressionQuest.join(' ');
  return questExpression;
};

const progressionGameChecking = (str) => {
  let result;
  const checkingProgression = str.split(' ');
  let progressionKeyCheck;
  if (checkingProgression[0] !== '..' && checkingProgression[1] !== '..') {
    progressionKeyCheck = checkingProgression[1] - checkingProgression[0];
  } else {
    progressionKeyCheck = checkingProgression[3] - checkingProgression[2];
  }
  for (let i = 0; i < 10; i += 1) {
    if (checkingProgression[i] === '..') {
      result = Number(checkingProgression[i - 1]) + Number(progressionKeyCheck);
      break;
    }
  }
  result = `${result}`;
  return result;
};

const progressionGame = gameEngine(
  progressionGameRules,
  progressionGameQuestion,
  progressionGameChecking,
);

export default progressionGame;
