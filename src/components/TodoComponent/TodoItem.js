import {useState, useEffect} from 'react'
import axios from 'axios'
import EditIcon from '@/components/svgs/EditIcon.svg'
import DeleteIcon from '@/components/svgs/DeleteIcon.svg'
import CancelIcon from '@/components/svgs/CancelIcon.svg'
import UpdateIcon from '@/components/svgs/UpdateIcon.svg'
import baseUrl from '@/utils/baseUrl'

const TodoItem = ({item, setIsLoading, handleDeleteItem}) => {

  // const [allTodo, setAllTodo] = useState();
  const [currentTodo, setCurrentTodo] = useState({});
  const [isEditing, setIsEditing] = useState(false);


  const handleEditItem = (text) => {
    // set editing to true
    setIsEditing(true);
    // set the currentTodo to the todo item that was clicked
    setCurrentTodo({ text });
  }

  const handleChangeCheckbox = async(e, id) => {
    try {
      /* This is a way to update the data from the API. */
      setIsLoading(true)
      item.isCompleted = e.target.checked;
      await axios.put(`${baseUrl}/api/todo/${id}/`, item)
      setIsLoading(false)
    } catch (e) {
      console.log({e})
    }
  }

  const handleEditInputChange = (e) => {
    setCurrentTodo({...currentTodo, text: e.target.value });
  }

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateTodo(item.id, currentTodo);
  }

  const handleUpdateTodo = async(id, updatedTodo) => {
    try {
      item.text = updatedTodo.text
      await axios.put(`${baseUrl}/api/todo/${item.id}/`, item)
      
    } catch (e) {
      console.log({e})
    }
    setIsEditing(false);
  }


  return (
    <div className="flex border-2 p-3 rounded-md shadow-xl">
      {isEditing ? (
        <form onSubmit={handleEditFormSubmit} className="flex gap-5 w-full">
          <input
            name="editTodo"
            type="text"
            placeholder="Edit todo"
            className='shadow-xl block w-full px-3 py-2 rounded-md border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent'
            value={currentTodo.text}
            onChange={handleEditInputChange}
          />
          <button type="submit" disabled={!currentTodo.text || (currentTodo.text.trim() === '')}>
            <UpdateIcon className="w-6 h-6 text-green-500" />
          </button>
          <button onClick={() => setIsEditing(false)}>
            <CancelIcon className="w-6 h-6 text-red-500" />
          </button>
        </form>
      ) : (
      <>
        <div className="flex gap-3 items-center">
            <input 
              type="checkbox" 
              id={item.id}
              checked={item.isCompleted}
              className="
                peer
                cursor-pointer 
                w-5 h-5 
                border-2 
                rounded-md 
                focus: ring-0
                bg-sky-100
                border-sky-300
                text-sky-500
              "
              onChange={e => handleChangeCheckbox(e, item.id)}
            />
          <label htmlFor={item.id} className="cursor-pointer peer-checked:line-through peer-checked:text-gray-400">{item.text}</label>
        </div>
        <div className="flex ml-auto gap-4">
          <button onClick={() => handleEditItem(item.text)}>
            <EditIcon className="w-6 h-6 text-gray-500" />
          </button>
          <button onClick={() => handleDeleteItem(item.id)}>
            <DeleteIcon className="w-6 h-6 text-red-500"/>
          </button>
        </div>
      </>)}
    </div>
  )
}

export default TodoItem