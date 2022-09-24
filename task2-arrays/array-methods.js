// #1 
// Write a function to join all elements of an array into a string

const numbersArray = [1, 2, 3, 4, 5, 6, 8];

let stringBuilder = (array) => {
  return array.join('');
}

console.log(stringBuilder(numbersArray));

// #2
// Write a function that accepts an array as input and  returns a string 
// * string must have dashes (-) between each element

let stringBuilder2 = (array) => {
  return array.join('-');
}

console.log(stringBuilder2(numbersArray));

// #3
// Write a function that accepts an array as input and  returns a string 
// * string must have dashes (-) between each two even numbers
// * eg : 01234568  -->  0123456-8
// * eg: 0246 --> 0-2-4-6

let stringBuilder3 = (array) => {
  return array.map( (number, index) => 
  (number % 2 == 0 && array[index-1] % 2 == 0) ? `-${number}` : number)
  .join('');
}

console.log(stringBuilder3(numbersArray));
console.log(stringBuilder3([0,2,4,6]));

// Option 2

let stringBuilder4 = (array) => {
  if (array.length == 1){
    return array[0]
  }

  let splitIndex = array.findIndex((number,index) => 
  (number % 2 == 0 && array[index-1] % 2 == 0))
  if (splitIndex == -1){
    return array.join('');
  }

  let string1 = array.slice(0, splitIndex).join('');
  let string2 = stringBuilder4(array.slice(splitIndex,));
  return string1.concat('-', string2);
}

console.log(stringBuilder4(numbersArray));
console.log(stringBuilder4([0,2,4,6]));