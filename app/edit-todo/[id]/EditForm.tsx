'use client';
import React, { FormEvent, useState } from 'react';
import {useRouter} from 'next/navigation'

interface props{
    id:string,
    title:string,
    description:string,
}

const EditForm = (props: props) => {
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);

    const router = useRouter();

    const handleUpdate =async (e: FormEvent)=>{
        e.preventDefault();
        try {
            const res =await fetch(`http://localhost:3000/api/todos/${props.id}`,{
                method: "PUT",
                headers:{
                    "Content-Type":"application/json;charset=utf8",
                },
                body: JSON.stringify({title, description})
            });

            if (!res.ok){
                throw new Error("Updating failed")
            }

            router.refresh();
            router.push('/');
        } catch (error) {
            console.log("failed to update the todo", error);
        }

    }

  return (
    <form onSubmit={handleUpdate}>
        <div className='my-2'>
            <input type="text" placeholder='Write title here ...'
                value={title} onChange={e => setTitle(e.target.value)}
                className='border border-slate-400 focus:outline outline-2 rounded outline-black px-4 py-1 w-full'/>
        </div>
        <div className='my-2'>
            <textarea placeholder='Write description here ...' name="" id=""
            value={description} onChange={e => setDescription(e.target.value)}
            className='border border-slate-400 focus:outline outline-2 rounded resize-y px-4 py-1 w-full h-40'></textarea>
        </div>
        <div>
            <button type="submit" className='bg-green-800 text-white px-6 py-3 rounded hover:bg-green-700'>Save</button>
        </div>
    </form>
  )
}

export default EditForm