/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const deque = []
    const result = []
    for (let i = 0; i < nums.length; i++) {
        // 把滑动窗口之外的踢出
        if (i - deque[0] >= k) {
            deque.shift()
        }
        while (nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop()
        }
        deque.push(i)
        if (i >= k - 1) {
            result.push(nums[deque[0]])
        }
    }
    return result
}
// @lc code=end

