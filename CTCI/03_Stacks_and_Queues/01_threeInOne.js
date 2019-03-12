/*

Three in One: Describe how you could use a single array to implement three stacks.

*/

class ThreeStacks {
    constructor() {
        this.storage = [];
        this.firstStackEnd = 0;
        this.secondStackEnd = 0;
    }

    pushToStack(stack, value) {
        if (stack === 1) {
            this.storage.splice(this.firstStackEnd, 0, value);
            this.firstStackEnd++;
            this.secondStackEnd++;
        }
        if (stack === 2) {
            this.storage.splice(this.secondStackEnd, 0, value);
            this.secondStackEnd++;
        }
        if (stack === 3) {
            this.storage.push(value);
        }
    }

    popFromStack(stack) {
        let popped = null;
        if (stack === 1 && this.firstStackEnd > 0) {
            popped = this.storage.splice(this.firstStackEnd - 1, 1)[0];
            this.firstStackEnd--;
            this.secondStackEnd--;
        }
        if (stack === 2 && this.secondStackEnd > this.firstStackEnd) {
            popped = this.storage.splice(this.secondStackEnd - 1, 1)[0];
            this.secondStackEnd--;
        }
        if (stack === 3 && this.storage.length > this.secondStackEnd) {
            popped = this.storage.pop();
        }
        return popped;
    }

}

let s = new ThreeStacks();
s.pushToStack(2, 4);
console.log(s);
s.pushToStack(1, 7);
console.log(s);
s.pushToStack(1, 8);
console.log(s);
s.pushToStack(2, 0);
console.log(s);
s.pushToStack(3, 1);
console.log(s);
s.pushToStack(2, 5);
console.log(s);
s.pushToStack(3, 8);
console.log(s);
s.pushToStack(1, 3);
console.log(s);

console.log('-------Popping--------');

console.log(s.popFromStack(2));
console.log(s);
console.log(s.popFromStack(2));
console.log(s);
console.log(s.popFromStack(2));
console.log(s);
console.log(s.popFromStack(2));
console.log(s);

console.log(s.popFromStack(1));
console.log(s);
console.log(s.popFromStack(3));
console.log(s);
console.log(s.popFromStack(2));
console.log(s);

// console.log(s.popFromStack(2));
// console.log(s);
// console.log(s.popFromStack(2));
// console.log(s);
// console.log(s.popFromStack(2));
// console.log(s);
// console.log(s.popFromStack(2));
// console.log(s);

s.pushToStack(3, 1);
console.log(s);
s.pushToStack(2, 5);
console.log(s);
s.pushToStack(3, 8);
console.log(s);
s.pushToStack(1, 3);
console.log(s);