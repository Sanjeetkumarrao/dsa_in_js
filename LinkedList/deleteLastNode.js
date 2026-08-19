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

    find(value){
        let current = this.head;
        let count = 0;
        while(current.data !== value){
            count++;
            current = current.next;
        }
        return console.log("found ", current.data, "after ", count, "iteration");
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


    deleteHeadNode(){
        if(!this.head){
            return;
        }
        
        let current = this.head;
        this.head = current.next;
    }

    deleteLastNode(){
        if(!this.head){
            return;
        }

        let current = this.head;
        while(current.next && current.next.next !== null){
            current = current.next;
        }
        if(current.next.next === null){
            current.next = null;
        }
    }

}


const list = new LinkedList();
// list.append(10);  
// list.append(20);
// list.append(30);
// list.append(40);
// list.append(50);
// list.find(40);
list.printList(); 
// list.length()
list.deleteHeadNode();
// list.deleteLastNode();
list.printList();