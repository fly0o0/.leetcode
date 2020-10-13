/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
    if (!root) {
        return 0
    }

    return helper(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)

    function helper(root, sum) {
        if (!root) {
            return 0
        }

        sum = sum - root.val

        return (sum === 0 ? 1 : 0) + helper(root.left, sum) + helper(root.right, sum)        
    }
};
// @lc code=end

