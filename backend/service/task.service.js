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
    async deleteTask(id) {
        return await this.taskRepository.deleteTask(id)
    }
}

module.exports = TaskService;