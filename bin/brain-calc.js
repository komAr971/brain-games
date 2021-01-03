#!/usr/bin/env node
import startGame from "../src/index.js";
import { getRandomInt, getRandomExpression } from "../src/random.js";

const gameRules = "What is the result of the expression?";

const getRoundTask = () => {
  const MAX_NUMBER = 100;
  const firstNumber = getRandomInt(MAX_NUMBER);
  const secondNumber = getRandomInt(MAX_NUMBER);
  const expression = getRandomExpression();

  const question = `${firstNumber} ${expression} ${secondNumber}`;
  let answer = null;
  switch (expression) {
    case "+":
      answer = firstNumber + secondNumber;
      break;
    case "-":
      answer = firstNumber - secondNumber;
      break;
    case "*":
      answer = firstNumber * secondNumber;
      break;
  }

  return [question, answer.toString()];
};

startGame(gameRules, getRoundTask);
