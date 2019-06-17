console.log('This will be printed just once');

module.exports = function(numbersToSum) {
  let sum = 0;
  let i = 0;
  const l = numbersToSum.length;

  while (i < l) {
    sum += numbersToSum[i++];
  }

  return sum;
};
