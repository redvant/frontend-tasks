// write a program that will check if a string containing brackets, parenthesis and curly braces is "balanced"
// what does "balanced" mean for us? well...that every opening tag has a valid closing tag

// example:
// "()()(()){}{[[]]}"  --> balanced
// ""  --> balanced
// "{}" -- >balanced
// "{{{{{(((((())))))}}}}}"  --> balanced

// "(){}[" -> not balanced
// ")(" --> not balanced
// "{{" -> not balanced
// "([]"  --> not balanced
// "[{]"  --> not balanced

// ##############################

const SymbolTypes = new Map([
  ["(",")"],
  ["[","]"],
  ["{","}"],
]);

let isBalancedString = (string) => {
  let spareSymbols = getSpares(Array.from(string));
  return spareSymbols.length > 0 ? false : true;
}

let getSpares = (array, spares=[]) => {
  if (array.length == 0){
    return spares;
  }
  if (SymbolTypes.has(array[0])){
    spares.push(array[0])
    return getSpares(array.slice(1,),spares)
  }
  if (spares.length < 1){
    return array;
  }
  let previousSymbolPair = SymbolTypes
    .get(spares[spares.length - 1]);
  if(array[0] == previousSymbolPair) {
    spares.pop();
    return getSpares(array.slice(1,),spares)
  }
  return array;
}

console.log(isBalancedString("()()(()){}{[[]]}"));
console.log(isBalancedString(""));
console.log(isBalancedString("{}"));
console.log(isBalancedString("{{{{{(((((())))))}}}}}"));

console.log(isBalancedString("(){}["));
console.log(isBalancedString(")("));
console.log(isBalancedString("{{"));
console.log(isBalancedString("([]"));
console.log(isBalancedString("[{]"));
console.log(isBalancedString("))"));