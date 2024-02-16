const TaskRepository = require('../repository/task.repository')
class TaskService {
    constructor() {
        this.taskRepository = new TaskRepository();
    }
    async getTasks() {
        return await this.taskRepository.getTasks();
    }
}

module.exports = TaskService;