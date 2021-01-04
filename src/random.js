export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const getRandomExpression = () => {
  switch (getRandomInt(3)) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      return undefined;
  }
};

export const getRandomProgression = (
  maxLengthProgression,
  minLengthProgression,
  maxFirstElement,
  maxDifference,
) => {
  const resultProgression = [];

  const lengthProgression = maxLengthProgression
    + getRandomInt(maxLengthProgression - minLengthProgression + 1);
  const firstElement = getRandomInt(maxFirstElement - 1) + 1;
  const difference = getRandomInt(maxDifference - 1) + 1;

  resultProgression.push(firstElement);
  for (let i = 0; i < lengthProgression - 1; i += 1) {
    resultProgression.push(resultProgression[i] + difference);
  }

  return resultProgression;
};
