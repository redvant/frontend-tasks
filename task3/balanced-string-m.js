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
  let spareSymbols = symbolsArray.reduce((spares, symbol) => {
    if (spares.length < 1){
      spares.push(symbol);
    }else {
      if (SymbolTypes.has(symbol)) {
        spares.push(symbol);
      }else {
        let previousSymbolPair = SymbolTypes
          .get(spares[spares.length - 1]);
        if(symbol == previousSymbolPair) {
          spares.pop();
        }
      }
    }
    return spares
  }, [])

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