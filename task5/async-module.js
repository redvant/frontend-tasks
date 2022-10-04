async function main() {  
  let value = await Promise.resolve('Hey there');
  console.log('inside: ' + value);
  return value;
}
const text = await main();
export default text;