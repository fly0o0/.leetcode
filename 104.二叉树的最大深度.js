/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * 当前节点最大高度等于 左右子🌲最大高度 + 当前节点高度1
 * 
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

// @lc code=end
