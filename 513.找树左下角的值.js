/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
 */

// @lc code=start
/**
 * 怎么理解找到左下角的点呢，想想是不是横向看，最左边
 * 纵向看是不是深度最深的，是不是联想到了树的最大深度
 * 
 * 最左下，也就是即深度最深和横向最左
 * 
 * 因此可以考虑先遍历左树，然后拿右边树与其对比，
 * 如果深度右边比左边深的，把目标节点替换为右边，
 * 如果反之，不交换位置，保证最左边这个原则
 * 
 * 记忆里第二次徒手写出中等题，撒花🎉🎉
 * 
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
var findBottomLeftValue = function(root) {

    return dfs(root).val
    
    function dfs(root) {
        if (!root) {
            return { val: null, depth: 0}
        }

        if (!root.left && !root.right) {
            return { val: root.val, depth: 1}
        }

        let left = dfs(root.left)
        let right = dfs(root.right)

        let maxNode

        if (left.depth < right.depth) {
            maxNode = right
        } else {
            maxNode = left
        }

        return { val: maxNode.val, depth: maxNode.depth + 1}
    }
};
// @lc code=end

