/*

A stack is a data structure that you can push or pop elements into.
This is a simple implementation of a stack.

***Things To Note***
When popping an element, remember to reference this.length-1.

*/

function Stack(value = null) {
    this.storage = {};
    this.length = 0;
    if (value !== null) {
        this.storage[this.length] = value;
        this.length++;
    }
}

Stack.prototype.push = function (value) {
    this.storage[this.length] = value;
    this.length++;
}

Stack.prototype.pop = function () {
    let popped = null;
    if (this.length > 0) {
        popped = this.storage[this.length - 1];
        delete this.storage[this.length - 1];
        this.length--;
    }
    return popped;
}

let s = new Stack(8);
s.push(3);
s.push(4);
s.push(5);
console.log(s);
let p = s.pop();
console.log(s);
console.log(p);
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s);
s.push(9);
console.log(s);