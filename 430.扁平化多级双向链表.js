/*
 * @lc app=leetcode.cn id=430 lang=javascript
 *
 * [430] 扁平化多级双向链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * 前序遍历，不熟练
 * 
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    let prev

    dfs(head)

    return head

    function dfs(head) {
        if (head == null) return
        
        if (prev != null) {
            prev.next = head
            head.prev = prev
        }

        let next = head.next

        prev = head
        dfs(head.child)
        head.child = null
        dfs(next)
    }

};
// @lc code=end

