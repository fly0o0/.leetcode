/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * 判断树A和树B是不是相等，判断A和B当前节点，还有A和B的左子树，还有A和B的右子树
 * 
 * 退出条件是当前节点不相等，或其实一个为空一个不为空，或两个都为空（说明到达叶子节点了，不用往下了）
 * 
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p == null && q == null) return true

    if (!p || !q) return false

    if (p.val !== q.val) return false

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
// @lc code=end

