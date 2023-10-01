import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        //mongodb://localhost:27017/mydb
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/todos');
        console.log("Connected to Database");
    } catch (err) {
        console.error(err);
    }
}

export default connectDB;
