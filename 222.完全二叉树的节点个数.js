/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * 暴力法
 * 
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
    if (!root) return 0

    let leftCount = countNodes(root.left)
    let rightCount = countNodes(root.right)

    return 1 + leftCount + rightCount
};

/**
 * 利用完全二叉树的性质
 * 
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
    if (!root) return 0

    let ld = getDepth(root.left)
    let rd = getDepth(root.right)

    return ld === rd ? Math.pow(2, ld) + countNodes(root.right) : Math.pow(2, rd) + countNodes(root.left)

    function getDepth(root) {
        if (!root) return 0

        return 1 + getDepth(root.left)
    }
};
// @lc code=end

