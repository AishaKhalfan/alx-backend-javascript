const shoppingList = ["Cows","Goats", "Chixken", "Duck"];
    shoppingList.forEach((product) => {
        console.log(`The product is ${product}`);
    });
//output from above
// The product is Cows
// The product is Goats
// The product is Chixken
// The product is Duck
    
class ShoppingList{
    constructor(items, number){
        this.items = items;
        this.number = number;
    }
    sayList(){
        console.log(this.items);
    }
    sayNumber(){
	console.log(this.number);
    }
}
//creating an object from the above class
const myList = new ShoppingList(["Milk","choco","cheese"], 3);
console.log(myList)
myList.sayList();
myList.sayNumber();

//the following class inherits from the above class
class Product extends ShoppingList{
  constructor(items, number, amount, cost){
  //to bind with the above we use super()
    super(items, number);
    this.amount = amount;
    this.cost = cost;
   }
}
const product = new Product(["maziwa","kachri", "kashata"],3, 400, 500);
console.log(product)
product.sayList();
