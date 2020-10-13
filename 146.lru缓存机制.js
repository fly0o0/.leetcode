/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start

/**
 * 
 * 思路因为需要在常数时间插入和删除其实map都具备，但对最近使用有个顺序，所以map不能完成
 * 但我们联想队列是可以实现的，又因为要常数时间插入和删除，我们得使用双向链表来完成。
 * 
 * 因此我们需要有一个map来存储key，value，双向链表来存储顺序。
 * 
 */

class Node {
    constructor(k, v) {
        this.prev = null
        this.next = null
        this.key = k
        this.value = v
    }
}

class DoubleList {
    constructor() {
        this.head = new Node(0, 0)
        this.tail = new Node(0, 0)

        this.head.next = this.tail
        this.tail.prev =  this.head

        this.size = 0
    }

    addFirst(node) {
        node.next = this.head.next
        node.prev = this.head

        this.head.next.prev = node
        this.head.next = node
        this.size++
    }

    remove(node) {
        node.prev.next = node.next
        node.next.prev = node.prev
        this.size--
    }

    removeLast() {
        if (this.tail.prev == this.head)
        return null

        let last = this.tail.prev
        this.remove(last)

        return last
    }
}

/**
 * 
 * 
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = {}
    this.capacity = capacity
    this.cache = new DoubleList()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map[key]) {
        return -1
    }

    let value = this.map[key].value

    this.put(key, value)

    return value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = new Node(key, value)
    if (this.map[key]) {
        this.cache.remove(this.map[key])

        this.cache.addFirst(node)

        this.map[key] = node
    } else {
        if (this.capacity == this.cache.size) {
            let last = this.cache.removeLast()

            delete this.map[last.key]
        }

        this.cache.addFirst(node)
        this.map[key] = node
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

