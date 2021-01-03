export const getRandomInt = (max) =>
  Math.floor(Math.random() * Math.floor(max));

export const getRandomExpression = () => {
  switch (getRandomInt(3)) {
    case 0:
      return "+";
    case 1:
      return "-";
    case 2:
      return "*";
  }
};
