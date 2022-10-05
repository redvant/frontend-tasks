// Create a function PrintName
// 	It receives a name as a parameter
// 	after 5seconds it prints "The name received is:  X"  

const PrintName = async name => {
  await setTimeout(() =>{
    console.log(`The name received is: ${name}`);
  }, 5000);
}

export default PrintName;