/*

Animal Shelter: An animal shelter, which holds only dogs and cats, operates on a strictly "first in, first
out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter,
or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of
that type). They cannot select which specific animal they would like. Create the data structures to
maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog,
and dequeueCat. You may use the built-in Linked List data structure.

*/

class Queue {
    constructor() {
        this.storage = {};
        this.head = 0;
        this.tail = 0;
        this.length = this.tail - this.head;
    }

    enqueue(value = null) {
        if (value !== null) {
            this.storage[this.tail] = value;
            this.tail++;
            this.length = this.tail - this.head;
        }
    }

    dequeue() {
        let dequeued = null;
        if (this.tail - this.head > 0) {
            dequeued = this.storage[this.head];
            delete this.storage[this.head];
            this.head++;
            this.length = this.tail - this.head;
        }
        return dequeued;
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
        this.animalQueue = new Queue();
        this.dogQueue = new Queue();
        this.catQueue = new Queue();
    }

    enqueue(animal) {
        if (animal.type === 'dog') {
            this.dogQueue.enqueue(animal);
            this.animalQueue.enqueue(animal);
        } else if (animal.type === 'cat') {
            this.catQueue.enqueue(animal);
            this.animalQueue.enqueue(animal);
        } else {
            return null;
        }
    }

    dequeueAny() {
        let dequeuedAnimal = this.animalQueue.dequeue();
        if (dequeuedAnimal === null) {
            return null;
        }
        if (dequeuedAnimal.type === 'dog') {
            this.dogQueue.dequeue();
        } else {
            this.catQueue.dequeue();
        }
        return dequeuedAnimal;
    }

    dequeueDog() {
        let dequeuedDog = this.dogQueue.dequeue();
        if (dequeuedDog === null) {
            return null;
        }
        this._dequeueAnimalFromAnimalQueue(dequeuedDog);
        return dequeuedDog;
    }

    dequeueCat() {
        let dequeuedCat = this.catQueue.dequeue();
        if (dequeuedCat === null) {
            return null;
        }
        this._dequeueAnimalFromAnimalQueue(dequeuedCat);
        return dequeuedCat;
    }

    _dequeueAnimalFromAnimalQueue(animal) {
        let store = new Queue();
        let temp = null;
        while (this.animalQueue.length > 0) {
            temp = this.animalQueue.dequeue();
            if (temp !== animal) {
                store.enqueue(temp);
            }
        }
        this.animalQueue = store;
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
console.log(shelter);
console.log(shelter.dequeueDog());
console.log(shelter.dequeueAny());
console.log(shelter.dequeueDog());
console.log(shelter);
console.log(shelter.dequeueAny());
console.log(shelter.dequeueCat());
console.log(shelter);
shelter.enqueue(fido);
shelter.enqueue(simba);
shelter.enqueue(leo);
shelter.enqueue(spike);
console.log(shelter);