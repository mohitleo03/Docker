const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const taskSchema = Schema({
    text:String,
});
const TaskModel = mongoose.model("Task",taskSchema);
module.exports = TaskModel;