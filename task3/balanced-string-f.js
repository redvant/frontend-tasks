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
  let symbolsArray = Array.from(string);
  let spareSymbols = [];
  for (i = 0; i < symbolsArray.length; i++){
    if(SymbolTypes.has(symbolsArray[i])){
      spareSymbols.push(symbolsArray[i])
    }else{
      if (spareSymbols.length < 1){
        spareSymbols.push(symbolsArray[i])
        break;
      }else{
        let previousSymbolPair = SymbolTypes
          .get(spareSymbols[spareSymbols.length - 1]);
        if (symbolsArray[i] == previousSymbolPair) {
          spareSymbols.pop()
        }else{
          break;
        }
      }
    }
  }

  return spareSymbols.length > 0 ? false : true;
}

console.log(isBalancedString(""));
console.log(isBalancedString("{}"));
console.log(isBalancedString("{{{{{(((((())))))}}}}}"));
console.log(isBalancedString("()()(()){}{[[]]}"));

console.log(isBalancedString("(){}["));
console.log(isBalancedString(")("));
console.log(isBalancedString("{{"));
console.log(isBalancedString("([]"));
console.log(isBalancedString("[{]"));
console.log(isBalancedString("))"));