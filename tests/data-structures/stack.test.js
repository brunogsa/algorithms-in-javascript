const Stack = require('../../data-structures/stack');

describe('stack.js', () => {

  describe('.size()', () => {
    it('should return 0 from a newly created stack', () => {
      const stack = new Stack();
      expect(stack.size()).toBe(0);
    });

    it('should return 1, after pushing an element', () => {
      const stack = new Stack();
      stack.push('test');

      expect(stack.size()).toBe(1);
    });

    it.todo('should have O(1) time complexity');
  });


  describe('.isEmpty()', () => {
    it('should return `true` for a newly created stack', () => {
      const stack = new Stack();
      expect(stack.isEmpty()).toBe(true);
    });

    it('should return `false` after pushing an element', () => {
      const stack = new Stack();
      stack.push('test');

      expect(stack.isEmpty()).toBe(false);
    });

    it('should return `true`, if after a pop it became empty again', () => {
      const stack = new Stack();
      stack.push('test');
      stack.pop();

      expect(stack.isEmpty()).toBe(true);
    });

    it.todo('should have O(1) time complexity');
  });

  describe('.push(elem)', () => {
    it('should increase size by 1', () => {
      const stack = new Stack();
      expect(stack.size()).toBe(0);

      stack.push('test');
      expect(stack.size()).toBe(1);
    });

    it.todo('should have O(1) time complexity');
    it.todo('should have O(n) space complexity');
  });


  describe('.pop()', () => {
    it('should throw an error if empty', () => {
      const stack = new Stack();

      expect(() => {
        stack.pop();
      }).toThrow();
    });

    it('should decrease size by 1', () => {
      const stack = new Stack();

      stack.push('test');
      expect(stack.size()).toBe(1);

      stack.pop();
      expect(stack.size()).toBe(0);
    });

    it('should return the last pushed element', () => {
      const stack = new Stack();

      const valueToPush = 'test';
      stack.push(valueToPush);

      const returnedValue = stack.pop();
      expect(returnedValue).toBe(valueToPush);
    });

    it.todo('should have O(1) time complexity');
  });


  describe('.peek()', () => {
    it('should throw an error if empty', () => {
      const stack = new Stack();

      expect(() => {
        stack.peek();
      }).toThrow();
    });

    it('should maintain the size', () => {
      const stack = new Stack();

      stack.push('test');
      expect(stack.size()).toBe(1);

      stack.peek();
      expect(stack.size()).toBe(1);
    });

    it('should return the value of the last pushed element', () => {
      const stack = new Stack();

      const valueToPush = 'test';
      stack.push(valueToPush);

      const returnedValue = stack.peek();
      expect(returnedValue).toBe(valueToPush);
    });

    it.todo('should have O(1) time complexity');
  });

});
