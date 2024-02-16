const TaskRepository = require('../repository/task.repository')
class TaskService {
    constructor() {
        this.taskRepository = new TaskRepository();
    }
    async getTasks() {
        return await this.taskRepository.getTasks();
    }

    async createTask(task, status) {
        return await this.taskRepository.createTask(task, status)
    }
}

module.exports = TaskService;