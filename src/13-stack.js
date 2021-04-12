/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.a = [];
  }

  push(element) {
    this.a.push(element);
  }

  pop() {
    return this.a.pop();
  }

  peek() {
    return this.a[this.a.length - 1];
  }
}

module.exports = Stack;
