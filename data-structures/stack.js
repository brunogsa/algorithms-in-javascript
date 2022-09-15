class Stack {
  constructor() {
    this.list = [];
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(elem) {
    this.list.push(elem);
  }

  pop() {
    if (this.isEmpty()) throw new Error('Stack is empty');
    return this.list.pop();
  }

  peek() {
    if (this.isEmpty()) throw new Error('Stack is empty');
    return this.list.at(-1);
  }

  toString() {
    console.log(
      this.list.join(', '),
      '<- Top',
    );
  }
}

module.exports = Stack;
