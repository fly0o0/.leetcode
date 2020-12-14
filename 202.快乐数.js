/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 *  不停的判断下个数是否等于1，
 *  通过set来判断是否有相同数字
 * 
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function getNext(n) {
        let sum = 0
        while(n > 0) {
            let digit = n % 10
            n = parseInt(n / 10)
            sum = sum + digit * digit
        }
        return sum
    }

    let set = new Set()
    while(n !== 1 && !set.has(n)) {
        set.add(n)
        n = getNext(n)
    }
    return n === 1
};

/**
 *  不停的判断下个数是否等于1，
 *  通过判断是否存在环来判断是否有相同数字，
 *  是否存在环，可参考判断环状链表的快慢指针法
 * 
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function getNext(n) {
        let sum = 0
        while(n > 0) {
            let digit = n % 10
            n = parseInt(n / 10)
            sum = sum + digit * digit
        }
        return sum
    }

    let fast = getNext(n)
    let slow = n
    while(n !== 1 && slow !== fast) {
        slow = getNext(slow)
        fast = getNext(getNext(fast))
    }

    return slow === 1
};
// @lc code=end

