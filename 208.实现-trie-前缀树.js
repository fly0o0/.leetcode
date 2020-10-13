/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start

function TrieNode() {
    this.children = {}
    this.count = 0
    this.preCount = 0
}

/**
 * 
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = new TrieNode()
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root

    for (const char of word) {
        if (node.children[char] == null) {
            node.children[char] = new TrieNode()
        }
        node = node.children[char]

        node.preCount++
    }
    node.count++
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root
    
    for (const char of word) {
        node = node.children[char]
        if (node == null) return false
    }

    return node.count > 0
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root

    for (const char of prefix) {
        node = node.children[char] 
        if (node == null) return false
    }

    return node.preCount > 0
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

