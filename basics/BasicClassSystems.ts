class Product {
  private name: string;
  private price: number;
  private quantity: number;

  constructor(name: string, price: number, quantity: number) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getPrice(): number {
    return this.price;
  }

  public setPrice(price: number): void {
    this.price = price;
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public setQuantity(quantity: number): void {
    this.quantity = quantity;
  }

  public getTotal(): number {
    return this.price * this.quantity;
  }
}

const computer = new Product('Monster', 15500, 2);
console.log(computer.getName()); // Output: 'Computer'
console.log(computer.getPrice());
console.log(computer.getTotal()); // Output: 1000
