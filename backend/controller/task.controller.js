const TaskService = require('../service/task.service')

class TaskController {
    async getTasks(req, res) {
        const taskService = new TaskService();
        const tasks = await taskService.getTasks();
        try {
            return res.json(tasks);
        } catch (error) {
                return res.status(500).json({error: 'Internal Server Error'});
        }
    }
}

module.exports = TaskController;
