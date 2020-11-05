/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * 思路：
 * 单向链表怎么做到倒数？😳 
 * 可通过两个哨兵，A哨兵先走n步，如果总链表长度为s步，则A哨兵剩余s-n步
 * 而B哨兵要走到倒数n步，即走到（s-n）步
 * 怎么做到呢，让A哨兵和B哨兵同时开始走，A继续走完剩余，B就到了倒数n步
 * 
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 防止第一个被删除
    let dummy = new ListNode(null)
    dummy.next = head
    let first = dummy
    let second = dummy

    while (n + 1) {
        first = first.next
        n--
    }

    while (first != null) {
        first = first.next
        second = second.next
    }

    second.next = second.next.next

    return dummy.next
};
// @lc code=end

