import React from 'react'

const EditTodo = () => {
  return (
    <section className='max-w-3xl mx-auto pt-4'>
        <h1 className='text-4xl mt-4 mb-6 font-bold'>Edit todo</h1>
        <form>
            <div className='my-2'>
                <input type="text" placeholder='Write title here ...'
                 className='border border-slate-400 focus:outline outline-2 rounded outline-black px-4 py-1 w-full'/>
            </div>
            <div className='my-2'>
                <textarea placeholder='Write description here ...' name="" id=""
                className='border border-slate-400 focus:outline outline-2 rounded resize-y px-4 py-1 w-full h-40'></textarea>
            </div>
            <div>
                <button type="submit" className='bg-green-800 text-white px-6 py-3 rounded hover:bg-green-700'>Save</button>
            </div>
        </form>
    </section>
  )
}

export default EditTodo;