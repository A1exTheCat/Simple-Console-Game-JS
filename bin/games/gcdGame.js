import gameEngine from '../src/index.js';

const getRandomIntInclusive = (minNum, maxNum) => {
  const min = Math.ceil(minNum);
  const max = Math.floor(maxNum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const gcdGameRules = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  return console.log(rules);
};

const gcdGameQuestion = () => {
  const firstNumber = getRandomIntInclusive(1, 99);
  const secondNumber = getRandomIntInclusive(1, 99);
  const questExpression = `${firstNumber} ${secondNumber}`;
  return questExpression;
};

const gcdGameChecking = (str) => {
  let i = 0;
  let firstOperand;
  let secondOperand;
  let result = 1;
  while (i < str.length) {
    if (str[i] === ' ') {
      firstOperand = str.slice(0, i);
      secondOperand = str.slice(i + 1);
    }
    i += 1;
  }
  firstOperand = Number(firstOperand);
  secondOperand = Number(secondOperand);
  const conditionForBiggestFirst = secondOperand % firstOperand === 0;
  const conditionForBiggestSecond = firstOperand % secondOperand === 0;
  if (conditionForBiggestFirst === true) {
    result = firstOperand;
  }
  if (conditionForBiggestSecond === true) {
    result = secondOperand;
  } else {
    i = 2;
    while (i <= firstOperand && i <= secondOperand) {
      if (firstOperand % i === 0 && secondOperand % i === 0) {
        result = i;
        i += 1;
      }
      i += 1;
    }
  }
  result = `${result}`;
  return result;
};

const gcdCheckGame = gameEngine(
  gcdGameRules,
  gcdGameQuestion,
  gcdGameChecking,
);

export default gcdCheckGame;
