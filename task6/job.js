// Create a function called job
//   it receives  a parameter called -> data
//   if data is not a number , return a promise rejected instantly and give the data "error" in a string
//   if data is an odd number, return a promise resolved 1 second later and give the data "odd"  in a string
//   if data is an even number, return a promise rejected 2 seconds later and give the data "even" in a string
//   THE FUNCTION MUST ALWAYS RETURN A PROMISE

const job = data => {
  return new Promise((resolve, reject) => {
    isNotANumber(data, reject);
    isOddNumber(data, resolve);
    evenNumber(resolve);
  })
}

const isNotANumber = (data, reject) => {
  if (isNaN(data)){
    reject("error");
  }
}

const isOddNumber = (data, resolve) => {
  if (data % 2 != 0){
    setTimeout(() => {
      resolve("odd");
    }, 1000);
  }
}

const evenNumber = resolve => {
  setTimeout(() => {
    resolve("even");
  }, 2000);
}

job("not a number").catch(error => console.error(error))
job(3).then(data => console.log(data))
job(2).then(data => console.log(data))
