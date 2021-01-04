#!/usr/bin/env node
import startGame from '../src/index.js';
import { getRandomInt } from '../src/random.js';
import isPrime from '../src/isPrime.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRoundTask = () => {
  const MAX_NUMBER = 100;
  const question = getRandomInt(MAX_NUMBER);

  const answer = isPrime(question) ? 'yes' : 'no';

  return [question.toString(), answer];
};

startGame(gameRules, getRoundTask);
