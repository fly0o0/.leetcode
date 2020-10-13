/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) {
        return 0 
    }

    const lMin = minDepth(root.left)
    const rMin = minDepth(root.right)

    if(!root.left) {
        return rMin + 1
    }

    if(!root.right) {
        return lMin + 1
    }

    return Math.min(lMin, rMin) + 1
};
// @lc code=end

