const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = Math.floor(number / 2); i > 1; i -= 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export default isPrime;
