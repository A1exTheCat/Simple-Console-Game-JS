import gameEngine from '../src/index.js';
import getRandomIntInclusive from '../src/randomiser.js';

const calculationGameRules = () => {
  const rules = 'What is the result of the expression?';
  return console.log(rules);
};

const calculationGameQuestion = () => {
  const arrayWithSigns = ['+', '-', '*'];
  const firstNumber = getRandomIntInclusive(1, 999);
  const secondNumber = getRandomIntInclusive(1, 999);
  const culcSign = arrayWithSigns[getRandomIntInclusive(0, 2)];
  const questExpression = `${firstNumber} ${culcSign} ${secondNumber}`;
  return questExpression;
};

const calculationGameChecking = (str) => {
  let i = 0;
  let firstOperand;
  let secondOperand;
  let operator;
  let result;
  while (i < str.length) {
    if (str[i - 1] === ' ' && str[i + 1] === ' ') {
      operator = str[i];
      firstOperand = str.slice(0, i - 1);
      secondOperand = str.slice(i + 2);
    }
    i += 1;
  }
  firstOperand = Number(firstOperand);
  secondOperand = Number(secondOperand);
  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    default:
      result = firstOperand * secondOperand;
      break;
  }
  result = `${result}`;
  return result;
};

const calculationCheckGame = () => gameEngine(
  calculationGameRules,
  calculationGameQuestion,
  calculationGameChecking,
);

export default calculationCheckGame;
