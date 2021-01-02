#!/usr/bin/env node
import readlineSync from 'readline-sync';
import findOutPlayerName from '../src/cli.js';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const askQuestion = () => {
  const MAX_NUMBER = 100;
  const randomNumber = getRandomInt(MAX_NUMBER);

  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

  if (answer !== rightAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  } else {
    console.log('Correct!');
  }

  return answer === rightAnswer;
};

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = findOutPlayerName();
  console.log('Anser "yes" if the number is even, otherwise answer "no".');

  const TARGET_RIGHT_ANSWERS = 3;
  let correctAnswers = 0;
  while (correctAnswers < TARGET_RIGHT_ANSWERS) {
    if (!askQuestion()) {
      console.log(`Let's try again, ${playerName}`);
      return false;
    }
    correctAnswers += 1;
  }
  console.log(`Congratulations, ${playerName}!`);
  return true;
};

startGame();
