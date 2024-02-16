const express = require('express')
const router = express.Router();
const TaskController  = require('../controller/task.controller')
const TaskService = require('../service/task.service')
const TaskRepository = require('../repository/task.repository')

const taskService = new TaskService(new TaskRepository())

const taskController = new TaskController(taskService);

router.get('/tasks', taskController.getTasks);

module.exports = router;