import readlineSync from 'readline-sync';

const userName = () => {
  const userNameAnswer = readlineSync.question('May I have your name? ');
  return userNameAnswer;
};
export default userName;
