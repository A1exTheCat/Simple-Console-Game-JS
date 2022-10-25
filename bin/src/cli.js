import readlineSync from 'readline-sync';

const userName = () => {
  console.log('Welcome to the Brain Games!');
  const userNameAnswer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userNameAnswer}!`);
  return userNameAnswer;
};
export default userName;
