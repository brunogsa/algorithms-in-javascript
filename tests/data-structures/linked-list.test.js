const { SinglyLinkedList } = require('../../data-structures/linked-list');

describe('linked-list.js', () => {
  describe('SinglyLinkedList', () => {

    describe('.size()', () => {
      it('should return 0 from a newly created one', () => {
        const linkedList = new SinglyLinkedList();
        expect(linkedList.size()).toBe(0);
      });

      it('should return 1, after pushing an element', () => {
        const linkedList = new SinglyLinkedList();
        linkedList.push('test');

        expect(linkedList.size()).toBe(1);
      });

      it.todo('should have O(1) time complexity');
    });


    describe('.isEmpty()', () => {
      it('should return `true` for a newly created queue', () => {
        const linkedList = new SinglyLinkedList();
        expect(linkedList.isEmpty()).toBe(true);
      });

      it('should return `false` after pushing an element', () => {
        const linkedList = new SinglyLinkedList();
        linkedList.push('test');

        expect(linkedList.isEmpty()).toBe(false);
      });

      it('should return `true`, if after a delete it became empty again', () => {
        const linkedList = new SinglyLinkedList();

        const valueToAdd = 'test';
        linkedList.push(valueToAdd);
        linkedList.delete(valueToAdd);

        expect(linkedList.isEmpty()).toBe(true);
      });

      it.todo('should have O(1) time complexity');
    });

    describe('.push(elem)', () => {
      it('should increase size by 1', () => {
        const linkedList = new SinglyLinkedList();
        expect(linkedList.size()).toBe(0);

        linkedList.push('test');
        expect(linkedList.size()).toBe(1);
      });

      it.todo('should have O(1) time complexity');
      it.todo('should have O(n) space complexity');
    });


    describe('.delete(elem)', () => {
      it('should return null if nothing had to be deleted', () => {
        const linkedList = new SinglyLinkedList();

        const valueToAdd = 'test';
        linkedList.push(valueToAdd);

        const returned = linkedList.delete('not-exist');
        expect(returned).toBe(null);
      });

      it('should return `elem`, if the elem was deleted', () => {
        const linkedList = new SinglyLinkedList();

        const valueToAdd = 'test';
        linkedList.push(valueToAdd);

        const returned = linkedList.delete(valueToAdd);
        expect(returned).toBe(valueToAdd);
      });

      it('should decrease the size by 1', () => {
        const linkedList = new SinglyLinkedList();

        const valueToAdd = 'test';
        linkedList.push(valueToAdd);
        expect(linkedList.size()).toBe(1);

        linkedList.delete(valueToAdd);
        expect(linkedList.size()).toBe(0);
      });

      it.todo('should have O(n) time complexity');
    });

    describe('.search(elem)', () => {
      it('should return null if value was not found', () => {
        const linkedList = new SinglyLinkedList();

        const valueToAdd = 'test';
        linkedList.push(valueToAdd);

        const returned = linkedList.search('not-exist');
        expect(returned).toBe(null);
      });

      it('should return `elem`, if the elem was found', () => {
        const linkedList = new SinglyLinkedList();

        const valueToAdd = 'test';
        linkedList.push(valueToAdd);

        const returned = linkedList.search(valueToAdd);
        expect(returned).toBe(valueToAdd);
      });

      it('should maintain the size', () => {
        const linkedList = new SinglyLinkedList();

        const valueToAdd = 'test';
        linkedList.push(valueToAdd);
        expect(linkedList.size()).toBe(1);

        linkedList.search(valueToAdd);
        expect(linkedList.size()).toBe(1);
      });

      it.todo('should have O(n) time complexity');
    });

  });
});
