import React from 'react';
import RemoveTodo from './RemoveTodo';
import Link from 'next/link';
import { FaRegEdit } from 'react-icons/fa';

const Todo = () => {
  return (
    <div className='max-w-3xl mx-auto border border-slate-400 flex justify-between gap-1 p-4 my-2 rounded-lg shadow-md'>
        <div>
            <h3 className='text-2xl font-bold mb-4'>Title</h3>
            <p className='text-justify'>discreption</p>
        </div>
        <div className='flex gap-2'>
            <Link href={'/edit-todo/todo-id'} className='text-xl text-yellow-800'><FaRegEdit/></Link>
            <RemoveTodo/>
        </div>
    </div>
  )
}

export default Todo