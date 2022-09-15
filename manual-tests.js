const Stack = require('./data-structures/stack');
const Queue = require('./data-structures/queue');
const { SinglyLinkedList } = require('./data-structures/linked-list');

console.log('Testing Stack..');
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.toString();
stack.pop();
stack.pop();
stack.toString();

console.log('Testing Queue..');
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.toString();
queue.dequeue();
queue.dequeue();
queue.toString();

console.log('Testing SinglyLinkedList..');
const linkedList = new SinglyLinkedList();

linkedList.toString();
linkedList.push(1);
linkedList.toString();
linkedList.push(2);
linkedList.push(3);
linkedList.toString();
linkedList.delete(2);
linkedList.toString();
linkedList.push(4);
linkedList.toString();
linkedList.delete(1);
linkedList.toString();
linkedList.delete(4);
linkedList.toString();
linkedList.delete(5);
linkedList.toString();
linkedList.delete(3);
linkedList.toString();
