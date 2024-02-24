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

    async updateTask(id, task) {
        if(!task){
            throw new Error("You must have a task")
        }

        try {
            return await this.taskRepository.updateTask(id, task )
        } catch (error) {
            throw new Error("Unable to update task")
        }
    }
}

module.exports = TaskService;