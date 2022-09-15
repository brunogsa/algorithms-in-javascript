const Queue = require('../../data-structures/queue');

describe('queue.js', () => {

  describe('.size()', () => {
    it('should return 0 from a newly created queue', () => {
      const queue = new Queue();
      expect(queue.size()).toBe(0);
    });

    it('should return 1, after enqueueing an element', () => {
      const queue = new Queue();
      queue.enqueue('test');

      expect(queue.size()).toBe(1);
    });

    it.todo('should have O(1) time complexity');
  });


  describe('.isEmpty()', () => {
    it('should return `true` for a newly created queue', () => {
      const queue = new Queue();
      expect(queue.isEmpty()).toBe(true);
    });

    it('should return `false` after enqueueing an element', () => {
      const queue = new Queue();
      queue.enqueue('test');

      expect(queue.isEmpty()).toBe(false);
    });

    it('should return `true`, if after a dequeue it became empty again', () => {
      const queue = new Queue();
      queue.enqueue('test');
      queue.dequeue();

      expect(queue.isEmpty()).toBe(true);
    });

    it.todo('should have O(1) time complexity');
  });

  describe('.enqueue(elem)', () => {
    it('should increase size by 1', () => {
      const queue = new Queue();
      expect(queue.size()).toBe(0);

      queue.enqueue('test');
      expect(queue.size()).toBe(1);
    });

    it.todo('should have O(1) time complexity');
    it.todo('should have O(n) space complexity');
  });


  describe('.dequeue()', () => {
    it('should throw an error if empty', () => {
      const queue = new Queue();

      expect(() => {
        queue.dequeue();
      }).toThrow();
    });

    it('should decrease size by 1', () => {
      const queue = new Queue();

      queue.enqueue('test');
      expect(queue.size()).toBe(1);

      queue.dequeue();
      expect(queue.size()).toBe(0);
    });

    it('should return the oldest enqueued element', () => {
      const queue = new Queue();

      const valueToEnqueue1 = 'test1';
      const valueToEnqueue2 = 'test2';
      const valueToEnqueue3 = 'test3';

      queue.enqueue(valueToEnqueue1);
      queue.enqueue(valueToEnqueue2);
      queue.enqueue(valueToEnqueue3);

      const returnedValue = queue.dequeue();
      expect(returnedValue).toBe(valueToEnqueue1);
    });

    it.todo('should have O(1) time complexity');
  });


  describe('.peek()', () => {
    it('should throw an error if empty', () => {
      const queue = new Queue();

      expect(() => {
        queue.peek();
      }).toThrow();
    });

    it('should maintain the size', () => {
      const queue = new Queue();

      queue.enqueue('test');
      expect(queue.size()).toBe(1);

      queue.peek();
      expect(queue.size()).toBe(1);
    });

    it('should return the value of the oldest enqueued element', () => {
      const queue = new Queue();

      const valueToEnqueue1 = 'test1';
      const valueToEnqueue2 = 'test2';
      const valueToEnqueue3 = 'test3';

      queue.enqueue(valueToEnqueue1);
      queue.enqueue(valueToEnqueue2);
      queue.enqueue(valueToEnqueue3);

      const returnedValue = queue.peek();
      expect(returnedValue).toBe(valueToEnqueue1);
    });

    it.todo('should have O(1) time complexity');
  });

});
