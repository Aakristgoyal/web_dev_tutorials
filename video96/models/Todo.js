import mongoose from 'mongoose'
const TodoSchema = new mongoose.Schema({
    title:String,
    author:String,
    desc:String,
    isDone:Boolean
});
const Todo=mongoose.model('Todo',TodoSchema)
export default Todo