let numbersArray = [1, 2, 3, 4, 5];

function average(array){
  let sum = 0;
  for (i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum / array.length
}

console.log(average(numbersArray));

// ###################################

function sumOdds(array){
  let sum = 0;
  for (i = 0; i < array.length; i++){
    if (array[i] % 2 != 0){
      sum += array[i];
    }
  }
  return sum
}

console.log(sumOdds(numbersArray));

// ####################################

function runOperation(a, b, func){
  let result = func(a, b);
  if (isNaN(result) || result == Infinity){
    return 0;
  }
  return result;
}

let sum = (a, b) => {
  return a + b;
}

let rest = (a, b) => {
  return a - b;
}

let mult = (a, b) => {
  return a * b;
}

let div = (a, b) => {
  return a / b;
}

let operationsResults = [];
operationsResults.push(runOperation(2, 2, sum));
operationsResults.push(runOperation(2, 2, rest));
operationsResults.push(runOperation(2, 2, mult));
operationsResults.push(runOperation(0, 0, div));

console.log(operationsResults);