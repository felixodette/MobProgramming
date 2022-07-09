function last(stack) {
  return stack[stack.length -1]
}

class Stack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(number) {
    // your code here
    if (this.minStack.length === 0 || number <= last(this.minStack)) {
      this.minStack.push(number);
    }
    this.stack.push(number);
  }

  pop() {
    if(last(this.minStack) === last(this.stack)){
      this.minStack.pop()
    }
    return this.stack.pop()
  }

  min() {
    // your code here
    return last(this.minStack);
  }
}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.min())
// => 3

stack.pop()
stack.push(7)
console.log(stack.min())
// => 3

stack.push(2)
console.log(stack.min())
// => 2

stack.pop()
console.log(stack.min())
// => 3
