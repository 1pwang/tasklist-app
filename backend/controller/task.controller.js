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

    async createTask(req, res) {
        const { task, status } = req.body;
        try {
            const taskService = new TaskService();
            const newTask = await taskService.createTask(task, status);
            return res.json(newTask);
        } catch (error) {
            console.error('Error creating task:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async deleteTask(req, res){
        const { id } = req.params
        try{
            const taskService = new TaskService();
            const task = await taskService.deleteTask(id)
            return res.json(task)
        } catch (error) {
            return res.status(500).json({error: 'Internal Server Error'})
        }
    }

    async updateTask(req, res){
        try {
            const { id } = req.params;
            const task = req.body;
            const taskService = new TaskService();
            const updatedTask = await taskService.updateTask(id, task)
            res.json(updatedTask)
        } catch(error) {
            res.status(500).json({error: 'Internal Server error'})
        }
    }
}

module.exports = TaskController;
