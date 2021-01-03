import getPlayerName from "../src/cli.js";
import readlineSync from "readline-sync";

const startGame = (gameRules, getRoundTask) => {
  console.log("Welcome to the Brain Games!");
  const playerName = getPlayerName();

  console.log(gameRules);

  const ROUNDS_COUNT = 3;
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, answer] = getRoundTask();
    console.log(`Question: ${question}`);

    const playerAnswer = readlineSync.question("Your answer: ");

    if (answer === playerAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`
      );
      console.log(`Let's try again, ${playerName}!`);
      return false;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
  return true;
};

export default startGame;
