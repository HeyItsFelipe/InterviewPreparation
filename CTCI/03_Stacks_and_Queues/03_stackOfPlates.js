/*

Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
Therefore, in real life, we would likely start a new stack when the previous stack exceeds some
threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be
composed of several stacks and should create a new stack once the previous one exceeds capacity.
SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack
(that is, pop() should return the same values as it would if there were just a single stack).

FOLLOW UP
Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.

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

class SetOfStacks {
    constructor() {
        this.storage = {};
        this.maxSize = 3;
        this.currentStack = 0;
    }

    push(value) {
        if (this.storage[this.currentStack] === undefined) {
            this.storage[this.currentStack] = new Stack();
            this.storage[this.currentStack].push(value);
        } else if (this.storage[this.currentStack].length >= this.maxSize) {
            this.currentStack++;
            this.storage[this.currentStack] = new Stack();
            this.storage[this.currentStack].push(value);
        } else {
            this.storage[this.currentStack].push(value);
        }
    }

    pop() {
        let popped = null;
        if (this.storage[this.currentStack] === undefined) {
            return popped;
        }
        if (this.storage[this.currentStack].length > 0) {
            popped = this.storage[this.currentStack].pop();
        }
        if (this.storage[this.currentStack].length === 0) {
            while (this.storage[this.currentStack].length === 0) {
                delete this.storage[this.currentStack];
                if (this.currentStack === 0) {
                    return popped;
                }
                if (this.currentStack > 0) {
                    this.currentStack--;
                }
            }
        }

        return popped;
    }

    popAt(stackNumber) {
        let popped = null;
        if (this.storage[stackNumber].length > 0) {
            popped = this.storage[stackNumber].pop();
        }
        return popped;
    }

}

let s = new SetOfStacks();
s.push(3);
console.log(s);
console.log(s.storage['0']);
s.push(1);
console.log(s);
console.log(s.storage['0']);
s.push(0);
console.log(s);
console.log(s.storage['0']);
s.push(4);
console.log(s);
console.log(s.storage['1']);
s.pop();
console.log(s);
console.log(s.storage['0']);
s.pop();
console.log(s);
console.log(s.storage['0']);
s.pop();
console.log(s);
console.log(s.storage['0']);
s.pop();
console.log(s);
console.log(s.storage['0']);
s.pop();
console.log(s);
console.log(s.storage['0']);

s.push(0);
console.log(s);
console.log(s.storage['0']);
s.push(5);
console.log(s);
console.log(s.storage['0']);
s.push(9);
console.log(s);
console.log(s.storage['0']);
s.push(1);
console.log(s);
console.log(s.storage['1']);

s.push(7);
console.log(s);
console.log(s.storage['0']);
s.push(3);
console.log(s);
console.log(s.storage['0']);
s.push(8);
console.log(s);
console.log(s.storage['0']);
s.push(7);
console.log(s);
console.log(s.storage['2']);

s.popAt(1);
console.log(s);
s.popAt(1);
console.log(s);
s.popAt(1);
console.log(s);
s.popAt(1);
console.log(s);
console.log(s.pop());
console.log(s);
console.log(s.pop());
console.log(s);
console.log(s.pop());
console.log(s);
console.log(s.pop());
console.log(s);
console.log(s.pop());
console.log(s);
console.log(s.pop());
console.log(s);