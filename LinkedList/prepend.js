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

    printList(){
        let current = this.head;
        let result = [];
        while(current !== null){
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" -> ") + " -> null");
    }

    prepend(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
}


const list = new LinkedList();

list.prepend(10);
list.prepend(20);
list.prepend(30);

list.printList();