// I want you to create a function called increment()
// the counter should start from 0 and keep 
// incrementing it by one every time we call the function
// we shouldn't be able to reset the increment value. 
// So the counter should start from 0 and be available only inside the function.
// Use what you know about closures to achieve this

function closureBuilder(){
  let counter = 0;
  return function(){
    console.log(counter);
    counter++;
  }
}

let increment = closureBuilder();

increment();
increment();
increment();
increment();
increment();
increment();
increment();