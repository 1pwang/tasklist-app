const express = require('express')
const router = express.Router();
const TaskController  = require('../controller/task.controller')

const taskController = new TaskController();

router.get('/tasks', taskController.getTask);

module.exports = router;