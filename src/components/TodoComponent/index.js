import {useState} from 'react'
import TodoItemComponent from './TodoItem'

const Todo = () => {
    const [todo, setTodo] = useState([])

    const handleSubmit = (e) => {
        console.log('testtt')
        e.preventDefault()
    }


  return (
    <div className='h-screen pt-20 w-6/12 m-auto'>
        <form onSubmit={(e) => handleSubmit(e)} className="flex gap-5">
            <input type="text" className="shadow-xl block w-full px-3 py-2 rounded-md border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
            placeholder="Add Todo"
            />
            <button className="shadow-lg py-2 px-5 rounded-3xl bg-sky-500 hover:bg-sky-400 text-white shadow-sky-500/50">Add</button>
        </form>
        <br />
        <TodoItemComponent todo={todo} />
    </div>
  )
}

export default Todo