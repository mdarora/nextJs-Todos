import Image from 'next/image'
import Todo from './components/Todo';

interface todo {
  _id: string,
  title: string,
  description: string
}

const getTodos = async ()=>{
  try {
    const res = await fetch(`http://127.0.0.1:3000/api/todos`, {
      cache: 'no-store'
    });
    if(!res.ok) throw new Error('Something went wrong');
    return res.json();
  } catch (error) {
    console.log('error loading todos : ', error);
  }
}

export default async function Home() {
  const todos = await getTodos();
  return (
    <>
      <section className='max-w-3xl mx-auto pt-4'>
        <h1 className='text-4xl my-4 font-bold'>Todo List</h1>
        {todos.map((todo: todo) => {
          return <Todo key={todo._id} id={todo._id} title={todo.title} description={todo.description} />;
        })}
      </section>
    </>
  )
}
