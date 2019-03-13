/*

Stack Min: How would you design a stack which, in addition to push and pop, has a function min
which returns the minimum element? Push, pop and min should all operate in 0(1) time.

*/

class Stack {
    constructor() {
        this.storage = {};
        this.length = 0;
        this.min = {};
        this.minLength = 0;
    }

    push(value = null) {
        if (value !== null) {
            if (value <= this.min[this.minLength - 1] || this.minLength === 0) {
                this.min[this.minLength] = value;
                this.minLength++;
            }
            this.storage[this.length] = value;
            this.length++;
        }
    }

    pop() {
        let popped = null;
        if (this.length > 0) {
            popped = this.storage[this.length - 1];
            if (popped === this.min[this.minLength - 1]) {
                delete this.min[this.minLength - 1];
                this.minLength--;
            }
            delete this.storage[this.length - 1];
            this.length--;
        }
        return popped;
    }

    minimum() {
        if (this.minLength > 0) {
            return this.min[this.minLength - 1];
        }
        return null;
    }

}

let s = new Stack();
s.push(7);
console.log(s);
s.push(10);
console.log(s);
s.push(2);
console.log(s);
s.push(11);
console.log(s);
s.pop();
console.log(s);
s.push(1);
console.log(s);
s.push(2);
console.log(s);
s.push(1);
console.log(s);

console.log(s.minimum());

s.pop();
console.log(s);
console.log(s.minimum());
s.pop();
console.log(s);
console.log(s.minimum());
s.pop();
console.log(s);
console.log(s.minimum());
s.pop();
console.log(s);
console.log(s.minimum());
s.pop();
console.log(s);
console.log(s.minimum());
s.pop();
console.log(s);
console.log(s.minimum());
