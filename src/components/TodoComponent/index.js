import {useState} from 'react'
import axios from 'axios'
import TodoItemComponent from './TodoItem'
import baseUrl from '@/utils/baseUrl'

const Todo = ({todos, setAllTodo}) => {
    const [todoItem, setTodoItem] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const retrieveAllTodo = async() => {
      const dataRes = await axios.get(`${baseUrl}/api/todo/`)
      const [dataResult] = await Promise.all([dataRes])
      setAllTodo(dataResult)
    }

    const handleSubmit = async(e) => {
      e.preventDefault()
      await axios.post(`${baseUrl}/api/todo/`, {text: todoItem})
      retrieveAllTodo()
      setTodoItem('')
    }

    const handleOnChange = (e) => {
      setTodoItem(e.target.value)
    }

    const handleDeleteItem = async(id) => {
      try {
      setIsLoading(true)
      await axios.delete(`${baseUrl}/api/todo/${id}/`)
      /* This is a way to get the data from the API. */
      const dataRes = await axios.get(`${baseUrl}/api/todo/`)
      retrieveAllTodo()
      setIsLoading(false)
      } catch (err) {
        console.log({err})
      }
    }


  return (
    <div className='h-screen pt-20 m-auto w-fit'>
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
          {todos && todos.data.map((item, i) => {
            return (
              <TodoItemComponent 
                key={i} 
                id={item.id} 
                item={item} 
                handleDeleteItem={handleDeleteItem}
                setIsLoading={setIsLoading}
              />
            )
          })}
        </div>
    </div>
  )
}

export default Todo
