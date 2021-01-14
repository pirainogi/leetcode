// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.
//
// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1. put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
//
// Follow up: Could you do both operations in O(1) time complexity?
//
// LRUCache cache = new LRUCache( 2 /* capacity */ );
//
// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

const List = (key, val) => {
  this.key = key;
  this.val = val;
  this.next = null;
  this.prev = null;
};

const LRUCache = (capacity) => {
  this.capacity = capacity;
  this.length = 0;
  this.map = {};
  this.head = null;
  this.tail = null;
};

LRUCache.prototype.get = (key) => {
  const node = this.map[key];
  if (node) {
    this.remove(node);
    this.insert(node.key, node.val);
    return node.val;
  } else {
    return -1;
  }
};

LRUCache.prototype.put = (key, value) => {
  if (this.map[key]) {
    this.remove(this.map[key]);
    this.insert(key, value);
  } else {
    if (this.length === this.capacity) {
      this.remove(this.head);
      this.insert(key, value);
    } else {
      this.insert(key, value);
      this.length++;
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

LRUCache.prototype.remove = (node) => {
  let prev = node.prev;
  let next = node.next;
  if (next) next.prev = prev;
  if (prev) prev.next = next;
  if (this.head === node) this.head = next;
  if (this.tail === node) this.tail = prev;
  delete this.map[node.key];
};

LRUCache.prototype.insert = (key, val) => {
  let node = new List(key, val);
  if (!this.tail) {
    this.tail = node;
    this.head = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  this.map[key] = node;
};

// Big O: O(1)
