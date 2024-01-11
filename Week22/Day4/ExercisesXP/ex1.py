from my_queue import Queue

def main():
    tasks = Queue()
    
    while True:
        command = show_menu()
        
        if command == 'Q':
            return print('Good bye! <3 <3 <3')
        if command == 'T':
            try:
                task = get_task()
                tasks.add_task(task)
            except Exception as e:
                print('OOOPS...')
                print(e)
        if command == 'E':
            next = tasks.next()
            print('next:', next)
            if next:
                return print(next)
            print('Queue is empty')
        if command == 'S':
            print(f'Task Queue: {tasks}')

def show_menu():
    return input('''
-------------------------
|  Add task -------(T)  |
|  Execute task----(E)  |
|  Show task queue-(S)  |
|  Exit------------(Q)  |
-------------------------
''').upper()
    
    
def get_task():
    task =  input('Task: ')
    priority = int(input('Priority: '))
    return task, priority



if __name__ == '__main__':
    main()