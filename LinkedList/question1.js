class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
}

const list1 = new LinkedList();
const newNode = new Node(10);

console.log(list1);
console.log(newNode);