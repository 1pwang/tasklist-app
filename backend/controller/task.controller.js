class TaskController {
    constructor(taskService) {
        this.taskService = taskService
    }
    async getTask(req, res) {
        try {
            const tasks = await this.taskService.getTasks()
            return res.json(tasks)
        } catch (error) {
           return res.status(500).json({error: 'Internal error'})
        }
    };
};

module.exports = TaskController;