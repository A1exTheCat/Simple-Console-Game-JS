import readlineSync from 'readline-sync';

const userName = () => {
  const userNameAnswer = readlineSync.question('May I have your name? ');
  return console.log('Hi ' + userNameAnswer + '!');
};
export default userName;
