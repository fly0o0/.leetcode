/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
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
 * 每条路径走到叶子节点才会把对应的数字返回，然后当前树的sum是其左右子树的和
 * 
 * 时间复杂度O（n），n为节点数
 * 
 * 理解还是左右子树还没想明白，另个方法通过在叶子节点去加理解容易
 * 
 * 
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {

    return dfs(root, 0)

    function dfs(root, num) {
        if (!root) {
            return 0
        }
        
        num = num * 10 + root.val

        if (!root.left && !root.right) {
            return num
        }

        return dfs(root.left, num) + dfs(root.right, num)
    }
};
// @lc code=end