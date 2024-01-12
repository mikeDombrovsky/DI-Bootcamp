from collections import deque


class Queue:
    def __init__(self) -> None:
        self.tasks = deque()

    def next(self):
        if len(self.tasks) > 0:
            return self.tasks.pop()

    def add_task(self, task_info):
        task, priority = task_info
        if priority == 1:
            self.tasks.append((task, 1))
        elif priority == 2:
            self.tasks.appendleft((task, 2))
        else:
            raise ValueError('Priority must be number - 1 or 2')

    def __str__(self) -> str:
        if len(self.tasks) == 0:
            return 'Empty'
        string = '['
        for i in self.tasks:
            string += f'{i},'

        return string[:-1] + ']'
