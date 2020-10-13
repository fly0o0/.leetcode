/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * 完全看的题解，
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/solution/tu-jie-kge-yi-zu-fan-zhuan-lian-biao-by-user7208t/
 * 
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let dummy = new ListNode(0)
    dummy.next = head

    // 待翻转链表的前驱
    let pre = dummy
    // 待翻转链表的末尾
    let end = dummy

    while (end.next != null) {
        // 寻找末尾节点
        for (let i = 0; i < k && end != null; i++) end = end.next
        // 如果已经到最后了，跳出
        if (end == null) break
        // 待翻转链表的第一个节点
        let start = pre.next
        // 待翻转部分的后继节点
        let next = end.next

        // 清除待翻转原本末尾的后继节点
        end.next = null
        // 把翻转好的绩点，连接到待翻转链表的前驱节点的next
        pre.next = reverse(start)
        // 第一个节点变成了末尾，其后继节点就是原来待翻转节点的后继
        start.next = next

        // 待翻转链表的前驱节点
        pre = start
        // 待翻转链表的末尾，从前驱节点开始
        end = pre
    }

    return dummy.next

    function reverse(head) {
        let pre = null
        let curr = head
        
        while (curr != null) {
            let tmp = curr.next
            curr.next = pre
            pre = curr
            curr = tmp
        }
        return pre;
    }
};
// @lc code=end

