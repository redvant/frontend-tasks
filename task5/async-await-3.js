async function main() {  
  let value = await Promise.resolve('Hey there');
  console.log('inside: ' + value);
  return value;
}

main().then(
  text => {
    console.log('outside: ' + text)
  },
  err => {
    console.error(err)
  }
)