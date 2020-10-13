/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0)
    let cur = dummyHead
    
    let carry = 0

    while(l1 || l2) {
        let v1 = l1 ? l1.val : 0
        let v2 = l2 ? l2.val : 0

        // 同位相加
        let sum = v1 + v2 + carry

        // 
        carry = parseInt(sum / 10) // 等于carry = sum >= 10 ? 1 : 0
        let num = sum % 10

        cur.next = new ListNode(num)

        l1 = l1 && l1.next
        l2 = l2 && l2.next
        cur = cur.next
    }

    if (carry === 1) {
        cur.next = new ListNode(1)
    }

    return dummyHead.next
};
// @lc code=end

