import Image from 'next/image'
import Todo from './components/Todo'

export default function Home() {
  return (
    <>
      <section className='max-w-3xl mx-auto pt-4'>
        <h1 className='text-4xl my-4 font-bold'>Todo List</h1>
        <Todo/>
      </section>
    </>
  )
}
