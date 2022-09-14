class Queue {
  constructor() {
    this.list = [];

    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  enqueue(elem) {
    if (this.isEmpty()) {
      this.head = 0;
      this.tail = 0;
    } else {
      this.tail++;
    }

    this.list.push(elem);
    this.length++;
  }

  dequeue() {
    if (this.isEmpty()) throw new Error('Stack is empty');

    const value = this.list[this.head];
    this.list[this.head] = undefined;  // Mark as undefined, so garbage collector handle it later

    this.head++;
    if (this.head > this.tail) this.tail = this.head;

    this.length--;
    return value;
  }

  peek() {
    if (this.isEmpty()) throw new Error('Stack is empty');
    return this.list[this.head];
  }

  toString() {
    const values = this.list.filter(elem => elem !== undefined);

    console.log(
      JSON.stringify(values),
    );
  }
}

module.exports = Queue;
