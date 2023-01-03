
const TAX_RATE = 0.13;

class Product {
    // base class properties and methods go here
    name: string;
    price: number;
  
    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }
  
    getPriceWithTax(tax: number) {
      return this.price * (1 + tax);
    }
  }
  
  class Book extends Product {
    // derived class properties and methods go here
    author: string;
    pages: number;
    publisher: string;
  
    constructor(name: string, price: number, author: string, pages: number, publisher: string) {
      super(name, price); // call the base class constructor
      this.author = author;
      this.pages = pages;
      this.publisher = publisher;
    }
  
    getPriceWithDiscount(discount: number) {
      return this.getPriceWithTax(TAX_RATE) * (1 - discount);
    }
  
    getInfo() {
      return `${this.name} by ${this.author} (${this.pages} pages, published by ${this.publisher})`;
    }
  }
  
  class Computer extends Product {
    // another derived class properties and methods go here
    processor: string;
    memory: number;
    storage: number;
    operatingSystem: string;
  
    constructor(name: string, price: number, processor: string, memory: number, storage: number, operatingSystem: string) {
      super(name, price); // call the base class constructor
      this.processor = processor;
      this.memory = memory;
      this.storage = storage;
      this.operatingSystem = operatingSystem;
    }

    getPriceWithDiscount(discount: number) {
        return this.getPriceWithTax(TAX_RATE) * (1 - discount);
      }
  
    getSpecs() {
      return `${this.processor} processor, ${this.memory} GB RAM, ${this.storage} GB storage, ${this.operatingSystem} operating system`;
    }
  }
  
  const book1 = new Book('War and Peace', 20.00, 'Leo Tolstoy', 1225, 'Penguin Classics');
  console.log(book1.getPriceWithDiscount(0.10)); // 17.991
  console.log(book1.getInfo()); // "War and Peace by Leo Tolstoy (1225 pages, published by Penguin Classics)"
  
  const computer1 = new Computer('Dell XPS', 10000, 'Intel Core i9', 16, 512, 'Windows 11');
  console.log(computer1.getPriceWithDiscount(0.13)); // 1134.9867
  console.log(computer1.getSpecs()); // "Intel Core i9 processor, 16 GB RAM, 512 GB storage, Windows 10 operating system"