/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * 先找到交点，然后把fast指向head，再fast和slow往下走，第一个相等的点就是入环点
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head || !head.next) {
        return null
    }

    let slow = head
    let fast = head

    while (true) {
        if (!fast || !fast.next) {
            return null
        }
        slow = slow.next
        fast = fast.next.next

        if (slow == fast) {
            break
        }
    }

    fast = head

    while (slow != fast) {
        slow = slow.next
        fast = fast.next
    }

    return fast
};
// @lc code=end

