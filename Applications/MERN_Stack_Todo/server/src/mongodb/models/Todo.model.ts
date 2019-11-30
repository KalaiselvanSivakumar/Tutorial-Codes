import mongoose from 'mongoose';
import { ITodoModel } from '../interfaces/ITodoModel';

const Schema = mongoose.Schema;
const TodoSchema = new Schema({
    todo_completed: {
        type: Boolean,
    },
    todo_description: {
        type: String,
    },
    todo_priority: {
        type: String,
    },
    todo_responsible: {
        type: String,
    },
});
const TodoModel = mongoose.model<ITodoModel>('Todo', TodoSchema);
export default TodoModel;
