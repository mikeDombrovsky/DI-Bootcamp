from node import Node


class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def __len__(self) -> int:
        curr = self.head
        length = 0
        while curr:
            length += 1
            curr = curr.next
        return length

    def append(self, value):
        new_node = Node(value)

        if self.head is None:
            self.head = new_node
            self.tail = new_node
        elif self.head == self.tail:
            self.head.next = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node

    def find_tail(self):
        curr = self.head
        if curr is None:
            return

        while True:
            if curr.next is None:
                return curr
            curr = curr.next

    def __str__(self):
        curr = self.head
        res = ''
        while curr:
            res += f'{curr.value}, '
            curr = curr.next
        return f'[{res[:-2]}]'
