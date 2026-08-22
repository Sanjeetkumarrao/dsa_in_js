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

    append(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            return;
        }

        let current = this.head;

        while(current.next !== null){
            current = current.next;
        }

        current.next = newNode;
    }

    prepend(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    printList(){
        let current = this.head;
        let result = [];

        while(current){
            result.push(current.data);
            current = current.next;
        }

        console.log(result.join(" -> ") + (" -> null "));
    }

    reverse() {
    let previous = null;
    let current = this.head;

    while (current !== null) {
        let next = current.next;

        current.next = previous;

        previous = current;
        current = next;
    }

    this.head = previous;
    }
}


const list1 = new LinkedList();

list1.append(10);
list1.append(20);
list1.append(30);
list1.append(40);
list1.append(50);
list1.printList();
list1.reverse()
list1.printList();