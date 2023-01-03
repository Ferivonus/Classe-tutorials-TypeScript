export class LinkedList<T> {
    head: Node<T> | null;
    length: number;
  
    constructor() {
      this.head = null;
      this.length = 0;
    }
  
    add(value: T) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.length++;
    }
  
    print() {
      let current = this.head;
      while (current !== null) {
        console.log(current.value);
        current = current.next;
      }
    }
  
    getData() {
      const data = [];
      let current = this.head;
      while (current !== null) {
        data.push(current.value);
        current = current.next;
      }
      return data;
    }
  
    findSpecificData(predicate: (value: T) => boolean) {
      let current = this.head;
      while (current !== null) {
        if (predicate(current.value)) {
          return true;
        }
        current = current.next;
      }
      return false;
    }

    deleteLast() {
        if (this.length === 0) {
          return;
        }
        if (this.length === 1) {
          this.head = null;
          this.length = 0;
          return;
        }
        let current = this.head;
        while (current.next && current.next.next !== null) {
          current = current.next;
        }
        current.next = null;
        this.length--;
      }
      getLength() {
        return this.length;
      }
  }
  
  export class Node<T> {
    value: T;
    next: Node<T> | null;
  
    constructor(value: T) {
      this.value = value;
      this.next = null;
    }
  }