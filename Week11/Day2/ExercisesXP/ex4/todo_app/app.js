import { TodoList } from './todo.js';

const list = new TodoList();

list.addTask({ id: 1, name: 'homework', completed: false });
list.addTask({ id: 2, name: 'wash dishes', completed: false });
list.addTask({ id: 3, name: 'pay payments', completed: false });

console.log(list.listAllTasks());