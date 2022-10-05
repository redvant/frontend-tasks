class Pizza{
  ingredients;

  constructor(){
    this.ingredients = [];
  }

  cook = async () => {
    console.log("Cooking pizza...");
    await this.#timeout(5000);
    console.log("The pizza is ready!");
  }

  addIngredient = async ingredient => {
    console.log(`Adding ${ingredient}...`);
    await this.#timeout(1000);
    this.ingredients.push(ingredient);
    console.log(`${ingredient} added`);
  }

  #timeout = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// function timeout(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

let p = new Pizza()
await p.addIngredient('tomato');
await p.addIngredient('chesse');
await p.addIngredient('flour');
await p.cook()
console.log(p.ingredients)