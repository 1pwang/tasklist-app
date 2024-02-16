const TaskModel = require('../models/task.model');

class TaskRepository {
    async getTasks(){
        try {
            const tasks = await TaskModel.find().exec();
            return tasks;
        } catch (error) {
            throw new Error('Error retrieving tasks', error.message);
        }
    }
}

module.exports = TaskRepository;