/*

Animal Shelter: An animal shelter, which holds only dogs and cats, operates on a strictly "first in, first
out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter,
or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of
that type). They cannot select which specific animal they would like. Create the data structures to
maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog,
and dequeueCat. You may use the built-in Linked List data structure.

*/

class Node {
    constructor(value = null) {
        if (value !== null) {
            this.value = value;
            this.next = null;
        }
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(value = null) {
        if (value !== null) {
            if (this.head === null) {
                this.head = new Node(value);
            } else {
                let node = this.head;
                while (node.next !== null) {
                    node = node.next;
                }
                node.next = new Node(value);
            }
        }
    }

    peekHead() {
        let peek = null;
        if (this.head !== null) {
            peek = this.head;
        }
        return peek;
    }

    removeHead() {
        let removed = null;
        if (this.head !== null) {
            removed = this.head;
            this.head = this.head.next;
            return removed;
        }
        return removed;
    }

    print() {
        let string = "";
        let node = this.head;
        while (node !== null) {
            string += node.value.name + " ";
            node = node.next;
        }
        return string;
    }
}

class Animal {
    constructor(type = null, name = null) {
        if ((type === 'dog' || type === 'cat') && name !== null) {
            this.type = type;
            this.name = name;
        }
    }
}

class AnimalShelter {
    constructor() {
        this.dogLinkedList = new LinkedList();
        this.catLinkedList = new LinkedList();
        this.order = 0;
    }

    enqueue(animal) {
        if (animal.type === 'dog') {
            animal.order = this.order;
            this.dogLinkedList.addNode(animal);
            this.order++;
        } else if (animal.type === 'cat') {
            animal.order = this.order;
            this.catLinkedList.addNode(animal);
            this.order++;
        } else {
            return null;
        }
    }

    dequeueAny() {
        let dog = this.dogLinkedList.peekHead();
        let cat = this.catLinkedList.peekHead();
        if (dog !== null & cat !== null) {
            let dogTime = dog.value.order;
            let catTime = cat.value.order;
            if (dogTime < catTime) {
                return this.dogLinkedList.removeHead();
            } else {
                return this.catLinkedList.removeHead();
            }
        } else if (dog === null) {
            return this.catLinkedList.removeHead();
        } else {
            return this.dogLinkedList.removeHead();
        }
    }

    dequeueDog() {
        return this.dogLinkedList.removeHead();
    }

    dequeueCat() {
        return this.catLinkedList.removeHead();
    }
}


let shelter = new AnimalShelter();
let fido = new Animal('dog', 'fido');
let simba = new Animal('cat', 'simba');
let leo = new Animal('turtle', 'leo');
let spike = new Animal('dog', 'spike');
let chibi = new Animal('cat', 'chibi');
let peanut = new Animal('dog', 'peanut');
shelter.enqueue(fido);
shelter.enqueue(simba);
shelter.enqueue(leo);
shelter.enqueue(spike);
shelter.enqueue(chibi);
shelter.enqueue(peanut);
console.log(shelter.dogLinkedList.print());
console.log(shelter.catLinkedList.print());
console.log(shelter.dequeueDog());
console.log(shelter.dequeueDog());
console.log(shelter.dequeueDog());
console.log(shelter.dequeueDog());
console.log(shelter.dequeueDog());
console.log(shelter.dogLinkedList.print());
console.log(shelter.catLinkedList.print());
console.log(shelter.dequeueCat());
console.log(shelter.dequeueCat());
console.log(shelter.dequeueCat());
console.log(shelter.dogLinkedList.print());
console.log(shelter.catLinkedList.print());
console.log(shelter.dogLinkedList);
console.log(shelter.catLinkedList);
shelter.enqueue(fido);
shelter.enqueue(simba);
shelter.enqueue(leo);
shelter.enqueue(spike);
shelter.enqueue(chibi);
shelter.enqueue(peanut);
console.log(shelter.dogLinkedList.print());
console.log(shelter.catLinkedList.print());
console.log(shelter.dogLinkedList);
console.log(shelter.catLinkedList);