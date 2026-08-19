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
            current = current.next
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
        while(current !== null){
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(' -> ') + (' -> null'));
    }

    length(){
        let current = this.head;
        let count = 0;
        while(current !== null){
            count++;
            current = current.next;
        }
        console.log(count);
    }   
}


const list = new LinkedList();
list.append(10);  
list.append(20);
list.append(20);
list.append(20);
list.append(20);
list.printList(); 
list.length()