/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) return null

    let cur = head
    let pre = null

    while(cur) {
        // 记录下一个cur的节点，备用，因为下一步next被重置
        let tmp = cur.next
        // 把节点的next反转
        cur.next = pre
        //pre和cur都往前走一步
        pre = cur
        cur = tmp
    }

    return pre
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) return null
    if (!head.next) return head

    let last = reverseList(head.next)

    head.next.next = head
    head.next = null

    return last
};
// @lc code=end



