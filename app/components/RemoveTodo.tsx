'use client';
import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

interface props{
  id: string
}

const RemoveTodo = (props: props) => {
  const router = useRouter();

  const deleteTodo =async ()=>{

    const confirmation = confirm('Are you sure you want to delete?');

    if (confirmation){
      const res =await fetch(`http://localhost:3000/api/todos?id=${props.id}`,{
        method: "DELETE"
      });
      
      if (res.ok) router.refresh();
    }
  }

  return (
    <div className='text-xl text-red-600'>
        <button onClick={deleteTodo}><BsTrash/></button>
    </div>
  )
}

export default RemoveTodo