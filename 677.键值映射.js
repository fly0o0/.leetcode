/*
 * @lc app=leetcode.cn id=677 lang=javascript
 *
 * [677] 键值映射
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */

 /**
  * 思路：待补充
  * 
  * https://github.com/leetcode-pp/91alg-1/issues/69#issuecomment-657210282
  * 
  */
var TrieNode = function () {
    this.children = {}
    this.value = 0
    this.count = 0
    this.isWord = false
}

var MapSum = function () {
    this.root = new TrieNode()
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
    let node = this.root
    let oldValue = this.search(key)

    for (let char of key) {
        if (node.children[char] == null) {
            node.children[char] = new TrieNode()
        }
        node = node.children[char]

        node.value = node.value - oldValue + val
    }

    node.val = val
    node.isWord = true
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
    let node = this.root

    for (const char of prefix) {
        node = node.children[char]
        if (node == null) return 0
    }

    return node.value
};

MapSum.prototype.search = function (word) {
    let node = this.root

    for (const char of word) {
        node = node.children[char]
        if (node == null) return false
    }

    return node.isWord ? node.val : 0
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
// @lc code=end

