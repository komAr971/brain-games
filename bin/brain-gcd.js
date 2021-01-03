#!/usr/bin/env node
import startGame from '../src/index.js';
import { getRandomInt } from '../src/random.js';
import getGCD from '../src/gcd.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getRoundTask = () => {
  const MAX_NUMBER = 50;
  const firstNumber = getRandomInt(MAX_NUMBER);
  const secondNumber = getRandomInt(MAX_NUMBER);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGCD(firstNumber, secondNumber);

  return [question, answer.toString()];
};

startGame(gameRules, getRoundTask);
