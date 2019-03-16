/*

Sort Stack: Write a program to sort a stack such that the smallest items are on the top. You can use
an additional temporary stack, but you may not copy the elements into any other data structure
(such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.

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

    peek() {
        if (this.length > 0) {
            return this.storage[this.length - 1];
        }
        return null;
    }

    sortStack() {
        let sortedStack = new Stack();
        let temp = null;
        if (sortedStack.length === 0) {
            sortedStack.push(this.pop());
        }

        while (this.length > 0) {
            if (sortedStack.peek() > this.peek() && sortedStack.peek() !== null) {
                temp = this.pop();
                while (temp < sortedStack.peek() && sortedStack.peek() !== null) {
                    this.push(sortedStack.pop());
                }
                sortedStack.push(temp);
            } else {
                while (sortedStack.peek() <= this.peek()) {
                    sortedStack.push(this.pop());
                }
            }
        }
        while (sortedStack.length > 0) {
            this.push(sortedStack.pop());
        }
    }

    sortStack2() {
        let sortedStack = new Stack();
        let temp = null;
        while (this.length > 0) {
            temp = this.pop();
            while (sortedStack.length > 0 && temp < sortedStack.peek()) {
                this.push(sortedStack.pop());
            }
            sortedStack.push(temp);
        }
        while (sortedStack.length > 0) {
            this.push(sortedStack.pop());
        }
    }
}


let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(1);
s.push(3);
console.log(s);
s.sortStack2();
console.log(s);
s.push(4);
s.push(1);
s.push(3);
s.sortStack2();
console.log(s);
s.pop();
s.pop();
s.pop();
console.log(s);
s.push(3);
s.push(4);
console.log(s);
s.sortStack2();
console.log(s);