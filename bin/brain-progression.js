#!/usr/bin/env node
import startGame from '../src/index.js';
import { getRandomProgression, getRandomInt } from '../src/random.js';

const gameRules = 'What number is missing in the progression?';

const getRoundTask = () => {
  const MIN_LENGTH_PROGRESSION = 5;
  const MAX_LENGTH_PROGRESSION = 10;
  const MAX_FIRST_ELEMENT = 20;
  const MAX_DIFFERENCE = 20;

  const progression = getRandomProgression(
    MAX_LENGTH_PROGRESSION,
    MIN_LENGTH_PROGRESSION,
    MAX_FIRST_ELEMENT,
    MAX_DIFFERENCE,
  );
  const missingElementIndex = getRandomInt(progression.length);

  let question = '';
  for (let i = 0; i < progression.length; i += 1) {
    if (i === missingElementIndex) {
      question += '.. ';
    } else {
      question += `${progression[i]} `;
    }
  }

  const answer = progression[missingElementIndex];

  return [question, answer.toString()];
};

startGame(gameRules, getRoundTask);
