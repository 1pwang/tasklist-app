const taskService = (repository) => {
    return {
        getTasks: async () => {
            return await repository.getTasks();
        }
    }
}

module.exports = taskService;