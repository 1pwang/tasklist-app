const TaskModel = require('../models/task');

module.exports = {
    getTask: async () => {
        try {
            const tasks = await TaskModel.find().exec();
            return tasks;
        } catch (error) {
            throw new Error('Error retrieving tasks', error.message);
        }
    }
}