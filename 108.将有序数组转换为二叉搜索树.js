/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

    return helps(0, nums.length - 1)

    function helps(left, right) {
        if (left > right) {
            return null
        }
    
        let mid = Math.floor((left + right) / 2)
    
        let root = new TreeNode(nums[mid])
    
        root.left = helps(left, mid - 1)

        root.right = helps(mid + 1, right)

        return root
    }
};
// @lc code=end

