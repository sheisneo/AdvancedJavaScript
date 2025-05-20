// Menu Items Price Calculator
class Order {
  #burgerPrice = 8.99;
  #friesPrice = 3.49;

  constructor(burgerQty, friesQty) {
    this.burgerQty = burgerQty;
    this.friesQty = friesQty;
  }

  calculateTotal() {
    return (this.burgerQty * this.#burgerPrice) + (this.friesQty * this.#friesPrice);
  }

  get total() {
    return this.calculateTotal().toFixed(2);
  }
}

const order1 = new Order(2, 1); 
const order2 = new Order(1, 3);

console.log(`Order 1 Total: $${order1.total}`);
console.log(`Order 2 Total: $${order2.total}`);
