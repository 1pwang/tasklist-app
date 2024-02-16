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

    async createTask(task, status){
        try {
            const newTask = new TaskModel({task, status});
            const savedTask = await newTask.save();
            return savedTask;
        } catch (error){
            throw new Error('Unable to create task')
        }
    }
}

module.exports = TaskRepository;