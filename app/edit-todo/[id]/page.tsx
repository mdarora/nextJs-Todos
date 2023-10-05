import React from 'react'
import EditForm from './EditForm';

const getTodoById =async (id: string)=>{
    //fetch the todo by id and set it to state
    try {
        const res =await fetch(`http://localhost:3000/api/todos/${id}`);
        const data =await res.json();
        return data;
    } catch (error) {
        console.log("failed to get todo by id", error);
    }
}

const EditTodo =async ({params}: any) => {
    const {todo} =await getTodoById(params.id);

  return (
    <section className='max-w-3xl mx-auto pt-4'>
        <h1 className='text-4xl mt-4 mb-6 font-bold'>Edit todo</h1>
        <EditForm id={todo._id} title={todo.title} description={todo.description} />
    </section>
  )
}

export default EditTodo;