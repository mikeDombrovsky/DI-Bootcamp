class Node:
    def __init__(self, value) -> None:
        self.value = value
        self.next = None

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
