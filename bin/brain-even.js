#!/usr/bin/env node
import startGame from "../src/index.js";
import { getRandomInt } from "../src/random.js";

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRoundTask = () => {
  const MAX_NUMBER = 100;
  const randomNumber = getRandomInt(MAX_NUMBER);

  const question = `${randomNumber}`;
  const answer = randomNumber % 2 === 0 ? "yes" : "no";

  return [question, answer];
};

startGame(gameRules, getRoundTask);
