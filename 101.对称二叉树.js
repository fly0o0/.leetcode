/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
    if (!root) return true

    return dfs(root.left, root.right)

    function dfs(lNode, rNode) {
        if (!lNode && !rNode) return true

        if (!lNode || !rNode || lNode.val != rNode.val) return false

        return dfs(lNode.left, rNode.right) && dfs(rNode.left, lNode.right)
    }
};
// @lc code=end

