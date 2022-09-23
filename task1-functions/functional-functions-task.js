let numbersArray = [1, 2, 3, 4, 5];

let average = (array) => {
  let sum = array.reduce((sum, number) => sum + number);
  return sum / array.length;
}

console.log(average(numbersArray));

let sumOdds = (array) => {
  return array.filter(number => number % 2 != 0)
  .reduce((sum, odd) => sum + odd);
};

console.log(sumOdds(numbersArray));