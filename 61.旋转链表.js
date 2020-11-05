/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next) return head
  
    let curr = head
    let n = 1

    while (curr.next) {
        curr = curr.next
        n++
    }

    // 连接链表尾部到头部
    curr.next = head
    
    k = k % n

    while (++k < n) {
        head = head.next
    }

    let tmp = head
    head = head.next
    tmp.next = null
    
    return head
};
// @lc code=end

