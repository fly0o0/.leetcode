/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * 自己没写完全，看了题解，链表题指针指来指去有点晕
 * 
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {

    const dummyHead = new ListNode(0)
    dummyHead.next = head

    let listNode = dummyHead
    //找到需要反转的那一段的上一个节点。
    for (let i = 0; i < m - 1; i++) {
        listNode = listNode.next
    }

    let pre = null
    //node.next就是需要反转的这段的起点。
    let curr = listNode.next

     //反转m到n这一段
    for (let i = 0; i < n - m + 1; i++) {
        let tmp = curr.next
        curr.next = pre

        pre = curr
        curr = tmp
    }

    //将反转的起点的next指向next。
    listNode.next.next = curr
    //需要反转的那一段的上一个节点的next节点指向反转后链表的头结点
    listNode.next = pre

    return dummyHead.next
};
// @lc code=end

