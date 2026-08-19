
class Node {
  constructor(data) {
    this.data = data;
    this.next = null; 
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode; 
  }

  delete(value) {
    if (!this.head) return;

    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  printList() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(" -> ") + " -> null");
  }
}

const list = new LinkedList();
list.append(10);  
list.append(20);
list.append(20);
list.prepend(5);
list.printList(); 

list.delete(10);
list.printList();