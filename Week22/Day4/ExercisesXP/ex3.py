from linked_list import LinkedList
from node import Node


def merge_sorted_linked_lists(list1, list2):
    head1 = list1.head
    head2 = list2.head
    if head1 is None:
        return list2
    if head2 is None:
        return list1

    res = LinkedList()
    tmp_head = Node(0)

    curr_tail = tmp_head
    while True:
        # If any of the list gets completely empty
        if head1 is None:
            # rest of nodes in another list appends to merged list
            curr_tail.next = head2
            break
        elif head2 is None:
            curr_tail.next = head1
            break

        # Compare nodes and whichever is smaller
        if head1 <= head2:
            # is appended to end of merged list
            curr_tail.next = head1
            # and head node of that list is moved to next
            head1 = head1.next
        else:
            curr_tail.next = head2
            head2 = head2.next

        # Advance the current tail
        curr_tail = curr_tail.next

    res.head = tmp_head.next
    res.tail = curr_tail
    return res


if __name__ == '__main__':

    list1 = LinkedList()
    list1.append(1)
    list1.append(5)
    list1.append(11)
    list1.append(19)

    list2 = LinkedList()
    list2.append(2)
    list2.append(4)
    list2.append(6)
    list2.append(22)

    merged = merge_sorted_linked_lists(list1, list2)
    print('merged list:', merged, 'lenth:', len(merged))
    # merged list: [1, 2, 4, 5, 6, 11, 19, 22] lenth: 8
