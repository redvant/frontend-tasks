async function main() {  
  let value = await Promise.resolve('Hey there');
  console.log('inside: ' + value);
  return value;
}

(async () => {
  try {
    const text = await main();
    console.log('outside: ' + text)
  } catch(e){
    console.log(e.message)
  }
})();