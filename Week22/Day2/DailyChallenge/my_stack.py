class Stack:
    def __init__(self):
        self.stack = []

    def __str__(self):
        return f'{list(self.stack)}'

    def get_last(self):
        return self.stack[-1]

    def pop(self):
        if not self.is_empty():
            self.stack.pop()

    def add(self, elem):
        self.stack.append(elem)

    def is_empty(self):
        return len(self.stack) == 0

    def is_match(self, symbol):
        last = self.get_last()
        if last == '(' and symbol == ')' \
                or last == '[' and symbol == ']' \
                or last == '{' and symbol == '}':
            return True
        return False
