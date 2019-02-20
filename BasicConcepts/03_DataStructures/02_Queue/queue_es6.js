/*

A queue is a data structure that you can enqueue or dequeue elements into.
This is a simple implementation of a queue using ES6 javascript.

***Things To Note***
Queue data structure needs a head and tail pointer.
When dequeue an element, remember to dequeue only if tail minus head is greater than zero.

*/

class Queue {
    constructor(value = null) {
        this.storage = {};
        this.head = 0;
        this.tail = 0;
        if (value !== null) {
            this.storage[this.tail] = value;
            this.tail++;
        }
    }

    enqueue(value) {
        this.storage[this.tail] = value;
        this.tail++;
    }

    dequeue() {
        let dequeued = null;
        if (this.tail - this.head > 0) {
            dequeued = this.storage[this.head];
            delete this.storage[this.head];
            this.head++;
        }
        return dequeued;
    }
}

let q = new Queue();
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
console.log(q);
let d = q.dequeue();
console.log(q);
console.log(d);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q);
q.enqueue(9);
console.log(q);