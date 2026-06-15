class Queue {
    constructor() {
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }

    // Add an item to the queue
    enqueue(item) {
        this.items[this.tail] = item;
        this.tail++;
    }

    // remove item from the queue
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty - cannot dequeue");
            return undefined;
        }
        
        const deletedItem = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        
        // Reset pointers when queue becomes empty to prevent memory issues
        if (this.isEmpty()) {
            this.head = 0;
            this.tail = 0;
        }
        
        return deletedItem;
    }

    // check if the queue is empty
    isEmpty() {
        return this.size() === 0;
    }

    // get the size of the queue
    size() {
        return this.tail - this.head;
    }

    // peek at the front element without removing it
    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return undefined;
        }
        return this.items[this.head];
    }

    // clear all items from the queue
    clear() {
        this.items = {};
        this.head = 0;
        this.tail = 0;
        console.log("Queue cleared successfully");
    }

    // print all items in the queue
    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        
        let result = "Front -> ";
        for (let i = this.head; i < this.tail; i++) {
            result += this.items[i] + " -> ";
        }
        result += "Rear";
        console.log(result);
    }

    // convert queue to array
    toArray() {
        const array = [];
        for (let i = this.head; i < this.tail; i++) {
            array.push(this.items[i]);
        }
        return array;
    }
}

// Test the corrected code
const queue = new Queue();

console.log("=== Testing Queue Operations ===");
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
queue.print(); // Front -> 5 -> 10 -> 15 -> Rear

console.log("Queue size:", queue.size()); // 3
console.log("Front element:", queue.peek()); // 5

queue.dequeue(); // removes 5
queue.print(); // Front -> 10 -> 15 -> Rear

queue.dequeue(); // removes 10
queue.dequeue(); // removes 15

console.log("Is empty?", queue.isEmpty()); // true

// Try to dequeue from empty queue
queue.dequeue(); // "Queue is empty - cannot dequeue"

console.log("\n=== Final Queue State ===");
console.log(queue);