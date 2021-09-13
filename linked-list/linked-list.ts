class Node<TElement> {
  value: TElement;
  prev: Node<TElement> | null;
  next: Node<TElement> | null;

  constructor(value: TElement) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class LinkedList<TElement> {
  private head: Node<TElement> | null;
  private tail: Node<TElement> | null;
  private length: number;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  public push(element: TElement): void {
    const newNode = new Node(element);
    this.length += 1;
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  public pop(): TElement | null {
    this.length -= 1;
    const firstNode = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = firstNode && firstNode.next;
      if (this.head !== null) {
        this.head.prev = null;
      }
    }
    return firstNode && firstNode.value;
  }

  public shift(): TElement | null {
    this.length -= 1;
    const lastNode = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = lastNode && lastNode.prev;
      if (this.tail !== null) {
        this.tail.next = null;
      }
    }
    return lastNode && lastNode.value;
  }

  public unshift(element: TElement): void {
    const newNode = new Node(element);
    this.length += 1;
    if (this.tail === null) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  public delete(element: TElement): void {
    let currentNode = this.head;
    if (this.head === this.tail) {
      if (currentNode && currentNode.value === element) {
        this.head = null;
        this.tail = null;
        this.length -= 1;
      }
    } else {
      while (currentNode !== null) {
        if (currentNode && currentNode.value === element) {
          if (currentNode.prev) {
            currentNode.prev.next = currentNode.next;
          }
          if (currentNode.next) {
            currentNode.next.prev = currentNode.prev;
          }
          this.length -= 1;
        }
        currentNode = currentNode.next;
      }
    }
  }

  public count(): number {
    return this.length;
  }
}
