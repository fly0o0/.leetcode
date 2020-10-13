/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    return dfs(root)
    
    function dfs(root) {
        if (!root) return 0
        
        if (root.children.length === 0) return 1

        let max = -Infinity
        
        for (const node of root.children) {
            max = Math.max(max, dfs(node))
        }

        return max + 1
    }
};
// @lc code=end

