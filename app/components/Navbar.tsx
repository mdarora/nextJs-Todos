import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='max-w-full px-8 py-2 mx-auto bg-slate-800 text-white flex justify-between items-center'>
        <div>
            <h1 className="text-2xl font-bold"><Link href={'/'}>Todos</Link></h1>
        </div>
        <div>
            <Link href={'/add-todo'} className='bg-white text-black hover:bg-slate-200 px-5 py-2 rounded'>Add Todo</Link>
        </div>
    </nav>
  )
}

export default Navbar