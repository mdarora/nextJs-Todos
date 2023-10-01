import mongoose, {Schema} from 'mongoose'

const todoSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description:{
            type :String ,
            required: true
        }
    }, 
{timestamps: true});

const todo = mongoose.models.todo || mongoose.model('todo', todoSchema);
export default todo;

