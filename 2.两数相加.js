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
 * 链表头存储的是个位，因此从个位到最高位，我们可以对两个链表进行累加
 * 
 * 知识点：
 * 两数相加利用小学知识，进位通过 sum / 10获得，当前位值通过 sum % 10
 * 
 * 注意点：
 * 因为两数最高位不一定一样，所以在最高位进行空位替换为0
 * 如果迭代结束了，发现还有进位，则补足一位，并设置为1
 * 
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
        // 判断是否有进位
        carry = parseInt(sum / 10) // 等于carry = sum >= 10 ? 1 : 0
        // 计算当前位剩余值
        let num = sum % 10

        cur.next = new ListNode(num)

        // 进行下一轮的准备
        l1 = l1 && l1.next
        l2 = l2 && l2.next
        cur = cur.next
    }

    if (carry === 1) cur.next = new ListNode(1)

    return dummyHead.next
};
// @lc code=end

