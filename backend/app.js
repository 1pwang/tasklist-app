const express = require('express');
const mongoose = require('mongoose');
const taskRouter = require('./routes/task.router')

const app = express();
const url = 'mongodb+srv://paulinewang222:nfzaC54scBtUqt30@cluster0.mywzxrj.mongodb.net/tasklist?retryWrites=true&w=majority'; // Fixed MongoDB connection URL
const port = 3000;

app.use(express.json());
app.use('/api', taskRouter);

mongoose.connect(url, {}) 
  .then(result => console.log('Connected'))
  .catch(err => console.error('Error', err));

app.listen(port, () => {
  console.log('Server running on port', port);
});
