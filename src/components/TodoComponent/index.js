import {useState} from 'react'
import TodoItemComponent from './TodoItem'

const Todo = () => {
    const [todos, setTodos] = useState([
      {
        id: 1,
        text: 'todo 1',
        isCompleted: false,
      }, 
      {
        id: 2,
        text: 'todo 2',
        isCompleted: false
      }, 
    ])
    const [todoItem, setTodoItem] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodos([...todos, {id: todos.length + 1, text: todoItem}])
        setTodoItem('')
    }

    const handleOnChange = (e) => {
      setTodoItem(e.target.value)
    }


  return (
    <div className='h-screen pt-20 w-6/12 m-auto'>
        <form onSubmit={(e) => handleSubmit(e)} className="flex gap-5">
            <input type="text" className="shadow-xl block w-full px-3 py-2 rounded-md border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
            placeholder="Add Todo"
            value={todoItem}
            onChange={(e) => handleOnChange(e)}
            />
            <button disabled={!todoItem || (todoItem.trim() === '')} className={`shadow-lg py-2 px-5 rounded-3xl bg-sky-500 ${todoItem && `hover:bg-sky-400`} text-white shadow-sky-500/50`}>Add</button>
        </form>
        <br />
        <div className="flex flex-col gap-2">
          {todos.map((item, i) => {
            return (
              <TodoItemComponent 
                key={i} 
                id={item.id} 
                item={item} 
                todos={todos} 
                setTodos={setTodos} 
              />
            )
          })}
        </div>
    </div>
  )
}

export default Todo
