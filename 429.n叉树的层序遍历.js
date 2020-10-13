/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []
    const queue = [root]
    const ans = []

    while(queue.length) {
        let level = []
        let len = queue.length

        for (let i = 0; i < len; i++) {
            let cur = queue.shift()
            level.push(cur.val)

            if (cur.children && cur.children.length !== 0) {
                queue.push(...cur.children)
            }
        }

        ans.push(level)
    }

    return ans
};
// @lc code=end

