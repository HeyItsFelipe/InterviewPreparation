/*

Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.

*/

class Stack {
    constructor() {
        this.storage = {};
        this.length = 0;
    }

    push(value = null) {
        if (value !== null) {
            this.storage[this.length] = value;
            this.length++;
        }
    }

    pop() {
        let popped = null;
        if (this.length > 0) {
            popped = this.storage[this.length - 1];
            delete this.storage[this.length - 1];
            this.length--;
        }
        return popped;
    }

}

class QueueViaStacks {
    constructor() {
        this.enqueueStack = new Stack();
        this.dequeueStack = new Stack();
    }

    enqueue(value) {
        this.enqueueStack.push(value);
    }

    dequeue() {
        if (this.enqueueStack.length === 0 && this.dequeueStack.length === 0) {
            return null;
        }
        if (this.dequeueStack.length === 0) {
            while (this.enqueueStack.length > 0) {
                this.dequeueStack.push(this.enqueueStack.pop());
            }
        }
        return this.dequeueStack.pop();
    }
}

let q = new QueueViaStacks();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
console.log(q.dequeue());
q.enqueue(5);
q.enqueue(6);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());