/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return true

    if (Math.abs(calDepth(root.left) - calDepth(root.right)) > 1) return false

    return isBalanced(root.left) && isBalanced(root.right)

    function calDepth(root) {
        if (!root) return 0

        let leftDepth = calDepth(root.left) 
        let rightDepth = calDepth(root.right)

        return Math.max(leftDepth, rightDepth) + 1
    }
};
// @lc code=end

