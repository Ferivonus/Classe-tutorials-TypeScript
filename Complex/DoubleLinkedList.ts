export class DoubleLinkedList<T> {
    head: DoubleLLNode<T> | null;
    tail: DoubleLLNode<T> | null;
    length: number;
  
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    add(value: T) {
      const newNode = new DoubleLLNode(value);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail!.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
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
          this.tail = null;
          this.length = 0;
          return;
        }
        const newTail = this.tail.prev;
        newTail.next = null;
        this.tail.prev = null;
        this.tail = newTail;
        this.length--;
      }
      

    getLength() {
        return this.length;
      }
    
  }
  
  export class DoubleLLNode<T> {
    value: T;
    next: DoubleLLNode<T> | null;
    prev: DoubleLLNode<T> | null;
  
    constructor(value: T) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  