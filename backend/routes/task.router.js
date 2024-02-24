const express = require('express')
const router = express.Router();
const TaskController  = require('../controller/task.controller')
const TaskService = require('../service/task.service')
const TaskRepository = require('../repository/task.repository')

const taskService = new TaskService(new TaskRepository())

const taskController = new TaskController(taskService);

router.get('/tasks', taskController.getTasks);
router.post('/create-task', taskController.createTask);
router.delete('/delete-task/:id', taskController.deleteTask)
router.put('/update-task/:id', taskController.updateTask)

module.exports = router;