/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {

    return dfs(root, 0)

    function dfs(root, total) {
        if (!root) {
            return 0
        }
        total = root.val + total

        if (!root.left && !root.right) {
            return sum === total
        }

        return dfs(root.left, total) || dfs(root.right, total)
    }

};
// @lc code=end

