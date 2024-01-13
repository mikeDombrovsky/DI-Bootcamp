from linked_list import LinkedList
from node import Node

def merge_sorted_linked_lists(list1, list2):
    head1 = list1.head
    head2 = list2.head
    if head1 == None:
        return list2
    if head2 == None:
        return list1
    
    
    res = LinkedList()
    tmp_head = Node(0)
    curr = tmp_head
    while True:
        pass
    res.head = res.head.next
    return res

list1 = LinkedList([1,2,3,4,5])