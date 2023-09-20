export class TodoList {

    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    compliteTask(id) {
        let [task] = this.tasks.filter(task => task.id === id);
        task.completed = true;
    }

    listAllTasks() {
        return this.tasks;
    }

}