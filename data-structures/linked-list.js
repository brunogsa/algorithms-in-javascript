class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.numOfNodes = 0;
    this.head = null;
    this.tail = null;
  }

  size() {
    return this.numOfNodes;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(elem) {
    const node = new Node(elem);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.numOfNodes++;
  }

  delete(elem) {
    if (this.isEmpty()) return null;

    let previous = null;
    let current = this.head;
    let valueToReturn = null;

    while(current !== null) {
      if (current.value === elem) {
        valueToReturn = elem;

        if (previous === null) this.head = current.next;
        else previous.next = current.next;

        if (current === this.tail) this.tail = previous;

        // Mark as undefined, so garbage collector do its job later
        current.value = undefined;
        current.next = undefined;
        current = undefined;

        this.numOfNodes--;
        break;
      }

      previous = current;
      current = current.next;
    }

    return valueToReturn;
  }

  search(elem) {
    if (this.isEmpty()) return null;

    let current = this.head;

    while(current !== null) {
      if (current.value === elem) return elem;
      current = current.next;
    }

    return null;
  }

  toString() {
    const nodes = [];

    let current = this.head;
    while(current !== null) {
      nodes.push(current);
      current = current.next;
    }

    console.log(
      'Head ->',
      nodes.map(node => node.value).join(' -> '),
      '<- Tail',
    );
  }
}

module.exports = {
  SinglyLinkedList,
};
