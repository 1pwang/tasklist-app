const taskController = (taskService) => {
    return {
    getTask: async (res, req) => {
        try {
            const tasks = await taskService.getTasks()
            return res.json(tasks)
        } catch (error) {
            res.status(500).json({error: 'Internal error'})
        }
    }
    };
};

module.exports = taskController;