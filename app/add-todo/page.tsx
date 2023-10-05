'use client';
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';


const AddTodo = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();

    const handleSubmit = async (e : FormEvent)=>{
        e.preventDefault();
    
        try {
            const res=await fetch('http://localhost:3000/api/todos', {
                cache: 'no-store',
                method:'POST',
                headers:{
                    "Content-type": "application/json"
                },
                body: JSON.stringify({title, description})
            });
    
            if (res.ok) {
                router.push('/');
            } else {
                throw new Error('Failed to add todo');
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <section className='max-w-3xl mx-auto pt-4'>
        <h1 className='text-4xl mt-4 mb-6 font-bold'>Add a new todo</h1>
        <form onSubmit={handleSubmit}>
            <div className='my-2'>
                <input type="text" placeholder='Write title here ...' required
                    onChange={e => setTitle(e.target.value)} value={title}
                    className='border border-slate-400 focus:outline outline-2 rounded outline-black px-4 py-1 w-full'/>
            </div>
            <div className='my-2'>
                <textarea placeholder='Write description here ...' name="" id=""
                onChange={e=>setDescription(e.target.value)} value={description}
                className='border border-slate-400 focus:outline outline-2 rounded resize-y px-4 py-1 w-full h-40'></textarea>
            </div>
            <div>
                <button type="submit" className='bg-green-800 text-white px-6 py-3 rounded hover:bg-green-700'>Add todo</button>
            </div>
        </form>
    </section>
  )
}

export default AddTodo