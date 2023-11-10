
/*
Problem: Implement a least recently used (LRU) cache in JavaScript.
 An LRU cache is a cache that evicts the least recently used items when it reaches its capacity.
*/
class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map();
    }
  
    get(key) {
      if (this.cache.has(key)) {
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
      } else {
        return undefined;
      }
    }
  
    set(key, value) {
      if (this.cache.size === this.capacity) {
        const leastRecentlyUsedKey = this.cache.keys().next().value;
        this.cache.delete(leastRecentlyUsedKey);
      }
  
      this.cache.set(key, value);
    }
  }
  const lruCache = new LRUCache(3);

// Set items in the cache.
lruCache.set('key1', 'value1');
lruCache.set('key2', 'value2');
lruCache.set('key3', 'value3');

// Get items from the cache.
const value1 = lruCache.get('key1'); // 'value1'
const value2 = lruCache.get('key2'); // 'value2'
const value3 = lruCache.get('key3'); // 'value3'

// Set a new item in the cache, evicting the least recently used item.
lruCache.set('key4', 'value4');

// Get the least recently used item from the cache.
const leastRecentlyUsedValue = lruCache.get('key1'); // undefined
