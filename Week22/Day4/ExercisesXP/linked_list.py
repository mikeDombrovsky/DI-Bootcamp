from node import Node

class LinkedList:
    def __init__(self):
        self.head = None
        
    def __eq__(self, other) -> bool:
        return self.value == other.value
    
    def __lt__(self, other) -> bool:
        return self.value < other.value
    
    def __gt__(self, other) -> bool:
        return self.value > other.value
    
    def __ge__(self, other) -> bool:
        return self.value >= other.value
    
    def __le__(self, other) -> bool:
        return self.value <= other.value
    

    def append(self, value):
        new_node = Node(value)

        if self.head == None:
            self.head = new_node
        else:
            tail = self.find_last()
            tail.next = new_node
            

    def find_last(self):
        curr = self.head
        if curr == None:
            return

        while True:
            if curr.next == None:
                return curr
            curr = curr.next

    def printList(self):
        curr = self.head
        while curr:
            print(curr.data, end=" ")
            curr = curr.next
