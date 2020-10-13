/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * 删除和修改之前是需要查找的，因为需要常数时间查找想到了map。
 * 而要随机获取一个值，不是map做得到的，因而想到array。
 * 
 * 需要map和array通力协作，我们可以把val作为map的key，
 * 而把array存放val对应的索引作为map的val。把map和array关联。
 * 
 * 修改和删除在map都是常数时间。但怎么让array也在常数时间修改、删除呢。
 * 修改容易做到，删除的话需要对数组移位，但我们可以交换位置啊。
 * 
 * 为了array能常数时间删除，把最后位用来替换删除的那位。
 * 
 * [380] 常数时间插入、删除和获取随机元素
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    
    this.array = []

    this.map = {}
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map[val] != null) return false

    this.map[val] = this.array.length
    this.array.push(val)

    return true
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.map[val] == null) return false

    const index2remove = this.map[val]
    const lastItem = this.array[this.array.length - 1]

    this.array[index2remove] = lastItem
    this.array.pop()

    this.map[lastItem] = index2remove
    this.map[val] = null

    return true
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let random = Math.floor(Math.random() * this.array.length)

    return this.array[random]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

